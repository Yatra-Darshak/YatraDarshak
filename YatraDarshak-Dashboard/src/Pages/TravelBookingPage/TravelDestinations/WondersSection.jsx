import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  MapPin,
  Sparkles,
  Compass,
  Sun,
  TreePine,
} from "lucide-react";

const wonders = [
  {
    name: "Bhimbetka Caves",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    location: "Madhya Pradesh",
    description:
      "Ancient rock shelters with prehistoric paintings dating back 30,000 years",
    highlight: "UNESCO Heritage",
    icon: Mountain,
  },
  {
    name: "Chitrakote Falls",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    location: "Chhattisgarh",
    description: "India's widest waterfall cascading with mighty force",
    highlight: "Niagara of India",
    icon: Sun,
  },
  {
    name: "Rohtang Pass",
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    location: "Himachal Pradesh",
    description: "High mountain pass offering breathtaking Himalayan vistas",
    highlight: "10,000 ft High",
    icon: Mountain,
  },
  {
    name: "Valley of Flowers",
    image:
      "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=800&h=600&fit=crop",
    location: "Uttarakhand",
    description: "Alpine meadow adorned with rare Himalayan flora",
    highlight: "UNESCO Site",
    icon: TreePine,
  },
  {
    name: "Marble Rocks",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    location: "Madhya Pradesh",
    description: "Stunning marble gorges along the Narmada River",
    highlight: "Jabalpur Wonder",
    icon: Compass,
  },
  {
    name: "Living Root Bridges",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    location: "Meghalaya",
    description: "Ancient bio-engineered bridges made from living tree roots",
    highlight: "500 Years Old",
    icon: TreePine,
  },
  {
    name: "Nohkalikai Falls",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    location: "Meghalaya",
    description: "India's tallest plunge waterfall amidst lush greenery",
    highlight: "1,115 ft Drop",
    icon: Mountain,
  },
  {
    name: "Lonar Crater Lake",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
    location: "Maharashtra",
    description: "Ancient meteor impact crater with unique ecosystem",
    highlight: "50,000 Years",
    icon: Compass,
  },
];

const WondersSection = () => {
  const [currentWonderIndex, setCurrentWonderIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollWonders = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "next") {
      setCurrentWonderIndex((prev) => (prev + 1) % wonders.length);
    } else {
      setCurrentWonderIndex(
        (prev) => (prev - 1 + wonders.length) % wonders.length
      );
    }

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const getVisibleWonders = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentWonderIndex + i + wonders.length) % wonders.length;
      visible.push({ ...wonders[index], offset: i, index });
    }
    return visible;
  };

  return (
    <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #012938 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 rounded-full mb-6 border-2 border-teal-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold text-teal-900 tracking-widest">
              प्रकृति के अजूबे
            </span>
            <Sparkles className="w-5 h-5 text-teal-600" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Must Visit
            </span>
            <br />
            <span style={{ color: "#012938" }}>Natural Wonders</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the divine beauty of India's landscapes, where every
            journey becomes a sacred experience
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-16">
          <div
            className="flex gap-8 overflow-hidden justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            {getVisibleWonders().map((wonder) => {
              const isCenter = wonder.offset === 0;
              const isLeft = wonder.offset === -1;
              const isRight = wonder.offset === 1;

              return (
                <div
                  key={wonder.index}
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
                      ? "0 25px 50px -12px rgba(1, 41, 56, 0.4)"
                      : "0 10px 30px -10px rgba(1, 41, 56, 0.25)",
                    transition: "transform 0.6s ease, box-shadow 0.6s ease",
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    {/* Image */}
                    <img
                      src={wonder.image}
                      alt={wonder.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012938] via-[#012938]/70 to-transparent opacity-90" />

                    {/* Decorative Corners */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-teal-400 opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-cyan-400 opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:-translate-x-2 group-hover:translate-y-2" />

                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold rounded-full shadow-md backdrop-blur-sm border border-white/20">
                        {wonder.highlight}
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <wonder.icon className="w-6 h-6 text-teal-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-teal-400" />
                        <span className="text-sm font-semibold text-teal-300 tracking-wide">
                          {wonder.location}
                        </span>
                      </div>

                      <h3
                        className="text-3xl font-bold text-white mb-3 leading-tight"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {wonder.name}
                      </h3>

                      <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {wonder.description}
                      </p>

                      <button className="w-full py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700 text-white rounded-2xl font-bold text-base shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex items-center justify-center gap-2 border border-white/20">
                        <Compass className="w-5 h-5" />
                        Begin Your Yatra
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollWonders("prev")}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(1, 41, 56, 0.4)" }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={() => scrollWonders("next")}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(1, 41, 56, 0.4)" }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {wonders.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentWonderIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentWonderIndex
                  ? "w-12 h-3 bg-gradient-to-r from-teal-600 to-cyan-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-teal-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 text-center">
          {[
            { value: `${wonders.length}+`, label: "Sacred Destinations" },
            { value: "15+", label: "States Covered" },
            { value: "24/7", label: "Travel Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {item.value}
              </h3>
              <p className="text-[#012938] font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WondersSection;
