import React, { useState } from 'react';
import { 
  Settings,
  User,
  Building2,
  Shield,
  Bell,
  CreditCard,
  Globe,
  Lock,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  X,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Briefcase,
  FileText,
  Link,
  Image,
  Users,
  DollarSign,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';

const PartnerSettings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    bookings: true,
    messages: true,
    reviews: true,
    promotions: false,
    weeklyReport: true
  });

  const sections = [
    { id: 'profile', label: 'Business Profile', icon: Building2 },
    { id: 'account', label: 'Account Settings', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment & Banking', icon: CreditCard },
    { id: 'verification', label: 'Verification', icon: Award }
  ];

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <Settings className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Partner Settings</h1>
                <p className="text-sm text-gray-300">Manage your account and preferences</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center font-bold">
                TV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-8">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="text-sm">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Business Profile */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Business Profile</h2>
                  
                  {/* Profile Image */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Business Logo</label>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                        TV
                      </div>
                      <div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 mb-2">
                          <Camera className="w-4 h-4" />
                          Upload Logo
                        </button>
                        <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <input
                        type="text"
                        defaultValue="Travel Ventures Pvt. Ltd."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Tour Operator</option>
                        <option>Travel Agency</option>
                        <option>Hotel Partner</option>
                        <option>Activity Provider</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                      <input
                        type="text"
                        defaultValue="TV2024-1234567"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                      <input
                        type="text"
                        defaultValue="22AAAAA0000A1Z5"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                      <textarea
                        rows="4"
                        defaultValue="Leading travel company offering curated experiences across India with over 10 years of expertise in creating memorable journeys."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          defaultValue="contact@travelventures.com"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          defaultValue="+91 98765 43210"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          rows="2"
                          defaultValue="123 MG Road, Connaught Place, New Delhi - 110001"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="url"
                          defaultValue="https://travelventures.com"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Social Media</label>
                      <div className="relative">
                        <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Instagram, Facebook handles"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                    Cancel
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Account Settings */}
            {activeSection === 'account' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Account Manager Name</label>
                      <input
                        type="text"
                        defaultValue="Rajesh Kumar"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                      <input
                        type="text"
                        defaultValue="travelventures"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue="rajesh@travelventures.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language Preference</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>IST (GMT+5:30)</option>
                        <option>GMT</option>
                        <option>EST</option>
                        <option>PST</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                    Cancel
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Security */}
            {activeSection === 'security' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter current password"
                          className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm new password"
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">2FA Enabled</p>
                        <p className="text-sm text-gray-600">Your account is protected</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-300">
                      Disable
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Windows - Chrome</p>
                        <p className="text-sm text-gray-600">New Delhi, India • Active now</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Current</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">iPhone - Safari</p>
                        <p className="text-sm text-gray-600">Mumbai, India • 2 hours ago</p>
                      </div>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium hover:bg-red-200">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                    Cancel
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    <Save className="w-4 h-4" />
                    Update Password
                  </button>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">New Bookings</p>
                          <p className="text-sm text-gray-600">Get notified when customers book your packages</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle('bookings')}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          notifications.bookings ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          notifications.bookings ? 'ml-6' : 'ml-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Customer Messages</p>
                          <p className="text-sm text-gray-600">Receive alerts for new customer inquiries</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle('messages')}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          notifications.messages ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          notifications.messages ? 'ml-6' : 'ml-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Reviews & Ratings</p>
                          <p className="text-sm text-gray-600">Stay updated on customer feedback</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle('reviews')}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          notifications.reviews ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          notifications.reviews ? 'ml-6' : 'ml-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Promotions & Offers</p>
                          <p className="text-sm text-gray-600">Receive platform updates and promotional opportunities</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle('promotions')}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          notifications.promotions ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          notifications.promotions ? 'ml-6' : 'ml-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Weekly Performance Report</p>
                          <p className="text-sm text-gray-600">Get weekly summaries of your business metrics</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNotificationToggle('weeklyReport')}
                        className={`w-12 h-6 rounded-full transition-all duration-300 ${
                          notifications.weeklyReport ? 'bg-teal-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                          notifications.weeklyReport ? 'ml-6' : 'ml-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Payment & Banking */}
            {activeSection === 'payment' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Payment & Banking Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                      <input
                        type="text"
                        defaultValue="HDFC Bank"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                      <input
                        type="text"
                        defaultValue="Travel Ventures Pvt. Ltd."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                      <input
                        type="text"
                        defaultValue="XXXX XXXX XXXX 1234"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                      <input
                        type="text"
                        defaultValue="HDFC0001234"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Branch Name</label>
                      <input
                        type="text"
                        defaultValue="Connaught Place, New Delhi"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                      <input
                        type="text"
                        defaultValue="AAAAA0000A"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Commission & Settlement</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-100">
                      <div>
                        <p className="text-sm text-gray-600">Current Commission Rate</p>
                        <p className="text-2xl font-bold text-gray-800">12%</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Settlement Frequency</p>
                        <p className="text-sm text-gray-600">Funds transferred every week</p>
                      </div>
                      <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Settlements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Settlement #STL2024-089</p>
                        <p className="text-sm text-gray-600">05 Nov 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">₹74,250</p>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Settlement #STL2024-088</p>
                        <p className="text-sm text-gray-600">29 Oct 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">₹68,900</p>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Settlement #STL2024-087</p>
                        <p className="text-sm text-gray-600">22 Oct 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">₹81,340</p>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
                    Cancel
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    <Save className="w-4 h-4" />
                    Update Details
                  </button>
                </div>
              </div>
            )}

            {/* Verification */}
            {activeSection === 'verification' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg p-6 border border-green-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Verification Status</h2>
                      <p className="text-sm text-gray-600">Your partner account is fully verified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Blockchain Certified Partner</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Verification Documents</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Business Registration Certificate</p>
                          <p className="text-sm text-gray-600">Uploaded on 15 Jan 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                        <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">GST Certificate</p>
                          <p className="text-sm text-gray-600">Uploaded on 15 Jan 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                        <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">PAN Card</p>
                          <p className="text-sm text-gray-600">Uploaded on 15 Jan 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                        <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Bank Account Verification</p>
                          <p className="text-sm text-gray-600">Verified on 16 Jan 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Blockchain Certification</h3>
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-medium text-gray-800">Certificate ID</p>
                        <p className="text-sm text-gray-600 font-mono">BC-2024-TV-1234567</p>
                      </div>
                      <Award className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Issued Date</p>
                        <p className="font-medium text-gray-800">20 Jan 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Valid Until</p>
                        <p className="font-medium text-gray-800">20 Jan 2025</p>
                      </div>
                    </div>
                    <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                      <FileText className="w-4 h-4" />
                      Download Certificate
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Trust Score</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Overall Trust Score</span>
                        <span className="text-2xl font-bold text-gray-800">95/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-full h-3" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-teal-600">4.8</p>
                      <p className="text-xs text-gray-600">Avg Rating</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">98%</p>
                      <p className="text-xs text-gray-600">Response Rate</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-amber-600">1,247</p>
                      <p className="text-xs text-gray-600">Total Bookings</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">2Y+</p>
                      <p className="text-xs text-gray-600">Experience</p>
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

export default PartnerSettings;