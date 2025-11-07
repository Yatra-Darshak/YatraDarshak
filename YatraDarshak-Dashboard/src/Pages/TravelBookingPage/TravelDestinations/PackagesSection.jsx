import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  MapPin,
  Star,
  Calendar,
  Users,
} from "lucide-react";

const packages = [
  {
    name: "Bhopal",
    price: 2500,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 128,
    location: "Madhya Pradesh",
    description: "Explore the City of Lakes with its rich heritage and natural beauty",
    highlight: "Heritage Tour",
    duration: "3 Days",
  },
  {
    name: "Ujjain",
    price: 2000,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 95,
    location: "Madhya Pradesh",
    description: "Sacred city on the banks of Shipra, home to ancient temples",
    highlight: "Spiritual Journey",
    duration: "2 Days",
  },
  {
    name: "Pachmarhi",
    price: 3000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 156,
    location: "Madhya Pradesh",
    description: "Queen of Satpura with stunning waterfalls and viewpoints",
    highlight: "Hill Station",
    duration: "4 Days",
  },
  {
    name: "Gwalior",
    price: 2800,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 112,
    location: "Madhya Pradesh",
    description: "Majestic fort city with royal palaces and rich history",
    highlight: "Fort & Palace",
    duration: "3 Days",
  },
  {
    name: "Khajuraho",
    price: 2500,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 203,
    location: "Madhya Pradesh",
    description: "UNESCO World Heritage site with exquisite temple sculptures",
    highlight: "UNESCO Site",
    duration: "2 Days",
  },
];

const PackagesSection = () => {
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollPackages = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "next") {
      setCurrentPackageIndex((prev) => (prev + 1) % packages.length);
    } else {
      setCurrentPackageIndex(
        (prev) => (prev - 1 + packages.length) % packages.length
      );
    }

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const getVisiblePackages = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentPackageIndex + i + packages.length) % packages.length;
      visible.push({ ...packages[index], offset: i, index });
    }
    return visible;
  };

  return (
    <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 rounded-full mb-6 border-2 border-cyan-200 shadow-lg">
            <TrendingUp className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-bold text-cyan-900 tracking-widest">
              EXCLUSIVE OFFERS
            </span>
            <TrendingUp className="w-5 h-5 text-cyan-600" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Must See
            </span>
            <br />
            <span style={{ color: "#1e40af" }}>Packages & Deals</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Curated travel experiences with the best offers and unbeatable value
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-16">
          <div
            className="flex gap-8 overflow-hidden justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            {getVisiblePackages().map((pkg) => {
              const isCenter = pkg.offset === 0;
              const isLeft = pkg.offset === -1;
              const isRight = pkg.offset === 1;

              return (
                <div
                  key={pkg.index}
                  className={`group flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-700 ease-in-out
    ${
      isCenter
        ? "w-96 h-[32rem] z-20 opacity-100 scale-100 shadow-2xl"
        : "w-80 h-[28rem] z-10 opacity-70 scale-95 hidden md:block shadow-xl"
    }`}
                  style={{
                    transform: isLeft
                      ? "translateX(20px) rotateY(8deg)"
                      : isRight
                      ? "translateX(-20px) rotateY(-8deg)"
                      : "translateX(0) rotateY(0)",
                    boxShadow: isCenter
                      ? "0 25px 50px -12px rgba(30, 64, 175, 0.4)"
                      : "0 10px 30px -10px rgba(30, 64, 175, 0.25)",
                    transition: "transform 0.6s ease, box-shadow 0.6s ease",
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    {/* Image */}
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-90" />

                    {/* Decorative Corners */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-cyan-400 opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-blue-400 opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:-translate-x-2 group-hover:translate-y-2" />

                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-md backdrop-blur-sm border border-white/20">
                        {pkg.highlight}
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="px-3 py-2 bg-white/90 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
                        <span className="text-xs text-gray-600">({pkg.reviews})</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-semibold text-cyan-300 tracking-wide">
                          {pkg.location}
                        </span>
                      </div>

                      <h3
                        className="text-3xl font-bold text-white mb-3 leading-tight"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {pkg.name}
                      </h3>

                      <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {pkg.description}
                      </p>

                      {/* Duration & Price */}
                      <div className="flex items-center justify-between mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-200">{pkg.duration}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-cyan-300">Starting from</p>
                          <p className="text-2xl font-bold text-white">₹{pkg.price}</p>
                        </div>
                      </div>

                      <button className="w-full py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-base shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex items-center justify-center gap-2 border border-white/20">
                        <Sparkles className="w-5 h-5" />
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollPackages("prev")}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(30, 64, 175, 0.4)" }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={() => scrollPackages("next")}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(30, 64, 175, 0.4)" }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentPackageIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentPackageIndex
                  ? "w-12 h-3 bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-cyan-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 text-center">
          {[
            { value: `${packages.length}+`, label: "Premium Packages" },
            { value: "500+", label: "Happy Travelers" },
            { value: "4.7★", label: "Average Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {item.value}
              </h3>
              <p className="text-blue-900 font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;