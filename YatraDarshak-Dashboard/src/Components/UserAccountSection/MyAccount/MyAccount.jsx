import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Edit3,
  Save,
  Camera,
  Shield,
  Key,
  Bell,
  Globe,
  CreditCard,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MapPinned,
  Plane,
  Heart,
  Clock,
  TrendingUp,
  Star
} from 'lucide-react';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    address: '123 MG Road, Bhopal',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    country: 'India'
  });

  const [preferences, setPreferences] = useState({
    language: 'english',
    currency: 'INR',
    notifications: true,
    emailUpdates: true,
    smsAlerts: false,
    travelStyle: 'adventure'
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const stats = [
    { icon: Plane, value: "12", label: "Trips Completed", color: "from-teal-500 to-blue-600" },
    { icon: MapPinned, value: "28", label: "Places Visited", color: "from-blue-500 to-purple-600" },
    { icon: Heart, value: "45", label: "Saved Destinations", color: "from-pink-500 to-rose-600" },
    { icon: Award, value: "Gold", label: "Member Status", color: "from-amber-500 to-orange-600" }
  ];

  const recentTrips = [
    {
      destination: "Manali, Himachal Pradesh",
      date: "Dec 15, 2024",
      duration: "5 Days",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80",
      status: "Completed"
    },
    {
      destination: "Goa",
      date: "Nov 8, 2024",
      duration: "7 Days",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
      status: "Completed"
    },
    {
      destination: "Leh-Ladakh",
      date: "Oct 20, 2024",
      duration: "10 Days",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
      status: "Completed"
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile Info', icon: User },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'travel', label: 'Travel History', icon: MapPinned }
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
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-600">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff&size=200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-teal-600" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-3">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">Gold Member</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{profileData.firstName} {profileData.lastName}</h1>
              <p className="text-teal-400 mb-4">Traveler since 2023 • Member ID: YD2023-001</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-teal-200 z-10 flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  {profileData.email}
                </div>
                <div className="text-teal-200 z-10 flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  {profileData.phone}
                </div>
                <div className="text-teal-200 z-10 flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {profileData.city}, {profileData.state}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
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
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Profile Info Tab */}
          {activeTab === 'profile' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h2>
                  <p className="text-gray-600">Manage your personal details and contact information</p>
                </div>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isEditing
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-5 h-5" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-5 h-5" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profileData.dateOfBirth}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={profileData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={profileData.state}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={profileData.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={profileData.country}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-50 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Travel Preferences</h2>
              <p className="text-gray-600 mb-8">Customize your YatraDarshak experience</p>

              <div className="space-y-8">
                {/* Language */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => handlePreferenceChange('language', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                    <option value="bengali">Bengali</option>
                  </select>
                </div>

                {/* Currency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                  <select
                    value={preferences.currency}
                    onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  >
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                </div>

                {/* Travel Style */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Style</label>
                  <select
                    value={preferences.travelStyle}
                    onChange={(e) => handlePreferenceChange('travelStyle', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  >
                    <option value="adventure">Adventure</option>
                    <option value="leisure">Leisure</option>
                    <option value="cultural">Cultural</option>
                    <option value="spiritual">Spiritual</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                {/* Notifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">Notification Settings</h3>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Push Notifications</p>
                        <p className="text-sm text-gray-600">Receive app notifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('notifications', !preferences.notifications)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        preferences.notifications ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                        preferences.notifications ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Email Updates</p>
                        <p className="text-sm text-gray-600">Get travel updates via email</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('emailUpdates', !preferences.emailUpdates)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        preferences.emailUpdates ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                        preferences.emailUpdates ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-teal-600" />
                      <div>
                        <p className="font-semibold text-gray-800">SMS Alerts</p>
                        <p className="text-sm text-gray-600">Receive booking alerts via SMS</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('smsAlerts', !preferences.smsAlerts)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        preferences.smsAlerts ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                        preferences.smsAlerts ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Security Settings</h2>
              <p className="text-gray-600 mb-8">Manage your account security and privacy</p>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                      <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <Key className="w-8 h-8 text-gray-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2">Change Password</h3>
                      <p className="text-sm text-gray-600 mb-4">Update your password regularly for better security</p>
                      <button className="px-6 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-teal-500 transition-all">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <CreditCard className="w-8 h-8 text-gray-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2">Digital Tourist ID</h3>
                      <p className="text-sm text-gray-600 mb-4">Blockchain-verified ID for safe travel (Active)</p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-semibold">Verified & Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Travel History Tab */}
          {activeTab === 'travel' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Travel History</h2>
              <p className="text-gray-600 mb-8">Your journey with YatraDarshak</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentTrips.map((trip, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1">{trip.destination}</h3>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Calendar className="w-4 h-4" />
                          {trip.date}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          {trip.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {trip.duration}
                        </div>
                        <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-bold hover:shadow-lg transition-all">
                  View All Trips
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Achievement/Badges Section */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-amber-400" />
            <h3 className="text-2xl font-bold">Travel Achievements</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Star, title: "Explorer", desc: "Visited 25+ places", earned: true },
              { icon: Plane, title: "Frequent Flyer", desc: "10+ trips completed", earned: true },
              { icon: MapPinned, title: "Navigator", desc: "Used AI planner 20 times", earned: true },
              { icon: Heart, title: "Community Star", desc: "50+ helpful reviews", earned: false }
            ].map((badge, index) => (
              <div key={index} className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                badge.earned 
                  ? 'bg-white/10 border-amber-400 hover:scale-105' 
                  : 'bg-white/5 border-white/20 opacity-50'
              }`}>
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500' 
                    : 'bg-gray-600'
                }`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-1">{badge.title}</h4>
                <p className="text-xs text-gray-300">{badge.desc}</p>
                {badge.earned && (
                  <div className="mt-3">
                    <span className="text-xs font-semibold text-amber-400">✓ Earned</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <button className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPinned className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Plan New Trip</h3>
            <p className="text-sm text-gray-600">Use AI to create your perfect itinerary</p>
          </button>

          <button className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Saved Destinations</h3>
            <p className="text-sm text-gray-600">View your travel wishlist</p>
          </button>

          <button className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Travel Stats</h3>
            <p className="text-sm text-gray-600">View detailed travel analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;