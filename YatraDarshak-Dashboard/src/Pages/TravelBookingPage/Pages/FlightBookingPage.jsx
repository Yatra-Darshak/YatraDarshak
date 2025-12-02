import {
  ArrowLeftRight,
  Plane,
  Calendar,
  Users,
  Clock,
  Filter,
  Star,
  Briefcase,
  Coffee,
  Wifi,
  Monitor,
  UtensilsCrossed,
  ShoppingBag,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Info,
  Shield,
  Phone,
  CheckCircle,
  IndianRupee,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const FlightBookingPage = () => {
  const [from] = useState({ city: "Delhi", code: "DEL" });
  const [to] = useState({ city: "Mumbai", code: "BOM" });
  const [departureDate] = useState("2025-11-04");
  const [travelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [showResults, setShowResults] = useState(true);
  const [sortBy, setSortBy] = useState("cheapest");
  const [filterStops, setFilterStops] = useState("all");
  const [filterAirline, setFilterAirline] = useState("all");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [expandedFlight, setExpandedFlight] = useState(null);

  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      logo: "6E",
      flightNumber: "6E-2045",
      departure: { time: "06:00", airport: "DEL" },
      arrival: { time: "08:15", airport: "BOM" },
      duration: "2h 15m",
      stops: "Non-stop",
      price: 4500,
      seatsLeft: 8,
      type: "Economy",
      badge: "Cheapest",
      amenities: ["Baggage: 15kg", "Meal: Paid", "Seat: Standard"],
      details: {
        aircraft: "Airbus A320",
        baggage: { cabin: "7 kg", checkin: "15 kg" },
        cancellation: "Non-refundable",
        fareType: "Saver",
      },
    },
    {
      id: 2,
      airline: "Air India",
      logo: "AI",
      flightNumber: "AI-860",
      departure: { time: "07:30", airport: "DEL" },
      arrival: { time: "10:00", airport: "BOM" },
      duration: "2h 30m",
      stops: "Non-stop",
      price: 5200,
      seatsLeft: 15,
      type: "Economy",
      badge: "Recommended",
      amenities: ["Baggage: 25kg", "Meal: Included", "Seat: Standard"],
      details: {
        aircraft: "Boeing 787",
        baggage: { cabin: "7 kg", checkin: "25 kg" },
        cancellation: "Partially refundable",
        fareType: "Flexi",
      },
    },
    {
      id: 3,
      airline: "Vistara",
      logo: "UK",
      flightNumber: "UK-995",
      departure: { time: "09:15", airport: "DEL" },
      arrival: { time: "11:45", airport: "BOM" },
      duration: "2h 30m",
      stops: "Non-stop",
      price: 6800,
      seatsLeft: 12,
      type: "Premium Economy",
      badge: "Premium",
      amenities: ["Baggage: 30kg", "Meal: Gourmet", "Seat: Extra Legroom"],
      details: {
        aircraft: "Airbus A321neo",
        baggage: { cabin: "10 kg", checkin: "30 kg" },
        cancellation: "Refundable",
        fareType: "Premium",
      },
    },
    {
      id: 4,
      airline: "SpiceJet",
      logo: "SG",
      flightNumber: "SG-8726",
      departure: { time: "12:00", airport: "DEL" },
      arrival: { time: "14:20", airport: "BOM" },
      duration: "2h 20m",
      stops: "Non-stop",
      price: 4200,
      seatsLeft: 6,
      type: "Economy",
      badge: "Best Value",
      amenities: ["Baggage: 15kg", "Meal: Paid", "Seat: Standard"],
      details: {
        aircraft: "Boeing 737",
        baggage: { cabin: "7 kg", checkin: "15 kg" },
        cancellation: "Non-refundable",
        fareType: "SpiceFlex",
      },
    },
    {
      id: 5,
      airline: "IndiGo",
      logo: "6E",
      flightNumber: "6E-2177",
      departure: { time: "15:30", airport: "DEL" },
      arrival: { time: "17:50", airport: "BOM" },
      duration: "2h 20m",
      stops: "Non-stop",
      price: 4800,
      seatsLeft: 20,
      type: "Economy",
      badge: "Popular",
      amenities: ["Baggage: 15kg", "Meal: Paid", "Seat: Standard"],
      details: {
        aircraft: "Airbus A320",
        baggage: { cabin: "7 kg", checkin: "15 kg" },
        cancellation: "Non-refundable",
        fareType: "Saver",
      },
    },
    {
      id: 6,
      airline: "Air India",
      logo: "AI",
      flightNumber: "AI-864",
      departure: { time: "18:45", airport: "DEL" },
      arrival: { time: "21:15", airport: "BOM" },
      duration: "2h 30m",
      stops: "Non-stop",
      price: 5500,
      seatsLeft: 10,
      type: "Economy",
      badge: "Evening",
      amenities: ["Baggage: 25kg", "Meal: Included", "Seat: Standard"],
      details: {
        aircraft: "Boeing 787",
        baggage: { cabin: "7 kg", checkin: "25 kg" },
        cancellation: "Partially refundable",
        fareType: "Flexi",
      },
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Cheapest":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Recommended":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Premium":
        return "bg-gradient-to-r from-purple-500 to-indigo-500";
      case "Best Value":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Popular":
        return "bg-gradient-to-r from-pink-500 to-rose-500";
      case "Evening":
        return "bg-gradient-to-r from-indigo-500 to-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getAirlineLogo = (logo) => {
    const colors = {
      "6E": "bg-blue-600",
      AI: "bg-red-600",
      UK: "bg-purple-600",
      SG: "bg-yellow-600",
    };
    return colors[logo] || "bg-gray-600";
  };

  const filteredAndSortedFlights = [...flights]
    .filter((flight) => {
      if (filterStops !== "all" && flight.stops !== filterStops) return false;
      if (filterAirline !== "all" && flight.airline !== filterAirline)
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "cheapest") return a.price - b.price;
      if (sortBy === "fastest")
        return parseInt(a.duration) - parseInt(b.duration);
      if (sortBy === "departure")
        return a.departure.time.localeCompare(b.departure.time);
      if (sortBy === "arrival")
        return a.arrival.time.localeCompare(b.arrival.time);
      return 0;
    });

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

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-500 rotate-45" />
                <span className="text-sm font-bold text-gray-800">
                  {from.code}
                </span>
                <ArrowLeftRight className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-gray-800">
                  {to.code}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-800">
                  {getFormattedDate(departureDate)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-800">
                  {travelers.adults + travelers.children + travelers.infants}{" "}
                  Traveler
                  {travelers.adults + travelers.children + travelers.infants > 1
                    ? "s"
                    : ""}
                </span>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                MODIFY SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 border-2 border-gray-100">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-bold text-gray-700">Stops:</span>
              <button
                onClick={() => setFilterStops("all")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filterStops === "all"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStops("Non-stop")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filterStops === "Non-stop"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Non-stop
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-700">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl bg-gray-100 border-none outline-none text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <option value="cheapest">Cheapest First</option>
                <option value="fastest">Fastest First</option>
                <option value="departure">Departure Time</option>
                <option value="arrival">Arrival Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {filteredAndSortedFlights.length} Flight
            {filteredAndSortedFlights.length !== 1 ? "s" : ""} Found
          </h2>
          <p className="text-gray-600">
            {from.city} to {to.city} on {getDayOfWeek(departureDate)},{" "}
            {getFormattedDate(departureDate)}
          </p>
        </div>

        {/* Flight Cards */}
        <div className="space-y-4">
          {filteredAndSortedFlights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Main Flight Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 ${getAirlineLogo(
                        flight.logo
                      )} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {flight.logo}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {flight.airline}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {flight.flightNumber}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${getBadgeColor(
                      flight.badge
                    )} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}
                  >
                    <Award className="w-4 h-4" />
                    {flight.badge}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-4">
                  {/* Departure */}
                  <div>
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {flight.departure.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      {flight.departure.airport}
                    </div>
                  </div>

                  {/* Duration & Stops */}
                  <div className="col-span-2">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex-1 h-0.5 bg-gray-300"></div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {flight.duration}
                      </div>
                      <div className="flex-1 h-0.5 bg-gray-300"></div>
                    </div>
                    <div className="text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          flight.stops === "Non-stop"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {flight.stops}
                      </span>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="text-right md:text-left">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {flight.arrival.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      {flight.arrival.airport}
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {flight.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 text-xs text-gray-700 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price & Book Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <IndianRupee className="w-6 h-6 text-gray-800" />
                      <span className="text-3xl font-bold text-gray-800">
                        {flight.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">per person</span>
                    </div>
                    <div className="text-sm text-orange-600 font-semibold">
                      Only {flight.seatsLeft} seats left!
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setExpandedFlight(
                          expandedFlight === flight.id ? null : flight.id
                        )
                      }
                      className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
                    >
                      <Info className="w-5 h-5" />
                      {expandedFlight === flight.id ? "HIDE" : "VIEW"} DETAILS
                      {expandedFlight === flight.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => setSelectedFlight(flight)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                      BOOK NOW
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedFlight === flight.id && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Plane className="w-5 h-5 text-blue-600" />
                        Aircraft
                      </h4>
                      <p className="text-gray-700">{flight.details.aircraft}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        Baggage
                      </h4>
                      <p className="text-sm text-gray-700">
                        Cabin: {flight.details.baggage.cabin}
                      </p>
                      <p className="text-sm text-gray-700">
                        Check-in: {flight.details.baggage.checkin}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        Cancellation
                      </h4>
                      <p className="text-gray-700">
                        {flight.details.cancellation}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Fare Type
                      </h4>
                      <p className="text-gray-700">{flight.details.fareType}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedFlights.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plane className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No flights found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={() => {
                setFilterStops("all");
                setFilterAirline("all");
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}

        {/* Why Book With Us */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Book Flights With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Secure Booking</h3>
              <p className="text-sm text-gray-600">
                100% safe and secure payment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-sm text-gray-600">Lowest fare guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always here to help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Instant Confirmation
              </h3>
              <p className="text-sm text-gray-600">Get tickets immediately</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details Modal */}
      {selectedFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl my-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-t-3xl relative">
              <button
                onClick={() => setSelectedFlight(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all flex items-center justify-center"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 ${getAirlineLogo(
                    selectedFlight.logo
                  )} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-2xl">
                    {selectedFlight.logo}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedFlight.airline}
                  </h2>
                  <p className="text-blue-100">{selectedFlight.flightNumber}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Flight Timeline */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedFlight.departure.time}
                    </div>
                    <div className="text-gray-600">
                      {from.city} ({selectedFlight.departure.airport})
                    </div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded"></div>
                      <Plane className="w-6 h-6 text-blue-600" />
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded"></div>
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      {selectedFlight.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {selectedFlight.arrival.time}
                    </div>
                    <div className="text-gray-600">
                      {to.city} ({selectedFlight.arrival.airport})
                    </div>
                  </div>
                </div>
              </div>

              {/* Flight Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-800">Aircraft</h3>
                  </div>
                  <p className="text-gray-700">
                    {selectedFlight.details.aircraft}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-800">
                      Baggage Allowance
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Cabin: {selectedFlight.details.baggage.cabin}
                  </p>
                  <p className="text-sm text-gray-700">
                    Check-in: {selectedFlight.details.baggage.checkin}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-800">Cancellation</h3>
                  </div>
                  <p className="text-gray-700">
                    {selectedFlight.details.cancellation}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-800">Fare Type</h3>
                  </div>
                  <p className="text-gray-700">
                    {selectedFlight.details.fareType}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Included Amenities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFlight.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Book */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Total Fare</div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-8 h-8 text-gray-800" />
                      <span className="text-5xl font-bold text-gray-800">
                        {selectedFlight.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600">per person</span>
                    </div>
                    <div className="text-sm text-orange-600 font-semibold mt-2">
                      Only {selectedFlight.seatsLeft} seats left at this price!
                    </div>
                  </div>
                  <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xl font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                    PROCEED TO BOOK
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Important Info */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-900">
                    <p className="font-semibold mb-1">Important Information</p>
                    <ul className="list-disc list-inside space-y-1 text-yellow-800">
                      <li>
                        Please arrive at the airport at least 2 hours before
                        departure
                      </li>
                      <li>Valid ID proof is mandatory for check-in</li>
                      <li>Baggage allowance is subject to airline policy</li>
                      <li>Check visa requirements for international travel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightBookingPage;
