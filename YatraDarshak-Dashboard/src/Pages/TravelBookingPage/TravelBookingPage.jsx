import {
  Search,
  Plane,
  Building,
  Palmtree,
  Train,
  Bus,
  Shield,
  Mountain,
  Car,
  Gem,
  Waves,
  TreePalm,
  Church,
  Landmark,
} from "lucide-react";
import React, { useState } from "react";
import TravelDestinations from "./TravelDestinations/TravelDestinations";
import FlightBookingForm from "./Forms/FlightBookingForm";
import HotelBookingForm from "./Forms/HotelBookingForm";
import HolidayBookingForm from "./Forms/HolidayBookingForm";
import TrainBookingForm from "./Forms/TrainBookingForm";
import BusBookingForm from "./Forms/BusBookingForm";
import CabBookingForm from "./Forms/CabBookingForm";
import InsuranceBookingForm from "./Forms/InsuranceBookingForm";

const TravelBookingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("flights");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Service tabs configuration
  const tabs = [
    {
      id: "holidays",
      label: "Holidays",
      image: "./holiday.png",
      icon: <Palmtree className="w-5 h-5" />,
    },
    {
      id: "hotels",
      label: "Hotels",
      image: "./hotel.png",
      icon: <Building className="w-5 h-5" />,
    },
    {
      id: "buses",
      label: "Buses",
      image: "./buses.png",
      icon: <Bus className="w-5 h-5" />,
    },
    {
      id: "trains",
      label: "Trains",
      image: "./train.png",
      icon: <Train className="w-5 h-5" />,
    },
    {
      id: "flights",
      label: "Flights",
      image: "./plane.png",
      icon: <Plane className="w-5 h-5" />,
    },
    {
      id: "cabs",
      label: "Cabs",
      image: "./cab.png",
      icon: <Car className="w-5 h-5" />,
    },
    {
      id: "insurance",
      label: "Insurance",
      image: "./insurance.png",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  // Tour categories configuration
  const tourCategories = [
    {
      id: 1,
      title: "Historical Sites",
      icon: <Landmark className="w-8 h-8" />,
      description: "Explore heritage wonders",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-100/90 to-orange-100/90",
    },
    {
      id: 2,
      title: "Religious Sites",
      icon: <Church className="w-8 h-8" />,
      description: "Spiritual journeys",
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-100/90 to-purple-100/90",
    },
    {
      id: 3,
      title: "Nature Escapes",
      icon: <TreePalm className="w-8 h-8" />,
      description: "Reconnect with nature",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-100/90 to-emerald-100/90",
    },
    {
      id: 4,
      title: "Adventure Sites",
      icon: <Mountain className="w-8 h-8" />,
      description: "Thrilling experiences",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-100/90 to-red-100/90",
    },
    {
      id: 5,
      title: "Beach Gateways",
      icon: <Waves className="w-8 h-8" />,
      description: "Tropical escapes",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-100/90 to-blue-100/90",
    },
    {
      id: 6,
      title: "Luxury Retreats",
      icon: <Gem className="w-8 h-8" />,
      description: "Premium indulgence",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-100/90 to-rose-100/90",
    },
  ];

  // Render different booking forms based on active tab
  // Render different booking forms based on active tab
  const renderBookingForm = () => {
    const forms = {
      hotels: {
        icon: Building,
        color: "green",
        title: "Hotel Booking Form",
        component: <HotelBookingForm />,
      },
      flights: {
        icon: Plane,
        color: "blue",
        title: "Flight Booking Form",
        component: <FlightBookingForm />,
      },
      holidays: {
        icon: Palmtree,
        color: "purple",
        title: "Holiday Package Form",
        component: <HolidayBookingForm />,
      },
      trains: {
        icon: Train,
        color: "orange",
        title: "Train Booking Form",
        component: <TrainBookingForm />,
      },
      buses: {
        icon: Bus,
        color: "red",
        title: "Bus Booking Form",
        component: <BusBookingForm />,
      },
      cabs: {
        icon: Car,
        color: "yellow",
        title: "Cab Booking Form",
        component: <CabBookingForm />,
      },
      insurance: {
        icon: Shield,
        color: "teal",
        title: "Travel Insurance Form",
        component: <InsuranceBookingForm />,
      },
    };

    const form = forms[activeTab];
    const FormIcon = form.icon;

    return (
      <div className="mt-16">
        <div className="w-full bg-white/95 border border-gray-200 rounded-2xl p-6 shadow-md min-h-[700px] flex flex-col">
          <div className="w-full text-center mb-6">
            <FormIcon
              className={`w-10 h-10 text-${form.color}-500 mx-auto mb-3`}
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {form.title}
            </h3>
          </div>
          {/* Render the actual imported form with consistent width */}
          <div className="flex-1 w-full max-w-6xl mx-auto overflow-y-auto">
            {form.component}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden relative">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Background Section */}
        <div className="relative">
          <div className="min-h-[400vh] bg-cover bg-center bg-no-repeat relative">
            {/* Search Bar Section */}
            <div className="max-w-[80%] md:max-w-4xl mx-auto py-20">
              <div className="text-center relative">
                <div className="relative max-w-2xl mx-auto shadow-lg shadow-blue-200 rounded-full">
                  {/* Search Icon */}
                  <Search className="absolute left-4 top-1/2 z-50 transform -translate-y-1/2 w-5 h-5 text-teal-600" />

                  <input
                    type="text"
                    placeholder="Namaste! Plan Your Trips With Me..."
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-white transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Robot/Bot Image */}
                <div className="absolute -right-15 -bottom-5 md:right-5 md:bottom-0 transform translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                    <img
                      src="./robot.png"
                      alt="Travel Bot"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Section with Background */}
            <div
              className="w-full pb-20 mt-20 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('./background_YD.jpg')` }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gray-50/20"></div>

              <div className="max-w-[92%] md:max-w-[75%] mx-auto">
                {/* Booking Form Container */}
                <div className="min-h-fit w-full relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-cyan-400/20 p-8 border border-cyan-200/40">
                  {/* Service Tabs */}
                  <div className="absolute -top-18 md:-top-[7%] left-1/2 transform -translate-x-1/2 w-[90%] mb-6 p-3">
                    <div className="bg-white/95 h-fit backdrop-blur-md border border-cyan-200/60 rounded-3xl shadow-xl p-2 overflow-x-auto">
                      <div className="flex flex-nowrap justify-evenly space-x-4">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative group flex flex-col items-center px-4 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105
                              ${
                                activeTab === tab.id
                                  ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white shadow-lg scale-105"
                                  : "bg-transparent text-gray-600 hover:bg-cyan-50/80 hover:shadow-lg hover:text-gray-800"
                              }`}
                          >
                            <div
                              className={`relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden mb-2 transition-all duration-500
                                ${
                                  activeTab === tab.id
                                    ? "bg-white p-0.5 shadow-lg"
                                    : "bg-gray-100 group-hover:bg-gray-200"
                                }`}
                            >
                              {tab.image ? (
                                <img
                                  src={tab.image}
                                  alt={tab.label}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  {tab.icon}
                                </div>
                              )}
                              {activeTab === tab.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"></div>
                              )}
                            </div>
                            <span
                              className={`text-xs font-medium transition-all duration-300 ${
                                activeTab === tab.id
                                  ? "text-white drop-shadow-sm"
                                  : "text-gray-600 group-hover:text-gray-800"
                              }`}
                            >
                              {tab.label}
                            </span>
                            {activeTab === tab.id && (
                              <div className="absolute -bottom-1 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Form Section */}
                  <div className="mt-4">{renderBookingForm()}</div>
                </div>
                {/* Tour Categories Section */}
                <div className="mt-20 mb-20 flex flex-col">
                  {/* Section Header */}
                  <div className="text-center">
                    <div className="inline-block relative">
                      <h2
                        className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl relative z-10"
                        style={{ fontFamily: "serif" }}
                      >
                        Tour Categories
                      </h2>
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                    </div>
                    <p className="text-2xl text-white/95 drop-shadow-lg italic font-light tracking-wide">
                      Discover Wonderful Places Tailored For You
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Tour Categories Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto p-6 lg:p-0 ml-auto lg:ml-0">
                    {tourCategories.map((category, index) => (
                      <div
                        key={category.id}
                        className={`group relative h-45 overflow-hidden rounded-3xl aspect-square transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer ${
                          hoveredCategory === category.id ? "z-30" : "z-10"
                        }
                    ${index === 0 ? "lg:translate-y-3" : ""}
                    ${index === 1 ? "lg:translate-y-20" : ""}
                    ${index === 2 ? "lg:translate-y-32" : ""}
                    ${index === 3 ? "lg:translate-y-32" : ""}
                    ${index === 4 ? "lg:translate-y-20" : ""}
                    ${index === 5 ? "lg:translate-y-3" : ""}`}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        {/* Background with gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border border-white/30 rounded-3xl`}
                        ></div>

                        {/* Hover overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 rounded-3xl`}
                        ></div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                          {/* Icon container */}
                          <div
                            className={`mb-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                          >
                            {category.icon}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2">
                            {category.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 opacity-80">
                            {category.description}
                          </p>

                          {/* Floating dots animation */}
                          <div className="absolute top-4 right-4 flex space-x-1">
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} animate-ping`}
                            ></div>
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} animate-ping`}
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                          </div>
                        </div>

                        {/* Bottom accent line */}
                        <div
                          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Destinations Section */}
            <div className="mt-20 flex justify-center items-center">
              <TravelDestinations />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelBookingPage;
