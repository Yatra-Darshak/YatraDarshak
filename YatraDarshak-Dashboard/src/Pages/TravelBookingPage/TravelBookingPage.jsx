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
} from "lucide-react";
import React, { useState, useEffect } from "react";

// ------------------- useParticles Hook -------------------
const useParticles = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const initParticles = () => {
      const p = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.7,
      }));
      setParticles(p);
    };
    initParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { particles, mousePosition, scrollY };
};

// ------------------- AnimatedBackground -------------------
const AnimatedBackground = ({ particles, mousePosition, scrollY }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{
          left: p.x,
          top: p.y,
          width: p.size,
          height: p.size,
          opacity: p.opacity,
          animation: `pulse ${2 + Math.random() * 3}s infinite`,
        }}
      />
    ))}
    <div
      className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"
      style={{
        transform: `translate(${mousePosition.x * 30}px, ${
          mousePosition.y * 30
        }px)`,
      }}
    />
    <div
      className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/15 to-cyan-100/15 rounded-full blur-3xl animate-spin"
      style={{
        animationDuration: "50s",
        transform: `translate(-50%, -50%) rotate(${scrollY * 0.02}deg)`,
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-teal-100/10 to-blue-100/10 rounded-full blur-2xl"
      style={{
        transform: `translate(-50%, -50%) translate(${
          mousePosition.x * -20
        }px, ${mousePosition.y * -20}px)`,
      }}
    />
  </div>
);

const TravelBookingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneWay");

  const { particles, mousePosition, scrollY } = useParticles();

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Building },
    { id: "holidays", label: "Holidays", icon: Palmtree },
    { id: "trains", label: "Trains", icon: Train },
    { id: "buses", label: "Buses", icon: Bus },
    { id: "cabs", label: "Cabs", icon: Users },
    { id: "insurance", label: "Travel Insurance", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden relative">
      {/* Animated Background */}
      <AnimatedBackground
        particles={particles}
        mousePosition={mousePosition}
        scrollY={scrollY}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Background Section */}
        <div className="relative">
          <div className="absolute inset-0"></div>
          <div className="min-h-[80vh] bg-cover bg-center bg-no-repeat relative">
            <div className="relative z-10 px-6 py-12">
              <div className="max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="text-center mb-16 relative">
                  <div className="relative max-w-2xl mx-auto shadow-lg shadow-[#B2DDED] rounded-full">
                    {/* Search Icon */}
                    <Search className="absolute left-4 top-1/2 z-50 transform -translate-y-1/2 w-5 h-5 text-teal-600" />
                    <input
                      type="text"
                      placeholder="Namaste! Plan Your Trips With Me..."
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-white transition-all duration-300 shadow-lg"
                    />
                  </div>

                  {/* Robot/Bot Image positioned at bottom right corner of search bar */}
                  <div className="absolute right-15 bottom-0 transform translate-y-1/2">
                    <div className="w-25 h-25 rounded-full shadow-2xl shadow-[#B2DDED] flex items-center justify-center overflow-hidden">
                      <img
                        src="./robot.png"
                        alt="Travel Bot"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50">
                  {/* Service Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeTab === tab.id
                              ? "bg-gradient-to-r from-[#012938] to-[#01153E] text-white shadow-lg transform scale-105"
                              : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Trip Type Selection */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        value="oneWay"
                        checked={tripType === "oneWay"}
                        onChange={(e) => setTripType(e.target.value)}
                        className="text-[#012938] focus:ring-[#012938]"
                      />
                      <span className="text-gray-700 font-medium">One Way</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        value="roundTrip"
                        checked={tripType === "roundTrip"}
                        onChange={(e) => setTripType(e.target.value)}
                        className="text-[#012938] focus:ring-[#012938]"
                      />
                      <span className="text-gray-700 font-medium">
                        Round Trip
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        value="multiCity"
                        checked={tripType === "multiCity"}
                        onChange={(e) => setTripType(e.target.value)}
                        className="text-[#012938] focus:ring-[#012938]"
                      />
                      <span className="text-gray-700 font-medium">
                        Multi City
                      </span>
                    </label>
                  </div>

                  {/* Search Form */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From
                      </label>
                      <input
                        type="text"
                        placeholder="Origin"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent backdrop-blur-sm bg-white/80"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        To
                      </label>
                      <input
                        type="text"
                        placeholder="Destination"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent backdrop-blur-sm bg-white/80"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Departure
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent backdrop-blur-sm bg-white/80"
                      />
                    </div>
                    {tripType === "roundTrip" && (
                      <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Return
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent backdrop-blur-sm bg-white/80"
                        />
                      </div>
                    )}
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travellers and Class
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent backdrop-blur-sm bg-white/80">
                        <option>1 Adult, Economy</option>
                        <option>2 Adults, Economy</option>
                        <option>1 Adult, Business</option>
                      </select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image Section with Tour Categories */}
          <div
            className="min-h-[70vh] bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('./background_YD.jpg')`,
            }}
          >
            {/* Enhanced Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>

            {/* Tour Categories Content */}
            <div className="relative z-20">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
                    style={{ fontFamily: "serif" }}
                  >
                    Tour Categories
                  </h2>
                  <p className="text-xl text-white/95 drop-shadow-lg italic">
                    Wonderful Places For You
                  </p>
                </div>

                {/* Category Grid - Enhanced with better glassmorphism */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {/* Top Row - 4 items */}
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95 hidden md:block"></div>

                  {/* Bottom Row - 4 items */}
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95"></div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl aspect-square shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 border border-white/70 hover:bg-white/95 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelBookingPage;

// import { Menu, X, Search, Plane, Building, Palmtree, Train, Bus, Users, Shield } from "lucide-react";
// import React, { useState } from "react";

// const TravelBookingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('flights');
//   const [tripType, setTripType] = useState('oneWay');

//   const tabs = [
//     { id: 'flights', label: 'Flights', icon: Plane },
//     { id: 'hotels', label: 'Hotels', icon: Building },
//     { id: 'holidays', label: 'Holidays', icon: Palmtree },
//     { id: 'trains', label: 'Trains', icon: Train },
//     { id: 'buses', label: 'Buses', icon: Bus },
//     { id: 'cabs', label: 'Cabs', icon: Users },
//     { id: 'insurance', label: 'Travel Insurance', icon: Shield }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
//       {/* Main Content */}
//       <main className="relative">
//         {/* Hero Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60"></div>
//         <div
//           className="min-h-[80vh] bg-cover bg-center bg-no-repeat relative"

//         >
//           <div className="relative z-10 px-6 py-12">
//             <div className="max-w-4xl mx-auto">
//               {/* Search Bar */}
//               <div className="text-center mb-8">
//                 <div className="relative max-w-2xl mx-auto">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Namaste ! Plan Your Trips With Me......"
//                     className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none focus:border-teal-300 focus:bg-white transition-all duration-300 shadow-lg"
//                   />
//                 </div>
//                 <div className="absolute right-4 top-4">
//                   <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
//                     <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
//                       <Users className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             {/* Booking Form */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//                 {/* Service Tabs */}
//                 <div className="flex flex-wrap justify-center gap-2 mb-8">
//                   {tabs.map((tab) => {
//                     const Icon = tab.icon;
//                     return (
//                       <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
//                           activeTab === tab.id
//                             ? 'bg-gradient-to-r from-[#012938] to-[#01153E] text-white shadow-lg'
//                             : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                         }`}
//                       >
//                         <Icon className="w-4 h-4" />
//                         <span className="text-sm">{tab.label}</span>
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Trip Type Selection */}
//                 <div className="flex flex-wrap gap-4 mb-6">
//                   <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="tripType"
//                       value="oneWay"
//                       checked={tripType === 'oneWay'}
//                       onChange={(e) => setTripType(e.target.value)}
//                       className="text-[#012938] focus:ring-[#012938]"
//                     />
//                     <span className="text-gray-700 font-medium">One Way</span>
//                   </label>
//                   <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="tripType"
//                       value="roundTrip"
//                       checked={tripType === 'roundTrip'}
//                       onChange={(e) => setTripType(e.target.value)}
//                       className="text-[#012938] focus:ring-[#012938]"
//                     />
//                     <span className="text-gray-700 font-medium">Round Trip</span>
//                   </label>
//                   <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="tripType"
//                       value="multiCity"
//                       checked={tripType === 'multiCity'}
//                       onChange={(e) => setTripType(e.target.value)}
//                       className="text-[#012938] focus:ring-[#012938]"
//                     />
//                     <span className="text-gray-700 font-medium">Multi City</span>
//                   </label>
//                 </div>

//                 {/* Search Form */}
//                 <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//                   <div className="md:col-span-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
//                     <input
//                       type="text"
//                       placeholder="Origin"
//                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
//                     <input
//                       type="text"
//                       placeholder="Destination"
//                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
//                     />
//                   </div>
//                   <div className="md:col-span-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
//                     <input
//                       type="date"
//                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
//                     />
//                   </div>
//                   {tripType === 'roundTrip' && (
//                     <div className="md:col-span-1">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
//                       <input
//                         type="date"
//                         className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
//                       />
//                     </div>
//                   )}
//                   <div className="md:col-span-1">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Travellers and Class</label>
//                     <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent">
//                       <option>1 Adult, Economy</option>
//                       <option>2 Adults, Economy</option>
//                       <option>1 Adult, Business</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Search Button */}
//                 <div className="mt-8 text-center">
//                   <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Background Image Section with Tour Categories */}
//         <div
//           className="min-h-[70vh] bg-cover bg-center bg-no-repeat relative"
//           style={{
//             backgroundImage: `url('./background_YD.jpg')`
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>
//           {/* Tour Categories Content */}
//           <div className="relative z-10">
//             <div className="max-w-6xl mx-auto px-6 py-16">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" style={{fontFamily: 'serif'}}>
//                   Tour Categories
//                 </h2>
//                 <p className="text-xl text-white/90 drop-shadow-lg italic">
//                   Wonderful Places For You
//                 </p>
//               </div>

//               {/* Category Grid - Matching the image layout */}
//               <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                 {/* Top Row - 4 items */}
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50 hidden md:block"></div>

//                 {/* Bottom Row - 4 items */}
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50"></div>
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50 hidden md:block"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TravelBookingPage;

// // import {
// //   Menu,
// //   X,
// //   Search,
// //   Plane,
// //   Building,
// //   Palmtree,
// //   Train,
// //   Bus,
// //   Users,
// //   Shield,
// // } from "lucide-react";
// // import React, { useState } from "react";

// // const TravelBookingPage = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("flights");
// //   const [tripType, setTripType] = useState("oneWay");

// //   const tabs = [
// //     { id: "flights", label: "Flights", icon: Plane },
// //     { id: "hotels", label: "Hotels", icon: Building },
// //     { id: "holidays", label: "Holidays", icon: Palmtree },
// //     { id: "trains", label: "Trains", icon: Train },
// //     { id: "buses", label: "Buses", icon: Bus },
// //     { id: "cabs", label: "Cabs", icon: Users },
// //     { id: "insurance", label: "Travel Insurance", icon: Shield },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
// //       {/* Main Content */}
// //       <main className="relative">
// //         {/* Hero Background */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60"></div>
// //         <div
// //           className="min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
// //           style={{
// //             backgroundImage: './background_YD.jpg',
// //           }}
// //         >
// //           <div className="relative z-10 px-6 py-12">
// //             <div className="max-w-4xl mx-auto">
// //               {/* Search Bar */}
// //               <div className="text-center mb-8 relative">
// //                 <div className="relative max-w-2xl mx-auto">
// //                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //                   <input
// //                     type="text"
// //                     placeholder="Namaste ! Plan Your Trips With Me......"
// //                     className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none focus:border-teal-300 focus:bg-white transition-all duration-300 shadow-lg"
// //                   />
// //                 </div>

// //                 {/* Robot/Bot Image positioned at bottom right corner of search bar */}
// //                 <div className="absolute -right-2 bottom-0 transform translate-y-1/2">
// //                   <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
// //                     <img
// //                       src="./robot.png"
// //                       alt="Travel Bot"
// //                       className="w-full h-full object-cover rounded-full"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Booking Form */}
// //               <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50">
// //                 {/* Service Tabs */}
// //                 <div className="flex flex-wrap justify-center gap-2 mb-8">
// //                   {tabs.map((tab) => {
// //                     const Icon = tab.icon;
// //                     return (
// //                       <button
// //                         key={tab.id}
// //                         onClick={() => setActiveTab(tab.id)}
// //                         className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
// //                           activeTab === tab.id
// //                             ? "bg-gradient-to-r from-[#012938] to-[#01153E] text-white shadow-lg"
// //                             : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                         }`}
// //                       >
// //                         <Icon className="w-4 h-4" />
// //                         <span className="text-sm">{tab.label}</span>
// //                       </button>
// //                     );
// //                   })}
// //                 </div>

// //                 {/* Trip Type Selection */}
// //                 <div className="flex flex-wrap gap-4 mb-6">
// //                   <label className="flex items-center space-x-2 cursor-pointer">
// //                     <input
// //                       type="radio"
// //                       name="tripType"
// //                       value="oneWay"
// //                       checked={tripType === "oneWay"}
// //                       onChange={(e) => setTripType(e.target.value)}
// //                       className="text-[#012938] focus:ring-[#012938]"
// //                     />
// //                     <span className="text-gray-700 font-medium">One Way</span>
// //                   </label>
// //                   <label className="flex items-center space-x-2 cursor-pointer">
// //                     <input
// //                       type="radio"
// //                       name="tripType"
// //                       value="roundTrip"
// //                       checked={tripType === "roundTrip"}
// //                       onChange={(e) => setTripType(e.target.value)}
// //                       className="text-[#012938] focus:ring-[#012938]"
// //                     />
// //                     <span className="text-gray-700 font-medium">
// //                       Round Trip
// //                     </span>
// //                   </label>
// //                   <label className="flex items-center space-x-2 cursor-pointer">
// //                     <input
// //                       type="radio"
// //                       name="tripType"
// //                       value="multiCity"
// //                       checked={tripType === "multiCity"}
// //                       onChange={(e) => setTripType(e.target.value)}
// //                       className="text-[#012938] focus:ring-[#012938]"
// //                     />
// //                     <span className="text-gray-700 font-medium">
// //                       Multi City
// //                     </span>
// //                   </label>
// //                 </div>

// //                 {/* Search Form */}
// //                 <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
// //                   <div className="md:col-span-1">
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       From
// //                     </label>
// //                     <input
// //                       type="text"
// //                       placeholder="Origin"
// //                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div className="md:col-span-1">
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       To
// //                     </label>
// //                     <input
// //                       type="text"
// //                       placeholder="Destination"
// //                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div className="md:col-span-1">
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Departure
// //                     </label>
// //                     <input
// //                       type="date"
// //                       className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
// //                     />
// //                   </div>
// //                   {tripType === "roundTrip" && (
// //                     <div className="md:col-span-1">
// //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// //                         Return
// //                       </label>
// //                       <input
// //                         type="date"
// //                         className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent"
// //                       />
// //                     </div>
// //                   )}
// //                   <div className="md:col-span-1">
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Travellers and Class
// //                     </label>
// //                     <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012938] focus:border-transparent">
// //                       <option>1 Adult, Economy</option>
// //                       <option>2 Adults, Economy</option>
// //                       <option>1 Adult, Business</option>
// //                     </select>
// //                   </div>
// //                 </div>

// //                 {/* Search Button */}
// //                 <div className="mt-8 text-center">
// //                   <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
// //                     Search
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Tour Categories Section */}
// //         <div className="relative z-10 -mt-20">
// //           <div className="max-w-6xl mx-auto px-6 py-12">
// //             <div className="text-center mb-12">
// //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
// //                 Tour Categories
// //               </h2>
// //               <p className="text-xl text-white/90 drop-shadow-lg">
// //                 Wonderful Places For You
// //               </p>
// //             </div>

// //             {/* Category Grid */}
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //               {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
// //                 <div key={item} className="group cursor-pointer">
// //                   <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50">
// //                     <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl mb-4 flex items-center justify-center">
// //                       <div className="w-16 h-16 bg-gradient-to-br from-[#012938] to-[#01153E] rounded-xl flex items-center justify-center shadow-lg">
// //                         {index === 0 && (
// //                           <Plane className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 1 && (
// //                           <Building className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 2 && (
// //                           <Palmtree className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 3 && (
// //                           <Train className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 4 && <Bus className="w-8 h-8 text-white" />}
// //                         {index === 5 && (
// //                           <Users className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 6 && (
// //                           <Shield className="w-8 h-8 text-white" />
// //                         )}
// //                         {index === 7 && (
// //                           <Search className="w-8 h-8 text-white" />
// //                         )}
// //                       </div>
// //                     </div>
// //                     <h3 className="text-lg font-semibold text-[#012938] text-center group-hover:text-teal-600 transition-colors duration-300">
// //                       {
// //                         [
// //                           "Adventure Tours",
// //                           "Cultural Tours",
// //                           "Beach Holidays",
// //                           "Mountain Treks",
// //                           "City Breaks",
// //                           "Family Tours",
// //                           "Luxury Travel",
// //                           "Budget Travel",
// //                         ][index]
// //                       }
// //                     </h3>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default TravelBookingPage;
