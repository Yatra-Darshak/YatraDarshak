import {
  ArrowLeftRight,
  Calendar,
  MapPin,
  Clock,
  Info,
  Navigation,
  Shield,
  Star,
  Phone,
  CheckCircle,
  Users,
  Zap,
  Award,
  ChevronRight,
  Filter,
  SortAsc,
  Car,
  Fuel,
  Settings,
  Briefcase,
  X,
} from "lucide-react";
import React, { useState } from "react";

const locations = {
  Delhi: ["Delhi"],
  "Himachal Pradesh": ["Manali", "Shimla", "Kullu", "Dharamshala"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
  Uttarakhand: ["Rishikesh", "Nainital", "Mussoorie"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore", "Hampi"],
  Kerala: ["Kochi", "Munnar", "Alleppey"],
  "Tamil Nadu": ["Chennai", "Ooty", "Kodaikanal"],
  Goa: ["North Goa", "South Goa"],
  "Jammu and Kashmir": ["Srinagar", "Gulmarg", "Pahalgam"],
  Sikkim: ["Gangtok", "Lachung", "Pelling"],
  Meghalaya: ["Shillong", "Cherrapunji", "Dawki"],
  Gujarat: ["Kutch", "Ahmedabad", "Dwarka"],
  "West Bengal": ["Darjeeling", "Kolkata"],
  Punjab: ["Amritsar", "Chandigarh"],
  "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow"],
};

// Mock cab data
const mockCabs = [
  {
    id: 1,
    name: "Sedan",
    models: ["Swift Dzire", "Honda Amaze", "Hyundai Aura"],
    type: "AC Sedan",
    capacity: 4,
    luggage: 2,
    price: 2499,
    originalPrice: 2999,
    perKm: 12,
    rating: 4.5,
    reviews: 1245,
    features: ["AC", "Music System", "Comfortable Seats"],
    amenities: ["ac", "music", "charging"],
    badge: "Popular",
    fuelType: "Petrol/Diesel",
    transmission: "Manual/Auto",
  },
  {
    id: 2,
    name: "SUV",
    models: ["Ertiga", "Innova Crysta", "XUV500"],
    type: "AC SUV",
    capacity: 6,
    luggage: 4,
    price: 3999,
    originalPrice: 4799,
    perKm: 18,
    rating: 4.7,
    reviews: 892,
    features: ["AC", "Spacious", "Premium Comfort", "GPS"],
    amenities: ["ac", "music", "charging", "gps"],
    badge: "Family Choice",
    fuelType: "Diesel",
    transmission: "Manual/Auto",
  },
  {
    id: 3,
    name: "Hatchback",
    models: ["WagonR", "Swift", "i20"],
    type: "AC Hatchback",
    capacity: 4,
    luggage: 2,
    price: 1899,
    originalPrice: 2399,
    perKm: 10,
    rating: 4.3,
    reviews: 567,
    features: ["AC", "Fuel Efficient"],
    amenities: ["ac", "music"],
    badge: "Budget Friendly",
    fuelType: "Petrol",
    transmission: "Manual",
  },
  {
    id: 4,
    name: "Premium Sedan",
    models: ["Honda City", "Hyundai Verna", "Skoda Rapid"],
    type: "AC Premium Sedan",
    capacity: 4,
    luggage: 3,
    price: 3299,
    originalPrice: 3999,
    perKm: 15,
    rating: 4.8,
    reviews: 1876,
    features: ["AC", "Premium Interior", "Advanced Safety", "Music System"],
    amenities: ["ac", "music", "charging", "wifi"],
    badge: "Luxury",
    fuelType: "Petrol/Diesel",
    transmission: "Auto",
  },
];

const CabBookingPage = () => {
  const [tripType, setTripType] = useState("outstation");
  const [cabType, setCabType] = useState("oneway");
  const [fromState, setFromState] = useState("Delhi");
  const [fromCity, setFromCity] = useState("Delhi");
  const [toState, setToState] = useState("Uttar Pradesh");
  const [toCity, setToCity] = useState("Agra");
  const [pickupDate, setPickupDate] = useState("2025-11-27");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [showResults, setShowResults] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);
  const [sortBy, setSortBy] = useState("price");
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
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const handleSearch = () => {
    if (!fromCity || !toCity) {
      alert("Please select both pickup and drop locations");
      return;
    }
    setShowResults(true);
    setSelectedCab(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "ac":
        return <Zap className="w-4 h-4" />;
      case "music":
        return <Star className="w-4 h-4" />;
      case "charging":
        return <Zap className="w-4 h-4" />;
      case "gps":
        return <Navigation className="w-4 h-4" />;
      case "wifi":
        return <Zap className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Popular":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Family Choice":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Budget Friendly":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Luxury":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredAndSortedCabs = [...mockCabs]
    .filter((cab) => {
      if (filterType === "all") return true;
      if (filterType === "sedan") return cab.name.includes("Sedan");
      if (filterType === "suv") return cab.name.includes("SUV");
      if (filterType === "hatchback") return cab.name.includes("Hatchback");
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "capacity") return b.capacity - a.capacity;
      return 0;
    });

  const estimatedDistance = 210; // Mock distance in km
  const estimatedDuration = "4h 30m"; // Mock duration

  if (!showResults) {
    // Main Search Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Book Your Cab Ride
            </h1>
            <p className="text-xl text-gray-600">
              Comfortable, Safe & Affordable Cab Services
            </p>
          </div>

          {/* Main Search Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-300">
            {/* Trip Type Selection */}
            <div className="flex items-center gap-6 mb-8 flex-wrap">
              {["outstation", "local", "airport"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="tripType"
                      value={type}
                      checked={tripType === type}
                      onChange={(e) => setTripType(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-yellow-600 peer-checked:border-[7px] transition-all duration-200"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-bold capitalize group-hover:text-yellow-600 transition-colors">
                    {type === "outstation"
                      ? "Outstation"
                      : type === "local"
                      ? "Local/Hourly"
                      : "Airport Transfer"}
                  </span>
                </label>
              ))}
            </div>

            {/* One Way / Round Trip Toggle */}
            {tripType === "outstation" && (
              <div className="mb-6 flex gap-4">
                {["oneway", "roundtrip"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setCabType(type)}
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                      cabType === type
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {type === "oneway" ? "One Way" : "Round Trip"}
                  </button>
                ))}
              </div>
            )}

            {/* Search Form */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex flex-wrap">
                {/* From */}
                <div className="flex-1 min-w-[250px] p-6 border-r border-b border-gray-200 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-hover:text-yellow-600 transition-colors">
                    From
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                      <Navigation className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 rounded-xl bg-gray-100 border-none outline-none text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="capacity">Capacity</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
              <h2 className="text-3xl font-bold mb-2">
                {filteredAndSortedCabs.length} Cabs Available
              </h2>
              <p className="text-yellow-100 text-lg flex items-center gap-2">
                <span>
                  {fromCity} → {toCity}
                </span>
                <span>•</span>
                <span>
                  {getDayOfWeek(pickupDate)},{" "}
                  {new Date(pickupDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{pickupTime}</span>
              </p>
              <div className="mt-4 flex items-center gap-6 text-yellow-100">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  <span className="font-semibold">
                    Est. Distance: {estimatedDistance} km
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">
                    Est. Duration: {estimatedDuration}
                  </span>
                </div>
              </div>
            </div>

            {/* Cab List */}
            <div className="space-y-6">
              {filteredAndSortedCabs.map((cab) => (
                <div
                  key={cab.id}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-yellow-200"
                >
                  {/* Badge */}
                  {cab.badge && (
                    <div
                      className={`${getBadgeColor(
                        cab.badge
                      )} text-white px-4 py-1 text-xs font-bold flex items-center gap-2 w-fit rounded-br-2xl`}
                    >
                      <Award className="w-3 h-3" />
                      {cab.badge}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap gap-6 items-center">
                      {/* Cab Image & Info */}
                      <div className="flex-1 min-w-[280px]">
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                            <Car className="w-12 h-12 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">
                              {cab.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {cab.models.join(" • ")}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 text-xs font-bold rounded-full border border-yellow-200">
                                {cab.type}
                              </span>
                              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-3 py-1 rounded-full border border-yellow-200">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-gray-800">
                                  {cab.rating}
                                </span>
                                <span className="text-xs text-gray-500">
                                  ({cab.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cab Details */}
                      <div className="flex gap-6">
                        <div className="text-center p-4 bg-blue-50 rounded-xl">
                          <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-2xl font-bold text-gray-800">
                            {cab.capacity}
                          </div>
                          <div className="text-xs text-gray-600">Seats</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-xl">
                          <Briefcase className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                          <div className="text-2xl font-bold text-gray-800">
                            {cab.luggage}
                          </div>
                          <div className="text-xs text-gray-600">Bags</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-xl">
                          <Fuel className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-800">
                            {cab.fuelType}
                          </div>
                          <div className="text-xs text-gray-600">Fuel</div>
                        </div>
                      </div>

                      {/* Price and Book */}
                      <div className="text-right min-w-[180px]">
                        <div className="mb-2">
                          <span className="text-sm text-gray-400 line-through">
                            ₹{cab.originalPrice}
                          </span>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                          ₹{cab.price}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          + ₹{cab.perKm}/km after {estimatedDistance}km
                        </div>
                        <button
                          onClick={() =>
                            setSelectedCab(
                              selectedCab === cab.id ? null : cab.id
                            )
                          }
                          className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                        >
                          {selectedCab === cab.id
                            ? "Hide Details"
                            : "View Details"}
                        </button>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6 pt-6 border-t-2 border-gray-100">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-sm font-bold text-gray-600">
                          Features:
                        </span>
                        <div className="flex gap-3 flex-wrap">
                          {cab.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg border border-green-200"
                            >
                              <CheckCircle className="w-3 h-3" />
                              <span className="text-xs font-semibold">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedCab === cab.id && (
                      <div className="mt-6 pt-6 border-t-2 border-gray-100 animate-fadeIn">
                        {/* Pricing Breakdown */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 mb-6 border-2 border-blue-200">
                          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                            <Info className="w-5 h-5 text-blue-600" />
                            Pricing Details
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">
                                Base Fare
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                ₹{cab.price}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                For {estimatedDistance}km
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="text-sm text-gray-600 mb-1">
                                Extra km Charge
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                ₹{cab.perKm}/km
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                After base distance
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                            <p className="text-sm text-yellow-800 flex items-center gap-2">
                              <Info className="w-4 h-4" />
                              <span>
                                <strong>Note:</strong> Toll charges, parking
                                fees & state taxes are extra
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Trip Information */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <Navigation className="w-5 h-5 text-green-600" />
                              Pickup Details
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-semibold text-gray-800">
                                  {fromCity}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Date:</span>
                                <span className="font-semibold text-gray-800">
                                  {pickupDate}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Time:</span>
                                <span className="font-semibold text-gray-800">
                                  {pickupTime}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-red-600" />
                              Drop Details
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-semibold text-gray-800">
                                  {toCity}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Distance:</span>
                                <span className="font-semibold text-gray-800">
                                  {estimatedDistance} km
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Duration:</span>
                                <span className="font-semibold text-gray-800">
                                  {estimatedDuration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-5 rounded-xl border-2 border-green-200">
                            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5" />
                              Inclusions
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Base fare for {estimatedDistance}km</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Driver allowance</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>GST included</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-5 rounded-xl border-2 border-red-200">
                            <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                              <X className="w-5 h-5" />
                              Exclusions
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <span>Toll charges</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <span>Parking fees</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <span>State taxes (if any)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 mb-6 border-2 border-purple-200">
                          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-purple-600" />
                            Cancellation Policy
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-bold text-green-600 mb-1">
                                Before 24 hours
                              </div>
                              <div className="text-gray-600">100% refund</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-bold text-yellow-600 mb-1">
                                6-24 hours
                              </div>
                              <div className="text-gray-600">50% refund</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <div className="font-bold text-red-600 mb-1">
                                Less than 6 hours
                              </div>
                              <div className="text-gray-600">No refund</div>
                            </div>
                          </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="text-center">
                          <button
                            onClick={() =>
                              alert(
                                `Booking ${cab.name}\nFrom: ${fromCity}\nTo: ${toCity}\nDate: ${pickupDate}\nTime: ${pickupTime}\nPrice: ₹${cab.price}`
                              )
                            }
                            className="px-16 py-5 bg-gradient-to-r from-green-500 via-emerald-600 to-green-500 hover:from-green-600 hover:via-emerald-700 hover:to-green-600 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                          >
                            <span>BOOK NOW</span>
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          <p className="text-sm text-gray-500 mt-3">
                            💳 Secure payment • 🔒 Safe & encrypted
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Information */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">
                    Booking Guidelines
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Driver will wait 5 minutes at pickup (free)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Carry valid ID proof for verification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Toll & parking charges are extra</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Cancellation charges apply as per policy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                Customer Reviews
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    "Professional driver and clean car. Great experience!"
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">
                    - Rajesh Kumar
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    "On-time pickup and smooth ride. Highly recommended!"
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">
                    - Sneha Reddy
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    "Best cab service! Driver was courteous and helpful."
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">
                    - Amit Patel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CabBookingPage;
