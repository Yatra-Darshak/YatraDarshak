import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  BookOpen,
  Heart,
  Eye,
  Calendar,
  Send,
} from "lucide-react";

const diaryEntries = [
  {
    title: "A Magical Evening at the Eiffel Tower",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    location: "Paris, France",
    date: "Nov 15, 2024",
    excerpt: "The city of lights never fails to amaze. Walking along the Seine as the Eiffel Tower sparkled was a moment I'll treasure forever. The romance in the air was palpable.",
    views: 2453,
    likes: 342,
  },
  {
    title: "Chasing Sunsets in Santorini",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    location: "Santorini, Greece",
    date: "Oct 28, 2024",
    excerpt: "White-washed buildings, blue domes, and the most breathtaking sunset views. Santorini exceeded all my expectations with its stunning vistas and warm hospitality.",
    views: 3124,
    likes: 486,
  },
  {
    title: "Adventures in the Swiss Mountains",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    location: "Swiss Alps",
    date: "Oct 10, 2024",
    excerpt: "Hiking through pristine alpine meadows with snow-capped peaks as my backdrop. The Swiss Alps are a nature lover's paradise with endless trails and stunning views.",
    views: 1876,
    likes: 298,
  },
  {
    title: "Serenity in Kyoto's Temples",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop",
    location: "Kyoto, Japan",
    date: "Sep 22, 2024",
    excerpt: "Ancient temples, peaceful gardens, and the beauty of traditional Japan. Every corner of Kyoto tells a timeless story that connects past and present.",
    views: 2945,
    likes: 521,
  },
  {
    title: "Island Paradise: My Bali Experience",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    location: "Bali, Indonesia",
    date: "Sep 5, 2024",
    excerpt: "From rice terraces to pristine beaches, Bali offers a perfect blend of adventure and relaxation. A truly transformative journey through island paradise.",
    views: 4231,
    likes: 678,
  },
  {
    title: "Chasing Northern Lights in Iceland",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
    location: "Iceland",
    date: "Aug 18, 2024",
    excerpt: "Witnessing the aurora borealis dance across the Arctic sky was surreal. Iceland's raw beauty and dramatic landscapes left me absolutely speechless.",
    views: 3567,
    likes: 612,
  },
  {
    title: "Desert Dreams in Morocco",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop",
    location: "Sahara, Morocco",
    date: "Jul 30, 2024",
    excerpt: "Sleeping under the stars in the Sahara Desert was magical. The golden dunes and Berber hospitality created memories that will last a lifetime.",
    views: 2789,
    likes: 445,
  },
  {
    title: "Venice: City on Water",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
    location: "Venice, Italy",
    date: "Jul 12, 2024",
    excerpt: "Gondola rides through ancient canals, stunning architecture, and authentic Italian cuisine. Venice is a floating masterpiece that captivates every visitor.",
    views: 3245,
    likes: 534,
  },
];

const TravelDiarySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollEntries = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % diaryEntries.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + diaryEntries.length) % diaryEntries.length);
    }

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const getVisibleEntries = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + diaryEntries.length) % diaryEntries.length;
      visible.push({ ...diaryEntries[index], offset: i, index });
    }
    return visible;
  };

  return (
    <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #764ba2 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-full mb-6 border-2 border-purple-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-900 tracking-widest">
              📖 EXPLORE STORIES
            </span>
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent">
              Travel Diary
            </span>
            <br />
            <span className="text-gray-900">Stories & Experiences</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover amazing stories, tips, and experiences from travelers around the world
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-16">
          <div
            className="flex gap-8 overflow-hidden justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            {getVisibleEntries().map((entry) => {
              const isCenter = entry.offset === 0;
              const isLeft = entry.offset === -1;
              const isRight = entry.offset === 1;

              return (
                <div
                  key={entry.index}
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
                      ? "0 25px 50px -12px rgba(118, 75, 162, 0.4)"
                      : "0 10px 30px -10px rgba(118, 75, 162, 0.25)",
                    transition: "transform 0.6s ease, box-shadow 0.6s ease",
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay on Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-md backdrop-blur-sm border border-white/20 flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {entry.date}
                        </div>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-semibold text-gray-800">
                          {entry.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-2xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {entry.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {entry.excerpt}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">{entry.views}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">{entry.likes}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <button className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white rounded-2xl font-bold text-sm shadow-lg transform opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 border border-white/20">
                        <BookOpen className="w-4 h-4" />
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollEntries("prev")}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(118, 75, 162, 0.4)" }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={() => scrollEntries("next")}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 10px 30px rgba(118, 75, 162, 0.4)" }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {diaryEntries.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-gradient-to-r from-purple-600 to-pink-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats & CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 text-center mb-8">
            {[
              { value: `${diaryEntries.length}+`, label: "Travel Stories" },
              { value: "50+", label: "Countries Covered" },
              { value: "10k+", label: "Happy Readers" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-700 font-medium tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Share Your Story Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30">
              <Send className="w-6 h-6" />
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDiarySection;