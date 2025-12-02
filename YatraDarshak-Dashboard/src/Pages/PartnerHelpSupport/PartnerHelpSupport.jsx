import React, { useState } from 'react';
import { 
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Book,
  Video,
  FileText,
  Search,
  Send,
  Clock,
  CheckCircle,
  Briefcase,
  Users,
  Package,
  DollarSign,
  Settings,
  Shield,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const PartnerHelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const quickLinks = [
    {
      icon: Package,
      title: 'Creating Packages',
      description: 'Learn how to create and manage your travel packages',
      color: 'from-teal-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Managing Bookings',
      description: 'Handle customer bookings and reservations',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: DollarSign,
      title: 'Payment & Settlements',
      description: 'Understand commission structure and payouts',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track your performance and insights',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I create my first package?',
      answer: 'Go to Dashboard > Packages > Create New Package. Fill in the details including destination, duration, pricing, and itinerary.'
    },
    {
      category: 'Getting Started',
      question: 'How long does verification take?',
      answer: 'Partner verification typically takes 24-48 hours after submitting all required documents.'
    },
    {
      category: 'Bookings',
      question: 'How do I confirm a booking?',
      answer: 'Navigate to Bookings section, click on the pending booking, review details, and click "Confirm Booking".'
    },
    {
      category: 'Bookings',
      question: 'Can I cancel a confirmed booking?',
      answer: 'Yes, but cancellation policies apply. Check the booking details for specific terms and refund conditions.'
    },
    {
      category: 'Payments',
      question: 'When will I receive my payment?',
      answer: 'Payments are settled weekly based on your chosen settlement frequency in Payment Settings.'
    },
    {
      category: 'Payments',
      question: 'What is the commission rate?',
      answer: 'Commission rates vary based on package type and your partnership tier. Check Payment Settings for your current rate.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      status: 'Available now',
      statusColor: 'text-green-600',
      action: 'Start Chat',
      color: 'from-teal-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: '+91 1800-123-4567',
      status: 'Mon-Sat, 9AM-6PM',
      statusColor: 'text-gray-600',
      action: 'Call Now',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@platform.com',
      status: 'Response in 24 hours',
      statusColor: 'text-gray-600',
      action: 'Send Email',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      count: '50+ articles'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      count: '20+ videos'
    },
    {
      icon: FileText,
      title: 'Partner Guide',
      count: 'PDF Download'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const handleSubmitMessage = () => {
    if (subject && message) {
      alert('Message sent successfully!');
      setSubject('');
      setMessage('');
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
                <HelpCircle className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Help & Support</h1>
                <p className="text-sm text-gray-300">We're here to help you succeed</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center font-bold">
                TV
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">How can we help you?</h2>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                <channel.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{channel.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{channel.description}</p>
              <p className={`text-xs ${channel.statusColor} mb-4`}>{channel.status}</p>
              <button className="w-full py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                {channel.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Help</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <button key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-teal-200 text-left">
                    <div className={`w-10 h-10 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{link.title}</h3>
                      <p className="text-xs text-gray-600">{link.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {['all', 'Getting Started', 'Bookings', 'Payments'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <summary className="font-semibold text-gray-800 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform duration-300" />
                    </summary>
                    <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Send us a message</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What do you need help with?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Describe your issue or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  onClick={handleSubmitMessage}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Learning Resources</h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <button key={index} className="w-full flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300 border border-teal-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-gray-800 text-sm">{resource.title}</p>
                      <p className="text-xs text-gray-600">{resource.count}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">Support Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-teal-100">Email support available 24/7</p>
              </div>
            </div>

            {/* Recent Tickets */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Tickets</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-800">#TKT-1234</span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Resolved
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Package approval query</p>
                  <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-800">#TKT-1198</span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Resolved
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Payment settlement issue</p>
                  <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 text-teal-600 font-medium text-sm hover:bg-gray-50 rounded-lg transition-all duration-300">
                View All Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHelpSupport;