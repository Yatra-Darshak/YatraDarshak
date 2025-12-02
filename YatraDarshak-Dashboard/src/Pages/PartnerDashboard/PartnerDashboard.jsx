import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Package,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  MapPin,
  Star,
  Eye,
  MessageCircle,
  Settings,
  Bell,
  Search,
  Plus,
  Edit3,
  Trash2,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Upload,
  Filter,
  ChevronRight,
  Award,
  Target,
  Briefcase,
  Shield,
  ChevronDown,
  Image,
  FileText,
  Globe
} from 'lucide-react';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const stats = [
    {
      icon: Package,
      label: 'Active Packages',
      value: '24',
      change: '+3 this month',
      color: 'from-teal-500 to-blue-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Users,
      label: 'Total Bookings',
      value: '1,247',
      change: '+18% from last month',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '₹8.4L',
      change: '+24% from last month',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Star,
      label: 'Avg. Rating',
      value: '4.8',
      change: '1,245 reviews',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const packages = [
    {
      id: 1,
      title: 'Manali Adventure Package',
      destination: 'Manali, HP',
      duration: '5 Days / 4 Nights',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80',
      bookings: 89,
      revenue: '₹11.5L',
      rating: 4.9,
      reviews: 78,
      status: 'active',
      views: 2340
    },
    {
      id: 2,
      title: 'Goa Beach Paradise',
      destination: 'Goa',
      duration: '4 Days / 3 Nights',
      price: '₹9,499',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80',
      bookings: 134,
      revenue: '₹12.7L',
      rating: 4.7,
      reviews: 112,
      status: 'active',
      views: 3120
    },
    {
      id: 3,
      title: 'Rajasthan Royal Heritage',
      destination: 'Jaipur, Rajasthan',
      duration: '6 Days / 5 Nights',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80',
      bookings: 67,
      revenue: '₹10.7L',
      rating: 4.8,
      reviews: 54,
      status: 'active',
      views: 1890
    },
    {
      id: 4,
      title: 'Kerala Backwaters Experience',
      destination: 'Alleppey, Kerala',
      duration: '5 Days / 4 Nights',
      price: '₹13,499',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80',
      bookings: 45,
      revenue: '₹6.1L',
      rating: 4.9,
      reviews: 42,
      status: 'pending',
      views: 1234
    }
  ];

  const recentBookings = [
    {
      id: 'BK001',
      customer: 'Priya Sharma',
      package: 'Manali Adventure Package',
      date: '12 Nov 2024',
      amount: '₹12,999',
      status: 'confirmed',
      travelers: 2
    },
    {
      id: 'BK002',
      customer: 'Rahul Verma',
      package: 'Goa Beach Paradise',
      date: '11 Nov 2024',
      amount: '₹18,998',
      status: 'confirmed',
      travelers: 4
    },
    {
      id: 'BK003',
      customer: 'Anjali Desai',
      package: 'Rajasthan Royal Heritage',
      date: '10 Nov 2024',
      amount: '₹15,999',
      status: 'pending',
      travelers: 2
    },
    {
      id: 'BK004',
      customer: 'Vikram Singh',
      package: 'Kerala Backwaters Experience',
      date: '09 Nov 2024',
      amount: '₹26,998',
      status: 'confirmed',
      travelers: 4
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'packages', label: 'My Packages', icon: Package },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reviews', label: 'Reviews', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed':
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'confirmed':
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <Briefcase className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Partner Dashboard</h1>
                <p className="text-sm text-gray-300">Welcome back, Travel Ventures Pvt. Ltd.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">3</span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center font-bold">
                TV
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-white text-slate-800 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
              <p className="text-xs text-green-600 font-medium">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Create Package</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800">View Analytics</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-amber-100">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Export Report</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Verification</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* My Packages Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Packages</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    New Package
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-4">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-gray-800 mb-1">{pkg.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {pkg.destination}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {pkg.duration}
                              </span>
                            </div>
                          </div>
                          <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(pkg.status)}`}>
                            {getStatusIcon(pkg.status)}
                            {pkg.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Price</p>
                            <p className="font-bold text-gray-800">{pkg.price}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Bookings</p>
                            <p className="font-bold text-gray-800">{pkg.bookings}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Revenue</p>
                            <p className="font-bold text-gray-800">{pkg.revenue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Rating</p>
                            <p className="font-bold text-gray-800 flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              {pkg.rating}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-all duration-300">
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all duration-300">
                            <Eye className="w-4 h-4" />
                            View ({pkg.views})
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-all duration-300">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Recent Bookings</h2>
                <button className="text-teal-600 text-sm font-medium hover:text-teal-700">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{booking.customer}</p>
                        <p className="text-xs text-gray-600 mt-1">{booking.package}</p>
                      </div>
                      <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {booking.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {booking.travelers} travelers
                      </span>
                    </div>
                    <p className="font-bold text-gray-800 mt-2">{booking.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Performance</h3>
                  <p className="text-sm text-teal-100">This Month</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Booking Target</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '78%'}}></div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm">Revenue Target</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '92%'}}></div>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-teal-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                View Detailed Report
              </button>
            </div>

            {/* Partner Verification Status */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Verified Partner</h3>
                  <p className="text-xs text-gray-600">Blockchain Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Active & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;