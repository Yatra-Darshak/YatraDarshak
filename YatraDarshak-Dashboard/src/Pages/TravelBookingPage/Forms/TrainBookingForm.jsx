import {
  Train,
  Calendar,
  Users,
  Search,
  ArrowRight,
  ArrowLeftRight,
  Clock,
  MapPin,
  IndianRupee,
  ChevronDown,
  X,
  CheckCircle,
  Info,
  Armchair,
  Wifi,
  Coffee,
  Zap,
  User,
  Phone,
  Mail,
  CreditCard,
  Shield,
  AlertCircle,
  ChevronRight,
  Star,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TrainBookingForm = () => {
  const [tripType, setTripType] = useState("oneway");
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("3A");
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const popularStations = [
    { code: "NDLS", name: "New Delhi", city: "Delhi" },
    { code: "BCT", name: "Mumbai Central", city: "Mumbai" },
    { code: "MAS", name: "Chennai Central", city: "Chennai" },
    { code: "SBC", name: "Bangalore City", city: "Bangalore" },
    { code: "HWH", name: "Howrah Junction", city: "Kolkata" },
    { code: "PUNE", name: "Pune Junction", city: "Pune" },
    { code: "ADI", name: "Ahmedabad Junction", city: "Ahmedabad" },
    { code: "JP", name: "Jaipur Junction", city: "Jaipur" },
  ];

  const trainClasses = [
    { id: "1A", name: "First AC", desc: "1A" },
    { id: "2A", name: "Second AC", desc: "2A" },
    { id: "3A", name: "Third AC", desc: "3A" },
    { id: "SL", name: "Sleeper", desc: "SL" },
    { id: "2S", name: "Second Sitting", desc: "2S" },
    { id: "CC", name: "AC Chair Car", desc: "CC" },
    { id: "3E", name: "Third AC Economy", desc: "3E" },
  ];

  const handleSearch = () => {
    setSearchResults(mockTrains);
    setShowResults(true);
  };

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-fit">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            {/* Trip Type */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setTripType("oneway")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  tripType === "oneway"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType("roundtrip")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  tripType === "roundtrip"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Round Trip
              </button>
            </div>

            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              {/* From Station */}
              <div className="md:col-span-3 relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter station name or code"
                    value={fromStation}
                    onChange={(e) => setFromStation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none text-gray-800"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="md:col-span-1 flex items-end justify-center pb-3 absolute top-[42.5%] md:top-[46%] md:right-[69.5%] right-[50%] z-50">
                <button
                  onClick={swapStations}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all rotate-90 md:rotate-0"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </button>
              </div>

              {/* To Station */}
              <div className="md:col-span-3 relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter station name or code"
                    value={toStation}
                    onChange={(e) => setToStation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none text-gray-800"
                  />
                </div>
              </div>

              {/* Journey Date */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Journey Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={journeyDate}
                    onChange={(e) => setJourneyDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none text-gray-800"
                  />
                </div>
              </div>

              {/* Return Date */}
              {tripType === "roundtrip" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none text-gray-800"
                    />
                  </div>
                </div>
              )}

              {/* Class */}
              <div
                className={
                  tripType === "roundtrip" ? "md:col-span-1" : "md:col-span-3"
                }
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowClassDropdown(!showClassDropdown)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-semibold flex items-center justify-between"
                  >
                    <span>{selectedClass}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {showClassDropdown && (
                    <div className="absolute top-full mt-2 w-64 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50">
                      {trainClasses.map((cls) => (
                        <button
                          key={cls.id}
                          onClick={() => {
                            setSelectedClass(cls.id);
                            setShowClassDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b last:border-b-0"
                        >
                          <div className="font-semibold text-gray-800">
                            {cls.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {cls.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Popular Routes */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Popular Stations:</p>
              <div className="flex flex-wrap gap-2">
                {popularStations.slice(0, 6).map((station) => (
                  <button
                    key={station.code}
                    onClick={() =>
                      !fromStation
                        ? setFromStation(station.name)
                        : setToStation(station.name)
                    }
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {station.city}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <Link to='/train-booking-page'>
              <button
                onClick={handleSearch}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                SEARCH TRAINS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBookingForm;
