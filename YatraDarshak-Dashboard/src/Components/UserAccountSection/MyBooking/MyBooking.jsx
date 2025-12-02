import React, { useState } from 'react';
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  Share2,
  Eye,
  Phone,
  Mail,
  Hotel,
  Plane,
  Car,
  UtensilsCrossed,
  Sparkles,
  Filter,
  Search,
  ChevronRight,
  FileText,
  CreditCard,
  Star,
  Award,
  Navigation,
  Shield,
  Bell
} from 'lucide-react';

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const bookings = {
    upcoming: [
      {
        id: 'YD2024001',
        destination: 'Shimla, Himachal Pradesh',
        image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80',
        checkIn: '2024-12-25',
        checkOut: '2024-12-30',
        duration: '5 Days 4 Nights',
        travelers: 2,
        amount: 45000,
        status: 'confirmed',
        bookingDate: '2024-11-10',
        services: ['Hotel', 'Transport', 'Guide'],
        hotel: 'Wildflower Hall, Shimla',
        transport: 'Private Cab (Innova)',
        guide: 'Rajesh Kumar (Verified)',
        itinerary: ['Day 1: Arrival & Mall Road', 'Day 2: Kufri & Local Sightseeing', 'Day 3: Naldehra & Golf Course', 'Day 4: Chail & Nature Walk', 'Day 5: Departure'],
        contactPerson: 'Travel Desk: +91 98765 43210'
      },
      {
        id: 'YD2024002',
        destination: 'Udaipur, Rajasthan',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
        checkIn: '2025-01-15',
        checkOut: '2025-01-19',
        duration: '4 Days 3 Nights',
        travelers: 4,
        amount: 78000,
        status: 'pending',
        bookingDate: '2024-11-15',
        services: ['Hotel', 'Transport', 'Meals'],
        hotel: 'Taj Lake Palace, Udaipur',
        transport: 'Private Tempo Traveller',
        guide: 'Not included',
        itinerary: ['Day 1: City Palace & Lake Pichola', 'Day 2: Jagdish Temple & Saheliyon Ki Bari', 'Day 3: Kumbhalgarh Fort', 'Day 4: Shopping & Departure'],
        contactPerson: 'Travel Desk: +91 98765 43211'
      }
    ],
    completed: [
      {
        id: 'YD2023045',
        destination: 'Goa',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
        checkIn: '2024-11-08',
        checkOut: '2024-11-15',
        duration: '7 Days 6 Nights',
        travelers: 2,
        amount: 52000,
        status: 'completed',
        bookingDate: '2024-10-15',
        services: ['Hotel', 'Transport', 'Water Sports'],
        hotel: 'Taj Exotica, South Goa',
        transport: 'Self-drive Scooter',
        rating: 5,
        review: 'Amazing experience! Perfect blend of relaxation and adventure.'
      },
      {
        id: 'YD2023038',
        destination: 'Leh-Ladakh, J&K',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        checkIn: '2024-10-20',
        checkOut: '2024-10-30',
        duration: '10 Days 9 Nights',
        travelers: 3,
        amount: 95000,
        status: 'completed',
        bookingDate: '2024-09-10',
        services: ['Hotel', 'Transport', 'Guide', 'Meals'],
        hotel: 'Multiple Stays (Leh, Nubra, Pangong)',
        transport: 'Private SUV (Fortuner)',
        rating: 5,
        review: 'Life-changing journey! Best road trip ever.'
      }
    ],
    cancelled: [
      {
        id: 'YD2023028',
        destination: 'Kerala Backwaters',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
        checkIn: '2024-09-15',
        checkOut: '2024-09-20',
        duration: '5 Days 4 Nights',
        travelers: 2,
        amount: 42000,
        status: 'cancelled',
        bookingDate: '2024-08-20',
        cancellationDate: '2024-09-01',
        refundAmount: 38000,
        refundStatus: 'processed',
        reason: 'Personal Emergency'
      }
    ]
  };

  const stats = [
    { icon: CheckCircle2, value: "8", label: "Total Bookings", color: "from-teal-500 to-blue-600" },
    { icon: Calendar, value: "2", label: "Upcoming Trips", color: "from-blue-500 to-purple-600" },
    { icon: Award, value: "6", label: "Completed Trips", color: "from-green-500 to-emerald-600" },
    { icon: DollarSign, value: "₹3.2L", label: "Total Spent", color: "from-amber-500 to-orange-600" }
  ];

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', icon: Calendar, count: bookings.upcoming.length },
    { id: 'completed', label: 'Completed', icon: CheckCircle2, count: bookings.completed.length },
    { id: 'cancelled', label: 'Cancelled', icon: XCircle, count: bookings.cancelled.length }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'confirmed': return <CheckCircle2 className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

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
              <Sparkles className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-bold text-teal-200 tracking-widest">
                MY BOOKINGS
              </span>
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: "Georgia, serif" }}>
              Your Travel Bookings
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage all your trips, view itineraries, and track your travel journey
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
                placeholder="Search by destination, booking ID..."
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

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings[activeTab].map((booking) => (
            <div key={booking.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={booking.image}
                    alt={booking.destination}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 backdrop-blur-sm ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-2xl mb-1">{booking.destination}</h3>
                    <p className="text-white/80 text-sm">Booking ID: {booking.id}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Check-in/out */}
                    {booking.checkIn && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Check-in</p>
                            <p className="font-bold text-gray-800">{formatDate(booking.checkIn)}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Check-out</p>
                            <p className="font-bold text-gray-800">{formatDate(booking.checkOut)}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Duration */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-bold text-gray-800">{booking.duration}</p>
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Travelers</p>
                        <p className="font-bold text-gray-800">{booking.travelers} {booking.travelers === 1 ? 'Person' : 'People'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  {booking.services && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Included Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {booking.services.map((service, index) => (
                          <span key={index} className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rating (for completed) */}
                  {booking.rating && (
                    <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ))}
                        <span className="font-bold text-gray-800 ml-2">{booking.rating}.0</span>
                      </div>
                      {booking.review && (
                        <p className="text-sm text-gray-700 italic">"{booking.review}"</p>
                      )}
                    </div>
                  )}

                  {/* Cancellation Info */}
                  {booking.status === 'cancelled' && (
                    <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Cancelled on:</span> {formatDate(booking.cancellationDate)}
                      </p>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Refund Amount:</span> ₹{booking.refundAmount.toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Status:</span> 
                        <span className="ml-2 text-green-600">✓ {booking.refundStatus}</span>
                      </p>
                    </div>
                  )}

                  {/* Amount & Actions */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                      <p className="text-3xl font-bold text-gray-800">₹{booking.amount.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => setSelectedBooking(booking)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        <Eye className="w-5 h-5" />
                        View Details
                      </button>
                      {booking.status !== 'cancelled' && (
                        <>
                          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-teal-500 transition-all">
                            <Download className="w-5 h-5" />
                            Download
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-teal-500 transition-all">
                            <Share2 className="w-5 h-5" />
                            Share
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {bookings[activeTab].length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No bookings found</h3>
            <p className="text-gray-600 mb-6">Start planning your next adventure with YatraDarshak!</p>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
              Plan New Trip
            </button>
          </div>
        )}

        {/* Detailed Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedBooking(null)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "Georgia, serif" }}>
                  Booking Details
                </h2>
                <button 
                  onClick={() => setSelectedBooking(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Booking ID */}
                <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                  <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
                  <p className="text-2xl font-bold text-gray-800">{selectedBooking.id}</p>
                </div>

                {/* Hotel Info */}
                {selectedBooking.hotel && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <Hotel className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Accommodation</p>
                      <p className="text-gray-700">{selectedBooking.hotel}</p>
                    </div>
                  </div>
                )}

                {/* Transport Info */}
                {selectedBooking.transport && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <Car className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Transport</p>
                      <p className="text-gray-700">{selectedBooking.transport}</p>
                    </div>
                  </div>
                )}

                {/* Guide Info */}
                {selectedBooking.guide && (
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <Navigation className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Tour Guide</p>
                      <p className="text-gray-700">{selectedBooking.guide}</p>
                    </div>
                  </div>
                )}

                {/* Itinerary */}
                {selectedBooking.itinerary && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-teal-600" />
                      Day-wise Itinerary
                    </h3>
                    <div className="space-y-3">
                      {selectedBooking.itinerary.map((day, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{day}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact */}
                {selectedBooking.contactPerson && (
                  <div className="p-4 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-xl text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="w-5 h-5" />
                      <p className="font-semibold">Need Help?</p>
                    </div>
                    <p className="text-teal-200">{selectedBooking.contactPerson}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    <Download className="w-5 h-5" />
                    Download Invoice
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-teal-500 transition-all">
                    <Bell className="w-5 h-5" />
                    Get Reminders
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Need Help Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Need Help with Your Booking?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg">
              <Phone className="w-5 h-5" />
              Call Support
            </button>
            <button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              <Mail className="w-5 h-5" />
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;