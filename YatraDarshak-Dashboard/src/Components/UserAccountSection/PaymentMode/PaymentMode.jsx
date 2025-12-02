import React, { useState } from 'react';
import { 
  CreditCard,
  Wallet,
  Building2,
  Smartphone,
  QrCode,
  Globe,
  CheckCircle2,
  Shield,
  Lock,
  AlertCircle,
  ChevronRight,
  X,
  Info,
  Sparkles,
  Star,
  Calendar,
  MapPin,
  Users,
  Clock,
  Tag,
  Gift,
  Percent,
  ArrowLeft,
  Check
} from 'lucide-react';

const PaymentMode = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [step, setStep] = useState(1); // 1: payment method, 2: details, 3: confirmation
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Booking Summary Data
  const bookingDetails = {
    destination: 'Shimla Heritage Tour',
    location: 'Shimla, Himachal Pradesh',
    dates: 'Dec 25 - Dec 30, 2024',
    duration: '5 Days 4 Nights',
    travelers: 2,
    services: ['Hotel', 'Transport', 'Guide'],
    basePrice: 45000,
    taxes: 4050,
    discount: 0
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, Rupay, Amex',
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'Google Pay, PhonePe, Paytm, BHIM',
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'All major banks supported',
      color: 'from-teal-500 to-teal-600',
      popular: false
    },
    {
      id: 'wallet',
      name: 'Wallets',
      icon: Wallet,
      description: 'Paytm, PhonePe, Amazon Pay',
      color: 'from-orange-500 to-orange-600',
      popular: false
    },
    {
      id: 'international',
      name: 'International Cards',
      icon: Globe,
      description: 'Pay in any currency',
      color: 'from-indigo-500 to-indigo-600',
      popular: false
    }
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank',
    'Punjab National Bank', 'Bank of Baroda', 'Kotak Mahindra Bank',
    'Yes Bank', 'IndusInd Bank', 'IDFC First Bank'
  ];

  const coupons = [
    {
      code: 'FIRST2024',
      discount: 2000,
      description: 'Flat ₹2000 off on first booking',
      minAmount: 30000,
      type: 'flat'
    },
    {
      code: 'WINTER25',
      discount: 10,
      description: '10% off on winter bookings',
      minAmount: 20000,
      maxDiscount: 5000,
      type: 'percent'
    },
    {
      code: 'YATRAREWARD',
      discount: 1500,
      description: 'YatraPoints redemption',
      minAmount: 0,
      type: 'flat'
    }
  ];

  const getTotalAmount = () => {
    const subtotal = bookingDetails.basePrice + bookingDetails.taxes;
    const discount = appliedCoupon ? 
      (appliedCoupon.type === 'flat' ? appliedCoupon.discount : 
       Math.min((bookingDetails.basePrice * appliedCoupon.discount / 100), appliedCoupon.maxDiscount || Infinity)) : 0;
    return subtotal - discount;
  };

  const handleApplyCoupon = (coupon) => {
    if (bookingDetails.basePrice >= coupon.minAmount) {
      setAppliedCoupon(coupon);
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    setStep(3);
    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your booking has been confirmed
          </p>
          
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 border border-teal-200">
            <p className="text-sm text-gray-600 mb-2">Transaction ID</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">YD{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
            <p className="text-3xl font-bold text-teal-600">₹{getTotalAmount().toLocaleString('en-IN')}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
              View Booking Details
            </button>
            <button className="w-full py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-teal-500 transition-all">
              Download Receipt
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Confirmation email sent to your registered email address
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Secure Payment</h1>
              <p className="text-teal-200 text-sm">Complete your booking safely</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? 'bg-teal-500 text-white' : 'bg-white/20 text-white/60'
              }`}>
                {step > 1 ? <Check className="w-5 h-5" /> : '1'}
              </div>
              <span className={step >= 1 ? 'text-white font-semibold' : 'text-white/60'}>
                Payment Method
              </span>
            </div>
            <div className="w-12 h-0.5 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? 'bg-teal-500 text-white' : 'bg-white/20 text-white/60'
              }`}>
                {step > 2 ? <Check className="w-5 h-5" /> : '2'}
              </div>
              <span className={step >= 2 ? 'text-white font-semibold' : 'text-white/60'}>
                Details
              </span>
            </div>
            <div className="w-12 h-0.5 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 3 ? 'bg-teal-500 text-white' : 'bg-white/20 text-white/60'
              }`}>
                3
              </div>
              <span className={step >= 3 ? 'text-white font-semibold' : 'text-white/60'}>
                Confirm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Payment Methods */}
            {step === 1 && (
              <>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Payment Method</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`relative p-6 rounded-xl border-2 transition-all ${
                          selectedMethod === method.id
                            ? 'border-teal-500 bg-teal-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        }`}
                      >
                        {method.popular && (
                          <span className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                            Popular
                          </span>
                        )}
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-1">{method.name}</h3>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => selectedMethod && setStep(2)}
                    disabled={!selectedMethod}
                    className="w-full mt-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Available Offers */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-6 h-6 text-teal-600" />
                    <h2 className="text-xl font-bold text-gray-800">Available Offers</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {coupons.map((coupon) => (
                      <div key={coupon.code} className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Tag className="w-4 h-4 text-teal-600" />
                              <span className="font-bold text-gray-800">{coupon.code}</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-1">{coupon.description}</p>
                            <p className="text-xs text-gray-500">
                              Min. booking: ₹{coupon.minAmount.toLocaleString('en-IN')}
                            </p>
                          </div>
                          <button
                            onClick={() => handleApplyCoupon(coupon)}
                            disabled={bookingDetails.basePrice < coupon.minAmount}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                              appliedCoupon?.code === coupon.code
                                ? 'bg-green-500 text-white'
                                : bookingDetails.basePrice >= coupon.minAmount
                                ? 'bg-teal-600 text-white hover:bg-teal-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {appliedCoupon?.code === coupon.code ? 'Applied' : 'Apply'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Payment Details */}
            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
                  <button onClick={() => setStep(1)} className="text-teal-600 font-semibold text-sm flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Change Method
                  </button>
                </div>

                {/* Card Payment */}
                {selectedMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({...cardDetails, number: formatCardNumber(e.target.value)})}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value.toUpperCase()})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength="5"
                          value={cardDetails.expiry}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 2) {
                              value = value.slice(0, 2) + '/' + value.slice(2, 4);
                            }
                            setCardDetails({...cardDetails, expiry: value});
                          }}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                        <input
                          type="password"
                          placeholder="123"
                          maxLength="3"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <Lock className="w-5 h-5 text-blue-600" />
                      <p className="text-sm text-blue-800">Your card details are encrypted and secure</p>
                    </div>
                  </div>
                )}

                {/* UPI Payment */}
                {selectedMethod === 'upi' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Enter UPI ID</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="text-center py-8">
                      <QrCode className="w-32 h-32 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600 font-semibold mb-2">Or Scan QR Code</p>
                      <p className="text-sm text-gray-500">Scan with any UPI app</p>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                        <button key={app} className="p-3 border-2 border-gray-200 rounded-xl hover:border-teal-500 transition-all">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                          <p className="text-xs text-gray-600 font-medium">{app}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Net Banking */}
                {selectedMethod === 'netbanking' && (
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Bank</label>
                    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {banks.map((bank) => (
                        <button
                          key={bank}
                          onClick={() => setSelectedBank(bank)}
                          className={`p-4 border-2 rounded-xl text-left transition-all ${
                            selectedBank === bank
                              ? 'border-teal-500 bg-teal-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Building2 className="w-6 h-6 text-gray-600 mb-2" />
                          <p className="text-sm font-semibold text-gray-800">{bank}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handlePayment}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Pay ₹{getTotalAmount().toLocaleString('en-IN')}
                </button>
              </div>
            )}

            {/* Step 3: Processing */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Lock className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Processing Payment...</h2>
                <p className="text-gray-600 mb-6">Please wait while we securely process your payment</p>
                <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Security Info */}
            <div className="bg-gradient-to-r from-slate-800 to-teal-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-teal-300" />
                <div>
                  <h3 className="font-bold text-lg">100% Secure Payment</h3>
                  <p className="text-sm text-teal-200">Your data is encrypted and protected</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <Lock className="w-6 h-6 mx-auto mb-2 text-teal-300" />
                  <p className="text-xs">SSL Encrypted</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-teal-300" />
                  <p className="text-xs">PCI Compliant</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-teal-300" />
                  <p className="text-xs">Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h2>
              
              {/* Destination Info */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2">{bookingDetails.destination}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    {bookingDetails.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    {bookingDetails.dates}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    {bookingDetails.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-600" />
                    {bookingDetails.travelers} Travelers
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Included Services:</p>
                <div className="flex flex-wrap gap-2">
                  {bookingDetails.services.map((service, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Base Price</span>
                  <span>₹{bookingDetails.basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>₹{bookingDetails.taxes.toLocaleString('en-IN')}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      Discount ({appliedCoupon.code})
                    </span>
                    <span>
                      -₹{(appliedCoupon.type === 'flat' ? appliedCoupon.discount : 
                        Math.min((bookingDetails.basePrice * appliedCoupon.discount / 100), appliedCoupon.maxDiscount || Infinity)).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-800">Total Amount</span>
                <span className="text-2xl font-bold text-teal-600">₹{getTotalAmount().toLocaleString('en-IN')}</span>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-gray-800">Booking Benefits</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Free cancellation up to 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Instant booking confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 travel support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Digital Tourist ID included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;