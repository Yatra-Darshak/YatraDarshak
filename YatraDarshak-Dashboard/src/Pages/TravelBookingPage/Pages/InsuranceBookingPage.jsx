import { 
  Users,
  Heart,
  Plane,
  Car,
  Home,
  Briefcase,
  CheckCircle,
  Info,
  X,
  AlertCircle,
  TrendingUp,
  Shield,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  IndianRupee,
  Filter,
  ChevronDown,
  ChevronRight,
  Search,
  Clock,
  Building,
  FileText,
  CreditCard,
  User,
  Percent
} from "lucide-react";
import React, { useState } from "react";

const InsuranceBookingPage = () => {
  const [insuranceType, setInsuranceType] = useState('health');
  const [showResults, setShowResults] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Health Insurance States
  const [coverAmount, setCoverAmount] = useState(500000);
  const [policyTerm, setPolicyTerm] = useState(1);
  const [age, setAge] = useState(30);
  
  // Filter and Sort
  const [sortBy, setSortBy] = useState('popular');
  const [filterProvider, setFilterProvider] = useState('all');

  const insuranceTypes = [
    { id: 'health', name: 'Health Insurance', icon: Heart, color: 'from-purple-500 to-pink-500', desc: 'Medical coverage' },
    { id: 'life', name: 'Life Insurance', icon: Users, color: 'from-blue-500 to-cyan-500', desc: 'Family protection' },
    { id: 'vehicle', name: 'Vehicle Insurance', icon: Car, color: 'from-green-500 to-emerald-500', desc: 'Car & bike cover' },
    { id: 'travel', name: 'Travel Insurance', icon: Plane, color: 'from-orange-500 to-red-500', desc: 'Trip protection' },
    { id: 'home', name: 'Home Insurance', icon: Home, color: 'from-red-500 to-pink-500', desc: 'Property cover' },
    { id: 'business', name: 'Business Insurance', icon: Briefcase, color: 'from-indigo-500 to-purple-500', desc: 'Business protection' }
  ];

  const coverAmountOptions = [300000, 500000, 1000000, 1500000, 2000000, 2500000];

  const healthPlans = [
    {
      id: 'h1',
      name: 'Health Shield Plus',
      provider: 'Star Health Insurance',
      premium: 8500,
      claimSettlementRatio: 92.5,
      features: ['Cashless Treatment at 10,000+ Hospitals', 'Pre & Post Hospitalization (60 Days)', 'Ambulance Cover up to ₹2,000', 'Annual Health Check-up', 'No Room Rent Limit', 'Maternity Cover Available'],
      exclusions: ['Cosmetic Surgery', 'Dental Treatment', 'HIV/AIDS Treatment'],
      tax_benefit: true,
      rating: 4.5,
      reviews: 2341,
      badge: 'Popular',
      hospitals: 10000
    },
    {
      id: 'h2',
      name: 'Complete Care Premium',
      provider: 'HDFC ERGO',
      premium: 12000,
      claimSettlementRatio: 95.2,
      features: ['Zero Waiting Period for Accidents', 'Unlimited Automatic Restoration', 'Home Healthcare', 'Modern Treatment Coverage', 'Worldwide Emergency Cover', 'Mental Health Coverage'],
      exclusions: ['Dental Surgery (unless due to accident)', 'Contact Lenses', 'External Medical Devices'],
      tax_benefit: true,
      rating: 4.7,
      reviews: 3892,
      badge: 'Premium',
      hospitals: 12000
    },
    {
      id: 'h3',
      name: 'Basic Protection',
      provider: 'ICICI Lombard',
      premium: 6500,
      claimSettlementRatio: 89.8,
      features: ['Cashless Treatment at 6,500+ Hospitals', 'Pre & Post Hospitalization (30 Days)', 'Ambulance Cover up to ₹1,000', 'Annual Health Check-up', 'Room Rent Limit: ₹5,000/day'],
      exclusions: ['Pre-existing Diseases (2 Year Wait)', 'Cosmetic Surgery', 'Weight Loss Surgery'],
      tax_benefit: true,
      rating: 4.2,
      reviews: 1567,
      badge: 'Budget Friendly',
      hospitals: 6500
    },
    {
      id: 'h4',
      name: 'Family Health Guard',
      provider: 'Max Bupa',
      premium: 15000,
      claimSettlementRatio: 93.5,
      features: ['Family Floater Option', 'Worldwide Coverage', 'No Sub-limits', 'Daily Hospital Cash', 'Alternative Treatment Cover', 'Preventive Health Check-ups'],
      exclusions: ['War & Nuclear Risks', 'Intentional Self-injury', 'Pre-existing for 1 year'],
      tax_benefit: true,
      rating: 4.6,
      reviews: 2890,
      badge: 'Family Special',
      hospitals: 9500
    }
  ];

  const providers = ['Star Health Insurance', 'HDFC ERGO', 'ICICI Lombard', 'Max Bupa'];

  const handleSearch = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowDetailsModal(true);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Premium": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Popular": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Budget Friendly": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Family Special": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      default: return "bg-gray-500";
    }
  };

  const filteredAndSortedPlans = [...healthPlans]
    .filter(plan => {
      if (filterProvider === 'all') return true;
      return plan.provider === filterProvider;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.reviews - a.reviews;
      if (sortBy === 'price-low') return a.premium - b.premium;
      if (sortBy === 'price-high') return b.premium - a.premium;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  if (!showResults) {
    // Main Search Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Protect What Matters Most
            </h1>
            <p className="text-xl text-gray-600">Compare & Buy Best Insurance Plans in Minutes</p>
          </div>

          {/* Insurance Type Selection */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Insurance Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = insuranceType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setInsuranceType(type.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 shadow-xl scale-105'
                        : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                    }`}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${isSelected ? 'text-purple-700' : 'text-gray-800'}`}>
                      {type.name}
                    </h3>
                    <p className="text-sm text-gray-600">{type.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Health Insurance Form */}
          {insuranceType === 'health' && (
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Customize Your Plan</h2>
              
              {/* Cover Amount */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                  Select Cover Amount
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {coverAmountOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setCoverAmount(amount)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all duration-300 ${
                        coverAmount === amount
                          ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg scale-105'
                          : 'border-gray-300 text-gray-700 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-lg">₹{(amount / 100000).toFixed(0)}L</div>
                      <div className="text-xs text-gray-500 mt-1">Cover</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Policy Term */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                  Policy Term (Years)
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[1, 2, 3, 5, 10].map((term) => (
                    <button
                      key={term}
                      onClick={() => setPolicyTerm(term)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all duration-300 ${
                        policyTerm === term
                          ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg scale-105'
                          : 'border-gray-300 text-gray-700 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-lg">{term} Year{term > 1 ? 's' : ''}</div>
                      {term > 1 && (
                        <div className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1 justify-center">
                          <Percent className="w-3 h-3" />
                          Save {term * 5}%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                  Your Age
                </label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {[25, 30, 35, 40, 45, 50].map((ageOption) => (
                    <button
                      key={ageOption}
                      onClick={() => setAge(ageOption)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all duration-300 ${
                        age === ageOption
                          ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg scale-105'
                          : 'border-gray-300 text-gray-700 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-lg">{ageOption}</div>
                      <div className="text-xs text-gray-500 mt-1">years</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white text-2xl font-bold transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Search className="w-6 h-6" />
                <span>VIEW PLANS</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          )}

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
              Why Trust Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">100% Secure</h3>
                <p className="text-sm text-gray-600">Your data is safe with us</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">50+ Insurers</h3>
                <p className="text-sm text-gray-600">Compare from top companies</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Quick Process</h3>
                <p className="text-sm text-gray-600">Get covered in minutes</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-purple-100">Policies Sold</div>
            </div>
            <div className="text-center border-l border-r border-purple-400">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Claim Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 sticky top-4 z-20 border-2 border-gray-100">
          <div className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold text-gray-800">Health Insurance</span>
              </div>
              
              <div className="flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-gray-800">₹{(coverAmount / 100000).toFixed(0)}L Cover</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold text-gray-800">{policyTerm} Year{policyTerm > 1 ? 's' : ''}</span>
              </div>

              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-gray-800">{age} Years</span>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                MODIFY
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between border-2 border-gray-100">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-bold text-gray-700">Provider:</span>
            <button
              onClick={() => setFilterProvider("all")}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${filterProvider === "all" ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            {providers.slice(0, 3).map(provider => (
              <button
                key={provider}
                onClick={() => setFilterProvider(provider)}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${filterProvider === provider ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {provider.split(' ')[0]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-700">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-gray-100 border-none outline-none text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
          <h2 className="text-3xl font-bold mb-2">
            {filteredAndSortedPlans.length} Plans Available
          </h2>
          <p className="text-purple-100 text-lg">
            Health Insurance • ₹{(coverAmount / 100000).toFixed(0)} Lakh Cover • {policyTerm} Year Policy
          </p>
        </div>

        {/* Plans List */}
        <div className="space-y-6">
          {filteredAndSortedPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-purple-200">
              {/* Badge */}
              {plan.badge && (
                <div className={`${getBadgeColor(plan.badge)} text-white px-4 py-1 text-xs font-bold flex items-center gap-2 w-fit rounded-br-2xl`}>
                  <Award className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <div className="p-6">
                {/* Plan Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 font-semibold flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {plan.provider}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-bold text-gray-800">{plan.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{plan.reviews} reviews</div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{plan.claimSettlementRatio}%</div>
                    <div className="text-xs text-gray-600 mt-1">Claim Settlement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{plan.hospitals.toLocaleString()}+</div>
                    <div className="text-xs text-gray-600 mt-1">Network Hospitals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Cashless Treatment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Tax Benefits</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border-2 border-purple-200">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Annual Premium</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-3xl font-bold text-gray-800">
                        <IndianRupee className="w-7 h-7" />
                        {Math.round(plan.premium * policyTerm * (1 - (policyTerm > 1 ? policyTerm * 0.05 : 0))).toLocaleString()}
                      </div>
                      {policyTerm > 1 && (
                        <div className="text-sm text-green-600 font-semibold flex items-center gap-1">
                          <Percent className="w-3 h-3" />
                          {policyTerm * 5}% Off
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      + GST | ₹{Math.round((plan.premium * policyTerm * (1 - (policyTerm > 1 ? policyTerm * 0.05 : 0))) / 12).toLocaleString()}/month
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className="px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <span>BUY NOW</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-3xl sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{selectedPlan.name}</h3>
                  <p className="text-purple-100 mt-1 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    {selectedPlan.provider}
                  </p>
                </div>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Policy Summary */}
              <div className="border-2 border-purple-200 rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Policy Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Sum Insured</span>
                    <span className="text-xl font-bold text-purple-600">₹{(coverAmount / 100000).toFixed(0)} Lakhs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Policy Term</span>
                    <span className="font-bold text-gray-800">{policyTerm} Year(s)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Your Age</span>
                    <span className="font-bold text-gray-800">{age} Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Claim Settlement Ratio</span>
                    <span className="font-bold text-green-600 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {selectedPlan.claimSettlementRatio}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Network Hospitals</span>
                    <span className="font-bold text-blue-600">{selectedPlan.hospitals.toLocaleString()}+</span>
                  </div>
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Enter mobile number"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Address *</label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <textarea
                        placeholder="Enter your complete address"
                        rows="2"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pincode *</label>
                    <input
                      type="text"
                      placeholder="Enter pincode"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-600" />
                  Medical Information
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        placeholder="Enter height"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        placeholder="Enter weight"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pre-existing Conditions (if any)</label>
                    <textarea
                      placeholder="Mention any pre-existing medical conditions..."
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 transition-colors resize-none"
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-2">Declaring conditions helps in faster claim settlement</p>
                  </div>
                </div>
              </div>

              {/* Coverage Highlights */}
              <div className="border-2 border-green-200 rounded-2xl p-6 bg-green-50">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Coverage Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPlan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900 flex-1">
                    <p className="font-bold text-lg mb-3">Policy Exclusions</p>
                    <ul className="list-disc list-inside space-y-2 text-amber-800">
                      {selectedPlan.exclusions.map((exclusion, i) => (
                        <li key={i}>{exclusion}</li>
                      ))}
                      <li>Treatment outside of India (unless specified)</li>
                      <li>Self-inflicted injuries and intentional acts</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium Breakdown */}
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Premium Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Base Premium</span>
                    <span className="font-bold text-gray-800">₹{(selectedPlan.premium * policyTerm).toLocaleString()}</span>
                  </div>
                  {policyTerm > 1 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="font-semibold flex items-center gap-1">
                        <Percent className="w-4 h-4" />
                        Multi-year Discount ({policyTerm * 5}%)
                      </span>
                      <span className="font-bold">- ₹{Math.round(selectedPlan.premium * policyTerm * policyTerm * 0.05).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">GST (18%)</span>
                    <span className="font-bold text-gray-800">₹{Math.round((selectedPlan.premium * policyTerm * (1 - (policyTerm > 1 ? policyTerm * 0.05 : 0))) * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-purple-300 pt-4 mt-4">
                    <div className="flex justify-between items-center text-2xl">
                      <span className="font-bold text-gray-800">Total Premium</span>
                      <span className="font-bold text-purple-600 flex items-center gap-1">
                        <IndianRupee className="w-6 h-6" />
                        {Math.round((selectedPlan.premium * policyTerm * (1 - (policyTerm > 1 ? policyTerm * 0.05 : 0))) * 1.18).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                      <span>Per Month</span>
                      <span className="font-semibold">₹{Math.round(((selectedPlan.premium * policyTerm * (1 - (policyTerm > 1 ? policyTerm * 0.05 : 0))) * 1.18) / 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {selectedPlan.tax_benefit && (
                  <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                    <div className="flex items-start gap-2 text-sm text-green-800">
                      <TrendingUp className="w-5 h-5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-bold text-base mb-1">Tax Benefits Available</p>
                        <p className="text-xs">Save up to ₹25,000 on taxes under Section 80D</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Important Information */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 flex-1">
                    <p className="font-bold text-lg mb-3">Important Information</p>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                      <li>Policy will be issued within 24-48 hours after payment verification</li>
                      <li>Free look period of 15 days from policy receipt date</li>
                      <li>Pre-policy medical check-up may be required for certain age groups</li>
                      <li>Waiting period of 30 days for most illnesses (accidents excluded)</li>
                      <li>Cashless treatment available at all network hospitals</li>
                      <li>Please read the policy document carefully before purchasing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 mt-0.5 accent-purple-600" />
                  <span className="text-sm text-gray-700">
                    I declare that all information provided is true and accurate. I have read and agree to the{' '}
                    <span className="font-bold text-purple-600 hover:underline cursor-pointer">Terms & Conditions</span>,{' '}
                    <span className="font-bold text-purple-600 hover:underline cursor-pointer">Privacy Policy</span>, and{' '}
                    <span className="font-bold text-purple-600 hover:underline cursor-pointer">Policy Wordings</span>.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    alert('Proceeding to secure payment gateway... 🔒');
                    setShowDetailsModal(false);
                  }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  <span>PROCEED TO PAYMENT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceBookingPage;