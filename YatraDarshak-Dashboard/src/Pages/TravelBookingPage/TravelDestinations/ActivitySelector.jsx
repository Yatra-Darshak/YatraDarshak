import React, { useState } from "react";
import {
  Mountain,
  Waves,
  Camera,
  UtensilsCrossed,
  MapPin,
  Palmtree,
  Map,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";

const activities = [
  {
    name: "Hiking",
    icon: Mountain,
    gradient: "from-green-500 to-emerald-600",
    description: "Trails & treks",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400",
    popularity: "Popular",
  },
  {
    name: "Swimming",
    icon: Waves,
    gradient: "from-blue-500 to-cyan-600",
    description: "Pools & beaches",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400",
    popularity: "Trending",
  },
  {
    name: "Photography",
    icon: Camera,
    gradient: "from-purple-500 to-pink-600",
    description: "Capture moments",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400",
    popularity: "Featured",
  },
  {
    name: "Dining",
    icon: UtensilsCrossed,
    gradient: "from-orange-500 to-red-600",
    description: "Local cuisine",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-400",
    popularity: "Top Rated",
  },
  {
    name: "Sightseeing",
    icon: MapPin,
    gradient: "from-indigo-500 to-purple-600",
    description: "Historic sites",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-400",
    popularity: "Essential",
  },
  {
    name: "Adventure",
    icon: Palmtree,
    gradient: "from-teal-500 to-cyan-600",
    description: "Thrill seekers",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-400",
    popularity: "Exciting",
  },
  {
    name: "Explore",
    icon: Map,
    gradient: "from-rose-500 to-pink-600",
    description: "Hidden gems",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-400",
    popularity: "Discovery",
  },
];

const ActivitySelector = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoveredActivity, setHoveredActivity] = useState(null);

  return (
    <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ea580c 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-50 via-rose-50 to-orange-50 rounded-full mb-6 border-2 border-orange-200 shadow-lg">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-bold text-orange-900 tracking-widest">
              ACTIVITIES & EXPERIENCES
            </span>
            <TrendingUp className="w-5 h-5 text-orange-600" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Travel By
            </span>
            <br />
            <span className="text-gray-800">Activities</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose your preferred way to explore and create unforgettable memories
          </p>
        </div>

        {/* Activity Cards */}
        <div className="relative">
          {/* Main Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 px-4 mb-12">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const isSelected = selectedActivity === index;
              const isHovered = hoveredActivity === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedActivity(index)}
                  onMouseEnter={() => setHoveredActivity(index)}
                  onMouseLeave={() => setHoveredActivity(null)}
                  className={`group relative rounded-3xl transition-all duration-500 transform ${
                    isSelected
                      ? "scale-105 shadow-2xl"
                      : "shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2"
                  }`}
                >
                  <div
                    className={`relative w-full aspect-square rounded-3xl bg-white overflow-hidden ${
                      isSelected
                        ? `ring-4 ${activity.borderColor} ring-offset-4`
                        : ""
                    }`}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Decorative Circle */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                      {/* Icon Container */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          activity.gradient
                        } flex items-center justify-center shadow-lg mb-3 transform transition-all duration-500 ${
                          isSelected || isHovered
                            ? "scale-110 rotate-12"
                            : "group-hover:scale-110 group-hover:rotate-12"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 text-white transition-transform duration-500 ${
                            isSelected || isHovered
                              ? "scale-125"
                              : "group-hover:scale-125"
                          }`}
                        />
                      </div>

                      {/* Text */}
                      <h3 className="text-base font-bold text-gray-800 mb-1 text-center">
                        {activity.name}
                      </h3>
                      <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                        {activity.description}
                      </p>

                      {/* Popularity Badge */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className={`px-2 py-1 bg-gradient-to-r ${activity.gradient} text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1`}
                        >
                          <Star className="w-3 h-3 fill-white" />
                        </div>
                      </div>
                    </div>

                    {/* Selected Indicator */}
                    {isSelected && (
                      <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl animate-pulse">
                        <Sparkles className="w-5 h-5 text-orange-600" />
                      </div>
                    )}

                    {/* Corner Decorations */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-lg"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Activity Info */}
        {selectedActivity !== null && (
          <div className="max-w-4xl mx-auto mb-12 animate-fadeIn">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 shadow-xl p-8">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activities[selectedActivity].gradient} opacity-5`}
              ></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Icon Display */}
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${activities[selectedActivity].gradient} flex items-center justify-center shadow-xl`}
                  >
                    {React.createElement(activities[selectedActivity].icon, {
                      className: "w-12 h-12 text-white",
                    })}
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${activities[selectedActivity].gradient} text-white text-xs font-bold rounded-full`}
                      >
                        {activities[selectedActivity].popularity}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {activities[selectedActivity].name} Activities
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {activities[selectedActivity].description} - Perfect for your travel style
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`px-8 py-4 bg-gradient-to-r ${activities[selectedActivity].gradient} text-white rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}
                  >
                    <Sparkles className="w-5 h-5" />
                    View Activities
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: Mountain,
              value: "500+",
              label: "Activities Available",
              gradient: "from-green-600 to-emerald-600",
            },
            {
              icon: Star,
              value: "4.8★",
              label: "Average Rating",
              gradient: "from-orange-600 to-red-600",
            },
            {
              icon: TrendingUp,
              value: "1000+",
              label: "Happy Travelers",
              gradient: "from-rose-600 to-pink-600",
            },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                >
                  <StatIcon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </h3>
                <p className="text-gray-700 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitySelector;