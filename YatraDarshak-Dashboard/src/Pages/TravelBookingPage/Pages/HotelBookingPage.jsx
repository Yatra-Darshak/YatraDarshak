import { 
  MapPin, 
  Calendar, 
  Users,
  Star,
  X,
  Plus,
  Minus,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  Search,
  Filter,
  ChevronRight,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Wind,
  Hotel,
  Award,
  ThumbsUp,
  TrendingUp,
  IndianRupee,
  Info,
  Heart,
  Share2,
  MapPinned,
  Building2
} from "lucide-react";
import React, { useState } from "react";

const HotelBookingPage = () => {
  const destinations = [
    "Andaman & Nicobar Islands",
    "Delhi",
    "Goa",
    "Gujarat",
    "Himachal Pradesh",
    "Jaipur",
    "Kerala",
    "Ladakh",
    "Maharashtra",
    "Mumbai",
    "Rajasthan",
    "Uttarakhand",
  ];

  const [location, setLocation] = useState('Goa');
  const [checkInDate, setCheckInDate] = useState('2025-12-20');
  const [checkOutDate, setCheckOutDate] = useState('2025-12-22');
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterRating, setFilterRating] = useState('all');

  const hotels = [
    {
      id: 1,
      name: 'The Leela Goa',
      location: 'Cavelossim Beach, South Goa',
      rating: 4.8,
      reviews: 3245,
      price: 12500,
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
      amenities: ['wifi', 'pool', 'spa', 'restaurant', 'gym', 'parking', 'ac', 'breakfast'],
      roomType: 'Deluxe Ocean View Room',
      badge: 'Luxury',
      distance: '2.5 km from beach',
      cancellation: 'Free cancellation till 24 hours',
      features: ['Beachfront Property', 'Private Beach', '5-Star Rating', 'Multiple Restaurants']
    },
    {
      id: 2,
      name: 'Taj Exotica Resort & Spa',
      location: 'Benaulim, South Goa',
      rating: 4.9,
      reviews: 4890,
      price: 15000,
      images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
      amenities: ['wifi', 'pool', 'spa', 'restaurant', 'gym', 'parking', 'ac', 'breakfast', 'bar'],
      roomType: 'Premium Suite with Balcony',
      badge: 'Premium',
      distance: '1 km from beach',
      cancellation: 'Free cancellation till 48 hours',
      features: ['Infinity Pool', 'Private Villas', 'Award Winning Spa', 'Golf Course']
    },
    {
      id: 3,
      name: 'Novotel Goa Resort',
      location: 'Candolim Beach, North Goa',
      rating: 4.5,
      reviews: 2156,
      price: 7500,
      images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'],
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'parking', 'ac', 'breakfast'],
      roomType: 'Superior Room Garden View',
      badge: 'Popular',
      distance: 'Beachfront',
      cancellation: 'Free cancellation till 24 hours',
      features: ['Family Friendly', 'Kids Club', 'Beach Activities', '24/7 Room Service']
    },
    {
      id: 4,
      name: 'Fortune Acron Regina',
      location: 'Candolim, North Goa',
      rating: 4.3,
      reviews: 1823,
      price: 5500,
      images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'],
      amenities: ['wifi', 'pool', 'restaurant', 'parking', 'ac', 'breakfast'],
      roomType: 'Classic Double Room',
      badge: 'Best Value',
      distance: '500 meters from beach',
      cancellation: 'Free cancellation till 24 hours',
      features: ['Budget Friendly', 'Central Location', 'Rooftop Pool', 'Local Cuisine']
    },
    {
      id: 5,
      name: 'Grand Hyatt Goa',
      location: 'Bambolim, North Goa',
      rating: 4.7,
      reviews: 2987,
      price: 10500,
      images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'],
      amenities: ['wifi', 'pool', 'spa', 'restaurant', 'gym', 'parking', 'ac', 'breakfast', 'bar'],
      roomType: 'Grand Deluxe Room',
      badge: 'Family Favorite',
      distance: '3 km from airport',
      cancellation: 'Free cancellation till 48 hours',
      features: ['Multiple Pools', 'Kids Activities', 'Convention Center', 'Casino']
    }
  ];

  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const calculateNights = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleSearch = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Luxury": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Premium": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Popular": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Best Value": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Family Favorite": return "bg-gradient-to-r from-yellow-500 to-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-5 h-5" />;
      case "pool": return <Waves className="w-5 h-5" />;
      case "spa": return <Wind className="w-5 h-5" />;
      case "restaurant": return <Utensils className="w-5 h-5" />;
      case "gym": return <Dumbbell className="w-5 h-5" />;
      case "parking": return <Car className="w-5 h-5" />;
      case "ac": return <Wind className="w-5 h-5" />;
      case "breakfast": return <Coffee className="w-5 h-5" />;
      case "bar": return <Coffee className="w-5 h-5" />;
      default: return null;
    }
  };

  const filteredAndSortedHotels = [...hotels]
    .filter(hotel => {
      if (filterPrice !== 'all') {
        if (filterPrice === 'budget' && hotel.price > 8000) return false;
        if (filterPrice === 'mid' && (hotel.price < 8000 || hotel.price > 12000)) return false;
        if (filterPrice === 'luxury' && hotel.price < 12000) return false;
      }
      if (filterRating !== 'all') {
        if (filterRating === '4.5+' && hotel.rating < 4.5) return false;
        if (filterRating === '4.7+' && hotel.rating < 4.7) return false;
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Hotel className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-gray-600">Book from 500,000+ hotels worldwide at the best prices</p>
          </div>

          {/* Main Search Form */}
          <div className="bg-white rounded-3xl shadow-2xl mb-12 overflow-hidden border-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              {/* Location */}
              <div className="p-6 hover:bg-blue-50 transition-colors cursor-pointer">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                >
                  {destinations.map((place, index) => (
                    <option key={index} value={place}>{place}</option>
                  ))}
                </select>
                <div className="text-sm text-gray-500 mt-1">Select destination</div>
              </div>

              {/* Check-in */}
              <div className="p-6 hover:bg-blue-50 transition-colors cursor-pointer">
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

              {/* Check-out */}
              <div className="p-6 hover:bg-blue-50 transition-colors cursor-pointer">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  min={checkInDate}
                  className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
                <div className="text-sm text-gray-500 mt-1">{getDayOfWeek(checkOutDate)}</div>
              </div>

              {/* Guests */}
              <div 
                className="p-6 hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => setShowGuestModal(true)}
              >
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  <Users className="w-4 h-4 inline mr-1" />
                  Guests & Rooms
                </label>
                <div className="text-lg font-bold text-gray-800">
                  {guests.adults + guests.children} Guest{guests.adults + guests.children > 1 ? 's' : ''}
                </div>
                <div className="text-sm text-gray-500 mt-1">{guests.rooms} Room{guests.rooms > 1 ? 's' : ''}</div>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-700 text-white text-2xl font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
            >
              <Search className="w-6 h-6" />
              <span>SEARCH HOTELS</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Why Book With Us */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
              Why Book With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Secure Booking</h3>
                <p className="text-sm text-gray-600">100% secure payment with SSL encryption</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Best Prices</h3>
                <p className="text-sm text-gray-600">Price match guarantee on all bookings</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Customer support anytime, anywhere</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">Get booking confirmation immediately</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-blue-100">Hotels Listed</div>
            </div>
            <div className="text-center border-l border-r border-blue-400">
              <div className="text-4xl font-bold mb-2">25M+</div>
              <div className="text-blue-100">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Guest Modal */}
        {showGuestModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">Guests & Rooms</h3>
                <button
                  onClick={() => setShowGuestModal(false)}
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
                    <div className="text-sm text-gray-500">Age 18+</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests({...guests, adults: Math.max(1, guests.adults - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.adults}</span>
                    <button
                      onClick={() => setGuests({...guests, adults: Math.min(10, guests.adults + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">Children</div>
                    <div className="text-sm text-gray-500">Age 0-17</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests({...guests, children: Math.max(0, guests.children - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.children}</span>
                    <button
                      onClick={() => setGuests({...guests, children: Math.min(10, guests.children + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">Rooms</div>
                    <div className="text-sm text-gray-500">Number of rooms</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests({...guests, rooms: Math.max(1, guests.rooms - 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.rooms}</span>
                    <button
                      onClick={() => setGuests({...guests, rooms: Math.min(5, guests.rooms + 1)})}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowGuestModal(false)}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold text-gray-800">{location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-800">
                  {new Date(checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(checkOutDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold text-gray-800">{calculateNights()} Night{calculateNights() > 1 ? 's' : ''}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-800">{guests.adults + guests.children} Guests, {guests.rooms} Rooms</span>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
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
              <span className="font-bold text-gray-700">Price:</span>
              <button
                onClick={() => setFilterPrice("all")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterPrice === "all" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterPrice("budget")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterPrice === "budget" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Under ₹8K
              </button>
              <button
                onClick={() => setFilterPrice("mid")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterPrice === "mid" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                ₹8K - ₹12K
              </button>
              <button
                onClick={() => setFilterPrice("luxury")}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterPrice === "luxury" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                ₹12K+
              </button>
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
          <h2 className="text-3xl font-bold mb-2">
            {filteredAndSortedHotels.length} Hotels Found in {location}
          </h2>
          <p className="text-blue-100 text-lg">
            {new Date(checkInDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {new Date(checkOutDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} • {calculateNights()} Night{calculateNights() > 1 ? 's' : ''} • {guests.adults + guests.children} Guests
          </p>
        </div>

        {/* Hotels List */}
        <div className="space-y-6">
          {filteredAndSortedHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
              <div className="flex flex-col md:flex-row">
                {/* Hotel Image */}
                <div className="relative md:w-80 h-64 md:h-auto flex-shrink-0">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  {hotel.badge && (
                    <div className={`absolute top-4 left-0 ${getBadgeColor(hotel.badge)} text-white px-4 py-1 text-xs font-bold flex items-center gap-2 rounded-r-full shadow-lg`}>
                      <Award className="w-3 h-3" />
                      {hotel.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Hotel Details */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPinned className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Building2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">{hotel.distance}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg">
                          <Star className="w-4 h-4 fill-white" />
                          <span className="text-lg font-bold">{hotel.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {hotel.reviews} reviews
                      </div>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Room Type</div>
                    <div className="font-bold text-gray-800">{hotel.roomType}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex flex-wrap gap-3">
                      {hotel.amenities.slice(0, 6).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                          {getAmenityIcon(amenity)}
                          <span className="capitalize font-semibold">{amenity}</span>
                        </div>
                      ))}
                      {hotel.amenities.length > 6 && (
                        <div className="flex items-center px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-700 font-semibold">
                          +{hotel.amenities.length - 6} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cancellation Policy */}
                  <div className="flex items-center gap-2 text-sm text-green-600 font-semibold mb-4">
                    <CheckCircle className="w-4 h-4" />
                    <span>{hotel.cancellation}</span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Price for {calculateNights()} night{calculateNights() > 1 ? 's' : ''}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-3xl font-bold text-gray-800">
                          <IndianRupee className="w-7 h-7" />
                          {(hotel.price * calculateNights() * guests.rooms).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">+ taxes & fees</div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedHotel(hotel)}
                        className="px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300"
                      >
                        VIEW DETAILS
                      </button>
                      <button
                        onClick={() => setSelectedHotel(hotel)}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                      >
                        <span>BOOK NOW</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{selectedHotel.name}</h3>
                  <p className="text-blue-100 mt-1 flex items-center gap-2">
                    <MapPinned className="w-4 h-4" />
                    {selectedHotel.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Booking Summary */}
              <div className="border-2 border-blue-200 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  Booking Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Hotel Name</span>
                    <span className="font-bold text-gray-800">{selectedHotel.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Room Type</span>
                    <span className="font-bold text-gray-800">{selectedHotel.roomType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Check-in Date</span>
                    <span className="font-bold text-gray-800">{new Date(checkInDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Check-out Date</span>
                    <span className="font-bold text-gray-800">{new Date(checkOutDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Duration</span>
                    <span className="font-bold text-gray-800">{calculateNights()} Night{calculateNights() > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Guests</span>
                    <span className="font-bold text-gray-800">{guests.adults} Adult{guests.adults > 1 ? 's' : ''}, {guests.children} Child{guests.children !== 1 ? 'ren' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Rooms</span>
                    <span className="font-bold text-gray-800">{guests.rooms} Room{guests.rooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Rating</span>
                    <span className="font-bold text-blue-600 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-blue-600" />
                      {selectedHotel.rating} ({selectedHotel.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Guest Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests (Optional)</label>
                    <textarea
                      placeholder="Any special requests or preferences..."
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Hotel Features */}
              <div className="border-2 border-green-200 rounded-2xl p-6 bg-green-50">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Hotel Features & Amenities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {selectedHotel.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-green-200">
                  <div className="flex flex-wrap gap-2">
                    {selectedHotel.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-sm text-gray-700 border border-green-200">
                        {getAmenityIcon(amenity)}
                        <span className="capitalize font-semibold">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 flex-1">
                    <p className="font-bold text-lg mb-3">Cancellation & Policies</p>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      <li>{selectedHotel.cancellation}</li>
                      <li>Check-in time: 2:00 PM | Check-out time: 11:00 AM</li>
                      <li>Valid photo ID proof required at check-in</li>
                      <li>Guests below 18 years must be accompanied by adults</li>
                      <li>Pets are not allowed unless specified</li>
                      <li>Smoking is prohibited in rooms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-blue-600" />
                  Price Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Room Price (₹{selectedHotel.price.toLocaleString()} × {calculateNights()} nights × {guests.rooms} rooms)</span>
                    <span className="font-bold text-gray-800">₹{(selectedHotel.price * calculateNights() * guests.rooms).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Taxes & Service Charges (18%)</span>
                    <span className="font-bold text-gray-800">₹{Math.round((selectedHotel.price * calculateNights() * guests.rooms) * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-blue-300 pt-4 mt-4">
                    <div className="flex justify-between items-center text-2xl">
                      <span className="font-bold text-gray-800">Total Amount</span>
                      <span className="font-bold text-blue-600 flex items-center gap-1">
                        <IndianRupee className="w-6 h-6" />
                        {Math.round((selectedHotel.price * calculateNights() * guests.rooms) * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-900 flex-1">
                    <p className="font-bold text-lg mb-3">Important Information</p>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                      <li>Booking confirmation will be sent via email within 10 minutes</li>
                      <li>Please carry valid ID proof at the time of check-in</li>
                      <li>Early check-in/late check-out subject to availability</li>
                      <li>Hotel reserves the right to admission</li>
                      <li>Rates are subject to change without prior notice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 mt-0.5 accent-blue-600" />
                  <span className="text-sm text-gray-700">
                    I have read and agree to the{' '}
                    <span className="font-bold text-blue-600 hover:underline cursor-pointer">Terms & Conditions</span>,{' '}
                    <span className="font-bold text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>, and{' '}
                    <span className="font-bold text-blue-600 hover:underline cursor-pointer">Cancellation Policy</span>.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    alert('Proceeding to secure payment... 🏨');
                    setSelectedHotel(null);
                  }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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

export default HotelBookingPage;