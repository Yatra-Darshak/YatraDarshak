import {
  ArrowLeftRight,
  Calendar,
  MapPin,
  Info,
  Shield,
  Star,
  Phone,
  CheckCircle,
  Clock,
  Users,
  Wifi,
  Coffee,
  Tv,
  Snowflake,
  ChevronRight,
  Filter,
  SortAsc,
  Zap,
  Award,
  TrendingUp,
  X,
} from "lucide-react";
import React, { useState } from "react";

const locations = {
  "Delhi": ["Delhi"],
  "Himachal Pradesh": ["Manali", "Shimla", "Kullu", "Dharamshala", "Khajjiar", "Dalhousie"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Mount Abu"],
  "Uttarakhand": ["Rishikesh", "Nainital", "Mussoorie", "Haridwar", "Auli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Lonavala", "Mahabaleshwar", "Ajanta and Ellora Caves"],
  "Karnataka": ["Bangalore", "Mysore", "Hampi", "Coorg", "Gokarna"],
  "Kerala": ["Kochi", "Munnar", "Alleppey", "Wayanad", "Varkala", "Kumarakom"],
  "Tamil Nadu": ["Chennai", "Ooty", "Kodaikanal", "Rameswaram", "Kanyakumari"],
  "Goa": ["North Goa", "South Goa"],
  "Jammu and Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Vaishno Devi", "Kashmir Valley"],
  "Sikkim": ["Gangtok", "Lachung", "Pelling", "Zuluk"],
  "Meghalaya": ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
  "Arunachal Pradesh": ["Tawang", "Ziro", "Bomdila"],
  "West Bengal": ["Darjeeling", "Kolkata", "Sundarbans", "Kalimpong"],
  "Gujarat": ["Kutch", "Ahmedabad", "Gir", "Somnath", "Dwarka"],
  "Andaman and Nicobar Islands": ["Port Blair", "Havelock Island", "Neil Island"],
  "Ladakh": ["Leh", "Nubra Valley", "Pangong Lake"],
  "Punjab": ["Amritsar", "Chandigarh"],
  "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Mathura"],
  "Madhya Pradesh": ["Khajuraho", "Bhopal", "Indore", "Pachmarhi"],
  "Odisha": ["Puri", "Bhubaneswar", "Konark"],
  "Assam": ["Guwahati", "Kaziranga", "Majuli"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Andhra Pradesh": ["Vishakhapatnam", "Tirupati"],
  "Chhattisgarh": ["Raipur", "Jagdalpur"],
  "Bihar": ["Patna", "Bodh Gaya"],
  "Jharkhand": ["Ranchi", "Jamshedpur"],
  "Manipur": ["Imphal"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Tripura": ["Agartala"],
  "Lakshadweep": ["Kavaratti", "Agatti Island"],
};

// Mock bus data
const mockBuses = [
  {
    id: 1,
    name: "Volvo Multi-Axle Semi Sleeper",
    operator: "RedBus Express",
    type: "AC Semi Sleeper",
    departureTime: "22:30",
    arrivalTime: "08:45",
    duration: "10h 15m",
    price: 1299,
    originalPrice: 1599,
    seatsAvailable: 12,
    rating: 4.5,
    reviews: 328,
    amenities: ["wifi", "charging", "blanket", "water"],
    boardingPoints: ["Kashmere Gate", "Majnu Ka Tilla", "ISBT"],
    droppingPoints: ["Mall Road", "Old Manali", "Manali Bus Stand"],
    badge: "Popular",
    features: ["Live Tracking", "Free Cancellation"]
  },
  {
    id: 2,
    name: "Scania Multi-Axle Sleeper",
    operator: "IntrCity SmartBus",
    type: "AC Sleeper",
    departureTime: "20:00",
    arrivalTime: "07:30",
    duration: "11h 30m",
    price: 1599,
    originalPrice: 1899,
    seatsAvailable: 8,
    rating: 4.7,
    reviews: 512,
    amenities: ["wifi", "charging", "blanket", "water", "snacks", "tv"],
    boardingPoints: ["RK Ashram", "Kashmere Gate"],
    droppingPoints: ["Manali Bus Stand", "Vashisht"],
    badge: "Highest Rated",
    features: ["Premium Service", "Extra Legroom"]
  },
  {
    id: 3,
    name: "Mercedes-Benz Multi-Axle",
    operator: "Himalayan Roadways",
    type: "AC Seater",
    departureTime: "06:00",
    arrivalTime: "18:30",
    duration: "12h 30m",
    price: 899,
    originalPrice: 1099,
    seatsAvailable: 25,
    rating: 4.2,
    reviews: 156,
    amenities: ["charging", "water"],
    boardingPoints: ["ISBT Kashmere Gate", "Majnu Ka Tilla"],
    droppingPoints: ["Mall Road", "Manali Bus Stand"],
    badge: "Best Value",
    features: ["Budget Friendly"]
  },
  {
    id: 4,
    name: "Premium Luxury Sleeper",
    operator: "VRL Travels",
    type: "AC Sleeper",
    departureTime: "21:00",
    arrivalTime: "08:00",
    duration: "11h 00m",
    price: 1799,
    originalPrice: 2199,
    seatsAvailable: 5,
    rating: 4.8,
    reviews: 892,
    amenities: ["wifi", "charging", "blanket", "water", "snacks", "tv"],
    boardingPoints: ["Kashmere Gate", "Connaught Place"],
    droppingPoints: ["Mall Road", "Old Manali"],
    badge: "Luxury",
    features: ["Premium Comfort", "Complimentary Meals"]
  },
];

const BusBookingPage = () => {
  const [fromState, setFromState] = useState("Delhi");
  const [fromCity, setFromCity] = useState("Delhi");
  const [toState, setToState] = useState("Himachal Pradesh");
  const [toCity, setToCity] = useState("Manali");
  const [selectedDate, setSelectedDate] = useState("2025-11-27");
  const [showResults, setShowResults] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [sortBy, setSortBy] = useState("departure");
  const [filterType, setFilterType] = useState("all");

  const swapCities = () => {
    const tempState = fromState;
    const tempCity = fromCity;
    setFromState(toState);
    setFromCity(toCity);
    setToState(tempState);
    setToCity(tempCity);
  };

  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const handleSearch = () => {
    if (!fromCity || !toCity) {
      alert("Please select both departure and destination cities");
      return;
    }
    setShowResults(true);
    setSelectedBus(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "charging": return <Zap className="w-4 h-4" />;
      case "blanket": return <Snowflake className="w-4 h-4" />;
      case "water": return <Coffee className="w-4 h-4" />;
      case "snacks": return <Coffee className="w-4 h-4" />;
      case "tv": return <Tv className="w-4 h-4" />;
      default: return null;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Popular": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Highest Rated": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Best Value": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Luxury": return "bg-gradient-to-r from-purple-500 to-pink-500";
      default: return "bg-gray-500";
    }
  };

  const filteredAndSortedBuses = [...mockBuses]
    .filter(bus => {
      if (filterType === "all") return true;
      if (filterType === "sleeper") return bus.type.includes("Sleeper");
      if (filterType === "seater") return bus.type.includes("Seater");
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "departure") return a.departureTime.localeCompare(b.departureTime);
      if (sortBy === "duration") return a.duration.localeCompare(b.duration);
      return 0;
    });

  if (!showResults) {
    // Main Search Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Find Your Perfect Bus
            </h1>
            <p className="text-xl text-gray-600">Search, Compare & Book Bus Tickets at Best Prices</p>
          </div>

          {/* Main Search Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex flex-wrap">
                {/* From */}
                <div className="flex-1 min-w-[300px] p-6 border-r border-b border-gray-200 hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 transition-all duration-300 group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors">
                    From
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <select
                        value={fromState}
                        onChange={(e) => {
                          setFromState(e.target.value);
                          setFromCity("");
                        }}
                        className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                      >
                        {Object.keys(locations).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <select
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full text-sm text-gray-500 border-none outline-none bg-transparent cursor-pointer"
                      >
                        <option value="">Select City</option>
                        {locations[fromState]?.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="absolute left-1/3 top-[90px] -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
                  <button
                    onClick={swapCities}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 border-4 border-white text-white hover:from-red-600 hover:to-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                  >
                    <ArrowLeftRight className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                </div>

                {/* To */}
                <div className="flex-1 min-w-[300px] p-6 border-b border-gray-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-hover:text-green-600 transition-colors">
                    To
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <select
                        value={toState}
                        onChange={(e) => {
                          setToState(e.target.value);
                          setToCity("");
                        }}
                        className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                      >
                        {Object.keys(locations).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <select
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full text-sm text-gray-500 border-none outline-none bg-transparent cursor-pointer"
                      >
                        <option value="">Select City</option>
                        {locations[toState]?.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date of Journey */}
                <div className="flex-1 min-w-[250px] p-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-hover:text-blue-600 transition-colors">
                    Date of Journey
                  </label>
                  <div className="relative">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors inline-block">
                      <Calendar className="text-blue-600 w-6 h-6" />
                    </div>
                    <div className="mt-2">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full text-2xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                      />
                      <div className="text-sm text-gray-500 mt-1 font-medium">{getDayOfWeek(selectedDate)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                className="w-full py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white text-2xl font-bold transition-all duration-300 rounded-b-2xl shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 group"
                onClick={handleSearch}
              >
                <span>SEARCH BUSES</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Why Book With Us */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
              Why Book With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  100% secure payment with trusted gateways
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-200">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Best Price Guarantee</h3>
                <p className="text-sm text-gray-600">
                  Lowest prices or we refund the difference
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Customer support available anytime, anywhere
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">
                  Get booking confirmation immediately
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div className="text-center border-l border-r border-blue-400">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Bus Operators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Routes Covered</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Compact Search Bar at Top */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                <MapPin className="w-5 h-5 text-red-500" />
                <div>
                  <select
                    value={fromState}
                    onChange={(e) => {
                      setFromState(e.target.value);
                      setFromCity("");
                    }}
                    className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  >
                    {Object.keys(locations).map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="text-xs text-gray-500 border-none outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">Select City</option>
                    {locations[fromState]?.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button onClick={swapCities} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeftRight className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex items-center gap-2 flex-1 min-w-[180px]">
                <MapPin className="w-5 h-5 text-green-500" />
                <div>
                  <select
                    value={toState}
                    onChange={(e) => {
                      setToState(e.target.value);
                      setToCity("");
                    }}
                    className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  >
                    {Object.keys(locations).map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="text-xs text-gray-500 border-none outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">Select City</option>
                    {locations[toState]?.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
              </div>

              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                MODIFY
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between border-2 border-gray-100">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-bold text-gray-700">Filter:</span>
            <button
              onClick={() => setFilterType("all")}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterType === "all" ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("sleeper")}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterType === "sleeper" ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Sleeper
            </button>
            <button
              onClick={() => setFilterType("seater")}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterType === "seater" ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Seater
            </button>
          </div>
          <div className="flex items-center gap-3">
            <SortAsc className="w-5 h-5 text-gray-600" />
            <span className="font-bold text-gray-700">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-gray-100 border-none outline-none text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <option value="departure">Departure</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
          <h2 className="text-3xl font-bold mb-2">
            {filteredAndSortedBuses.length} Buses Found
          </h2>
          <p className="text-blue-100 text-lg">
            {fromCity} → {toCity} • {getDayOfWeek(selectedDate)}, {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Bus List */}
        <div className="space-y-6">
          {filteredAndSortedBuses.map((bus) => (
            <div key={bus.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
              {/* Badge */}
              {bus.badge && (
                <div className={`${getBadgeColor(bus.badge)} text-white px-4 py-1 text-xs font-bold flex items-center gap-2 w-fit rounded-br-2xl`}>
                  <Award className="w-3 h-3" />
                  {bus.badge}
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-wrap gap-6 items-center">
                  {/* Bus Info  */}
                  <div className="flex-1 min-w-[280px]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{bus.name}</h3>
                        <p className="text-sm text-gray-600">{bus.operator}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-gray-800">{bus.rating}</span>
                        <span className="text-xs text-gray-600">({bus.reviews})</span>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg">
                      {bus.type}
                    </div>
                  </div>

                  {/* Time Info */}
                  <div className="flex items-center gap-6 flex-1 min-w-[300px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{bus.departureTime}</div>
                      <div className="text-sm text-gray-500">{fromCity}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <Clock className="w-5 h-5 text-gray-400 mb-1" />
                      <div className="text-sm font-semibold text-gray-600">{bus.duration}</div>
                      <div className="w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 mt-2"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{bus.arrivalTime}</div>
                      <div className="text-sm text-gray-500">{toCity}</div>
                    </div>
                  </div>

                  {/* Price Info */}
                  <div className="text-right min-w-[180px]">
                    <div className="mb-2">
                      <div className="text-sm text-gray-400 line-through">₹{bus.originalPrice}</div>
                      <div className="text-3xl font-bold text-gray-800">₹{bus.price}</div>
                      <div className="text-xs text-green-600 font-semibold">
                        Save ₹{bus.originalPrice - bus.price}
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-sm text-gray-600 mb-3">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{bus.seatsAvailable} seats left</span>
                    </div>
                    <button
                      onClick={() => setSelectedBus(selectedBus === bus.id ? null : bus.id)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {selectedBus === bus.id ? 'HIDE DETAILS' : 'VIEW SEATS'}
                    </button>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {bus.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                          {getAmenityIcon(amenity)}
                          <span className="text-sm capitalize">{amenity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 ml-auto flex-wrap">
                      {bus.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedBus === bus.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Boarding Points */}
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-100">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-red-600" />
                          Boarding Points
                        </h4>
                        <div className="space-y-2">
                          {bus.boardingPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dropping Points */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-100">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-green-600" />
                          Dropping Points
                        </h4>
                        <div className="space-y-2">
                          {bus.droppingPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Policies */}
                    <div className="mt-5 bg-blue-50 rounded-xl p-5 border-2 border-blue-100">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        Policies & Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Cancellation allowed up to 2 hours before departure</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Partial cancellation allowed</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Live bus tracking available</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>COVID-19 safety measures in place</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <div className="mt-5 flex justify-end">
                      <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                        <span>PROCEED TO BOOK</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Search Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowResults(false)}
            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200"
          >
            ← Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusBookingPage;

// import {
//   ArrowLeftRight,
//   Calendar,
//   MapPin,
//   Info,
//   Shield,
//   Star,
//   Phone,
//   CheckCircle,
//   Clock,
//   Users,
//   Wifi,
//   Coffee,
//   Tv,
//   Snowflake,
//   ChevronRight,
//   Filter,
//   SortAsc,
//   AlertCircle,
// } from "lucide-react";
// import React, { useState } from "react";

// const locations = {
//   "Delhi": ["Delhi"],
//   "Himachal Pradesh": ["Manali", "Shimla", "Kullu", "Dharamshala", "Khajjiar", "Dalhousie"],
//   "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Mount Abu"],
//   "Uttarakhand": ["Rishikesh", "Nainital", "Mussoorie", "Haridwar", "Auli"],
//   "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Lonavala", "Mahabaleshwar", "Ajanta and Ellora Caves"],
//   "Karnataka": ["Bangalore", "Mysore", "Hampi", "Coorg", "Gokarna"],
//   "Kerala": ["Kochi", "Munnar", "Alleppey", "Wayanad", "Varkala", "Kumarakom"],
//   "Tamil Nadu": ["Chennai", "Ooty", "Kodaikanal", "Rameswaram", "Kanyakumari"],
//   "Goa": ["North Goa", "South Goa"],
//   "Jammu and Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Vaishno Devi", "Kashmir Valley"],
//   "Sikkim": ["Gangtok", "Lachung", "Pelling", "Zuluk"],
//   "Meghalaya": ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
//   "Arunachal Pradesh": ["Tawang", "Ziro", "Bomdila"],
//   "West Bengal": ["Darjeeling", "Kolkata", "Sundarbans", "Kalimpong"],
//   "Gujarat": ["Kutch", "Ahmedabad", "Gir", "Somnath", "Dwarka"],
//   "Andaman and Nicobar Islands": ["Port Blair", "Havelock Island", "Neil Island"],
//   "Ladakh": ["Leh", "Nubra Valley", "Pangong Lake"],
//   "Punjab": ["Amritsar", "Chandigarh"],
//   "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Mathura"],
//   "Madhya Pradesh": ["Khajuraho", "Bhopal", "Indore", "Pachmarhi"],
//   "Odisha": ["Puri", "Bhubaneswar", "Konark"],
//   "Assam": ["Guwahati", "Kaziranga", "Majuli"],
//   "Telangana": ["Hyderabad", "Warangal"],
//   "Andhra Pradesh": ["Vishakhapatnam", "Tirupati"],
//   "Chhattisgarh": ["Raipur", "Jagdalpur"],
//   "Bihar": ["Patna", "Bodh Gaya"],
//   "Jharkhand": ["Ranchi", "Jamshedpur"],
//   "Manipur": ["Imphal"],
//   "Mizoram": ["Aizawl"],
//   "Nagaland": ["Kohima"],
//   "Tripura": ["Agartala"],
//   "Lakshadweep": ["Kavaratti", "Agatti Island"],
// };

// // Mock bus data
// const mockBuses = [
//   {
//     id: 1,
//     name: "Volvo Multi-Axle Semi Sleeper",
//     operator: "RedBus Express",
//     type: "AC Semi Sleeper",
//     departureTime: "22:30",
//     arrivalTime: "08:45",
//     duration: "10h 15m",
//     price: 1299,
//     seatsAvailable: 12,
//     rating: 4.5,
//     reviews: 328,
//     amenities: ["wifi", "charging", "blanket", "water"],
//     boardingPoints: ["Kashmere Gate", "Majnu Ka Tilla", "ISBT"],
//     droppingPoints: ["Mall Road", "Old Manali", "Manali Bus Stand"],
//   },
//   {
//     id: 2,
//     name: "Scania Multi-Axle Sleeper",
//     operator: "IntrCity SmartBus",
//     type: "AC Sleeper",
//     departureTime: "20:00",
//     arrivalTime: "07:30",
//     duration: "11h 30m",
//     price: 1599,
//     seatsAvailable: 8,
//     rating: 4.7,
//     reviews: 512,
//     amenities: ["wifi", "charging", "blanket", "water", "snacks", "tv"],
//     boardingPoints: ["RK Ashram", "Kashmere Gate"],
//     droppingPoints: ["Manali Bus Stand", "Vashisht"],
//   },
//   {
//     id: 3,
//     name: "Mercedes-Benz Multi-Axle",
//     operator: "Himalayan Roadways",
//     type: "AC Seater",
//     departureTime: "06:00",
//     arrivalTime: "18:30",
//     duration: "12h 30m",
//     price: 899,
//     seatsAvailable: 25,
//     rating: 4.2,
//     reviews: 156,
//     amenities: ["charging", "water"],
//     boardingPoints: ["ISBT Kashmere Gate", "Majnu Ka Tilla"],
//     droppingPoints: ["Mall Road", "Manali Bus Stand"],
//   },
//   {
//     id: 4,
//     name: "Premium Luxury Sleeper",
//     operator: "VRL Travels",
//     type: "AC Sleeper",
//     departureTime: "21:00",
//     arrivalTime: "08:00",
//     duration: "11h 00m",
//     price: 1799,
//     seatsAvailable: 5,
//     rating: 4.8,
//     reviews: 892,
//     amenities: ["wifi", "charging", "blanket", "water", "snacks", "tv"],
//     boardingPoints: ["Kashmere Gate", "Connaught Place"],
//     droppingPoints: ["Mall Road", "Old Manali"],
//   },
// ];

// const BusBookingPage = () => {
//   const [fromState, setFromState] = useState("Delhi");
//   const [fromCity, setFromCity] = useState("Delhi");
//   const [toState, setToState] = useState("Himachal Pradesh");
//   const [toCity, setToCity] = useState("Manali");
//   const [selectedDate, setSelectedDate] = useState("2025-11-27");
//   const [showResults, setShowResults] = useState(false);
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [sortBy, setSortBy] = useState("departure");
//   const [filterType, setFilterType] = useState("all");

//   const swapCities = () => {
//     const tempState = fromState;
//     const tempCity = fromCity;
//     setFromState(toState);
//     setFromCity(toCity);
//     setToState(tempState);
//     setToCity(tempCity);
//   };

//   const getDayOfWeek = (dateString) => {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const date = new Date(dateString);
//     return days[date.getDay()];
//   };

//   const handleSearch = () => {
//     if (!fromCity || !toCity) {
//       alert("Please select both departure and destination cities");
//       return;
//     }
//     setShowResults(true);
//     setSelectedBus(null);
//   };

//   const getAmenityIcon = (amenity) => {
//     switch (amenity) {
//       case "wifi": return <Wifi className="w-4 h-4" />;
//       case "charging": return <AlertCircle className="w-4 h-4" />;
//       case "blanket": return <Snowflake className="w-4 h-4" />;
//       case "water": return <Coffee className="w-4 h-4" />;
//       case "snacks": return <Coffee className="w-4 h-4" />;
//       case "tv": return <Tv className="w-4 h-4" />;
//       default: return null;
//     }
//   };

//   const filteredAndSortedBuses = [...mockBuses]
//     .filter(bus => {
//       if (filterType === "all") return true;
//       if (filterType === "sleeper") return bus.type.includes("Sleeper");
//       if (filterType === "seater") return bus.type.includes("Seater");
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === "price") return a.price - b.price;
//       if (sortBy === "rating") return b.rating - a.rating;
//       if (sortBy === "departure") return a.departureTime.localeCompare(b.departureTime);
//       if (sortBy === "duration") return a.duration.localeCompare(b.duration);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto p-4 md:p-8">
//         {/* Search Form - Compact when results shown */}
//         <div className={`bg-white rounded-2xl transition-all duration-500 ${showResults ? 'p-4 shadow-md' : 'p-8 shadow-xl'}`}>
//           <div className="relative bg-white rounded-2xl border border-gray-200">
//             <div className={`flex ${showResults ? 'flex-row flex-wrap' : 'flex-wrap'}`}>
//               {/* From */}
//               <div className={`flex-1 ${showResults ? 'min-w-[200px] p-3' : 'min-w-[300px] p-6'} border-r border-b border-gray-200 hover:bg-red-50/30 transition-colors`}>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                   From
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <MapPin className={`${showResults ? 'w-4 h-4' : 'w-6 h-6'} text-red-500`} />
//                   <div className="flex-1">
//                     <select
//                       value={fromState}
//                       onChange={(e) => {
//                         setFromState(e.target.value);
//                         setFromCity("");
//                       }}
//                       className={`w-full ${showResults ? 'text-base' : 'text-xl'} font-bold text-gray-800 border-none outline-none bg-transparent`}
//                     >
//                       {Object.keys(locations).map((state) => (
//                         <option key={state} value={state}>
//                           {state}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       value={fromCity}
//                       onChange={(e) => setFromCity(e.target.value)}
//                       className="w-full text-sm text-gray-500 border-none outline-none bg-transparent"
//                     >
//                       <option value="">Select City</option>
//                       {locations[fromState]?.map((city) => (
//                         <option key={city} value={city}>
//                           {city}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Swap Button */}
//               {!showResults && (
//                 <div className="absolute left-1/3 top-[72px] -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
//                   <button
//                     onClick={swapCities}
//                     className="w-12 h-12 rounded-full bg-white border-4 border-red-500 text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
//                   >
//                     <ArrowLeftRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}

//               {/* To */}
//               <div className={`flex-1 ${showResults ? 'min-w-[200px] p-3' : 'min-w-[300px] p-6'} border-b border-gray-200 hover:bg-red-50/30 transition-colors`}>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                   To
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <MapPin className={`${showResults ? 'w-4 h-4' : 'w-6 h-6'} text-red-500`} />
//                   <div className="flex-1">
//                     <select
//                       value={toState}
//                       onChange={(e) => {
//                         setToState(e.target.value);
//                         setToCity("");
//                       }}
//                       className={`w-full ${showResults ? 'text-base' : 'text-xl'} font-bold text-gray-800 border-none outline-none bg-transparent`}
//                     >
//                       {Object.keys(locations).map((state) => (
//                         <option key={state} value={state}>
//                           {state}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       value={toCity}
//                       onChange={(e) => setToCity(e.target.value)}
//                       className="w-full text-sm text-gray-500 border-none outline-none bg-transparent"
//                     >
//                       <option value="">Select City</option>
//                       {locations[toState]?.map((city) => (
//                         <option key={city} value={city}>
//                           {city}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Date of Journey */}
//               <div className={`flex-1 ${showResults ? 'min-w-[180px] p-3' : 'min-w-[250px] p-6'} hover:bg-red-50/30 transition-colors`}>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                   Date of Journey
//                 </label>
//                 <div className="relative">
//                   <Calendar className={`absolute left-0 top-1 text-red-500 ${showResults ? 'w-4 h-4' : 'w-6 h-6'}`} />
//                   <div className={`${showResults ? 'pl-6' : 'pl-8'}`}>
//                     <input
//                       type="date"
//                       value={selectedDate}
//                       onChange={(e) => setSelectedDate(e.target.value)}
//                       className={`w-full ${showResults ? 'text-base' : 'text-2xl'} font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer`}
//                     />
//                     <div className="text-sm text-gray-500 mt-1">{getDayOfWeek(selectedDate)}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Search Button */}
//             <button
//               className={`w-full ${showResults ? 'py-3 text-base' : 'py-5 text-xl'} bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold transition-all duration-300 rounded-b-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
//               onClick={handleSearch}
//             >
//               {showResults ? 'MODIFY SEARCH' : 'SEARCH BUSES'}
//             </button>
//           </div>
//         </div>

//         {/* Results Section */}
//         {showResults && (
//           <div className="mt-6">
//             {/* Filter and Sort Bar */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex flex-wrap gap-4 items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Filter className="w-5 h-5 text-gray-600" />
//                 <span className="font-semibold text-gray-700">Filter:</span>
//                 <button
//                   onClick={() => setFilterType("all")}
//                   className={`px-4 py-2 rounded-lg transition-colors ${filterType === "all" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
//                 >
//                   All
//                 </button>
//                 <button
//                   onClick={() => setFilterType("sleeper")}
//                   className={`px-4 py-2 rounded-lg transition-colors ${filterType === "sleeper" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
//                 >
//                   Sleeper
//                 </button>
//                 <button
//                   onClick={() => setFilterType("seater")}
//                   className={`px-4 py-2 rounded-lg transition-colors ${filterType === "seater" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
//                 >
//                   Seater
//                 </button>
//               </div>
//               <div className="flex items-center gap-2">
//                 <SortAsc className="w-5 h-5 text-gray-600" />
//                 <span className="font-semibold text-gray-700">Sort by:</span>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="px-4 py-2 rounded-lg bg-gray-100 border-none outline-none text-gray-700 font-medium"
//                 >
//                   <option value="departure">Departure</option>
//                   <option value="price">Price</option>
//                   <option value="rating">Rating</option>
//                   <option value="duration">Duration</option>
//                 </select>
//               </div>
//             </div>

//             {/* Results Header */}
//             <div className="bg-white rounded-xl shadow-md p-4 mb-4">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 {filteredAndSortedBuses.length} buses found from {fromCity} to {toCity}
//               </h2>
//               <p className="text-gray-600 mt-1">
//                 {getDayOfWeek(selectedDate)}, {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//               </p>
//             </div>

//             {/* Bus List */}
//             <div className="space-y-4">
//               {filteredAndSortedBuses.map((bus) => (
//                 <div key={bus.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//                   <div className="p-6">
//                     <div className="flex flex-wrap gap-6 items-start">
//                       {/* Bus Info */}
//                       <div className="flex-1 min-w-[250px]">
//                         <h3 className="text-xl font-bold text-gray-800 mb-1">{bus.name}</h3>
//                         <p className="text-gray-600 text-sm mb-2">{bus.operator}</p>
//                         <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
//                           {bus.type}
//                         </span>
//                         <div className="flex items-center gap-2 mt-3">
//                           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                           <span className="font-bold text-gray-800">{bus.rating}</span>
//                           <span className="text-sm text-gray-500">({bus.reviews} reviews)</span>
//                         </div>
//                       </div>

//                       {/* Time Info */}
//                       <div className="flex items-center gap-6">
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-gray-800">{bus.departureTime}</div>
//                           <div className="text-sm text-gray-600">{fromCity}</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-sm text-gray-600 mb-1">{bus.duration}</div>
//                           <div className="w-24 h-0.5 bg-gray-300 relative">
//                             <ChevronRight className="w-4 h-4 text-gray-400 absolute -right-2 -top-2" />
//                           </div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-gray-800">{bus.arrivalTime}</div>
//                           <div className="text-sm text-gray-600">{toCity}</div>
//                         </div>
//                       </div>

//                       {/* Price and Book */}
//                       <div className="text-right">
//                         <div className="text-3xl font-bold text-gray-800 mb-1">₹{bus.price}</div>
//                         <div className="text-sm text-green-600 mb-3 flex items-center justify-end gap-1">
//                           <Users className="w-4 h-4" />
//                           {bus.seatsAvailable} seats left
//                         </div>
//                         <button
//                           onClick={() => setSelectedBus(selectedBus === bus.id ? null : bus.id)}
//                           className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
//                         >
//                           {selectedBus === bus.id ? 'Hide Details' : 'View Seats'}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Amenities */}
//                     <div className="mt-4 pt-4 border-t border-gray-200">
//                       <div className="flex items-center gap-4 flex-wrap">
//                         <span className="text-sm font-semibold text-gray-600">Amenities:</span>
//                         <div className="flex gap-3">
//                           {bus.amenities.map((amenity, idx) => (
//                             <div key={idx} className="flex items-center gap-1 text-gray-600" title={amenity}>
//                               {getAmenityIcon(amenity)}
//                               <span className="text-xs capitalize">{amenity}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Expanded Details */}
//                     {selectedBus === bus.id && (
//                       <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
//                         <div className="grid md:grid-cols-2 gap-6">
//                           {/* Boarding Points */}
//                           <div>
//                             <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
//                               <MapPin className="w-5 h-5 text-green-600" />
//                               Boarding Points
//                             </h4>
//                             <div className="space-y-2">
//                               {bus.boardingPoints.map((point, idx) => (
//                                 <div key={idx} className="p-3 bg-green-50 rounded-lg">
//                                   <div className="font-medium text-gray-800">{point}</div>
//                                   <div className="text-sm text-gray-600">{bus.departureTime}</div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Dropping Points */}
//                           <div>
//                             <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
//                               <MapPin className="w-5 h-5 text-red-600" />
//                               Dropping Points
//                             </h4>
//                             <div className="space-y-2">
//                               {bus.droppingPoints.map((point, idx) => (
//                                 <div key={idx} className="p-3 bg-red-50 rounded-lg">
//                                   <div className="font-medium text-gray-800">{point}</div>
//                                   <div className="text-sm text-gray-600">{bus.arrivalTime}</div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>

//                         {/* Book Now Button */}
//                         <div className="mt-6 text-center">
//                           <button
//                             onClick={() => alert(`Booking ${bus.name} from ${fromCity} to ${toCity}`)}
//                             className="px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-xl"
//                           >
//                             Proceed to Book
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Why Book With Us - Show only when no results */}
//         {!showResults && (
//           <div className="mt-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//               Why Book With Us?
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Shield className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
//                 <p className="text-sm text-gray-600">
//                   100% secure payment with trusted gateways
//                 </p>
//               </div>
//               <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Star className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
//                 <p className="text-sm text-gray-600">
//                   Lowest prices or we refund the difference
//                 </p>
//               </div>
//               <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Phone className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
//                 <p className="text-sm text-gray-600">
//                   Customer support available anytime, anywhere
//                 </p>
//               </div>
//               <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CheckCircle className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Instant Confirmation</h3>
//                 <p className="text-sm text-gray-600">
//                   Get booking confirmation immediately
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Important Information - Show when results are shown */}
//         {showResults && (
//           <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
//             <div className="flex items-start gap-3">
//               <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-blue-900">
//                 <p className="font-semibold mb-1">Important Information</p>
//                 <ul className="list-disc list-inside space-y-1 text-blue-800">
//                   <li>Please arrive at the boarding point 15 minutes before departure</li>
//                   <li>Carry a valid ID proof for verification</li>
//                   <li>Partial cancellations are not allowed for bus bookings</li>
//                   <li>Cancellation charges apply as per operator policy</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusBookingPage;