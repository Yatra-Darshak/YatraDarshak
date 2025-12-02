
import React, { useState } from 'react';
import { 
  Heart,
  MapPin,
  Clock,
  IndianRupee,
  Users,
  Calendar,
  Star,
  ChevronRight,
  Search,
  Filter,
  Sparkles,
  Mountain,
  Church,
  UtensilsCrossed,
  Hotel,
  Camera,
  Sunrise,
  Sunset,
  CloudRain,
  Sun,
  X,
  Navigation,
  Phone,
  Share2,
  Download,
  Route,
  TrendingUp,
  Award,
  Eye,
  Ticket,
  Info,
  Globe,
  Leaf
} from 'lucide-react';

const SavedPlaces = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const savedPlaces = {
    all: [
      {
        id: 1,
        name: 'Taj Mahal',
        location: 'Agra, Uttar Pradesh',
        category: 'monument',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
        rating: 4.8,
        reviews: 12543,
        entryFee: 50,
        foreignerFee: 1300,
        timing: '6:00 AM - 6:30 PM',
        closedOn: 'Friday',
        duration: '2-3 hours',
        bestTime: 'October to March',
        bestFor: ['Couples', 'History Lovers', 'Photography'],
        weather: { temp: 28, condition: 'Clear' },
        nearby: {
          hotels: 245,
          restaurants: 180,
          distance: '2.5 km'
        },
        description: 'Iconic white marble mausoleum, UNESCO World Heritage Site',
        highlights: ['Sunrise View', 'Mughal Architecture', 'Gardens', 'Museum'],
        tips: ['Visit early morning for fewer crowds', 'Book tickets online', 'No photography inside main chamber'],
        coordinates: { lat: 27.1751, lng: 78.0421 },
        savedDate: '2024-11-15',
        visited: false
      },
      {
        id: 2,
        name: 'Golden Temple',
        location: 'Amritsar, Punjab',
        category: 'temple',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80',
        rating: 4.9,
        reviews: 8932,
        entryFee: 0,
        foreignerFee: 0,
        timing: 'Open 24 hours',
        closedOn: 'Never',
        duration: '2-4 hours',
        bestTime: 'October to March',
        bestFor: ['Spiritual Seekers', 'Families', 'Solo Travelers'],
        weather: { temp: 32, condition: 'Sunny' },
        nearby: {
          hotels: 156,
          restaurants: 95,
          distance: '1 km'
        },
        description: 'Sacred Sikh shrine with stunning gold-plated architecture',
        highlights: ['Free Langar', 'Evening Ceremony', 'Sacred Pool', 'Night Illumination'],
        tips: ['Cover head before entering', 'Free community kitchen serves all', 'Visit during evening for Palki Sahib ceremony'],
        coordinates: { lat: 31.6200, lng: 74.8765 },
        savedDate: '2024-11-10',
        visited: false
      },
      {
        id: 3,
        name: 'Goa Beaches',
        location: 'Goa',
        category: 'beach',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
        rating: 4.6,
        reviews: 15678,
        entryFee: 0,
        foreignerFee: 0,
        timing: 'Open all day',
        closedOn: 'Never',
        duration: 'Full day',
        bestTime: 'November to February',
        bestFor: ['Couples', 'Friends', 'Water Sports'],
        weather: { temp: 30, condition: 'Partly Cloudy' },
        nearby: {
          hotels: 420,
          restaurants: 380,
          distance: '0 km'
        },
        description: 'Pristine beaches with water sports and vibrant nightlife',
        highlights: ['Water Sports', 'Beach Shacks', 'Sunset Views', 'Nightlife'],
        tips: ['Best beaches: Baga, Calangute, Palolem', 'Rent scooter for beach hopping', 'Try seafood at beach shacks'],
        coordinates: { lat: 15.2993, lng: 74.1240 },
        savedDate: '2024-11-08',
        visited: true,
        visitDate: '2024-11-08'
      },
      {
        id: 4,
        name: 'Jaipur City Palace',
        location: 'Jaipur, Rajasthan',
        category: 'palace',
        image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09f?w=800&q=80',
        rating: 4.7,
        reviews: 9234,
        entryFee: 200,
        foreignerFee: 700,
        timing: '9:30 AM - 5:00 PM',
        closedOn: 'Holi & Diwali',
        duration: '2-3 hours',
        bestTime: 'October to March',
        bestFor: ['History Buffs', 'Architecture Lovers', 'Families'],
        weather: { temp: 35, condition: 'Hot' },
        nearby: {
          hotels: 189,
          restaurants: 145,
          distance: '1.5 km'
        },
        description: 'Royal residence showcasing Rajasthani and Mughal architecture',
        highlights: ['Royal Museums', 'Peacock Gate', 'Textile Gallery', 'Art Collections'],
        tips: ['Combine with Jantar Mantar visit', 'Wear comfortable shoes', 'Audio guide available'],
        coordinates: { lat: 26.9258, lng: 75.8237 },
        savedDate: '2024-11-05',
        visited: false
      },
      {
        id: 5,
        name: 'Varanasi Ghats',
        location: 'Varanasi, Uttar Pradesh',
        category: 'spiritual',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
        rating: 4.8,
        reviews: 11245,
        entryFee: 0,
        foreignerFee: 0,
        timing: 'Open 24 hours',
        closedOn: 'Never',
        duration: '3-4 hours',
        bestTime: 'October to March',
        bestFor: ['Spiritual Seekers', 'Photographers', 'Culture Enthusiasts'],
        weather: { temp: 26, condition: 'Pleasant' },
        nearby: {
          hotels: 234,
          restaurants: 167,
          distance: '0.5 km'
        },
        description: 'Ancient ghats along sacred Ganges river with spiritual ceremonies',
        highlights: ['Ganga Aarti', 'Boat Rides', 'Ancient Temples', 'Street Food'],
        tips: ['Witness sunrise from boat', 'Evening Ganga Aarti at Dashashwamedh Ghat', 'Try famous Kashi chaat'],
        coordinates: { lat: 25.3176, lng: 82.9739 },
        savedDate: '2024-10-28',
        visited: false
      },
      {
        id: 6,
        name: 'Leh-Ladakh',
        location: 'Ladakh, Jammu & Kashmir',
        category: 'adventure',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        rating: 4.9,
        reviews: 18234,
        entryFee: 0,
        foreignerFee: 0,
        timing: 'Open all day',
        closedOn: 'Winter (Nov-April)',
        duration: '7-10 days',
        bestTime: 'May to September',
        bestFor: ['Adventure Lovers', 'Bikers', 'Nature Enthusiasts'],
        weather: { temp: 15, condition: 'Cool' },
        nearby: {
          hotels: 98,
          restaurants: 67,
          distance: '0 km'
        },
        description: 'High-altitude desert with stunning landscapes and monasteries',
        highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Monasteries'],
        tips: ['Acclimatize for 2 days in Leh', 'Carry altitude sickness medication', 'Inner Line Permit required for some areas'],
        coordinates: { lat: 34.1526, lng: 77.5771 },
        savedDate: '2024-10-20',
        visited: false
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Places', icon: MapPin, count: savedPlaces.all.length },
    { id: 'monument', name: 'Monuments', icon: Church, count: savedPlaces.all.filter(p => p.category === 'monument').length },
    { id: 'temple', name: 'Temples', icon: Church, count: savedPlaces.all.filter(p => p.category === 'temple').length },
    { id: 'beach', name: 'Beaches', icon: Mountain, count: savedPlaces.all.filter(p => p.category === 'beach').length },
    { id: 'adventure', name: 'Adventure', icon: Mountain, count: savedPlaces.all.filter(p => p.category === 'adventure').length },
  ];

  const stats = [
    { icon: Heart, value: savedPlaces.all.length, label: "Saved Places", color: "from-pink-500 to-rose-600" },
    { icon: Eye, value: savedPlaces.all.filter(p => p.visited).length, label: "Visited", color: "from-teal-500 to-blue-600" },
    { icon: Route, value: "3", label: "Planned Trips", color: "from-purple-500 to-indigo-600" },
    { icon: Award, value: "12", label: "Destinations", color: "from-amber-500 to-orange-600" }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'monument': return Church;
      case 'temple': return Church;
      case 'beach': return Mountain;
      case 'palace': return Church;
      case 'spiritual': return Church;
      case 'adventure': return Mountain;
      default: return MapPin;
    }
  };

  const getWeatherIcon = (condition) => {
    switch(condition.toLowerCase()) {
      case 'clear': return Sun;
      case 'sunny': return Sun;
      case 'cloudy':
      case 'partly cloudy': return CloudRain;
      case 'rainy': return CloudRain;
      default: return Sun;
    }
  };

  const filteredPlaces = savedPlaces.all.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || place.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-6">
              <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
              <span className="text-sm font-bold text-teal-200 tracking-widest">
                SAVED PLACES
              </span>
              <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: "Georgia, serif" }}>
              Your Dream Destinations
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              All your favorite places in one place. Plan, explore, and make memories.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                  fill="rgb(248 250 252)" />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === category.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => {
            const CategoryIcon = getCategoryIcon(place.category);
            const WeatherIcon = getWeatherIcon(place.weather.condition);
            
            return (
              <div key={place.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Image */}
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {place.visited && (
                      <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Visited
                      </span>
                    )}
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full capitalize">
                      {place.category}
                    </span>
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                  </button>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">{place.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin className="w-4 h-4" />
                      {place.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating & Weather */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-bold text-gray-800">{place.rating}</span>
                      <span className="text-sm text-gray-500">({place.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <WeatherIcon className="w-4 h-4" />
                      {place.weather.temp}°C
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span className="font-medium">{place.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      <span className="font-medium">
                        {place.entryFee === 0 ? 'Free Entry' : `₹${place.entryFee}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">{place.bestTime}</span>
                    </div>
                  </div>

                  {/* Best For Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.bestFor.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200">
                        {tag}
                      </span>
                    ))}
                    {place.bestFor.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        +{place.bestFor.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setSelectedPlace(place);
                        setShowDetailsModal(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-teal-500 transition-all">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPlaces.length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No places found</h3>
            <p className="text-gray-600 mb-6">Start exploring and save your favorite destinations!</p>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
              Explore Destinations
            </button>
          </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedPlace && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowDetailsModal(false)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header with Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <button 
                  onClick={() => setShowDetailsModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    {selectedPlace.name}
                  </h2>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{selectedPlace.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                    <Star className="w-6 h-6 text-amber-500 fill-amber-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedPlace.rating}</p>
                    <p className="text-xs text-gray-600">{selectedPlace.reviews} reviews</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <IndianRupee className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedPlace.entryFee === 0 ? 'Free' : `₹${selectedPlace.entryFee}`}
                    </p>
                    <p className="text-xs text-gray-600">Entry Fee</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-gray-800">{selectedPlace.duration}</p>
                    <p className="text-xs text-gray-600">Duration</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                    <Hotel className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedPlace.nearby.hotels}</p>
                    <p className="text-xs text-gray-600">Nearby Hotels</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-teal-600" />
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedPlace.description}</p>
                </div>

                {/* Timing & Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Best Time to Visit</span>
                    </div>
                    <p className="text-gray-700">{selectedPlace.bestTime}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedPlace.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                        <Camera className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Best For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlace.bestFor.map((category, index) => (
                      <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Travel Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-3">Travel Tips</h3>
                      <ul className="space-y-2">
                        {selectedPlace.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nearby Facilities */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    Nearby Facilities
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                      <Hotel className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">{selectedPlace.nearby.hotels}</p>
                      <p className="text-xs text-gray-600">Hotels</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                      <UtensilsCrossed className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">{selectedPlace.nearby.restaurants}</p>
                      <p className="text-xs text-gray-600">Restaurants</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <Navigation className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-800">{selectedPlace.nearby.distance}</p>
                      <p className="text-xs text-gray-600">Away</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                    <Route className="w-5 h-5" />
                    Plan Trip Here
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-teal-500 transition-all">
                    <Navigation className="w-5 h-5" />
                    Directions
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-teal-500 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plan Trip Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8" />
            <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
              Ready to Plan Your Journey?
            </h3>
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let our AI create a personalized itinerary for all your saved destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg">
              <Route className="w-5 h-5" />
              Create Itinerary with AI
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              <Globe className="w-5 h-5" />
              Explore More Places
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Route className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Smart Route Planning</h4>
            <p className="text-sm text-gray-600 mb-4">Connect all your saved places in the most efficient route</p>
            <button className="text-teal-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Plan Route <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Book Everything</h4>
            <p className="text-sm text-gray-600 mb-4">Hotels, transport, and tickets - all in one place</p>
            <button className="text-purple-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Start Booking <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Eco-Friendly Options</h4>
            <p className="text-sm text-gray-600 mb-4">Discover sustainable travel options for your destinations</p>
            <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Explore Green <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPlaces;