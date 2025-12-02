import React, { useState } from 'react';
import { 
  Award,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  DollarSign,
  BarChart3,
  Headphones,
  BookOpen,
  CheckCircle,
  Star,
  Rocket,
  Crown,
  Gift,
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  MessageCircle,
  Bell,
  Settings,
  ChevronRight,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Lock,
  Unlock,
  Package,
  Eye,
  ThumbsUp,
  Heart,
  Share2,
  Download,
  Upload,
  FileText,
  PieChart,
  Activity,
  Layers,
  Tag,
  Percent
} from 'lucide-react';

const PartnerBenefits = () => {
  const [selectedTier, setSelectedTier] = useState('gold');
  const [activeCategory, setActiveCategory] = useState('all');

  const tiers = [
    {
      id: 'silver',
      name: 'Silver Partner',
      icon: Award,
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      requirement: '10-50 bookings/month',
      commission: '8-12%'
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      icon: Star,
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      requirement: '51-150 bookings/month',
      commission: '12-18%',
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum Partner',
      icon: Crown,
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      requirement: '150+ bookings/month',
      commission: '18-25%'
    }
  ];

  const benefits = [
    {
      category: 'revenue',
      icon: DollarSign,
      title: 'Higher Commission Rates',
      description: 'Earn up to 25% commission on every booking with competitive revenue sharing',
      tier: ['silver', 'gold', 'platinum'],
      highlight: 'Up to 25% Commission'
    },
    {
      category: 'visibility',
      icon: Eye,
      title: 'Priority Listing',
      description: 'Your packages appear at the top of search results and recommendations',
      tier: ['gold', 'platinum'],
      highlight: 'Featured Placement'
    },
    {
      category: 'marketing',
      icon: Rocket,
      title: 'Free Marketing Support',
      description: 'Professional photography, content creation, and social media promotion',
      tier: ['gold', 'platinum'],
      highlight: '₹50K Worth Marketing'
    },
    {
      category: 'technology',
      icon: Zap,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights, predictive analytics, and AI-powered recommendations',
      tier: ['silver', 'gold', 'platinum'],
      highlight: 'AI-Powered Insights'
    },
    {
      category: 'support',
      icon: Headphones,
      title: '24/7 Dedicated Support',
      description: 'Priority customer support with dedicated relationship manager',
      tier: ['gold', 'platinum'],
      highlight: 'Dedicated Manager'
    },
    {
      category: 'technology',
      icon: Shield,
      title: 'Blockchain Verification',
      description: 'Verified partner badge increases trust and booking conversion by 40%',
      tier: ['silver', 'gold', 'platinum'],
      highlight: 'Trusted Badge'
    },
    {
      category: 'revenue',
      icon: Target,
      title: 'Performance Bonuses',
      description: 'Additional rewards for achieving monthly targets and customer satisfaction',
      tier: ['gold', 'platinum'],
      highlight: 'Extra ₹2L+/month'
    },
    {
      category: 'marketing',
      icon: Globe,
      title: 'Multi-Channel Distribution',
      description: 'Your packages listed on web, mobile app, and partner platforms',
      tier: ['silver', 'gold', 'platinum'],
      highlight: '3+ Channels'
    },
    {
      category: 'technology',
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Real-time alerts for bookings, cancellations, and customer inquiries',
      tier: ['silver', 'gold', 'platinum'],
      highlight: 'Instant Alerts'
    },
    {
      category: 'training',
      icon: BookOpen,
      title: 'Training & Certification',
      description: 'Free courses on tourism management, digital marketing, and customer service',
      tier: ['gold', 'platinum'],
      highlight: 'Free Courses'
    },
    {
      category: 'visibility',
      icon: Star,
      title: 'Featured Partner Badge',
      description: 'Exclusive badge highlighting your premium status on all listings',
      tier: ['platinum'],
      highlight: 'Premium Badge'
    },
    {
      category: 'revenue',
      icon: Gift,
      title: 'Early Payment Settlement',
      description: 'Receive payments within 24 hours instead of standard 7 days',
      tier: ['platinum'],
      highlight: '24-Hour Payout'
    }
  ];

  const successStories = [
    {
      partner: 'Mountain Trails Adventures',
      location: 'Manali, HP',
      avatar: 'https://ui-avatars.com/api/?name=Mountain+Trails&background=0D8ABC&color=fff',
      tier: 'platinum',
      growth: '+340%',
      revenue: '₹45L/month',
      quote: 'Yatradarshak transformed our business. We went from 20 to 500+ bookings monthly!',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80'
    },
    {
      partner: 'Beach Paradise Tours',
      location: 'Goa',
      avatar: 'https://ui-avatars.com/api/?name=Beach+Paradise&background=14B8A6&color=fff',
      tier: 'gold',
      growth: '+220%',
      revenue: '₹28L/month',
      quote: 'The platform\'s AI recommendations and marketing support doubled our revenue in 6 months.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80'
    },
    {
      partner: 'Royal Heritage Travels',
      location: 'Rajasthan',
      avatar: 'https://ui-avatars.com/api/?name=Royal+Heritage&background=F59E0B&color=fff',
      tier: 'gold',
      growth: '+180%',
      revenue: '₹32L/month',
      quote: 'Best decision we made! The blockchain verification increased our bookings significantly.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Benefits', icon: Layers },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'visibility', label: 'Visibility', icon: Eye },
    { id: 'marketing', label: 'Marketing', icon: Rocket },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'training', label: 'Training', icon: BookOpen }
  ];

  const stats = [
    { label: 'Active Partners', value: '2,500+', icon: Users, color: 'from-teal-500 to-blue-600' },
    { label: 'Avg. Commission', value: '15.2%', icon: Percent, color: 'from-amber-500 to-orange-600' },
    { label: 'Monthly Bookings', value: '50K+', icon: Calendar, color: 'from-blue-500 to-indigo-600' },
    { label: 'Partner Revenue', value: '₹120Cr', icon: TrendingUp, color: 'from-pink-500 to-rose-600' }
  ];

  const filteredBenefits = activeCategory === 'all' 
    ? benefits 
    : benefits.filter(b => b.category === activeCategory);

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
              <Briefcase className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-semibold text-teal-200">Partner Program</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Grow Your Travel Business
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join 2,500+ verified partners earning higher commissions with India's most trusted travel platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <Rocket className="w-5 h-5" />
                Become a Partner
              </button>
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
                <FileText className="w-5 h-5" />
                Download Brochure
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

      {/* Partnership Tiers */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Partnership Tier</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive benefits and higher earnings as you grow with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const TierIcon = tier.icon;
            return (
              <div 
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedTier === tier.id 
                    ? 'shadow-2xl scale-105 border-2 border-teal-500' 
                    : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <TierIcon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tier.requirement}</p>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-600 mb-1">Commission Rate</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {tier.commission}
                    </p>
                  </div>

                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedTier === tier.id
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {selectedTier === tier.id ? 'Selected' : 'Select Tier'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Exclusive Partner Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your travel business and maximize revenue
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBenefits.filter(b => b.tier.includes(selectedTier)).map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-teal-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{benefit.title}</h3>
                  <span className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    {benefit.highlight}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Available for {benefit.tier.length} tier{benefit.tier.length > 1 ? 's' : ''}</span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-br from-slate-100 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real partners who transformed their business with Yatradarshak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.partner}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      story.tier === 'platinum' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' :
                      story.tier === 'gold' ? 'bg-gradient-to-r from-amber-500 to-orange-600' :
                      'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                      {story.tier === 'platinum' ? <Crown className="w-4 h-4 inline mr-1" /> :
                       story.tier === 'gold' ? <Star className="w-4 h-4 inline mr-1" /> :
                       <Award className="w-4 h-4 inline mr-1" />}
                      {story.tier.charAt(0).toUpperCase() + story.tier.slice(1)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={story.avatar}
                      alt={story.partner}
                      className="w-12 h-12 rounded-full border-2 border-teal-200"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{story.partner}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Revenue Growth</p>
                      <p className="text-2xl font-bold text-green-600">{story.growth}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Monthly Revenue</p>
                      <p className="text-lg font-bold text-gray-800">{story.revenue}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Start Earning in 3 Simple Steps</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of partners and start growing your travel business today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              icon: FileText,
              title: 'Register & Verify',
              description: 'Complete your profile, upload documents, and get blockchain verification within 24 hours'
            },
            {
              step: '02',
              icon: Package,
              title: 'List Your Packages',
              description: 'Create stunning packages with our AI-powered tools and smart pricing recommendations'
            },
            {
              step: '03',
              icon: TrendingUp,
              title: 'Start Earning',
              description: 'Receive bookings, track analytics, and get paid instantly with our fast settlement system'
            }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl font-bold text-teal-100 mb-4">{item.step}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-teal-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-semibold text-teal-200">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join now and get 3 months of Gold tier benefits FREE + ₹10,000 marketing credit
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <Rocket className="w-5 h-5" />
                Become a Partner Now
              </button>
              <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
                <Headphones className="w-5 h-5" />
                Talk to Sales Team
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                No Setup Fee
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                Cancel Anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits;