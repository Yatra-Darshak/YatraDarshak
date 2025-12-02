import React, { useState } from 'react';
import { 
  Bell,
  CheckCircle2,
  AlertCircle,
  Info,
  Gift,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Heart,
  Shield,
  Sparkles,
  Clock,
  Filter,
  Check,
  X,
  Settings,
  Trash2,
  Star,
  Plane,
  CreditCard,
  MessageCircle,
  Award,
  Navigation
} from 'lucide-react';

const NotificationsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'booking',
      icon: CheckCircle2,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Booking Confirmed',
      message: 'Your Shimla trip booking has been confirmed! Get ready for an amazing adventure.',
      detail: 'Booking ID: YD2024001',
      time: '2 hours ago',
      read: false,
      actionable: true,
      actions: ['View Details', 'Download Invoice']
    },
    {
      id: 2,
      type: 'offer',
      icon: Gift,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      title: 'Exclusive Offer: 25% Off',
      message: 'Limited time offer on Goa packages! Book now and save up to ₹10,000 on your next beach vacation.',
      detail: 'Use code: BEACH25',
      time: '5 hours ago',
      read: false,
      actionable: true,
      actions: ['Explore Offers', 'Book Now']
    },
    {
      id: 3,
      type: 'reminder',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Trip Starting Soon',
      message: 'Your Udaipur trip starts in 3 days. Complete your pre-travel checklist and packing.',
      detail: 'Trip Date: Jan 15, 2025',
      time: '1 day ago',
      read: false,
      actionable: true,
      actions: ['View Itinerary', 'Checklist']
    },
    {
      id: 4,
      type: 'payment',
      icon: DollarSign,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      title: 'Payment Successful',
      message: 'Your payment of ₹45,000 has been processed successfully for Shimla Heritage Tour.',
      detail: 'Transaction ID: TXN789456123',
      time: '2 days ago',
      read: true,
      actionable: true,
      actions: ['Download Receipt']
    },
    {
      id: 5,
      type: 'safety',
      icon: Shield,
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      title: 'Safety Alert',
      message: 'Weather alert for your Manali trip. Heavy snowfall expected. Check updated travel advisories.',
      detail: 'Location: Manali, HP',
      time: '3 days ago',
      read: true,
      actionable: true,
      actions: ['View Advisory', 'Contact Support']
    },
    {
      id: 6,
      type: 'review',
      icon: Star,
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      title: 'Review Your Recent Trip',
      message: 'How was your Goa experience? Share your feedback and help other travelers.',
      detail: 'Trip completed: Nov 15, 2024',
      time: '5 days ago',
      read: true,
      actionable: true,
      actions: ['Write Review', 'Rate Trip']
    },
    {
      id: 7,
      type: 'update',
      icon: Info,
      color: 'from-teal-500 to-blue-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      title: 'New Feature: AI Trip Planner',
      message: 'Discover our new AI-powered trip planner! Get personalized itineraries in seconds.',
      detail: 'Try it now',
      time: '1 week ago',
      read: true,
      actionable: true,
      actions: ['Try Now']
    },
    {
      id: 8,
      type: 'loyalty',
      icon: Award,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      title: 'You Earned YatraPoints!',
      message: 'Congratulations! You have earned 500 YatraPoints on your recent booking. Use them on your next trip.',
      detail: 'Total Points: 2,500',
      time: '1 week ago',
      read: true,
      actionable: true,
      actions: ['View Points', 'Redeem Now']
    }
  ]);

  const stats = [
    { icon: Bell, value: notifications.filter(n => !n.read).length.toString(), label: "Unread", color: "from-teal-500 to-blue-600" },
    { icon: CheckCircle2, value: notifications.length.toString(), label: "Total", color: "from-blue-500 to-purple-600" },
    { icon: Gift, value: "3", label: "Offers", color: "from-purple-500 to-pink-600" },
    { icon: Star, value: "2", label: "Action Needed", color: "from-amber-500 to-orange-600" }
  ];

  const tabs = [
    { id: 'all', label: 'All', icon: Bell, count: notifications.length },
    { id: 'unread', label: 'Unread', icon: AlertCircle, count: notifications.filter(n => !n.read).length },
    { id: 'booking', label: 'Bookings', icon: Calendar, count: notifications.filter(n => n.type === 'booking').length },
    { id: 'offer', label: 'Offers', icon: Gift, count: notifications.filter(n => n.type === 'offer').length },
    { id: 'payment', label: 'Payments', icon: CreditCard, count: notifications.filter(n => n.type === 'payment').length }
  ];

  const getFilteredNotifications = () => {
    switch(activeTab) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'booking':
        return notifications.filter(n => n.type === 'booking');
      case 'offer':
        return notifications.filter(n => n.type === 'offer');
      case 'payment':
        return notifications.filter(n => n.type === 'payment');
      default:
        return notifications;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const deleteSelected = () => {
    setNotifications(notifications.filter(n => !selectedNotifications.includes(n.id)));
    setSelectedNotifications([]);
  };

  const toggleSelectNotification = (id) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter(nId => nId !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  const selectAll = () => {
    const filtered = getFilteredNotifications();
    setSelectedNotifications(filtered.map(n => n.id));
  };

  const deselectAll = () => {
    setSelectedNotifications([]);
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
                🔔 NOTIFICATIONS
              </span>
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: "Georgia, serif" }}>
              Stay Updated
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              All your travel updates, offers, and important alerts in one place
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
        {/* Action Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {selectedNotifications.length > 0 ? (
                <>
                  <span className="text-sm font-semibold text-gray-700">
                    {selectedNotifications.length} selected
                  </span>
                  <button
                    onClick={deselectAll}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                  >
                    Deselect All
                  </button>
                  <button
                    onClick={deleteSelected}
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Selected
                  </button>
                </>
              ) : (
                <button
                  onClick={selectAll}
                  className="px-4 py-2 text-sm bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-all"
                >
                  Select All
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all"
              >
                <Check className="w-4 h-4" />
                Mark All Read
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {getFilteredNotifications().map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${
                notification.read ? 'border-gray-100' : 'border-teal-200'
              } ${selectedNotifications.includes(notification.id) ? 'ring-2 ring-teal-500' : ''}`}
            >
              <div className="flex items-start gap-4 p-6">
                {/* Checkbox */}
                <button
                  onClick={() => toggleSelectNotification(notification.id)}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                    selectedNotifications.includes(notification.id)
                      ? 'bg-teal-600 border-teal-600'
                      : 'border-gray-300 hover:border-teal-500'
                  }`}
                >
                  {selectedNotifications.includes(notification.id) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </button>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${notification.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <notification.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg font-bold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="ml-2 w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></span>
                    )}
                  </div>

                  <p className={`text-sm mb-2 ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                    {notification.message}
                  </p>

                  {notification.detail && (
                    <div className={`inline-block px-3 py-1 ${notification.bgColor} ${notification.borderColor} border rounded-lg text-xs font-medium text-gray-700 mb-3`}>
                      {notification.detail}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {notification.time}
                    </div>

                    {notification.actionable && (
                      <div className="flex items-center gap-2">
                        {notification.actions.slice(0, 2).map((action, index) => (
                          <button
                            key={index}
                            className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-all"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all"
                      title="Mark as read"
                    >
                      <Check className="w-4 h-4 text-blue-600" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="w-8 h-8 bg-red-100 hover:bg-red-200 rounded-lg flex items-center justify-center transition-all"
                    title="Delete"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredNotifications().length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No notifications</h3>
            <p className="text-gray-600 mb-6">You're all caught up! Check back later for updates.</p>
          </div>
        )}

        {/* Notification Preferences */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-teal-300" />
            <h3 className="text-2xl font-bold">Notification Preferences</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Bell, title: 'Push Notifications', desc: 'Receive instant updates on your device', enabled: true },
              { icon: MessageCircle, title: 'Email Notifications', desc: 'Get updates via email', enabled: true },
              { icon: Gift, title: 'Promotional Offers', desc: 'Special deals and discounts', enabled: true },
              { icon: Calendar, title: 'Trip Reminders', desc: 'Alerts before your trips', enabled: true },
              { icon: DollarSign, title: 'Payment Updates', desc: 'Transaction confirmations', enabled: true },
              { icon: Shield, title: 'Safety Alerts', desc: 'Important travel advisories', enabled: true }
            ].map((pref, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-center gap-3">
                  <pref.icon className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">{pref.title}</p>
                    <p className="text-xs text-gray-300">{pref.desc}</p>
                  </div>
                </div>
                <button
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                    pref.enabled ? 'bg-teal-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    pref.enabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-white text-teal-900 rounded-xl font-bold hover:bg-gray-100 transition-all">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;