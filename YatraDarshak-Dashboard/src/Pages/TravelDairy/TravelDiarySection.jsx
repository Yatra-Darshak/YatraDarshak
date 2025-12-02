import React, { useState } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Calendar, 
  Clock,
  Image,
  Video,
  Camera,
  Plus,
  Search,
  Filter,
  Heart,
  Share2,
  Eye,
  MessageCircle,
  TrendingUp,
  Globe,
  Map,
  Navigation,
  ChevronRight,
  Star,
  Download,
  Edit3,
  Bookmark,
  Users,
  Award,
  Compass
} from 'lucide-react';

const TravelDiary = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    { id: 'all', label: 'All Diaries', icon: BookOpen },
    { id: 'recent', label: 'Recent Trips', icon: Clock },
    { id: 'popular', label: 'Popular', icon: TrendingUp },
    { id: 'saved', label: 'Saved', icon: Bookmark }
  ];

  const diaryEntries = [
    {
      id: 1,
      title: "Magical Manali: A Winter Wonderland",
      destination: "Manali, Himachal Pradesh",
      author: "Priya Sharma",
      authorAvatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0D8ABC&color=fff",
      date: "15 Dec 2024",
      duration: "5 Days",
      coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      likes: 234,
      views: 1520,
      comments: 45,
      tags: ["Mountains", "Adventure", "Winter"],
      featured: true
    },
    {
      id: 2,
      title: "Spiritual Journey Through Varanasi",
      destination: "Varanasi, Uttar Pradesh",
      author: "Rahul Verma",
      authorAvatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=14B8A6&color=fff",
      date: "10 Dec 2024",
      duration: "3 Days",
      coverImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
      likes: 189,
      views: 980,
      comments: 32,
      tags: ["Spiritual", "Culture", "Heritage"]
    },
    {
      id: 3,
      title: "Beach Paradise: Goa Diaries",
      destination: "Goa",
      author: "Anjali Desai",
      authorAvatar: "https://ui-avatars.com/api/?name=Anjali+Desai&background=F59E0B&color=fff",
      date: "8 Dec 2024",
      duration: "7 Days",
      coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      likes: 345,
      views: 2100,
      comments: 67,
      tags: ["Beach", "Party", "Relaxation"]
    },
    {
      id: 4,
      title: "Royal Rajasthan: Palaces & Forts",
      destination: "Jaipur, Rajasthan",
      author: "Vikram Singh",
      authorAvatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=EC4899&color=fff",
      date: "5 Dec 2024",
      duration: "4 Days",
      coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      likes: 267,
      views: 1340,
      comments: 51,
      tags: ["Heritage", "Royal", "Architecture"]
    },
    {
      id: 5,
      title: "Backwaters Bliss in Kerala",
      destination: "Alleppey, Kerala",
      author: "Meera Nair",
      authorAvatar: "https://ui-avatars.com/api/?name=Meera+Nair&background=8B5CF6&color=fff",
      date: "2 Dec 2024",
      duration: "6 Days",
      coverImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      likes: 298,
      views: 1670,
      comments: 58,
      tags: ["Nature", "Houseboat", "Peaceful"]
    },
    {
      id: 6,
      title: "Leh-Ladakh: The Ultimate Road Trip",
      destination: "Leh-Ladakh, J&K",
      author: "Arjun Kapoor",
      authorAvatar: "https://ui-avatars.com/api/?name=Arjun+Kapoor&background=EF4444&color=fff",
      date: "28 Nov 2024",
      duration: "10 Days",
      coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      likes: 412,
      views: 2890,
      comments: 89,
      tags: ["Adventure", "Road Trip", "Mountains"],
      featured: true
    }
  ];

  const stats = [
    { icon: BookOpen, value: "10K+", label: "Travel Stories" },
    { icon: Users, value: "25K+", label: "Active Travelers" },
    { icon: MapPin, value: "500+", label: "Destinations" },
    { icon: Award, value: "1M+", label: "Total Views" }
  ];

  const features = [
    {
      icon: Edit3,
      title: "Daily Activity Record",
      description: "Automatic travel diary logging each day's movements, places visited, and experiences"
    },
    {
      icon: Map,
      title: "Interactive Map View",
      description: "Visual timeline of your routes, stays, and all the places you've explored"
    },
    {
      icon: Camera,
      title: "Multimedia Memories",
      description: "Upload photos, videos, and notes to create rich, immersive travel stories"
    },
    {
      icon: Globe,
      title: "Share & Inspire",
      description: "Connect with fellow travelers, share experiences, and inspire others"
    }
  ];

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
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
              <BookOpen className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-semibold text-teal-200">Travel Diary</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Your Journey, Your Story
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Document every moment, share unforgettable experiences, and inspire fellow travelers with your adventures
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <Plus className="w-5 h-5" />
                Create New Diary
              </button>
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
                <Compass className="w-5 h-5" />
                Explore Stories
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                  fill="rgb(248 250 252)" />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Smart Travel Diary Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by AI to automatically capture and organize your travel memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-teal-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations, travelers, or experiences..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3 overflow-x-auto w-full lg:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Diary Entries Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diaryEntries.map((entry) => (
            <div key={entry.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={entry.coverImage}
                  alt={entry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {entry.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      Featured
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-teal-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{entry.destination}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {entry.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <img
                    src={entry.authorAvatar}
                    alt={entry.author}
                    className="w-10 h-10 rounded-full border-2 border-teal-200"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{entry.author}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {entry.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {entry.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      {entry.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      {entry.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {entry.views}
                    </span>
                  </div>
                  <button className="text-teal-600 hover:text-teal-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Read More Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  Read Full Story
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            Load More Stories
          </button>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Start Your Travel Diary Today</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Automatically log your travels, create beautiful memories, and inspire millions of travelers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <Plus className="w-5 h-5" />
                Create Your First Entry
              </button>
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TravelDiary;