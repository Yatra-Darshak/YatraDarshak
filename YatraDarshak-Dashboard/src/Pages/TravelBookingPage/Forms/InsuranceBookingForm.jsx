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
  TrendingUp
} from "lucide-react";
import React, { useState } from "react";

const InsuranceBookingForm = () => {
  const [insuranceType, setInsuranceType] = useState('health');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Health Insurance States
  const [coverAmount, setCoverAmount] = useState(500000);
  const [policyTerm, setPolicyTerm] = useState(1);
  const [members, setMembers] = useState({ self: true, spouse: false, children: 0, parents: 0 });
  
  // Life Insurance States
  const [termCover, setTermCover] = useState(10000000);
  const [termDuration, setTermDuration] = useState(20);
  const [age, setAge] = useState(30);
  
  // Vehicle Insurance States
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleAge, setVehicleAge] = useState('new');
  
  // Travel Insurance States
  const [travelDuration, setTravelDuration] = useState(7);
  const [travelDestination, setTravelDestination] = useState('international');
  const [travelers, setTravelers] = useState(1);
  
  // Home Insurance States
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [propertyType, setPropertyType] = useState('apartment');
  
  // Business Insurance States
  const [businessType, setBusinessType] = useState('retail');
  const [businessValue, setBusinessValue] = useState(10000000);

  const insuranceTypes = [
    { id: 'health', name: 'Health', icon: Heart, color: 'purple' },
    { id: 'life', name: 'Life', icon: Users, color: 'blue' },
    { id: 'vehicle', name: 'Vehicle', icon: Car, color: 'green' },
    { id: 'travel', name: 'Travel', icon: Plane, color: 'orange' },
    { id: 'home', name: 'Home', icon: Home, color: 'red' },
    { id: 'business', name: 'Business', icon: Briefcase, color: 'indigo' }
  ];

  const coverAmountOptions = [300000, 500000, 1000000, 1500000, 2000000, 2500000];
  const propertyValueOptions = [2000000, 5000000, 10000000, 15000000, 20000000, 30000000];
  const termCoverOptions = [5000000, 10000000, 25000000, 50000000, 75000000, 100000000];
  const businessValueOptions = [5000000, 10000000, 25000000, 50000000, 100000000];

  const getTotalMembers = () => {
    let total = 0;
    if (members.self) total++;
    if (members.spouse) total++;
    total += members.children + members.parents;
    return total;
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowDetailsModal(true);
  };

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
      reviews: 2341
    },
    {
      id: 'h2',
      name: 'Complete Care',
      provider: 'HDFC ERGO',
      premium: 12000,
      claimSettlementRatio: 95.2,
      features: ['Zero Waiting Period for Accidents', 'Unlimited Automatic Restoration', 'Home Healthcare', 'Modern Treatment Coverage', 'Worldwide Emergency Cover', 'Mental Health Coverage'],
      exclusions: ['Dental Surgery (unless due to accident)', 'Contact Lenses', 'External Medical Devices'],
      tax_benefit: true,
      rating: 4.7,
      reviews: 3892
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
      reviews: 1567
    }
  ];

  const lifePlans = [
    {
      id: 'l1',
      name: 'Life Guard Term',
      provider: 'LIC India',
      premium: 15000,
      claimSettlementRatio: 97.8,
      features: ['Pure Term Protection', 'Accidental Death Benefit (2x)', 'Critical Illness Rider', 'Flexible Premium Payment', 'Tax Benefits u/s 80C & 10(10D)', 'Waiver of Premium on Disability'],
      exclusions: ['Death by Suicide (within 1 year)', 'Death due to War', 'Self-inflicted Injuries'],
      tax_benefit: true,
      rating: 4.6,
      reviews: 5234
    },
    {
      id: 'l2',
      name: 'Secure Future Plus',
      provider: 'HDFC Life',
      premium: 22000,
      claimSettlementRatio: 99.1,
      features: ['Term + Savings Plan', 'Maturity Benefit', 'Accidental Death Benefit (3x)', 'Critical Illness Cover', 'Premium Return Option', 'Income Benefit Option'],
      exclusions: ['Death within Policy Grace Period', 'Death due to Hazardous Activities', 'Undisclosed Health Conditions'],
      tax_benefit: true,
      rating: 4.8,
      reviews: 6721
    }
  ];

  const vehiclePlans = [
    {
      id: 'v1',
      name: 'Comprehensive Car Cover',
      provider: 'Bajaj Allianz',
      premium: 8500,
      claimSettlementRatio: 93.5,
      features: ['Own Damage Cover', 'Third Party Liability', 'Personal Accident Cover (₹15 Lakhs)', 'Zero Depreciation Add-on', 'Engine Protection', '24x7 Roadside Assistance'],
      exclusions: ['Driving without Valid License', 'DUI Related Damages', 'Wear & Tear'],
      tax_benefit: false,
      rating: 4.4,
      reviews: 4523
    },
    {
      id: 'v2',
      name: 'Basic Third Party',
      provider: 'National Insurance',
      premium: 2500,
      claimSettlementRatio: 88.7,
      features: ['Third Party Liability Only', 'Personal Accident Cover (₹15 Lakhs)', 'Legally Mandated Coverage', 'Nationwide Claim Support'],
      exclusions: ['Own Damage Not Covered', 'Accessories Damage', 'Theft Not Covered'],
      tax_benefit: false,
      rating: 4.0,
      reviews: 2134
    }
  ];

  const travelPlans = [
    {
      id: 't1',
      name: 'Global Wanderer',
      provider: 'ICICI Lombard Travel',
      premium: 2500,
      claimSettlementRatio: 94.2,
      features: ['Medical Emergency Cover (₹50 Lakhs)', 'Trip Cancellation/Delay', 'Lost Baggage Cover (₹50,000)', 'Passport Loss Assistance', '24x7 Emergency Support', 'Adventure Sports Cover'],
      exclusions: ['Pre-existing Medical Conditions', 'War/Terrorism', 'Pregnancy Related Claims'],
      tax_benefit: false,
      rating: 4.6,
      reviews: 3421
    },
    {
      id: 't2',
      name: 'Budget Travel Guard',
      provider: 'Tata AIG',
      premium: 1200,
      claimSettlementRatio: 90.5,
      features: ['Medical Emergency Cover (₹20 Lakhs)', 'Trip Cancellation', 'Lost Baggage Cover (₹25,000)', 'Passport Loss Assistance', '24x7 Helpline'],
      exclusions: ['Adventure Sports', 'Pre-existing Conditions', 'Mental Illness'],
      tax_benefit: false,
      rating: 4.3,
      reviews: 1876
    }
  ];

  const homePlans = [
    {
      id: 'ho1',
      name: 'Complete Home Protection',
      provider: 'Oriental Insurance',
      premium: 12000,
      claimSettlementRatio: 91.3,
      features: ['Building & Contents Cover', 'Fire & Allied Perils', 'Burglary & Theft', 'Natural Calamities', 'Rent Protection', 'Public Liability'],
      exclusions: ['War & Nuclear Risks', 'Wear & Tear', 'Consequential Loss'],
      tax_benefit: false,
      rating: 4.5,
      reviews: 2567
    },
    {
      id: 'ho2',
      name: 'Basic Home Guard',
      provider: 'New India Assurance',
      premium: 7500,
      claimSettlementRatio: 88.5,
      features: ['Building Structure Cover', 'Fire & Lightning Protection', 'Burglary Cover', 'Storm & Flood Coverage', 'Emergency Assistance'],
      exclusions: ['Wear & Tear', 'War Risks', 'Nuclear Damage'],
      tax_benefit: false,
      rating: 4.2,
      reviews: 1890
    }
  ];

  const businessPlans = [
    {
      id: 'b1',
      name: 'SME Shield',
      provider: 'HDFC ERGO Business',
      premium: 25000,
      claimSettlementRatio: 93.8,
      features: ['Property & Asset Cover', 'Business Interruption', 'Public Liability', 'Employee Compensation', 'Cyber Risk Cover', 'Professional Indemnity'],
      exclusions: ['Intentional Damage', 'War & Terrorism', 'Nuclear Risks'],
      tax_benefit: true,
      rating: 4.7,
      reviews: 1234
    },
    {
      id: 'b2',
      name: 'Business Essential',
      provider: 'Bajaj Allianz Business',
      premium: 18000,
      claimSettlementRatio: 90.2,
      features: ['Property Insurance', 'Fire & Theft Coverage', 'Public Liability', 'Equipment Breakdown', 'Business Interruption'],
      exclusions: ['Intentional Acts', 'War & Terrorism', 'Cyber Attacks'],
      tax_benefit: true,
      rating: 4.4,
      reviews: 987
    }
  ];

  const getCurrentPlans = () => {
    switch (insuranceType) {
      case 'health': return healthPlans;
      case 'life': return lifePlans;
      case 'vehicle': return vehiclePlans;
      case 'travel': return travelPlans;
      case 'home': return homePlans;
      case 'business': return businessPlans;
      default: return [];
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Insurance Type Selection */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select Insurance Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {insuranceTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = insuranceType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setInsuranceType(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-purple-600' : 'text-gray-600'}`} />
                  <div className={`text-sm font-semibold text-center ${isSelected ? 'text-purple-700' : 'text-gray-700'}`}>
                    {type.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Health Insurance Configuration */}
        {insuranceType === 'health' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Select Cover Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {coverAmountOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setCoverAmount(amount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        coverAmount === amount
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700 hover:border-purple-300'
                      }`}
                    >
                      ₹{(amount / 100000).toFixed(0)}L
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Policy Term (Years)</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[1, 2, 3, 5, 10].map((term) => (
                    <button
                      key={term}
                      onClick={() => setPolicyTerm(term)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        policyTerm === term
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700 hover:border-purple-300'
                      }`}
                    >
                      {term} Year{term > 1 ? 's' : ''}
                      {term > 1 && <div className="text-xs text-green-600 mt-1">Save {term * 5}%</div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Select Members</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="flex items-center gap-2 p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-300">
                    <input
                      type="checkbox"
                      checked={members.self}
                      onChange={(e) => setMembers({...members, self: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-semibold">Self</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-300">
                    <input
                      type="checkbox"
                      checked={members.spouse}
                      onChange={(e) => setMembers({...members, spouse: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-semibold">Spouse</span>
                  </label>
                  <div className="p-3 border-2 border-gray-300 rounded-lg">
                    <label className="text-sm font-semibold block mb-1">Children</label>
                    <input
                      type="number"
                      min="0"
                      max="4"
                      value={members.children}
                      onChange={(e) => setMembers({...members, children: parseInt(e.target.value) || 0})}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="p-3 border-2 border-gray-300 rounded-lg">
                    <label className="text-sm font-semibold block mb-1">Parents</label>
                    <input
                      type="number"
                      min="0"
                      max="2"
                      value={members.parents}
                      onChange={(e) => setMembers({...members, parents: parseInt(e.target.value) || 0})}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Total Members: {getTotalMembers()}</p>
              </div> */}
            </div>
          </div>
        )}

        {/* Life Insurance Configuration */}
        {insuranceType === 'life' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Select Cover Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {termCoverOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTermCover(amount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        termCover === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      ₹{(amount / 10000000).toFixed(0)}Cr
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Policy Term (Years)</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[10, 15, 20, 25, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setTermDuration(term)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        termDuration === term
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Your Age</label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {[25, 30, 35, 40, 45, 50].map((ageOption) => (
                    <button
                      key={ageOption}
                      onClick={() => setAge(ageOption)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        age === ageOption
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      {ageOption} yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Insurance Configuration */}
        {insuranceType === 'vehicle' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Vehicle Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['car', 'bike', 'commercial', 'electric'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setVehicleType(type)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all capitalize ${
                        vehicleType === type
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 text-gray-700 hover:border-green-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Vehicle Age</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'new', label: 'Brand New' },
                    { id: '1-3', label: '1-3 Years' },
                    { id: '3-5', label: '3-5 Years' },
                    { id: '5+', label: '5+ Years' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setVehicleAge(option.id)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        vehicleAge === option.id
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 text-gray-700 hover:border-green-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Travel Insurance Configuration */}
        {insuranceType === 'travel' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Travel Destination</label>
                <div className="grid grid-cols-2 gap-3">
                  {['international', 'domestic'].map((dest) => (
                    <button
                      key={dest}
                      onClick={() => setTravelDestination(dest)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all capitalize ${
                        travelDestination === dest
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Duration (Days)</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[7, 15, 30, 60, 90, 180].map((days) => (
                    <button
                      key={days}
                      onClick={() => setTravelDuration(days)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        travelDuration === days
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Number of Travelers</label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTravelers(num)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        travelers === num
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      {num} {num === 1 ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Home Insurance Configuration */}
        {insuranceType === 'home' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Property Value</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {propertyValueOptions.map((value) => (
                    <button
                      key={value}
                      onClick={() => setPropertyValue(value)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        propertyValue === value
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-300 text-gray-700 hover:border-red-300'
                      }`}
                    >
                      ₹{(value / 10000000).toFixed(1)}Cr
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Property Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'apartment', label: 'Apartment' },
                    { id: 'independent', label: 'Independent House' },
                    { id: 'villa', label: 'Villa' },
                    { id: 'commercial', label: 'Commercial' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPropertyType(type.id)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        propertyType === type.id
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-300 text-gray-700 hover:border-red-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Insurance Configuration */}
        {insuranceType === 'business' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Business Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['retail', 'manufacturing', 'service', 'startup'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setBusinessType(type)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all capitalize ${
                        businessType === type
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-gray-300 text-gray-700 hover:border-indigo-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Business Value</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {businessValueOptions.map((value) => (
                    <button
                      key={value}
                      onClick={() => setBusinessValue(value)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        businessValue === value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-gray-300 text-gray-700 hover:border-indigo-300'
                      }`}
                    >
                      ₹{(value / 10000000).toFixed(1)}Cr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Plans Button */}
        <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 rounded-2xl shadow-xl">
          VIEW PLANS
        </button>
      </div>


      {/* Details Modal */}
      {showDetailsModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedPlan.name}</h2>
                <p className="text-sm text-gray-600">{selectedPlan.provider}</p>
              </div>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Policy Summary */}
              <div className="border-2 border-purple-200 rounded-xl p-5 bg-purple-50">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Policy Summary</h3>
                <div className="space-y-3">
                  {insuranceType === 'health' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sum Insured</span>
                        <span className="font-semibold">₹{(coverAmount / 100000).toFixed(0)} Lakhs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Policy Term</span>
                        <span className="font-semibold">{policyTerm} Year(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Members Covered</span>
                        <span className="font-semibold">{getTotalMembers()} Person(s)</span>
                      </div>
                    </>
                  )}
                  {insuranceType === 'life' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Cover Amount</span>
                        <span className="font-semibold">₹{(termCover / 10000000).toFixed(0)} Crore</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Policy Term</span>
                        <span className="font-semibold">{termDuration} Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Age</span>
                        <span className="font-semibold">{age} Years</span>
                      </div>
                    </>
                  )}
                  {insuranceType === 'vehicle' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Vehicle Type</span>
                        <span className="font-semibold capitalize">{vehicleType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Vehicle Age</span>
                        <span className="font-semibold">{vehicleAge === 'new' ? 'Brand New' : vehicleAge === '1-3' ? '1-3 Years' : vehicleAge === '3-5' ? '3-5 Years' : '5+ Years'}</span>
                      </div>
                    </>
                  )}
                  {insuranceType === 'travel' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Destination</span>
                        <span className="font-semibold capitalize">{travelDestination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Duration</span>
                        <span className="font-semibold">{travelDuration} Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Travelers</span>
                        <span className="font-semibold">{travelers} Person(s)</span>
                      </div>
                    </>
                  )}
                  {insuranceType === 'home' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Property Value</span>
                        <span className="font-semibold">₹{(propertyValue / 10000000).toFixed(1)} Crore</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Property Type</span>
                        <span className="font-semibold capitalize">{propertyType === 'independent' ? 'Independent House' : propertyType}</span>
                      </div>
                    </>
                  )}
                  {insuranceType === 'business' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Business Type</span>
                        <span className="font-semibold capitalize">{businessType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Business Value</span>
                        <span className="font-semibold">₹{(businessValue / 10000000).toFixed(1)} Crore</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-700">Claim Settlement Ratio</span>
                    <span className="font-semibold text-green-600">{selectedPlan.claimSettlementRatio}%</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="border-2 border-gray-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Coverage Highlights</h3>
                <div className="grid grid-cols-1 gap-2">
                  {selectedPlan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900">
                    <p className="font-semibold mb-2">Policy Exclusions</p>
                    <ul className="list-disc list-inside space-y-1 text-amber-800">
                      {selectedPlan.exclusions.map((exclusion, i) => (
                        <li key={i}>{exclusion}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium Details */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Premium Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Premium</span>
                    <span className="font-semibold">₹{selectedPlan.premium.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-semibold">₹{Math.round(selectedPlan.premium * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-gray-800">Total Premium</span>
                      <span className="font-bold text-purple-600">₹{Math.round(selectedPlan.premium * 1.18).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Per Month</span>
                      <span className="font-semibold">₹{Math.round((selectedPlan.premium * 1.18) / 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {selectedPlan.tax_benefit && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-2 text-sm text-green-800">
                      <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Tax Benefits Available</p>
                        <p className="text-xs mt-1">Save up to ₹25,000 on taxes under Section 80D</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Important Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-2">Important Information</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>Policy will be issued within 24-48 hours after payment</li>
                      <li>Free look period of 15 days from policy receipt</li>
                      <li>All terms and conditions apply as per policy document</li>
                      <li>Please read the policy document carefully before purchasing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceBookingForm;

// import { 
//   Shield,
//   Users,
//   Heart,
//   Plane,
//   Car,
//   Home,
//   Briefcase,
//   CheckCircle,
//   Info,
//   X,
//   User,
//   CreditCard,
//   AlertCircle,
//   TrendingUp,
// } from "lucide-react";
// import React, { useState } from "react";

// const InsuranceBookingForm = () => {
//   const [insuranceType, setInsuranceType] = useState('health');
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [coverAmount, setCoverAmount] = useState(500000);
//   const [policyTerm, setPolicyTerm] = useState(1);
//   const coverAmountOptions = [300000, 500000, 1000000, 1500000, 2000000, 2500000];


//   return (
//     <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen p-4 md:p-8">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto mb-8">

//         {/* Insurance Type Selection */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Select Insurance Type</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {insuranceTypes.map((type) => {
//               const Icon = type.icon;
//               const isSelected = insuranceType === type.id;
//               return (
//                 <button
//                   key={type.id}
//                   onClick={() => setInsuranceType(type.id)}
//                   className={`p-4 rounded-xl border-2 transition-all duration-300 ${
//                     isSelected
//                       ? `border-${type.color}-500 bg-${type.color}-50 shadow-lg scale-105`
//                       : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
//                   }`}
//                 >
//                   <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? `text-${type.color}-600` : 'text-gray-600'}`} />
//                   <div className={`text-sm font-semibold text-center ${isSelected ? `text-${type.color}-700` : 'text-gray-700'}`}>
//                     {type.name}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Health Insurance Form */}
//         {insuranceType === 'health' && (
//           <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
//             <div className="p-6 space-y-6">
//               {/* Cover Amount Selection */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-3">
//                   Select Cover Amount
//                 </label>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
//                   {coverAmountOptions.map((amount) => (
//                     <button
//                       key={amount}
//                       onClick={() => setCoverAmount(amount)}
//                       className={`p-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
//                         coverAmount === amount
//                           ? 'border-purple-500 bg-purple-50 text-purple-700'
//                           : 'border-gray-300 text-gray-700 hover:border-purple-300'
//                       }`}
//                     >
//                       ₹{(amount / 100000).toFixed(0)}L
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Policy Term */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-3">
//                   Policy Term (Years)
//                 </label>
//                 <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
//                   {[1, 2, 3, 5, 10].map((term) => (
//                     <button
//                       key={term}
//                       onClick={() => setPolicyTerm(term)}
//                       className={`p-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
//                         policyTerm === term
//                           ? 'border-purple-500 bg-purple-50 text-purple-700'
//                           : 'border-gray-300 text-gray-700 hover:border-purple-300'
//                       }`}
//                     >
//                       {term} Year{term > 1 ? 's' : ''}
//                       {term > 1 && <div className="text-xs text-green-600 mt-1">Save {term * 5}%</div>}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
//               VIEW PLANS
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Booking Modal */}
//       {showDetailsModal && selectedPlan && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">{selectedPlan.name}</h2>
//                 <p className="text-sm text-gray-600">{selectedPlan.provider}</p>
//               </div>
//               <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Personal Information */}
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <User className="w-5 h-5 text-purple-600" />
//                   Personal Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Full Name *"
//                     value={personalInfo.fullName}
//                     onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
//                     className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                   />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       placeholder="City *"
//                       value={personalInfo.city}
//                       onChange={(e) => updatePersonalInfo('city', e.target.value)}
//                       className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Pincode *"
//                       value={personalInfo.pincode}
//                       onChange={(e) => updatePersonalInfo('pincode', e.target.value)}
//                       className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Medical History */}
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <Heart className="w-5 h-5 text-purple-600" />
//                   Medical History
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Smoking Habits</label>
//                       <select
//                         value={medicalHistory.smokingHabits}
//                         onChange={(e) => setMedicalHistory({...medicalHistory, smokingHabits: e.target.value})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                       >
//                         <option value="no">No</option>
//                         <option value="occasionally">Occasionally</option>
//                         <option value="regularly">Regularly</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Alcohol Consumption</label>
//                       <select
//                         value={medicalHistory.alcoholConsumption}
//                         onChange={(e) => setMedicalHistory({...medicalHistory, alcoholConsumption: e.target.value})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                       >
//                         <option value="no">No</option>
//                         <option value="occasionally">Occasionally</option>
//                         <option value="regularly">Regularly</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Pre-existing Conditions (if any)</label>
//                     <textarea
//                       placeholder="Mention any pre-existing medical conditions..."
//                       rows="3"
//                       value={medicalHistory.preExistingConditions}
//                       onChange={(e) => setMedicalHistory({...medicalHistory, preExistingConditions: e.target.value})}
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none resize-none"
//                     ></textarea>
//                     <p className="text-xs text-gray-500 mt-2">Declaring pre-existing conditions helps in faster claim settlement</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Nominee Details */}
//               <div className="border-2 border-gray-200 rounded-xl p-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <Users className="w-5 h-5 text-purple-600" />
//                   Nominee Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Nominee Name *"
//                     className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Relationship *"
//                     className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                   />
//                   <input
//                     type="date"
//                     placeholder="Nominee DOB *"
//                     className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Nominee Contact"
//                     className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Policy Summary */}
//               <div className="border-2 border-purple-200 rounded-xl p-5 bg-purple-50">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">Policy Summary</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Plan Name</span>
//                     <span className="font-semibold text-gray-800">{selectedPlan.name}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Insurance Provider</span>
//                     <span className="font-semibold text-gray-800">{selectedPlan.provider}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Sum Insured</span>
//                     <span className="font-semibold text-gray-800">₹{(coverAmount / 100000).toFixed(0)} Lakhs</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Policy Term</span>
//                     <span className="font-semibold text-gray-800">{policyTerm} Year(s)</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Members Covered</span>
//                     <span className="font-semibold text-gray-800">{getTotalMembers()} Person(s)</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700">Claim Settlement Ratio</span>
//                     <span className="font-semibold text-green-600">{selectedPlan.claimSettlementRatio}%</span>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-4 border-t-2 border-purple-300">
//                   <h4 className="font-bold text-gray-800 mb-3">Coverage Highlights:</h4>
//                   <div className="grid grid-cols-1 gap-2">
//                     {selectedPlan.features.slice(0, 5).map((feature, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//                         <span className="text-sm text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Premium Breakdown */}
//               <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-purple-600" />
//                   Premium Breakdown
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Base Premium</span>
//                     <span className="font-semibold">₹{calculateTotalPremium().basePremium.toLocaleString()}</span>
//                   </div>
//                   {policyTerm > 1 && (
//                     <div className="flex justify-between text-green-600">
//                       <span>Multi-year Discount ({policyTerm * 5}%)</span>
//                       <span className="font-semibold">- ₹{Math.round(selectedPlan.premium * policyTerm * 0.05).toLocaleString()}</span>
//                     </div>
//                   )}
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">GST (18%)</span>
//                     <span className="font-semibold">₹{calculateTotalPremium().gst.toLocaleString()}</span>
//                   </div>
//                   <div className="border-t-2 border-gray-300 pt-3 mt-3">
//                     <div className="flex justify-between text-xl">
//                       <span className="font-bold text-gray-800">Total Premium</span>
//                       <span className="font-bold text-purple-600">₹{calculateTotalPremium().total.toLocaleString()}</span>
//                     </div>
//                     <div className="flex justify-between text-sm text-gray-600 mt-2">
//                       <span>Per Month</span>
//                       <span className="font-semibold">₹{Math.round(calculateTotalPremium().total / 12).toLocaleString()}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {selectedPlan.tax_benefit && (
//                   <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
//                     <div className="flex items-start gap-2 text-sm text-green-800">
//                       <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
//                       <div>
//                         <p className="font-semibold">Tax Benefits Available</p>
//                         <p className="text-xs mt-1">Save up to ₹25,000 on taxes under Section 80D</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Important Information */}
//               <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
//                 <div className="flex items-start gap-3">
//                   <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <div className="text-sm text-blue-900">
//                     <p className="font-semibold mb-2">Important Information</p>
//                     <ul className="list-disc list-inside space-y-1 text-blue-800">
//                       <li>Policy will be issued within 24-48 hours after payment</li>
//                       <li>Free look period of 15 days from policy receipt</li>
//                       <li>Pre-policy medical check-up may be required for certain age groups</li>
//                       <li>Waiting period of 30 days for most illnesses (excluding accidents)</li>
//                       <li>Cashless treatment available at network hospitals</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Exclusions */}
//               <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
//                 <div className="flex items-start gap-3">
//                   <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
//                   <div className="text-sm text-amber-900">
//                     <p className="font-semibold mb-2">Policy Exclusions</p>
//                     <ul className="list-disc list-inside space-y-1 text-amber-800">
//                       {selectedPlan.exclusions.map((exclusion, i) => (
//                         <li key={i}>{exclusion}</li>
//                       ))}
//                       <li>Treatment outside of India (unless specified)</li>
//                       <li>Self-inflicted injuries and suicide attempts</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Terms Acceptance */}
//               <div className="border-2 border-gray-200 rounded-xl p-4">
//                 <label className="flex items-start gap-3 cursor-pointer">
//                   <input type="checkbox" className="w-5 h-5 mt-1" />
//                   <span className="text-sm text-gray-700">
//                     I declare that all the information provided is true and accurate. I have read and agree to the{' '}
//                     <span className="text-purple-600 font-semibold hover:underline">Terms & Conditions</span>,{' '}
//                     <span className="text-purple-600 font-semibold hover:underline">Privacy Policy</span>, and{' '}
//                     <span className="text-purple-600 font-semibold hover:underline">Policy Wordings</span>.
//                   </span>
//                 </label>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-3 pt-4">
//                 <button
//                   onClick={() => setShowDetailsModal(false)}
//                   className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   disabled={!personalInfo.fullName || !personalInfo.email || !personalInfo.phone || !personalInfo.dob}
//                   className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Proceed to Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InsuranceBookingForm;