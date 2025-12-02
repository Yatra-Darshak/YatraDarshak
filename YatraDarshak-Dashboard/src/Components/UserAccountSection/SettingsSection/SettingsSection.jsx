import React, { useState } from 'react';
import { 
  Settings,
  User,
  Bell,
  Lock,
  Globe,
  CreditCard,
  Shield,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  Save,
  Camera,
  Edit,
  Trash2,
  LogOut,
  HelpCircle,
  FileText,
  Users,
  DollarSign,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Languages,
  Download,
  Upload,
  AlertCircle,
  CheckCircle2,
  Key,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const SettingsSection = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('INR');

  const [profileData, setProfileData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1995-06-15',
    gender: 'Female',
    address: 'Mumbai, Maharashtra',
    bio: 'Travel enthusiast exploring India one destination at a time!'
  });

  const menuItems = [
    { id: 'profile', icon: User, label: 'Profile Settings', color: 'from-blue-500 to-cyan-600' },
    { id: 'account', icon: Settings, label: 'Account Settings', color: 'from-teal-500 to-green-600' },
    { id: 'notifications', icon: Bell, label: 'Notifications', color: 'from-purple-500 to-pink-600' },
    { id: 'privacy', icon: Shield, label: 'Privacy & Security', color: 'from-red-500 to-rose-600' },
    { id: 'payment', icon: CreditCard, label: 'Payment Methods', color: 'from-amber-500 to-orange-600' },
    { id: 'preferences', icon: Globe, label: 'Preferences', color: 'from-indigo-500 to-purple-600' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support', color: 'from-green-500 to-emerald-600' }
  ];

  const stats = [
    { icon: User, value: "100%", label: "Profile Complete", color: "from-teal-500 to-blue-600" },
    { icon: Shield, value: "Active", label: "Account Status", color: "from-green-500 to-emerald-600" },
    { icon: Calendar, value: "2 Years", label: "Member Since", color: "from-purple-500 to-pink-600" },
    { icon: CreditCard, value: "3", label: "Saved Cards", color: "from-amber-500 to-orange-600" }
  ];

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <User className="w-7 h-7 text-teal-600" />
          Personal Information
        </h3>
        
        {/* Profile Picture */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              PS
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all">
              <Camera className="w-4 h-4 text-teal-600" />
            </button>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">{profileData.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{profileData.email}</p>
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-all">
              <Upload className="w-4 h-4" />
              Change Photo
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              value={profileData.dateOfBirth}
              onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
            <select
              value={profileData.gender}
              onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={profileData.address}
              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
            rows="3"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all resize-none"
          />
        </div>

        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Lock className="w-7 h-7 text-teal-600" />
          Password & Authentication
        </h3>
        
        <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            />
          </div>

          <button className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <Key className="w-4 h-4" />
            Update Password
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <LinkIcon className="w-6 h-6 text-teal-600" />
          Connected Accounts
        </h3>

        <div className="space-y-3">
          {[
            { icon: Facebook, name: 'Facebook', connected: true, color: 'bg-blue-600' },
            { icon: Twitter, name: 'Twitter', connected: false, color: 'bg-sky-500' },
            { icon: Instagram, name: 'Instagram', connected: true, color: 'bg-pink-600' }
          ].map((account, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 transition-all">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${account.color} rounded-lg flex items-center justify-center`}>
                  <account.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{account.name}</p>
                  <p className="text-xs text-gray-600">
                    {account.connected ? 'Connected' : 'Not connected'}
                  </p>
                </div>
              </div>
              <button className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                account.connected 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}>
                {account.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-3">
          <AlertCircle className="w-6 h-6" />
          Danger Zone
        </h3>
        <p className="text-sm text-red-700 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Delete Account
        </button>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Bell className="w-7 h-7 text-teal-600" />
          Notification Preferences
        </h3>

        <div className="space-y-4">
          {[
            { 
              icon: Mail, 
              title: 'Email Notifications', 
              desc: 'Receive updates via email',
              state: emailNotifications,
              setState: setEmailNotifications
            },
            { 
              icon: Smartphone, 
              title: 'Push Notifications', 
              desc: 'Get instant alerts on your device',
              state: pushNotifications,
              setState: setPushNotifications
            },
            { 
              icon: Sparkles, 
              title: 'Promotional Emails', 
              desc: 'Special offers and deals',
              state: promotionalEmails,
              setState: setPromotionalEmails
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
              <button
                onClick={() => item.setState(!item.state)}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  item.state ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  item.state ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="font-bold text-gray-800 mb-4">Notification Types</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Booking Confirmations',
              'Trip Reminders',
              'Payment Updates',
              'Offers & Discounts',
              'Safety Alerts',
              'Review Requests'
            ].map((type, index) => (
              <label key={index} className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-teal-300 cursor-pointer transition-all">
                <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500" />
                <span className="text-sm font-medium text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Shield className="w-7 h-7 text-teal-600" />
          Privacy & Security
        </h3>

        <div className="space-y-6">
          <div className="p-4 bg-teal-50 border-2 border-teal-200 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Key className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="font-bold text-gray-800">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-600">Add an extra layer of security</p>
                </div>
              </div>
              <button
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  twoFactorAuth ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  twoFactorAuth ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
            {twoFactorAuth && (
              <button className="w-full py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all">
                Configure 2FA
              </button>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Profile Visibility</label>
            <div className="space-y-2">
              {[
                { value: 'public', label: 'Public', desc: 'Anyone can see your profile' },
                { value: 'friends', label: 'Friends Only', desc: 'Only your connections can see' },
                { value: 'private', label: 'Private', desc: 'Only you can see your profile' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 cursor-pointer transition-all">
                  <input
                    type="radio"
                    name="visibility"
                    value={option.value}
                    checked={profileVisibility === option.value}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                    className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{option.label}</p>
                    <p className="text-xs text-gray-600">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4">Data & Privacy</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 transition-all">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-gray-800">Download Your Data</span>
                </div>
                <span className="text-teal-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 transition-all">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-gray-800">Privacy Policy</span>
                </div>
                <span className="text-teal-600">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <CreditCard className="w-7 h-7 text-teal-600" />
          Payment Methods
        </h3>

        <div className="space-y-4 mb-6">
          {[
            { type: 'Visa', last4: '4242', expiry: '12/25', primary: true },
            { type: 'Mastercard', last4: '8888', expiry: '09/26', primary: false },
            { type: 'UPI', last4: 'priya@paytm', expiry: 'Active', primary: false }
          ].map((card, index) => (
            <div key={index} className={`p-6 border-2 rounded-xl transition-all ${
              card.primary ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{card.type} {card.last4.startsWith('priya') ? '' : `•••• ${card.last4}`}</p>
                    <p className="text-sm text-gray-600">{card.last4.startsWith('priya') ? card.last4 : `Expires ${card.expiry}`}</p>
                    {card.primary && <span className="text-xs font-semibold text-teal-600">Primary</span>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-all">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
          + Add New Payment Method
        </button>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Globe className="w-7 h-7 text-teal-600" />
          Regional Preferences
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="ta">தமிழ் (Tamil)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
            >
              <option value="INR">₹ INR - Indian Rupee</option>
              <option value="USD">$ USD - US Dollar</option>
              <option value="EUR">€ EUR - Euro</option>
              <option value="GBP">£ GBP - British Pound</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Theme</label>
            <div className="flex gap-4">
              <button
                onClick={() => setDarkMode(false)}
                className={`flex-1 p-4 border-2 rounded-xl transition-all ${
                  !darkMode ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
                }`}
              >
                <Sun className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                <p className="font-semibold text-gray-800">Light</p>
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`flex-1 p-4 border-2 rounded-xl transition-all ${
                  darkMode ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
                }`}
              >
                <Moon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <p className="font-semibold text-gray-800">Dark</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpSupport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <HelpCircle className="w-7 h-7 text-teal-600" />
          Help & Support
        </h3>

        <div className="space-y-3">
          {[
            { icon: FileText, title: 'Documentation', desc: 'Browse our guides and tutorials' },
            { icon: Mail, title: 'Contact Support', desc: 'Get help from our team' },
            { icon: Users, title: 'Community Forum', desc: 'Connect with other travelers' },
            { icon: FileText, title: 'Terms of Service', desc: 'Read our terms and conditions' }
          ].map((item, index) => (
            <button key={index} className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-teal-300 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
              <span className="text-teal-600">→</span>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl">
          <h4 className="font-bold text-gray-800 mb-2">Need Immediate Help?</h4>
          <p className="text-sm text-gray-600 mb-4">Our support team is available 24/7</p>
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all">
              Live Chat
            </button>
            <button className="flex-1 px-4 py-2 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all">
              Call Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'profile':
        return renderProfileSettings();
      case 'account':
        return renderAccountSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'payment':
        return renderPaymentSettings();
      case 'preferences':
        return renderPreferences();
      case 'help':
        return renderHelpSupport();
      default:
        return renderProfileSettings();
    }
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
                ⚙️ SETTINGS
              </span>
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: "Georgia, serif" }}>
              Account Settings
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage your profile, preferences, and security settings
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-6">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;