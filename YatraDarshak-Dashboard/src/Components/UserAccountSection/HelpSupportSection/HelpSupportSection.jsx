import React, { useState } from 'react';
import { 
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Book,
  Video,
  Users,
  Clock,
  CheckCircle2,
  ChevronRight,
  Send,
  Sparkles,
  Headphones,
  MapPin,
  CreditCard,
  Calendar,
  Shield,
  Settings,
  AlertCircle,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';

const HelpSupportSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stats = [
    { icon: MessageCircle, value: "24/7", label: "Support Available", color: "from-teal-500 to-blue-600" },
    { icon: Clock, value: "<2 min", label: "Avg Response Time", color: "from-blue-500 to-purple-600" },
    { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate", color: "from-purple-500 to-pink-600" },
    { icon: Users, value: "50K+", label: "Happy Customers", color: "from-amber-500 to-orange-600" }
  ];

  const quickLinks = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team instantly',
      color: 'from-teal-500 to-blue-600',
      bgColor: 'bg-teal-50',
      available: true
    },
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak directly with an expert',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      available: true
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other travelers',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      available: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'booking', label: 'Bookings', icon: Calendar },
    { id: 'payment', label: 'Payments', icon: CreditCard },
    { id: 'account', label: 'Account', icon: Settings },
    { id: 'safety', label: 'Safety', icon: Shield }
  ];

  const faqs = [
    {
      category: 'booking',
      question: 'How do I book a trip?',
      answer: 'You can book a trip by browsing our destinations, selecting your preferred package, choosing dates, and completing the payment process. Our easy 3-step booking system makes it simple!'
    },
    {
      category: 'booking',
      question: 'Can I modify my booking after confirmation?',
      answer: 'Yes, you can modify your booking up to 48 hours before the trip start date. Login to your account, go to "My Bookings" and select the booking you want to modify.'
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept Credit/Debit cards, UPI, Net Banking, and digital wallets like Paytm, PhonePe, and Google Pay. All payments are secured with 256-bit SSL encryption.'
    },
    {
      category: 'payment',
      question: 'How do refunds work?',
      answer: 'Refunds are processed within 5-7 business days to your original payment method. The refund amount depends on our cancellation policy and when you cancel your booking.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your registered email, and you will receive a password reset link. Follow the instructions in the email to set a new password.'
    },
    {
      category: 'account',
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account from Settings > Account Settings > Danger Zone. Please note that this action is permanent and cannot be undone.'
    },
    {
      category: 'safety',
      question: 'What safety measures do you have?',
      answer: 'We prioritize your safety with verified hotels, experienced guides, 24/7 emergency support, comprehensive travel insurance, and regular safety audits of all destinations.'
    },
    {
      category: 'safety',
      question: 'Do you provide travel insurance?',
      answer: 'Yes, all our packages include basic travel insurance. You can also opt for comprehensive insurance coverage during booking for additional protection.'
    }
  ];

  const getFilteredFAQs = () => {
    if (selectedCategory === 'all') return faqs;
    return faqs.filter(faq => faq.category === selectedCategory);
  };

  const resources = [
    {
      icon: Book,
      title: 'User Guide',
      description: 'Complete guide to using Yatra Diary',
      link: '#'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      link: '#'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Detailed technical documentation',
      link: '#'
    },
    {
      icon: AlertCircle,
      title: 'Travel Tips',
      description: 'Essential tips for your journey',
      link: '#'
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
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-bold text-teal-200 tracking-widest">
                💬 HELP & SUPPORT
              </span>
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: "Georgia, serif" }}>
              How Can We Help?
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Get quick answers or connect with our support team
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white text-gray-800 rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300"
                />
              </div>
            </div>
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
        {/* Quick Contact Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className={`${link.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-teal-300 text-left`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                {link.available && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    Available Now
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Headphones className="w-7 h-7 text-teal-600" />
            Support Hours & Contact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">Phone Support</p>
                <p className="text-sm text-gray-600 mb-2">Available 24/7</p>
                <a href="tel:+911800123456" className="text-teal-600 font-semibold hover:text-teal-700">
                  +91 1800 123 456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">Email Support</p>
                <p className="text-sm text-gray-600 mb-2">Response in 2 hours</p>
                <a href="mailto:support@yatradiary.com" className="text-teal-600 font-semibold hover:text-teal-700">
                  support@yatradiary.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">Office Address</p>
                <p className="text-sm text-gray-600">
                  123 Travel Street,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {getFilteredFAQs().map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-all">
                  <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Helpful Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-teal-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Still Need Help?</h2>
              <p className="text-gray-300">Send us a message and we'll get back to you within 2 hours</p>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-teal-300 focus:outline-none transition-all text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-teal-300 focus:outline-none transition-all text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue or question..."
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-teal-300 focus:outline-none transition-all text-white placeholder-gray-400 resize-none"
                />
              </div>

              <button className="w-full py-4 bg-white text-teal-900 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportSection;