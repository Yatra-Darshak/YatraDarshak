import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Heart,
  Briefcase,
  Settings,
  LogOut,
  Bell,
  Shield,
  Award,
  TrendingUp,
  Package,
  Plane,
  Hotel,
  Clock,
  CheckCircle,
  Edit2,
  Camera,
  Save,
  X,
  ChevronRight,
  Sparkles,
  Star,
  Users,
  Globe
} from "lucide-react";

const UserAccountSection = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    address: 'Bhopal, Madhya Pradesh',
    joinDate: 'January 2024',
    membershipType: 'Premium Partner'
  });

  const bookings = [
    {
      id: 1,
      type: 'Holiday Package',
      destination: 'Goa Beach Paradise',
      date: '15 Dec 2025',
      status: 'Confirmed',
      amount: 18500,
      icon: Package,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      type: 'Flight',
      destination: 'Delhi to Mumbai',
      date: '04 Nov 2025',
      status: 'Completed',
      amount: 4500,
      icon: Plane,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      type: 'Hotel',
      destination: 'The Crown Hotel, Goa',
      date: '20 Dec 2025',
      status: 'Confirmed',
      amount: 8500,
      icon: Hotel,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { label: 'Total Bookings', value: '24', icon: Briefcase, color: 'from-teal-400 to-blue-500' },
    { label: 'Total Spent', value: '₹2.4L', icon: TrendingUp, color: 'from-green-400 to-emerald-500' },
    { label: 'Saved Amount', value: '₹18K', icon: Award, color: 'from-yellow-400 to-orange-500' },
    { label: 'Reward Points', value: '2,450', icon: Sparkles, color: 'from-pink-400 to-rose-500' }
  ];

  const savedPackages = [
    { id: 1, name: 'Kerala Backwaters', price: 22000, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400' },
    { id: 2, name: 'Himachal Trek', price: 24500, image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400' },
    { id: 3, name: 'Rajasthan Heritage', price: 32500, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400' }
  ];

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'bookings', label: 'My Bookings', icon: Briefcase },
    { id: 'saved', label: 'Saved Packages', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/50 to-blue-500/50 rounded-3xl blur opacity-25"></div>
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Profile Picture */}
              <div className="relative group/avatar">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-3xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <h1 className="text-3xl font-bold">{profileData.name}</h1>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {profileData.membershipType}
                  </span>
                </div>
                <p className="text-gray-300 mb-1">{profileData.email}</p>
                <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {profileData.joinDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profileData.address}
                  </span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 border border-white/20">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 border border-white/20">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-xl font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/50 to-blue-500/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/50 to-blue-500/50 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/50 to-blue-500/50 rounded-3xl blur opacity-25"></div>
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <User className="w-6 h-6 text-teal-400" />
                    Personal Information
                  </h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
                      isEditing
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                        : 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700'
                    }`}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit2 className="w-4 h-4" />
                        Edit Profile
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-50 focus:border-teal-400 transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-50 focus:border-teal-400 transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-50 focus:border-teal-400 transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Address
                    </label>
                    <input
                      type="text"
                      value={profileData.address}
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-50 focus:border-teal-400 transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Membership Benefits */}
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold">Premium Membership Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Priority customer support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Exclusive deals & discounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Early access to new packages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Free cancellation on select bookings</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-teal-400" />
                  My Bookings
                </h2>
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${booking.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <booking.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{booking.type}</div>
                          <h3 className="text-xl font-bold mb-1">{booking.destination}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {booking.date}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              booking.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-2">₹{booking.amount.toLocaleString()}</div>
                        <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-xl font-bold transition-all flex items-center gap-2">
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved Packages Tab */}
            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-teal-400" />
                  Saved Packages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {savedPackages.map((pkg) => (
                    <div key={pkg.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all group/card">
                      <div className="relative h-48">
                        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                        <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-teal-400">₹{pkg.price.toLocaleString()}</div>
                          <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-lg font-bold transition-all text-sm">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-teal-400" />
                  Account Settings
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-6 h-6 text-blue-400" />
                        <div>
                          <h3 className="font-bold">Notifications</h3>
                          <p className="text-sm text-gray-400">Manage your notification preferences</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-green-400" />
                        <div>
                          <h3 className="font-bold">Privacy & Security</h3>
                          <p className="text-sm text-gray-400">Update your password and security settings</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-purple-400" />
                        <div>
                          <h3 className="font-bold">Payment Methods</h3>
                          <p className="text-sm text-gray-400">Manage your saved payment methods</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-teal-400" />
                        <div>
                          <h3 className="font-bold">Language & Region</h3>
                          <p className="text-sm text-gray-400">Set your preferred language and region</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountSection;