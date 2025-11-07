import React, { useState } from "react";
import {
  Waves,
  Mountain,
  Building,
  Compass,
  Camera,
  Palmtree,
  Sparkles,
  MapPin,
} from "lucide-react";

const destinations = [
  {
    name: "Beach",
    icon: Waves,
    gradient: "from-cyan-500 to-blue-600",
    description: "Sun, sand & serenity",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-400",
    locations: "50+ Beaches",
  },
  {
    name: "Mountain",
    icon: Mountain,
    gradient: "from-emerald-500 to-teal-600",
    description: "Peaks & valleys await",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-400",
    locations: "40+ Hill Stations",
  },
  {
    name: "City",
    icon: Building,
    gradient: "from-purple-500 to-indigo-600",
    description: "Urban exploration",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400",
    locations: "30+ Cities",
  },
  {
    name: "Adventure",
    icon: Compass,
    gradient: "from-orange-500 to-red-600",
    description: "Thrill & excitement",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-400",
    locations: "100+ Activities",
  },
  {
    name: "Cultural",
    icon: Camera,
    gradient: "from-amber-500 to-orange-600",
    description: "Heritage & traditions",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-400",
    locations: "60+ Sites",
  },
  {
    name: "Tropical",
    icon: Palmtree,
    gradient: "from-green-500 to-lime-600",
    description: "Island paradise",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400",
    locations: "25+ Islands",
  },
];

const DestinationSelector = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);

  return (
    <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-full mb-6 border-2 border-purple-200 shadow-lg">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-900 tracking-widest">
              EXPLORE BY CATEGORY
            </span>
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="text-slate-800">Travel Style</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover destinations tailored to your travel preferences
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 mb-12">
          {destinations.map((dest, index) => {
            const Icon = dest.icon;
            const isSelected = selectedDestination === index;

            return (
              <button
                key={index}
                onClick={() => setSelectedDestination(index)}
                className={`group relative flex-shrink-0 rounded-3xl transition-all duration-500 transform ${
                  isSelected
                    ? "scale-105 shadow-2xl"
                    : "shadow-lg hover:shadow-xl hover:scale-105"
                }`}
              >
                <div
                  className={`relative w-full aspect-square rounded-3xl bg-gradient-to-br ${
                    dest.gradient
                  } p-6 flex flex-col items-center justify-center text-white overflow-hidden ${
                    isSelected
                      ? `ring-4 ${dest.borderColor} ring-offset-4`
                      : ""
                  }`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl ${
                        dest.bgColor
                      } backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 ${
                        isSelected
                          ? "scale-110 rotate-12"
                          : "group-hover:scale-110 group-hover:rotate-12"
                      }`}
                    >
                      <Icon
                        className={`w-10 h-10 transition-transform duration-500 ${
                          isSelected ? "scale-125" : "group-hover:scale-125"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-xs text-white/80 mb-2">
                      {dest.description}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="w-3 h-3" />
                      <span>{dest.locations}</span>
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </div>
                  )}

                  {/* Corner Decorations on Hover */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Destination Info */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl p-8">
            {/* Background Gradient Specific to Selected */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${destinations[selectedDestination].gradient} opacity-5`}
            ></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Icon Display */}
                <div
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${destinations[selectedDestination].gradient} flex items-center justify-center shadow-xl`}
                >
                  {React.createElement(destinations[selectedDestination].icon, {
                    className: "w-12 h-12 text-white",
                  })}
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {destinations[selectedDestination].name} Destinations
                  </h3>
                  <p className="text-gray-600 text-lg mb-3">
                    {destinations[selectedDestination].description}
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600">
                      {destinations[selectedDestination].locations} available
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`px-8 py-4 bg-gradient-to-r ${destinations[selectedDestination].gradient} text-white rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}
                >
                  <Compass className="w-5 h-5" />
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              icon: Sparkles,
              title: "Curated Selection",
              description: "Handpicked destinations",
            },
            {
              icon: MapPin,
              title: "200+ Locations",
              description: "Across all categories",
            },
            {
              icon: Compass,
              title: "Expert Guides",
              description: "Local travel insights",
            },
          ].map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FeatureIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationSelector;