import { 
  ArrowLeftRight, 
  Plane, 
  Plus,
  Minus,
  Info,
  Shield,
  Star,
  Phone,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    class: 'Economy'
  });
  const [from, setFrom] = useState({ 
    city: 'Delhi', 
    code: 'DEL', 
    airport: 'Delhi Airport India' 
  });
  const [to, setTo] = useState({ 
    city: 'Mumbai', 
    code: 'BOM', 
    airport: 'Chhatrapati Shivaji International Airport India' 
  });
  const [departureDate, setDepartureDate] = useState('2025-11-04');
  const [returnDate, setReturnDate] = useState('2025-11-07');

  const cities = [
    { city: 'Delhi', code: 'DEL', airport: 'Delhi Airport India' },
    { city: 'Mumbai', code: 'BOM', airport: 'Chhatrapati Shivaji International Airport India' },
    { city: 'Bangalore', code: 'BLR', airport: 'Kempegowda International Airport India' },
    { city: 'Chennai', code: 'MAA', airport: 'Chennai International Airport India' },
    { city: 'Kolkata', code: 'CCU', airport: 'Netaji Subhas Chandra Bose International Airport India' },
    { city: 'Hyderabad', code: 'HYD', airport: 'Rajiv Gandhi International Airport India' },
    { city: 'Goa', code: 'GOI', airport: 'Goa International Airport India' },
    { city: 'Jaipur', code: 'JAI', airport: 'Jaipur International Airport India' },
  ];

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const updateTravelers = (type, action) => {
    setTravelers(prev => {
      const newValue = action === 'increment' ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      
      if (type === 'adults' && newValue < 1) return prev;
      if (type === 'infants' && newValue > prev.adults) return prev;
      if (prev.adults + prev.children + newValue > 9) return prev;
      
      return { ...prev, [type]: newValue };
    });
  };

  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-fit p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Trip Type Selection */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            {[
              { value: 'oneWay', label: 'One Way' },
              { value: 'roundTrip', label: 'Round Trip' },
              { value: 'multiCity', label: 'Multi City' }
            ].map((trip) => (
              <label key={trip.value} className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="tripType"
                    value={trip.value}
                    checked={tripType === trip.value}
                    onChange={(e) => setTripType(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    tripType === trip.value 
                      ? 'border-blue-600 bg-blue-600' 
                      : 'border-gray-400'
                  }`}>
                    {tripType === trip.value && (
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  {trip.label}
                </span>
              </label>
            ))}
          </div>
          <div className="text-sm text-gray-600 hidden md:block">
            Book <span className="text-blue-600 font-semibold hover:underline cursor-pointer">International</span> and <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Domestic Flights</span>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex flex-wrap relative">
            {/* From */}
            <div className="flex-1 min-w-[280px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                From
              </label>
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-blue-500 rotate-45" />
                <div className="flex-1">
                  <select
                    value={from.code}
                    onChange={(e) => {
                      const selected = cities.find(c => c.code === e.target.value);
                      setFrom(selected);
                    }}
                    className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  >
                    {cities.map((city) => (
                      <option key={city.code} value={city.code}>
                        {city.city} ({city.code})
                      </option>
                    ))}
                  </select>
                  <div className="text-sm text-gray-500 truncate">
                    {from.airport}
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="absolute left-[31%] top-[50px] z-10 hidden lg:block">
              <button
                onClick={swapCities}
                className="w-12 h-12 rounded-full bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>

            {/* To */}
            <div className="flex-1 min-w-[280px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                To
              </label>
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <select
                    value={to.code}
                    onChange={(e) => {
                      const selected = cities.find(c => c.code === e.target.value);
                      setTo(selected);
                    }}
                    className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  >
                    {cities.map((city) => (
                      <option key={city.code} value={city.code}>
                        {city.city} ({city.code})
                      </option>
                    ))}
                  </select>
                  <div className="text-sm text-gray-500 truncate">
                    {to.airport}
                  </div>
                </div>
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
                <div className="pl-8">
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  />
                  <div className="text-sm text-gray-500">
                    {getDayOfWeek(departureDate)}
                  </div>
                </div>
              </div>
            </div>

            {/* Return Date */}
            {tripType === 'roundTrip' && (
              <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Return
                </label>
                <div className="relative">
                  <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
                  <div className="pl-8">
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={departureDate}
                      className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                    />
                    <div className="text-sm text-gray-500">
                      {getDayOfWeek(returnDate)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Travelers & Class */}
            <div
              className="flex-1 min-w-[240px] p-6 border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer"
              onClick={() => setShowTravelerDropdown(true)}
            >
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Travellers & Class
              </label>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <div className="text-xl font-bold text-gray-800">
                    {travelers.adults + travelers.children + travelers.infants} Traveller{travelers.adults + travelers.children + travelers.infants > 1 ? 's' : ''}
                  </div>
                  <div className="text-sm text-gray-500">
                    {travelers.class}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/flight-booking-page">
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
              SEARCH FLIGHTS
            </button>
          </Link>
        </div>
      </div>

      {/* Why Book With Us */}
      <div className="max-w-7xl mx-auto mt-12 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why Book With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Secure Booking</h3>
            <p className="text-sm text-gray-600">
              100% safe payment with trusted gateways
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Best Price Guarantee
            </h3>
            <p className="text-sm text-gray-600">
              Lowest fares or we refund the difference
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              Customer support available anytime, anywhere
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Instant Confirmation
            </h3>
            <p className="text-sm text-gray-600">
              Get booking confirmation immediately
            </p>
          </div>
        </div>
      </div>

      {/* Traveler Modal */}
      {showTravelerDropdown && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">Select Travelers</h3>
              <button
                onClick={() => setShowTravelerDropdown(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Adults</div>
                  <div className="text-sm text-gray-500">12+ years</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateTravelers('adults', 'decrement')}
                    disabled={travelers.adults <= 1}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.adults}</span>
                  <button
                    onClick={() => updateTravelers('adults', 'increment')}
                    disabled={travelers.adults + travelers.children + travelers.infants >= 9}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Children</div>
                  <div className="text-sm text-gray-500">2-12 years</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateTravelers('children', 'decrement')}
                    disabled={travelers.children <= 0}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.children}</span>
                  <button
                    onClick={() => updateTravelers('children', 'increment')}
                    disabled={travelers.adults + travelers.children + travelers.infants >= 9}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-800">Infants</div>
                  <div className="text-sm text-gray-500">Below 2 years</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateTravelers('infants', 'decrement')}
                    disabled={travelers.infants <= 0}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers.infants}</span>
                  <button
                    onClick={() => updateTravelers('infants', 'increment')}
                    disabled={travelers.infants >= travelers.adults}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Travel Class */}
              <div>
                <div className="font-bold text-gray-800 mb-3">Choose Travel Class</div>
                <div className="space-y-2">
                  {['Economy', 'Premium Economy', 'Business'].map((classType) => (
                    <label key={classType} className="flex items-center gap-3 cursor-pointer p-3 hover:bg-blue-50 rounded-lg transition-colors">
                      <input
                        type="radio"
                        name="class"
                        checked={travelers.class === classType}
                        onChange={() => setTravelers(prev => ({ ...prev, class: classType }))}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{classType}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowTravelerDropdown(false)}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightBookingForm;