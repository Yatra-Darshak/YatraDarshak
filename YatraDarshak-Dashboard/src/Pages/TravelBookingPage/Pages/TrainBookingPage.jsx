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
  Award,
  Filter,
  SortAsc,
  Navigation,
} from "lucide-react";
import React, { useState } from "react";

const popularStations = [
  { code: 'NDLS', name: 'New Delhi', city: 'Delhi' },
  { code: 'BCT', name: 'Mumbai Central', city: 'Mumbai' },
  { code: 'MAS', name: 'Chennai Central', city: 'Chennai' },
  { code: 'SBC', name: 'Bangalore City', city: 'Bangalore' },
  { code: 'HWH', name: 'Howrah Junction', city: 'Kolkata' },
  { code: 'PUNE', name: 'Pune Junction', city: 'Pune' },
  { code: 'ADI', name: 'Ahmedabad Junction', city: 'Ahmedabad' },
  { code: 'JP', name: 'Jaipur Junction', city: 'Jaipur' },
];

const trainClasses = [
  { id: '1A', name: 'First AC', desc: '1A' },
  { id: '2A', name: 'Second AC', desc: '2A' },
  { id: '3A', name: 'Third AC', desc: '3A' },
  { id: 'SL', name: 'Sleeper', desc: 'SL' },
  { id: '2S', name: 'Second Sitting', desc: '2S' },
  { id: 'CC', name: 'AC Chair Car', desc: 'CC' },
  { id: '3E', name: 'Third AC Economy', desc: '3E' },
];

// Mock train data
const mockTrains = [
  {
    id: 1,
    number: '12301',
    name: 'Rajdhani Express',
    from: 'New Delhi',
    to: 'Howrah Junction',
    departureTime: '16:55',
    arrivalTime: '10:05',
    duration: '17h 10m',
    runsOn: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: {
      '1A': { available: 12, price: 3500, status: 'Available' },
      '2A': { available: 45, price: 2100, status: 'Available' },
      '3A': { available: 78, price: 1500, status: 'Available' },
    },
    badge: 'Premium',
    rating: 4.7,
    amenities: ['wifi', 'food', 'charging'],
    punctuality: 92,
  },
  {
    id: 2,
    number: '12423',
    name: 'Dibrugarh Rajdhani',
    from: 'New Delhi',
    to: 'Dibrugarh',
    departureTime: '11:00',
    arrivalTime: '06:30',
    duration: '43h 30m',
    runsOn: ['Tue', 'Fri', 'Sun'],
    classes: {
      '1A': { available: 5, price: 5200, status: 'Available' },
      '2A': { available: 23, price: 3100, status: 'Available' },
      '3A': { available: 56, price: 2200, status: 'Available' },
    },
    badge: 'Fastest',
    rating: 4.8,
    amenities: ['wifi', 'food', 'charging', 'entertainment'],
    punctuality: 89,
  },
  {
    id: 3,
    number: '12951',
    name: 'Mumbai Rajdhani',
    from: 'Mumbai Central',
    to: 'New Delhi',
    departureTime: '16:25',
    arrivalTime: '08:35',
    duration: '16h 10m',
    runsOn: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    classes: {
      '1A': { available: 8, price: 3200, status: 'Available' },
      '2A': { available: 34, price: 1950, status: 'Available' },
      '3A': { available: 67, price: 1400, status: 'Available' },
    },
    badge: 'Popular',
    rating: 4.6,
    amenities: ['wifi', 'food', 'charging'],
    punctuality: 94,
  },
  {
    id: 4,
    number: '12259',
    name: 'Duronto Express',
    from: 'Sealdah',
    to: 'New Delhi',
    departureTime: '21:20',
    arrivalTime: '15:15',
    duration: '17h 55m',
    runsOn: ['Mon', 'Wed', 'Sat'],
    classes: {
      '2A': { available: 28, price: 2050, status: 'Available' },
      '3A': { available: 92, price: 1450, status: 'Available' },
      'SL': { available: 145, price: 650, status: 'Available' },
    },
    badge: 'Budget Friendly',
    rating: 4.4,
    amenities: ['food', 'charging'],
    punctuality: 87,
  },
];

const TrainBookingPage = () => {
  const [tripType, setTripType] = useState('oneway');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [selectedClass, setSelectedClass] = useState('3A');
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [sortBy, setSortBy] = useState('departure');
  const [filterClass, setFilterClass] = useState('all');

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const handleSearch = () => {
    if (!fromStation || !toStation || !journeyDate) {
      alert("Please fill in all required fields");
      return;
    }
    setShowResults(true);
    setSelectedTrain(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDayOfWeek = (dateString) => {
    if (!dateString) return '';
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Premium": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Fastest": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Popular": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Budget Friendly": return "bg-gradient-to-r from-green-500 to-emerald-500";
      default: return "bg-gray-500";
    }
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "food": return <Coffee className="w-4 h-4" />;
      case "charging": return <Zap className="w-4 h-4" />;
      case "entertainment": return <Star className="w-4 h-4" />;
      default: return null;
    }
  };

  const filteredAndSortedTrains = [...mockTrains]
    .filter(train => {
      if (filterClass === 'all') return true;
      return train.classes[filterClass];
    })
    .sort((a, b) => {
      if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
      if (sortBy === 'price') {
        const priceA = a.classes[selectedClass]?.price || 9999;
        const priceB = b.classes[selectedClass]?.price || 9999;
        return priceA - priceB;
      }
      return 0;
    });

  if (!showResults) {
    // Main Search Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Book Train Tickets
            </h1>
            <p className="text-xl text-gray-600">Fast, Easy & Convenient Railway Booking</p>
          </div>

          {/* Main Search Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-300">
            {/* Trip Type */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setTripType('oneway')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  tripType === 'oneway'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType('roundtrip')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  tripType === 'roundtrip'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Round Trip
              </button>
            </div>

            {/* Search Form */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6">
                {/* From Station */}
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    From Station
                  </label>
                  <div className="relative">
                    <div className="p-2 bg-blue-100 rounded-lg inline-block mb-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter station"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-semibold"
                    />
                  </div>
                </div>

                {/* Swap Button */}
                <div className="md:col-span-1 flex items-end justify-center pb-3">
                  <button
                    onClick={swapStations}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-4 border-white text-white hover:from-blue-600 hover:to-indigo-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                  >
                    <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                </div>

                {/* To Station */}
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    To Station
                  </label>
                  <div className="relative">
                    <div className="p-2 bg-green-100 rounded-lg inline-block mb-2">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter station"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-semibold"
                    />
                  </div>
                </div>

                {/* Journey Date */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Journey Date
                  </label>
                  <div className="relative">
                    <div className="p-2 bg-purple-100 rounded-lg inline-block mb-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <input
                      type="date"
                      value={journeyDate}
                      onChange={(e) => setJourneyDate(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-semibold cursor-pointer"
                    />
                  </div>
                </div>

                {/* Return Date */}
                {tripType === 'roundtrip' && (
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                      Return Date
                    </label>
                    <div className="relative">
                      <div className="p-2 bg-pink-100 rounded-lg inline-block mb-2">
                        <Calendar className="w-5 h-5 text-pink-600" />
                      </div>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-semibold cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* Class */}
                <div className={tripType === 'roundtrip' ? 'md:col-span-1' : 'md:col-span-3'}>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Class
                  </label>
                  <div className="relative">
                    <div className="p-2 bg-orange-100 rounded-lg inline-block mb-2">
                      <Armchair className="w-5 h-5 text-orange-600" />
                    </div>
                    <button
                      onClick={() => setShowClassDropdown(!showClassDropdown)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none text-gray-800 font-bold flex items-center justify-between hover:border-blue-400 transition-colors"
                    >
                      <span>{selectedClass}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showClassDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    {showClassDropdown && (
                      <div className="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                        {trainClasses.map((cls) => (
                          <button
                            key={cls.id}
                            onClick={() => {
                              setSelectedClass(cls.id);
                              setShowClassDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b last:border-b-0"
                          >
                            <div className="font-bold text-gray-800">{cls.name}</div>
                            <div className="text-xs text-gray-500">{cls.desc}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Popular Stations */}
              <div className="px-6 pb-4">
                <p className="text-sm font-bold text-gray-600 mb-3">Popular Stations:</p>
                <div className="flex flex-wrap gap-2">
                  {popularStations.slice(0, 6).map((station) => (
                    <button
                      key={station.code}
                      onClick={() => !fromStation ? setFromStation(station.name) : setToStation(station.name)}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      {station.city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white text-2xl font-bold transition-all duration-300 rounded-b-2xl shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Search className="w-6 h-6" />
                <span>SEARCH TRAINS</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Why Book With Us */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">100% Safe</h3>
                <p className="text-sm text-gray-600">
                  Secure payment & data protection
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Instant Booking</h3>
                <p className="text-sm text-gray-600">
                  Quick confirmation & e-tickets
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-200">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Best Prices</h3>
                <p className="text-sm text-gray-600">
                  No hidden charges or fees
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Always here to help you
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15M+</div>
              <div className="text-blue-100">Tickets Booked</div>
            </div>
            <div className="text-center border-l border-r border-blue-400">
              <div className="text-4xl font-bold mb-2">8K+</div>
              <div className="text-blue-100">Train Routes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
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
        {/* Compact Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                <MapPin className="w-5 h-5 text-blue-500" />
                <input
                  type="text"
                  value={fromStation}
                  onChange={(e) => setFromStation(e.target.value)}
                  className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent flex-1"
                  placeholder="From"
                />
              </div>

              <button onClick={swapStations} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeftRight className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                <MapPin className="w-5 h-5 text-green-500" />
                <input
                  type="text"
                  value={toStation}
                  onChange={(e) => setToStation(e.target.value)}
                  className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent flex-1"
                  placeholder="To"
                />
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-500" />
                <input
                  type="date"
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="text-sm font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <Armchair className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-800">{selectedClass}</span>
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
            <span className="font-bold text-gray-700">Filter by Class:</span>
            <button
              onClick={() => setFilterClass("all")}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterClass === "all" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            {['1A', '2A', '3A', 'SL'].map(cls => (
              <button
                key={cls}
                onClick={() => setFilterClass(cls)}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterClass === cls ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {cls}
              </button>
            ))}
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
              <option value="duration">Duration</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
          <h2 className="text-3xl font-bold mb-2">
            {filteredAndSortedTrains.length} Trains Found
          </h2>
          <p className="text-blue-100 text-lg">
            {fromStation || 'Select Station'} → {toStation || 'Select Station'} • {journeyDate ? `${getDayOfWeek(journeyDate)}, ${new Date(journeyDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : 'Select Date'}
          </p>
        </div>

        {/* Train List */}
        <div className="space-y-6">
          {filteredAndSortedTrains.map((train) => (
            <div key={train.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
              {/* Badge */}
              {train.badge && (
                <div className={`${getBadgeColor(train.badge)} text-white px-4 py-1 text-xs font-bold flex items-center gap-2 w-fit rounded-br-2xl`}>
                  <Award className="w-3 h-3" />
                  {train.badge}
                  </div>
              )}

              <div className="p-6">
                {/* Train Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {train.name}
                    </h3>
                    <p className="text-gray-500 font-semibold">#{train.number}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-bold text-gray-800">{train.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>{train.punctuality}% on time</span>
                    </div>
                  </div>
                </div>

                {/* Journey Info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-4">
                  <div className="md:col-span-3">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {train.departureTime}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">{train.from}</div>
                  </div>

                  <div className="md:col-span-6 flex items-center justify-center">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 relative">
                        <Train className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1" />
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="md:col-span-3 text-right">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {train.arrivalTime}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">{train.to}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">{train.duration}</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <span className="text-sm font-bold text-gray-600">Amenities:</span>
                  <div className="flex gap-3">
                    {train.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-gray-700">
                        {getAmenityIcon(amenity)}
                        <span className="text-xs capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Runs On */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-gray-600">Runs On:</span>
                  <div className="flex gap-2">
                    {train.runsOn.map((day) => (
                      <span key={day} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Classes */}
                <div className="space-y-3">
                  {Object.entries(train.classes).map(([classType, details]) => (
                    <div key={classType} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <Armchair className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">{classType}</div>
                          <div className="text-sm text-gray-600">
                            {details.available > 0 ? (
                              <span className="text-green-600 font-semibold">
                                {details.available} seats available
                              </span>
                            ) : (
                              <span className="text-red-600 font-semibold">Fully Booked</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-2xl font-bold text-gray-800">
                            <IndianRupee className="w-6 h-6" />
                            {details.price}
                          </div>
                          <div className="text-xs text-gray-500">per person</div>
                        </div>
                        <button
                          onClick={() => setSelectedTrain({ ...train, selectedClass: classType })}
                          disabled={details.available === 0}
                          className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                            details.available > 0
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {details.available > 0 ? (
                            <>
                              <span>BOOK NOW</span>
                              <ChevronRight className="w-5 h-5" />
                            </>
                          ) : (
                            <span>SOLD OUT</span>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedTrain && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Complete Booking</h3>
                <button
                  onClick={() => setSelectedTrain(null)}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Train Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <h4 className="font-bold text-xl text-gray-800 mb-4">Journey Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Train:</span>
                    <span className="font-bold text-gray-800">{selectedTrain.name} (#{selectedTrain.number})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-bold text-gray-800">{selectedTrain.from} ({selectedTrain.departureTime})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-bold text-gray-800">{selectedTrain.to} ({selectedTrain.arrivalTime})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-bold text-gray-800">{new Date(journeyDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Class:</span>
                    <span className="font-bold text-gray-800">{selectedTrain.selectedClass}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t-2 border-blue-200">
                    <span className="text-gray-600 text-lg">Total Fare:</span>
                    <div className="flex items-center gap-1 text-2xl font-bold text-blue-600">
                      <IndianRupee className="w-6 h-6" />
                      {selectedTrain.classes[selectedTrain.selectedClass].price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Details */}
              <div>
                <h4 className="font-bold text-xl text-gray-800 mb-4">Passenger Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Enter passenger name"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        placeholder="Age"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors cursor-pointer">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h4 className="font-bold text-xl text-gray-800 mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Enter mobile number"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">Payment Method</h4>
                </div>
                <div className="space-y-3">
                  {['Credit/Debit Card', 'UPI', 'Net Banking', 'Wallet'].map((method) => (
                    <label key={method} className="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-gray-200 hover:border-green-400 cursor-pointer transition-all duration-300">
                      <input type="radio" name="payment" className="w-5 h-5 accent-green-600" />
                      <span className="font-semibold text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                <input type="checkbox" className="w-5 h-5 mt-0.5 accent-blue-600" />
                <p className="text-sm text-gray-700">
                  I agree to the <span className="font-bold text-blue-600 cursor-pointer hover:underline">Terms & Conditions</span> and <span className="font-bold text-blue-600 cursor-pointer hover:underline">Cancellation Policy</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedTrain(null)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    alert('Booking Confirmed! 🎉');
                    setSelectedTrain(null);
                  }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>CONFIRM BOOKING</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainBookingPage;