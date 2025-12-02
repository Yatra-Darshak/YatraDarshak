import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Shield,
  X,
  Plus,
  Minus,
  CheckCircle,
  Search,
  ChevronRight,
  Hotel,
  Car,
  Utensils,
  Camera,
  Award,
  TrendingUp,
  IndianRupee,
  Info,
  Heart,
  MapPinned,
  Plane,
  Sun,
  Mountain,
  Palmtree,
  Waves,
  Navigation,
  Package,
  Coffee,
  Compass,
  Filter
} from "lucide-react";
import React, { useState } from "react";

const HolidayBookingPage = () => {
  const destinations = [
    "Andaman & Nicobar Islands",
    "Delhi",
    "Goa",
    "Gujarat",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Kerala",
    "Ladakh",
    "Rajasthan",
    "Sikkim",
    "Uttarakhand",
  ];

  const [destination, setDestination] = useState("Goa");
  const [checkInDate, setCheckInDate] = useState("2025-12-15");
  const [nights, setNights] = useState(3);
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showTravelerModal, setShowTravelerModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [filterType, setFilterType] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Goa Beach Paradise',
      destination: 'Goa',
      duration: '3 Nights / 4 Days',
      price: 18500,
      images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'],
      rating: 4.8,
      reviews: 2845,
      type: 'Beach',
      badge: 'Best Seller',
      inclusions: ['3★ Hotel Stay', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours', 'Water Sports'],
      highlights: ['North & South Goa Tour', 'Dudhsagar Waterfalls', 'Beach Activities', 'Goan Cuisine Experience'],
      hotels: ['Resort Rio', 'The Crown Hotel'],
      meals: 'Breakfast included',
      transport: 'Private Cab',
      travelers: 'For 2 Adults'
    },
    {
      id: 2,
      name: 'Himachal Adventure Trek',
      destination: 'Himachal Pradesh',
      duration: '4 Nights / 5 Days',
      price: 24500,
      images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800'],
      rating: 4.9,
      reviews: 3210,
      type: 'Adventure',
      badge: 'Premium',
      inclusions: ['4★ Hotel Stay', 'All Meals', 'Airport Transfers', 'Trekking Guide', 'Equipment Rental'],
      highlights: ['Manali Sightseeing', 'Solang Valley Trek', 'Rohtang Pass', 'Local Culture Experience'],
      hotels: ['Snow Valley Resort', 'Mountain Retreat'],
      meals: 'All meals included',
      transport: 'Private Volvo',
      travelers: 'For 2 Adults'
    },
    {
      id: 3,
      name: 'Kerala Backwaters Escape',
      destination: 'Kerala',
      duration: '3 Nights / 4 Days',
      price: 22000,
      images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800'],
      rating: 4.7,
      reviews: 1967,
      type: 'Nature',
      badge: 'Romantic',
      inclusions: ['Houseboat Stay', 'All Meals', 'Airport Transfers', 'Backwater Cruise', 'Ayurvedic Spa'],
      highlights: ['Alleppey Houseboat', 'Munnar Tea Gardens', 'Kathakali Show', 'Kerala Cuisine'],
      hotels: ['Luxury Houseboat', 'Hill Resort Munnar'],
      meals: 'All meals included',
      transport: 'Private Car',
      travelers: 'For 2 Adults'
    },
    {
      id: 4,
      name: 'Rajasthan Royal Heritage',
      destination: 'Rajasthan',
      duration: '5 Nights / 6 Days',
      price: 32500,
      images: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800'],
      rating: 4.9,
      reviews: 2543,
      type: 'Cultural',
      badge: 'Luxury',
      inclusions: ['5★ Heritage Hotel', 'All Meals', 'Airport Transfers', 'Private Guide', 'Camel Safari'],
      highlights: ['Jaipur City Palace', 'Udaipur Lake Palace', 'Jodhpur Fort', 'Desert Safari'],
      hotels: ['Heritage Palace Hotel', 'Lake View Resort'],
      meals: 'Breakfast & Dinner',
      transport: 'Private AC Car',
      travelers: 'For 2 Adults'
    },
    {
      id: 5,
      name: 'Ladakh High Altitude',
      destination: 'Ladakh',
      duration: '6 Nights / 7 Days',
      price: 35000,
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'],
      rating: 4.8,
      reviews: 1834,
      type: 'Adventure',
      badge: 'Thrilling',
      inclusions: ['Hotel & Camps', 'All Meals', 'Leh Transfer', 'Oxygen Support', 'Permits & Guide'],
      highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Monasteries Tour'],
      hotels: ['Leh Palace View', 'Nubra Valley Camps'],
      meals: 'All meals included',
      transport: 'SUV/Tempo Traveller',
      travelers: 'For 2 Adults'
    },
    {
      id: 6,
      name: 'Sikkim Mountain Retreat',
      destination: 'Sikkim',
      duration: '4 Nights / 5 Days',
      price: 19500,
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'],
      rating: 4.6,
      reviews: 1456,
      type: 'Nature',
      badge: 'Family Special',
      inclusions: ['3★ Hotel Stay', 'Breakfast & Dinner', 'Gangtok Transfer', 'Cable Car Ride', 'Permit Assistance'],
      highlights: ['Tsomgo Lake', 'Nathula Pass', 'Gangtok City Tour', 'Buddhist Monasteries'],
      hotels: ['Mountain View Resort', 'Gangtok Heights'],
      meals: 'Breakfast & Dinner',
      transport: 'Shared Vehicle',
      travelers: 'For 2 Adults'
    }
  ];

  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const getCheckOutDate = () => {
    const checkIn = new Date(checkInDate);
    checkIn.setDate(checkIn.getDate() + nights);
    return checkIn.toISOString().split("T")[0];
  };

  const handleSearch = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Premium": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Romantic": return "bg-gradient-to-r from-pink-500 to-rose-500";
      case "Luxury": return "bg-gradient-to-r from-purple-500 to-indigo-500";
      case "Thrilling": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Family Special": return "bg-gradient-to-r from-yellow-500 to-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Beach": return <Waves className="w-5 h-5" />;
      case "Adventure": return <Mountain className="w-5 h-5" />;
      case "Nature": return <Palmtree className="w-5 h-5" />;
      case "Cultural": return <Compass className="w-5 h-5" />;
      default: return <Sun className="w-5 h-5" />;
    }
  };

  const filteredAndSortedPackages = [...packages]
    .filter(pkg => {
      if (filterType !== 'all' && pkg.type !== filterType) return false;
      if (filterPrice !== 'all') {
        if (filterPrice === 'budget' && pkg.price > 20000) return false;
        if (filterPrice === 'mid' && (pkg.price < 20000 || pkg.price > 30000)) return false;
        if (filterPrice === 'luxury' && pkg.price < 30000) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.reviews - a.reviews;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  if (!showResults) {
    // Main Search Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Discover Your Dream Holiday
            </h1>
            <p className="text-xl text-gray-600">Curated packages with hotels, meals & sightseeing included</p>
          </div>

          {/* Main Search Form */}
          <div className="bg-white rounded-3xl shadow-2xl mb-12 overflow-hidden border-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              {/* Destination */}
              <div className="p-6 hover:bg-purple-50 transition-colors cursor-pointer">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Where to?
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                >
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
                <div className="text-sm text-gray-500 mt-1">Select destination</div>
              </div>

              {/* Check-in */}
              <div className="p-6 hover:bg-purple-50 transition-colors cursor-pointer">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
                <div className="text-sm text-gray-500 mt-1">{getDayOfWeek(checkInDate)}</div>
              </div>

              {/* Nights */}
              <div className="p-6 hover:bg-purple-50 transition-colors">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Duration
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-2xl font-bold text-gray-800 w-12 text-center">{nights}</span>
                  <button
                    onClick={() => setNights(nights + 1)}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-500 mt-1">{nights} Night{nights > 1 ? 's' : ''}</div>
              </div>

              {/* Travelers */}
              <div 
                className="p-6 hover:bg-purple-50 transition-colors cursor-pointer"
                onClick={() => setShowTravelerModal(true)}
              >
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <Users className="w-4 h-4 inline mr-1" />
                  Travelers & Rooms
                </label>
                <div className="text-lg font-bold text-gray-800">
                  {travelers.adults + travelers.children} Traveler{travelers.adults + travelers.children > 1 ? 's' : ''}
                </div>
                <div className="text-sm text-gray-500 mt-1">{travelers.rooms} Room{travelers.rooms > 1 ? 's' : ''}</div>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white text-2xl font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
            >
              <Search className="w-6 h-6" />
              <span>SEARCH PACKAGES</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Why Book With Us */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
              Why Book Your Holiday With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Secure Booking</h3>
                <p className="text-sm text-gray-600">100% safe payment & data protection</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Best Prices</h3>
                <p className="text-sm text-gray-600">Lowest package rates guaranteed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Travel assistance anytime</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Verified Hotels</h3>
                <p className="text-sm text-gray-600">Handpicked trusted properties</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-purple-100">Holiday Packages</div>
            </div>
            <div className="text-center border-l border-r border-purple-400">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-100">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Traveler Modal */}
        {showTravelerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">Select Travelers</h3>
                <button
                  onClick={() => setShowTravelerModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">Adults</div>
                    <div className="text-sm text-gray-500">12+ years</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setTravelers({...travelers, adults: Math.max(1, travelers.adults - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.adults}</span>
                    <button
                      onClick={() => setTravelers({...travelers, adults: Math.min(10, travelers.adults + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">Children</div>
                    <div className="text-sm text-gray-500">2-12 years</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setTravelers({...travelers, children: Math.max(0, travelers.children - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.children}</span>
                    <button
                      onClick={() => setTravelers({...travelers, children: Math.min(10, travelers.children + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">Rooms</div>
                    <div className="text-sm text-gray-500">Select rooms</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setTravelers({...travelers, rooms: Math.max(1, travelers.rooms - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.rooms}</span>
                    <button
                      onClick={() => setTravelers({...travelers, rooms: Math.min(5, travelers.rooms + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowTravelerModal(false)}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  DONE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Results Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold text-gray-800">{destination}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-800">
                  {new Date(checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold text-gray-800">{nights} Night{nights > 1 ? 's' : ''}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-800">{travelers.adults + travelers.children} Travelers</span>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                MODIFY
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 border-2 border-gray-100">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-bold text-gray-700">Type:</span>
              <button
                onClick={() => setFilterType("all")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterType === "all" ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All
              </button>
              {['Beach', 'Adventure', 'Nature', 'Cultural'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterType === type ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-700">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl bg-gray-100 border-none outline-none text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {filteredAndSortedPackages.length} Package{filteredAndSortedPackages.length !== 1 ? 's' : ''} Found
          </h2>
          <p className="text-gray-600">Best holiday packages for {destination}</p>
        </div>

        {/* Package Cards */}
        <div className="space-y-6">
          {filteredAndSortedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-purple-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={pkg.images[0]}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${getBadgeColor(pkg.badge)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}>
                    <Award className="w-4 h-4" />
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-800 shadow-lg flex items-center gap-2">
                    {getTypeIcon(pkg.type)}
                    {pkg.type}
                  </div>
                </div>

                {/* Details Section */}
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPinned className="w-4 h-4" />
                          {pkg.destination}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-bold text-gray-800">{pkg.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">({pkg.reviews.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                    <button
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Heart className="w-5 h-5 text-gray-400 group-hover:text-pink-500 group-hover:fill-pink-500 transition-all duration-300" />
                    </button>
                  </div>

                  {/* Key Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <Hotel className="w-5 h-5 text-blue-600 mb-1" />
                      <div className="text-xs text-gray-600">Hotels</div>
                      <div className="text-sm font-bold text-gray-800">{pkg.hotels[0]}</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3">
                      <Utensils className="w-5 h-5 text-orange-600 mb-1" />
                      <div className="text-xs text-gray-600">Meals</div>
                      <div className="text-sm font-bold text-gray-800">{pkg.meals}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <Car className="w-5 h-5 text-green-600 mb-1" />
                      <div className="text-xs text-gray-600">Transport</div>
                      <div className="text-sm font-bold text-gray-800">{pkg.transport}</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <Users className="w-5 h-5 text-purple-600 mb-1" />
                      <div className="text-xs text-gray-600">Package</div>
                      <div className="text-sm font-bold text-gray-800">{pkg.travelers}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-purple-500" />
                      Tour Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.slice(0, 4).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Package Inclusions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.inclusions.map((inclusion, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {inclusion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Book */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Starting from</div>
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-6 h-6 text-gray-800" />
                        <span className="text-3xl font-bold text-gray-800">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="px-6 py-3 border-2 border-purple-500 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 flex items-center gap-2"
                      >
                        <Info className="w-5 h-5" />
                        VIEW DETAILS
                      </button>
                      <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                        BOOK NOW
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedPackages.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No packages found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
            <button
              onClick={() => {
                setFilterType('all');
                setFilterPrice('all');
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </div>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl my-8">
            <div className="relative">
              <img
                src={selectedPackage.images[0]}
                alt={selectedPackage.name}
                className="w-full h-72 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 transition-all flex items-center justify-center shadow-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <div className={`absolute top-4 left-4 ${getBadgeColor(selectedPackage.badge)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}>
                <Award className="w-4 h-4" />
                {selectedPackage.badge}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedPackage.name}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-green-100 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-800">{selectedPackage.rating}</span>
                </div>
                <span className="text-gray-600">({selectedPackage.reviews.toLocaleString()} reviews)</span>
                <span className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {selectedPackage.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-purple-500" />
                    Tour Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-purple-500" />
                    Package Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {selectedPackage.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Hotel className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="text-sm text-gray-600">Hotels</div>
                    <div className="font-bold text-gray-800">{selectedPackage.hotels.join(', ')}</div>
                  </div>
                  <div>
                    <Utensils className="w-6 h-6 text-orange-600 mb-2" />
                    <div className="text-sm text-gray-600">Meals</div>
                    <div className="font-bold text-gray-800">{selectedPackage.meals}</div>
                  </div>
                  <div>
                    <Car className="w-6 h-6 text-green-600 mb-2" />
                    <div className="text-sm text-gray-600">Transport</div>
                    <div className="font-bold text-gray-800">{selectedPackage.transport}</div>
                  </div>
                  <div>
                    <Users className="w-6 h-6 text-purple-600 mb-2" />
                    <div className="text-sm text-gray-600">Package For</div>
                    <div className="font-bold text-gray-800">{selectedPackage.travelers}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Total Package Price</div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-7 h-7 text-gray-800" />
                    <span className="text-4xl font-bold text-gray-800">
                      {selectedPackage.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600">per person</span>
                  </div>
                </div>
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                  BOOK NOW
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidayBookingPage;