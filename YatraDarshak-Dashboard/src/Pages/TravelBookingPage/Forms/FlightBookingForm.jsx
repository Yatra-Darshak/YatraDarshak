import { 
  ArrowLeftRight, 
  Plane, 
  Plus,
  Minus,
  Info,
  Shield,
} from "lucide-react";
import React, { useState } from "react";

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [fareType, setFareType] = useState('regular');
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const [zeroCancellation, setZeroCancellation] = useState(false);
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

  const getTravelerText = () => {
    const total = travelers.adults + travelers.children + travelers.infants;
    return `${total} Traveller${total > 1 ? 's' : ''}`;
  };

  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear().toString().slice(-2)
    };
  };

  const fareTypes = [
    { 
      id: 'regular', 
      label: 'Regular', 
      subtitle: 'Regular fares',
      info: null
    },
    { 
      id: 'student', 
      label: 'Student', 
      subtitle: 'Extra discounts/baggage',
      info: 'Applicable only for students above 12 years of age. Valid student ID cards and student visas (where applicable) are required to avail this.'
    },
    { 
      id: 'armed', 
      label: 'Armed Forces', 
      subtitle: 'Up to ₹ 600 off',
      info: 'Applicable only for serving/retired Indian Armed Forces personnel & their dependents. A valid Armed Forces ID or dependent card is required at the airport to avail this.'
    },
    { 
      id: 'senior', 
      label: 'Senior Citizen', 
      subtitle: 'Up to ₹ 600 off',
      info: 'Applicable only for senior citizens above the age of 60 years. A valid proof of Date of Birth is required at the airport to avail this.'
    },
    { 
      id: 'doctor', 
      label: 'Doctor and Nurses', 
      subtitle: 'Up to ₹ 600 off',
      info: 'Applicable only for medical personnel. A valid ID is required at the airport to avail this.'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          {/* Trip Type Selection */}
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
                      ? 'border-cyan-600 bg-cyan-600' 
                      : 'border-gray-400'
                  }`}>
                    {tripType === trip.value && (
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors">
                  {trip.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Book <span className="text-cyan-600 font-semibold hover:underline cursor-pointer">International</span> and <span className="text-cyan-600 font-semibold hover:underline cursor-pointer">Domestic Flights</span>
        </div>
      </div>

      {/* Main Search Form */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="flex flex-wrap relative">
          {/* From */}
          <div className="flex-1 min-w-[250px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">From</label>
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black text-gray-900">{from.code}</div>
              <div className="flex-1 mt-1">
                <div className="text-xs text-gray-600 line-clamp-1">{from.airport}</div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-[22.5%] top-[50px] z-10">
            <button
              onClick={swapCities}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-cyan-600 hover:bg-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To */}
          <div className="flex-1 min-w-[250px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">To</label>
            <div className="flex items-start gap-3">
              <div className="text-3xl font-black text-gray-900">{to.code}</div>
              <div className="flex-1 mt-1">
                <div className="text-xs text-gray-600 line-clamp-1">{to.airport}</div>
              </div>
            </div>
          </div>

          {/* Departure */}
          <div className="flex-1 min-w-[200px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Departure</label>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-gray-900">{getFormattedDate(departureDate).day}</span>
                <span className="text-base text-gray-700">{getFormattedDate(departureDate).month}</span>
                <span className="text-sm text-gray-500">'{getFormattedDate(departureDate).year}</span>
              </div>
              <div className="text-xs text-gray-600">{getDayOfWeek(departureDate)}</div>
            </div>
          </div>

          {/* Return */}
          <div className="flex-1 min-w-[200px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Return</label>
            {tripType === 'roundTrip' ? (
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">{getFormattedDate(returnDate).day}</span>
                  <span className="text-base text-gray-700">{getFormattedDate(returnDate).month}</span>
                  <span className="text-sm text-gray-500">'{getFormattedDate(returnDate).year}</span>
                </div>
                <div className="text-xs text-gray-600">{getDayOfWeek(returnDate)}</div>
              </div>
            ) : (
              <div className="text-xs text-gray-600 mt-2">
                Tap to add a return date for bigger discounts
              </div>
            )}
          </div>

          {/* Travelers & Class */}
          <div className="flex-1 min-w-[220px] p-6 border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer group relative">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Travellers & Class
            </label>
            <div 
              onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
              className="cursor-pointer"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-gray-900">
                  {travelers.adults + travelers.children + travelers.infants}
                </span>
                <span className="text-base text-gray-700">Traveller{travelers.adults + travelers.children + travelers.infants > 1 ? 's' : ''}</span>
              </div>
              <div className="text-xs text-gray-600">{travelers.class}/Premium Economy</div>
            </div>

            {/* Travelers Dropdown */}
            {showTravelerDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setShowTravelerDropdown(false)}
                ></div>
                <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6">
                  <div className="space-y-5">
                    {/* Adults */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-gray-800">Adults</div>
                        <div className="text-xs text-gray-500">12+ years</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateTravelers('adults', 'decrement')}
                          disabled={travelers.adults <= 1}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-gray-900">{travelers.adults}</span>
                        <button
                          onClick={() => updateTravelers('adults', 'increment')}
                          disabled={travelers.adults + travelers.children + travelers.infants >= 9}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-gray-800">Children</div>
                        <div className="text-xs text-gray-500">2-12 years</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateTravelers('children', 'decrement')}
                          disabled={travelers.children <= 0}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-gray-900">{travelers.children}</span>
                        <button
                          onClick={() => updateTravelers('children', 'increment')}
                          disabled={travelers.adults + travelers.children + travelers.infants >= 9}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-gray-800">Infants</div>
                        <div className="text-xs text-gray-500">Below 2 years</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateTravelers('infants', 'decrement')}
                          disabled={travelers.infants <= 0}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-gray-900">{travelers.infants}</span>
                        <button
                          onClick={() => updateTravelers('infants', 'increment')}
                          disabled={travelers.infants >= travelers.adults}
                          className="w-9 h-9 rounded-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Travel Class */}
                    <div>
                      <div className="font-semibold text-gray-800 mb-3">Choose Travel Class</div>
                      <div className="space-y-2">
                        {['Economy', 'Premium Economy', 'Business'].map((classType) => (
                          <label key={classType} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <input
                              type="radio"
                              name="class"
                              checked={travelers.class === classType}
                              onChange={() => setTravelers(prev => ({ ...prev, class: classType }))}
                              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                            />
                            <span className="text-gray-700">{classType}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>



        {/* Search Button */}
        <button className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          SEARCH FLIGHTS
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">Quick Booking Tips</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Book at least 2-3 weeks in advance for best prices</li>
              <li>Tuesday and Wednesday flights are usually cheaper</li>
              <li>Early morning and late night flights offer better deals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;