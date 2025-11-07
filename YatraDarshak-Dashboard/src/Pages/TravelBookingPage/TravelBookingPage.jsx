import {
  Menu,
  X,
  Search,
  Plane,
  Building,
  Palmtree,
  Train,
  Bus,
  Users,
  Shield,
  Mountain,
  MapPin,
  Camera,
  Compass,
  Car,
  Bed,
  Calendar,
  University,
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
            <FormIcon className={`w-10 h-10 text-${form.color}-500 mx-auto mb-3`} />
            <h3 className="text-lg font-semibold text-gray-800">{form.title}</h3>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden relative">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Background Section */}
        <div className="relative">
          <div className="min-h-[400vh] bg-cover bg-center bg-no-repeat relative">
            {/* Search Bar Section */}
            <div className="max-w-4xl mx-auto py-20">
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
                <div className="absolute right-5 bottom-0 transform translate-y-1/2">
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
              className="absolute w-full top-50 min-h-[80vh] pb-20 mt-20 z-50 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('./background_YD.jpg')`,
              }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gray-50/20"></div>

              <div className="max-w-[75%] mx-auto">
                {/* Booking Form Container */}
                <div className="min-h-fit w-full relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-cyan-400/20 p-8 border border-cyan-200/40">
                  {/* Service Tabs */}
                  <div className="absolute -top-[7%] left-1/2 transform -translate-x-1/2 w-[90%] mb-6 p-3">
                    <div className="bg-white/95 h-fit backdrop-blur-md border border-cyan-200/60 rounded-3xl shadow-xl p-2 overflow-x-auto">
                      <div className="flex flex-nowrap justify-evenly space-x-4">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative group flex flex-col items-center px-4 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105
                              ${activeTab === tab.id
                                ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white shadow-lg scale-105"
                                : "bg-transparent text-gray-600 hover:bg-cyan-50/80 hover:shadow-lg hover:text-gray-800"
                              }`}
                          >
                            <div
                              className={`relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden mb-2 transition-all duration-500
                                ${activeTab === tab.id
                                  ? "bg-white p-0.5 shadow-lg"
                                  : "bg-gray-100 group-hover:bg-gray-200"
                                }`}
                            >
                              {tab.image ? (
                                <img src={tab.image} alt={tab.label} className="w-full h-full object-cover rounded-full" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">{tab.icon}</div>
                              )}
                              {activeTab === tab.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"></div>
                              )}
                            </div>
                            <span className={`text-xs font-medium transition-all duration-300 ${activeTab === tab.id ? "text-white drop-shadow-sm" : "text-gray-600 group-hover:text-gray-800"}`}>
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
                <div className="mt-20 mb-20">
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
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {tourCategories.map((category, index) => (
                      <div
                        key={category.id}
                        className={`group relative h-45 overflow-hidden rounded-3xl aspect-square transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer ${
                          hoveredCategory === category.id ? "z-30" : "z-10"
                        }
                    ${index === 0 ? "translate-y-3" : ""}
                    ${index === 1 ? "translate-y-20" : ""}
                    ${index === 2 ? "translate-y-32" : ""}
                    ${index === 3 ? "translate-y-32" : ""}
                    ${index === 4 ? "translate-y-20" : ""}
                    ${index === 5 ? "translate-y-3" : ""}`}
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
            <div className="mt-420 flex justify-center items-center">
              <TravelDestinations />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelBookingPage;

// import React, { useState } from "react";
// import { 
//   Sparkles, 
//   TrendingUp, 
//   MapPin, 
//   Compass,
//   Mountain,
//   Waves,
//   Camera,
//   UtensilsCrossed,
//   Palmtree,
//   Map,
//   Building,
//   Star,
//   Calendar,
//   Users,
//   TreePine,
//   Sun,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   X,
//   Search,
//   Plane,
//   Train,
//   Bus,
//   Car,
//   Shield,
//   Bed,
//   TreePalm,
//   Church,
//   Landmark,
//   Gem
// } from "lucide-react";
// import FlightBookingForm from "./Forms/FlightBookingForm";
// import HotelBookingForm from "./Forms/HotelBookingForm";
// import HolidayBookingForm from "./Forms/HolidayBookingForm";
// import TrainBookingForm from "./Forms/TrainBookingForm";
// import BusBookingForm from "./Forms/BusBookingForm";
// import CabBookingForm from "./Forms/CabBookingForm";
// import InsuranceBookingForm from "./Forms/InsuranceBookingForm";

// // ============= MAIN APP COMPONENT =============
// const TravelBookingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("flights");
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [selectedDestination, setSelectedDestination] = useState(0);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Service tabs configuration
//   const tabs = [
//     { id: "flights", label: "Flights", image: "./plane.png", icon: <Plane className="w-5 h-5" /> },
//     { id: "hotels", label: "Hotels", image: "./hotel.png", icon: <Building className="w-5 h-5" /> },
//     { id: "holidays", label: "Holidays", image: "./holiday.png", icon: <Palmtree className="w-5 h-5" /> },
//     { id: "trains", label: "Trains", image: "./train.png", icon: <Train className="w-5 h-5" /> },
//     { id: "buses", label: "Buses", image: "./buses.png", icon: <Bus className="w-5 h-5" /> },
//     { id: "cabs", label: "Cabs", image: "./cab.png", icon: <Car className="w-5 h-5" /> },
//     { id: "insurance", label: "Insurance", image: "./insurance.png", icon: <Shield className="w-5 h-5" /> },
//   ];

//   // Tour categories configuration
//   const tourCategories = [
//     {
//       id: 1,
//       title: "Historical Sites",
//       icon: <Landmark className="w-8 h-8" />,
//       description: "Explore heritage wonders",
//       gradient: "from-yellow-400 to-orange-500",
//       bgGradient: "from-yellow-100/90 to-orange-100/90",
//     },
//     {
//       id: 2,
//       title: "Religious Sites",
//       icon: <Church className="w-8 h-8" />,
//       description: "Spiritual journeys",
//       gradient: "from-indigo-400 to-purple-500",
//       bgGradient: "from-indigo-100/90 to-purple-100/90",
//     },
//     {
//       id: 3,
//       title: "Nature Escapes",
//       icon: <TreePalm className="w-8 h-8" />,
//       description: "Reconnect with nature",
//       gradient: "from-green-400 to-emerald-500",
//       bgGradient: "from-green-100/90 to-emerald-100/90",
//     },
//     {
//       id: 4,
//       title: "Adventure Sites",
//       icon: <Mountain className="w-8 h-8" />,
//       description: "Thrilling experiences",
//       gradient: "from-orange-400 to-red-500",
//       bgGradient: "from-orange-100/90 to-red-100/90",
//     },
//     {
//       id: 5,
//       title: "Beach Gateways",
//       icon: <Waves className="w-8 h-8" />,
//       description: "Tropical escapes",
//       gradient: "from-cyan-400 to-blue-500",
//       bgGradient: "from-cyan-100/90 to-blue-100/90",
//     },
//     {
//       id: 6,
//       title: "Luxury Retreats",
//       icon: <Gem className="w-8 h-8" />,
//       description: "Premium indulgence",
//       gradient: "from-pink-400 to-rose-500",
//       bgGradient: "from-pink-100/90 to-rose-100/90",
//     },
//   ];

//   const renderBookingForm = () => {
//   const formProps = { className: "mt-12" };

//   const forms = {
//     flights: {
//       icon: Plane,
//       color: "blue",
//       title: "Flight Booking Form",
//       component: <FlightBookingForm />,
//     },
//     hotels: {
//       icon: Building,
//       color: "green",
//       title: "Hotel Booking Form",
//       component: <HotelBookingForm />,
//     },
//     holidays: {
//       icon: Palmtree,
//       color: "purple",
//       title: "Holiday Package Form",
//       component: <HolidayBookingForm />,
//     },
//     trains: {
//       icon: Train,
//       color: "orange",
//       title: "Train Booking Form",
//       component: <TrainBookingForm />,
//     },
//     buses: {
//       icon: Bus,
//       color: "red",
//       title: "Bus Booking Form",
//       component: <BusBookingForm />,
//     },
//     cabs: {
//       icon: Car,
//       color: "yellow",
//       title: "Cab Booking Form",
//       component: <CabBookingForm />,
//     },
//     insurance: {
//       icon: Shield,
//       color: "teal",
//       title: "Travel Insurance Form",
//       component: <InsuranceBookingForm />,
//     },
//   };

//   const form = forms[activeTab];
//   const FormIcon = form.icon;

//   return (
//     <div {...formProps}>
//       <div
//         className={`bg-${form.color}-50/50 border border-${form.color}-200 rounded-2xl p-6 shadow-md`}
//       >
//         <div className="text-center mb-6">
//           <FormIcon
//             className={`w-10 h-10 text-${form.color}-500 mx-auto mb-3`}
//           />
//           <h3 className="text-lg font-semibold text-gray-800">
//             {form.title}
//           </h3>
//         </div>
//         {/* ✅ Render the actual imported form */}
//         <div className="max-w-lg mx-auto">{form.component}</div>
//       </div>
//     </div>
//   );
// };

//   // Destinations data
//   const destinations = [
//     { name: "Beach", icon: Waves, gradient: "from-cyan-500 to-blue-600", description: "Sun, sand & serenity", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-400", locations: "50+ Beaches" },
//     { name: "Mountain", icon: Mountain, gradient: "from-emerald-500 to-teal-600", description: "Peaks & valleys await", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-400", locations: "40+ Hill Stations" },
//     { name: "City", icon: Building, gradient: "from-purple-500 to-indigo-600", description: "Urban exploration", bgColor: "bg-purple-500/10", borderColor: "border-purple-400", locations: "30+ Cities" },
//     { name: "Adventure", icon: Compass, gradient: "from-orange-500 to-red-600", description: "Thrill & excitement", bgColor: "bg-orange-500/10", borderColor: "border-orange-400", locations: "100+ Activities" },
//     { name: "Cultural", icon: Camera, gradient: "from-amber-500 to-orange-600", description: "Heritage & traditions", bgColor: "bg-amber-500/10", borderColor: "border-amber-400", locations: "60+ Sites" },
//     { name: "Tropical", icon: Palmtree, gradient: "from-green-500 to-lime-600", description: "Island paradise", bgColor: "bg-green-500/10", borderColor: "border-green-400", locations: "25+ Islands" },
//   ];

//   // Activities data
//   const activities = [
//     { name: "Hiking", icon: Mountain, gradient: "from-green-500 to-emerald-600", description: "Trails & treks" },
//     { name: "Swimming", icon: Waves, gradient: "from-blue-500 to-cyan-600", description: "Pools & beaches" },
//     { name: "Photography", icon: Camera, gradient: "from-purple-500 to-pink-600", description: "Capture moments" },
//     { name: "Dining", icon: UtensilsCrossed, gradient: "from-orange-500 to-red-600", description: "Local cuisine" },
//     { name: "Sightseeing", icon: MapPin, gradient: "from-indigo-500 to-purple-600", description: "Historic sites" },
//     { name: "Adventure", icon: Palmtree, gradient: "from-teal-500 to-cyan-600", description: "Thrill seekers" },
//     { name: "Explore", icon: Map, gradient: "from-rose-500 to-pink-600", description: "Hidden gems" },
//   ];

//   // Packages data
//   const packages = [
//     { name: "Bhopal", price: 2500, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop", rating: 4.5, reviews: 128, location: "Madhya Pradesh", description: "Explore the City of Lakes with its rich heritage", highlight: "Heritage Tour", duration: "3 Days" },
//     { name: "Ujjain", price: 2000, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop", rating: 4.7, reviews: 95, location: "Madhya Pradesh", description: "Sacred city on the banks of Shipra", highlight: "Spiritual", duration: "2 Days" },
//     { name: "Pachmarhi", price: 3000, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", rating: 4.8, reviews: 156, location: "Madhya Pradesh", description: "Queen of Satpura with stunning waterfalls", highlight: "Hill Station", duration: "4 Days" },
//   ];

//   const scrollPackages = (direction) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     if (direction === "next") {
//       setCurrentPackageIndex((prev) => (prev + 1) % packages.length);
//     } else {
//       setCurrentPackageIndex((prev) => (prev - 1 + packages.length) % packages.length);
//     }
//     setTimeout(() => setIsTransitioning(false), 700);
//   };

//   const getVisiblePackages = () => {
//     const visible = [];
//     for (let i = -1; i <= 1; i++) {
//       const index = (currentPackageIndex + i + packages.length) % packages.length;
//       visible.push({ ...packages[index], offset: i, index });
//     }
//     return visible;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden relative">
//       <main className="relative z-10">
//         <div className="relative">
//           <div className="min-h-[400vh] bg-cover bg-center bg-no-repeat relative">
//             {/* Search Bar Section */}
//             <div className="max-w-4xl mx-auto py-20">
//               <div className="text-center relative">
//                 <div className="relative max-w-2xl mx-auto shadow-2xl shadow-cyan-200/50 rounded-full">
//                   <Search className="absolute left-4 top-1/2 z-50 transform -translate-y-1/2 w-5 h-5 text-cyan-600" />
//                   <input
//                     type="text"
//                     placeholder="Namaste! Plan Your Trips With Me..."
//                     className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-cyan-200/50 bg-white/90 backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white transition-all duration-300 shadow-lg"
//                   />
//                 </div>
//                 <div className="absolute right-5 bottom-0 transform translate-y-1/2">
//                   <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center overflow-hidden shadow-xl border-4 border-cyan-200">
//                     <img src="./robot.png" alt="Travel Bot" className="w-full h-full object-cover rounded-full" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content Section */}
//             <div
//               className="absolute w-full top-50 min-h-[80vh] pb-20 mt-20 z-50 bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url('./background_YD.jpg')` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-blue-50/20 to-cyan-50/30 backdrop-blur-sm"></div>

//               <div className="relative max-w-[75%] mx-auto">
//                 {/* Booking Form Container */}
//                 <div className="min-h-fit w-full relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-cyan-400/20 p-8 border border-cyan-200/40">
//                   {/* Service Tabs */}
//                   <div className="absolute -top-[13%] left-1/2 transform -translate-x-1/2 w-[90%] mb-6 p-3">
//                     <div className="bg-white/95 h-fit backdrop-blur-md border border-cyan-200/60 rounded-3xl shadow-xl p-2 overflow-x-auto">
//                       <div className="flex flex-nowrap justify-evenly space-x-4">
//                         {tabs.map((tab) => (
//                           <button
//                             key={tab.id}
//                             onClick={() => setActiveTab(tab.id)}
//                             className={`relative group flex flex-col items-center px-4 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105
//                               ${activeTab === tab.id
//                                 ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white shadow-lg scale-105"
//                                 : "bg-transparent text-gray-600 hover:bg-cyan-50/80 hover:shadow-lg hover:text-gray-800"
//                               }`}
//                           >
//                             <div
//                               className={`relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden mb-2 transition-all duration-500
//                                 ${activeTab === tab.id
//                                   ? "bg-white p-0.5 shadow-lg"
//                                   : "bg-gray-100 group-hover:bg-gray-200"
//                                 }`}
//                             >
//                               {tab.image ? (
//                                 <img src={tab.image} alt={tab.label} className="w-full h-full object-cover rounded-full" />
//                               ) : (
//                                 <div className="w-full h-full flex items-center justify-center">{tab.icon}</div>
//                               )}
//                               {activeTab === tab.id && (
//                                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"></div>
//                               )}
//                             </div>
//                             <span className={`text-xs font-medium transition-all duration-300 ${activeTab === tab.id ? "text-white drop-shadow-sm" : "text-gray-600 group-hover:text-gray-800"}`}>
//                               {tab.label}
//                             </span>
//                             {activeTab === tab.id && (
//                               <div className="absolute -bottom-1 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
//                             )}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Dynamic Form Section */}
//                   <div className="mt-16">{renderBookingForm()}</div>

//                   {/* Search Button */}
//                   <div className="mt-8 text-center">
//                     <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-white/30">
//                       Search {tabs.find((tab) => tab.id === activeTab)?.label || "Services"}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Tour Categories Section */}
//                 <div className="mt-20 mb-20">
//                   <div className="text-center mb-16">
//                     <div className="inline-block relative">
//                       <h2
//                         className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl relative z-10"
//                         style={{ fontFamily: "Georgia, serif" }}
//                       >
//                         <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
//                           Tour Categories
//                         </span>
//                       </h2>
//                       <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
//                     </div>
//                     <p className="text-xl text-white/95 drop-shadow-lg font-light tracking-wide">
//                       Discover Wonderful Places Tailored For You
//                     </p>
//                     <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg"></div>
//                   </div>

//                   {/* Tour Categories Grid */}
//                   <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
//                     {tourCategories.map((category, index) => (
//                       <div
//                         key={category.id}
//                         className={`group relative h-45 overflow-hidden rounded-3xl aspect-square transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl
//                           ${hoveredCategory === category.id ? "z-30" : "z-10"}
//                           ${index === 0 ? "translate-y-3" : ""}
//                           ${index === 1 ? "translate-y-20" : ""}
//                           ${index === 2 ? "translate-y-32" : ""}
//                           ${index === 3 ? "translate-y-32" : ""}
//                           ${index === 4 ? "translate-y-20" : ""}
//                           ${index === 5 ? "translate-y-3" : ""}`}
//                         onMouseEnter={() => setHoveredCategory(category.id)}
//                         onMouseLeave={() => setHoveredCategory(null)}
//                       >
//                         <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border-2 border-white/40 rounded-3xl`}></div>
//                         <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500 rounded-3xl`}></div>
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

//                         <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
//                           <div className={`mb-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
//                             {category.icon}
//                           </div>
//                           <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-2">
//                             {category.title}
//                           </h3>
//                           <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 opacity-80">
//                             {category.description}
//                           </p>
//                         </div>

//                         <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Travel Destinations Section */}
//             <div className="mt-260 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
//               <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
//                 {/* Destination Selector */}
//                 <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white shadow-xl">
//                   <div className="absolute inset-0 opacity-5">
//                     <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
//                   </div>

//                   <div className="relative max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                       <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-full mb-6 border-2 border-purple-200 shadow-lg">
//                         <MapPin className="w-5 h-5 text-purple-600" />
//                         <span className="text-sm font-bold text-purple-900 tracking-widest">EXPLORE BY CATEGORY</span>
//                       </div>
//                       <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//                         <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Choose Your</span>
//                         <br />
//                         <span className="text-slate-800">Travel Style</span>
//                       </h2>
//                     </div>

//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
//                       {destinations.map((dest, index) => {
//                         const Icon = dest.icon;
//                         const isSelected = selectedDestination === index;
//                         return (
//                           <button
//                             key={index}
//                             onClick={() => setSelectedDestination(index)}
//                             className={`group relative rounded-3xl transition-all duration-500 transform ${isSelected ? "scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl hover:scale-105"}`}
//                           >
//                             <div className={`relative w-full aspect-square rounded-3xl bg-gradient-to-br ${dest.gradient} p-6 flex flex-col items-center justify-center text-white overflow-hidden ${isSelected ? `ring-4 ${dest.borderColor} ring-offset-4` : ""}`}>
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                               <div className="relative z-10 mb-4">
//                                 <div className={`w-20 h-20 rounded-2xl ${dest.bgColor} backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 ${isSelected ? "scale-110 rotate-12" : "group-hover:scale-110 group-hover:rotate-12"}`}>
//                                   <Icon className="w-10 h-10" />
//                                 </div>
//                               </div>
//                               <div className="relative z-10 text-center">
//                                 <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
//                                 <p className="text-xs text-white/80">{dest.description}</p>
//                               </div>
//                               {isSelected && (
//                                 <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
//                                   <Sparkles className="w-5 h-5 text-purple-600" />
//                                 </div>
//                               )}
//                             </div>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </section>

//                 {/* Activity Selector */}
//                 <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white shadow-xl">
//                   <div className="relative max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                       <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-50 via-rose-50 to-orange-50 rounded-full mb-6 border-2 border-orange-200 shadow-lg">
//                         <TrendingUp className="w-5 h-5 text-orange-600" />
//                         <span className="text-sm font-bold text-orange-900 tracking-widest">ACTIVITIES & EXPERIENCES</span>
//                       </div>
//                       <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//                         <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">Travel By</span>
//                         <br />
//                         <span className="text-gray-800">Activities</span>
//                       </h2>
//                     </div>

//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 px-4">
//                       {activities.map((activity, index) => {
//                         const Icon = activity.icon;
//                         const isSelected = selectedActivity === index;
//                         return (
//                           <button
//                             key={index}
//                             onClick={() => setSelectedActivity(index)}
//                             className={`group relative rounded-3xl transition-all duration-500 transform ${isSelected ? "scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl hover:scale-105"}`}
//                           >
//                             <div className={`relative w-full aspect-square rounded-3xl bg-white overflow-hidden ${isSelected ? "ring-4 border-orange-400 ring-offset-4" : ""}`}>
//                               <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
//                               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
//                                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-lg mb-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
//                                   <Icon className="w-8 h-8 text-white" />
//                                 </div>
//                                 <h3 className="text-base font-bold text-gray-800 mb-1 text-center">{activity.name}</h3>
//                                 <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">{activity.description}</p>
//                               </div>
//                               {isSelected && (
//                                 <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl animate-pulse">
//                                   <Sparkles className="w-5 h-5 text-orange-600" />
//                                 </div>
//                               )}
//                             </div>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </section>

//                 {/* Packages Section */}
//                 <section className="relative py-20 px-4 rounded-4xl overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white shadow-xl">
//                   <div className="relative max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                       <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 rounded-full mb-6 border-2 border-cyan-200 shadow-lg">
//                         <TrendingUp className="w-5 h-5 text-cyan-600" />
//                         <span className="text-sm font-bold text-cyan-900 tracking-widest">EXCLUSIVE OFFERS</span>
//                       </div>
//                       <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//                         <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Must See</span>
//                         <br />
//                         <span style={{ color: "#1e40af" }}>Packages & Deals</span>
//                       </h2>
//                     </div>

//                     <div className="relative px-16">
//                       <div className="flex gap-8 overflow-hidden justify-center items-center" style={{ perspective: "1000px" }}>
//                         {getVisiblePackages().map((pkg) => {
//                           const isCenter = pkg.offset === 0;
//                           return (
//                             <div
//   key={pkg.index}
//   className={`group flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-700 ${isCenter ? "w-96 h-[32rem] z-20 opacity-100 scale-100 shadow-2xl" : "w-80 h-[28rem] z-10 opacity-70 scale-95 hidden md:block shadow-xl"}`}
// >
//   <div className="relative w-full h-full rounded-3xl overflow-hidden">
//     <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//     <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-90" />

//     <div className="absolute top-6 left-6">
//       <div className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-md backdrop-blur-sm border border-white/20">
//         {pkg.highlight}
//       </div>
//     </div>

//     <div className="absolute top-6 right-6">
//       <div className="px-3 py-2 bg-white/90 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5">
//         <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
//         <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
//         <span className="text-xs text-gray-600">({pkg.reviews})</span>
//       </div>
//     </div>

//     <div className="absolute bottom-0 left-0 right-0 p-8">
//       <div className="flex items-center gap-2 mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//         <MapPin className="w-5 h-5 text-cyan-400" />
//         <span className="text-sm font-semibold text-cyan-300">{pkg.location}</span>
//       </div>

//       <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>
//         {pkg.name}
//       </h3>

//       <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
//         {pkg.description}
//       </p>

//       <div className="flex items-center justify-between mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
//         <div className="flex items-center gap-2">
//           <Calendar className="w-4 h-4 text-cyan-400" />
//           <span className="text-sm text-gray-200">{pkg.duration}</span>
//         </div>
//         <div className="text-right">
//           <p className="text-xs text-cyan-300">Starting from</p>
//           <p className="text-2xl font-bold text-white">₹{pkg.price}</p>
//         </div>
//       </div>

//       <button className="w-full py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-base shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex items-center justify-center gap-2 border border-white/20">
//         <Sparkles className="w-5 h-5" />
//         Book Now
//       </button>
//     </div>
//   </div>
// </div>
//                           );
//                         })}
//                       </div>

//                       <button onClick={() => scrollPackages("prev")} disabled={isTransitioning} className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed">
//                         <ChevronLeft className="w-7 h-7" />
//                       </button>
//                       <button onClick={() => scrollPackages("next")} disabled={isTransitioning} className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white/30 disabled:opacity-50 disabled:cursor-not-allowed">
//                         <ChevronRight className="w-7 h-7" />
//                       </button>
//                     </div>

//                     {/* Dots Indicator */}
//                     <div className="flex justify-center gap-3 mt-12">
//                       {packages.map((_, index) => (
//                         <button
//                           key={index}
//                           onClick={() => {
//                             if (!isTransitioning) {
//                               setIsTransitioning(true);
//                               setCurrentPackageIndex(index);
//                               setTimeout(() => setIsTransitioning(false), 700);
//                             }
//                           }}
//                           className={`transition-all duration-300 rounded-full ${
//                             index === currentPackageIndex
//                               ? "w-12 h-3 bg-gradient-to-r from-cyan-600 to-blue-600"
//                               : "w-3 h-3 bg-gray-300 hover:bg-cyan-400"
//                           }`}
//                         />
//                       ))}
//                     </div>

//                     {/* Bottom Stats */}
//                     <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
//                       {[
//                         { icon: Mountain, value: `${packages.length}+`, label: "Premium Packages", gradient: "from-cyan-600 to-blue-600" },
//                         { icon: Users, value: "500+", label: "Happy Travelers", gradient: "from-blue-600 to-indigo-600" },
//                         { icon: Star, value: "4.7★", label: "Average Rating", gradient: "from-indigo-600 to-purple-600" },
//                       ].map((stat, i) => {
//                         const StatIcon = stat.icon;
//                         return (
//                           <div
//                             key={i}
//                             className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-cyan-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
//                           >
//                             <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
//                               <StatIcon className="w-8 h-8 text-white" />
//                             </div>
//                             <h3 className={`text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
//                               {stat.value}
//                             </h3>
//                             <p className="text-gray-700 font-medium tracking-wide">{stat.label}</p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TravelBookingPage;
