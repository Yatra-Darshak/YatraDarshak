import { 
  MapPin, 
  Calendar, 
  Users,
  Star,
  X,
  Plus,
  Minus,
  Clock,
  Shield,
  Phone,
  CheckCircle
} from "lucide-react";
import React, { useState } from "react";

const HotelBookingForm = () => {
  const destinations = [
    "Andaman & Nicobar Islands",
    "Arunachal Pradesh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Maharashtra",
    "Meghalaya",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Lakshadweep",
    "Pondicherry",
  ];

  const [location, setLocation] = useState({ city: 'Goa', area: '' });
  const [checkInDate, setCheckInDate] = useState('2025-12-20');
  const [checkOutDate, setCheckOutDate] = useState('2025-12-22');
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showGuestModal, setShowGuestModal] = useState(false);

  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const calculateNights = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-fit p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex flex-wrap">
            
            {/* Location Selector */}
            <div className="flex-1 min-w-[280px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Location
              </label>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <select
                    value={location.city}
                    onChange={(e) => setLocation({ ...location, city: e.target.value })}
                    className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  >
                    {destinations.map((place, index) => (
                      <option key={index} value={place}>{place}</option>
                    ))}
                  </select>
                  <div className="text-sm text-gray-500">{location.area || "Select your destination"}</div>
                </div>
              </div>
            </div>

            {/* Check-in Date */}
            <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
                <div className="pl-8">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  />
                  <div className="text-sm text-gray-500">{getDayOfWeek(checkInDate)}</div>
                </div>
              </div>
            </div>

            {/* Check-out Date */}
            <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
                <div className="pl-8">
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={checkInDate}
                    className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                  />
                  <div className="text-sm text-gray-500">{getDayOfWeek(checkOutDate)}</div>
                </div>
              </div>
            </div>

            {/* Guests & Rooms */}
            <div 
              className="flex-1 min-w-[240px] p-6 border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer"
              onClick={() => setShowGuestModal(true)}
            >
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Guests & Rooms
              </label>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <div className="text-xl font-bold text-gray-800">
                    {guests.adults + guests.children} Guest{guests.adults + guests.children > 1 ? 's' : ''}
                  </div>
                  <div className="text-sm text-gray-500">{guests.rooms} Room{guests.rooms > 1 ? 's' : ''}</div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            SEARCH HOTELS
          </button>
        </div>
      </div>

      {/* Why Book With Us */}
       <div className="max-w-7xl mx-auto mt-12 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Book With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">100% secure payment with trusted gateways</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
            <p className="text-sm text-gray-600">Lowest prices or we refund the difference</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Customer support available anytime, anywhere</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Instant Confirmation</h3>
            <p className="text-sm text-gray-600">Get booking confirmation immediately</p>
          </div>
        </div>
      </div>

      {/* Guest Modal and Tips remain unchanged */}
      {/* (keep your existing modal and tips section code here) */}
    </div>
  );
};

export default HotelBookingForm;


// import { 
//   MapPin, 
//   Calendar, 
//   Users,
//   Star,
//   X,
//   Plus,
//   Minus,
//   Clock
// } from "lucide-react";
// import React, { useState } from "react";

// const HotelBookingForm = () => {
//   const [location, setLocation] = useState({ city: 'Mumbai', area: 'Bandra West' });
//   const [checkInDate, setCheckInDate] = useState('2025-12-20');
//   const [checkOutDate, setCheckOutDate] = useState('2025-12-22');
//   const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
//   const [showGuestModal, setShowGuestModal] = useState(false);
//   const [guestDetails, setGuestDetails] = useState([]);

//   const getDayOfWeek = (dateString) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date(dateString);
//     return days[date.getDay()];
//   };

//   const calculateNights = () => {
//     const checkIn = new Date(checkInDate);
//     const checkOut = new Date(checkOutDate);
//     const diffTime = Math.abs(checkOut - checkIn);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
//   };


//   const updateGuestDetail = (index, field, value) => {
//     const updated = [...guestDetails];
//     updated[index][field] = value;
//     setGuestDetails(updated);
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-fit p-4 md:p-8">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto mb-8">
//         {/* Search Form */}
//         <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
//           <div className="flex flex-wrap">
//             {/* Location */}
//             <div className="flex-1 min-w-[280px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer">
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                 Location
//               </label>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-6 h-6 text-blue-500" />
//                 <div className="flex-1">
//                   <div className="text-2xl font-bold text-gray-800">{location.city}</div>
//                   <div className="text-sm text-gray-500">{location.area}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Check-in Date */}
//             <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer">
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                 Check-in
//               </label>
//               <div className="relative">
//                 <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
//                 <div className="pl-8">
//                   <input
//                     type="date"
//                     value={checkInDate}
//                     onChange={(e) => setCheckInDate(e.target.value)}
//                     className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
//                   />
//                   <div className="text-sm text-gray-500">{getDayOfWeek(checkInDate)}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Check-out Date */}
//             <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer">
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                 Check-out
//               </label>
//               <div className="relative">
//                 <Calendar className="absolute left-0 top-1 text-blue-500 w-6 h-6" />
//                 <div className="pl-8">
//                   <input
//                     type="date"
//                     value={checkOutDate}
//                     onChange={(e) => setCheckOutDate(e.target.value)}
//                     min={checkInDate}
//                     className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
//                   />
//                   <div className="text-sm text-gray-500">{getDayOfWeek(checkOutDate)}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Guests & Rooms */}
//             <div 
//               className="flex-1 min-w-[240px] p-6 border-b border-gray-200 hover:bg-blue-50/30 transition-colors cursor-pointer"
//               onClick={() => setShowGuestModal(true)}
//             >
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                 Guests & Rooms
//               </label>
//               <div className="flex items-center gap-3">
//                 <Users className="w-6 h-6 text-blue-500" />
//                 <div className="flex-1">
//                   <div className="text-xl font-bold text-gray-800">
//                     {guests.adults + guests.children} Guest{guests.adults + guests.children > 1 ? 's' : ''}
//                   </div>
//                   <div className="text-sm text-gray-500">{guests.rooms} Room{guests.rooms > 1 ? 's' : ''}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
//             SEARCH HOTELS
//           </button>
//         </div>

//       </div>

//       {/* Guest Selection Modal */}
//       {showGuestModal && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-md w-full p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-2xl font-bold text-gray-800">Select Guests & Rooms</h3>
//               <button onClick={() => setShowGuestModal(false)} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="space-y-4">
//               {/* Adults */}
//               <div className="flex items-center justify-between py-3 border-b border-gray-200">
//                 <div>
//                   <div className="font-semibold text-gray-800">Adults</div>
//                   <div className="text-sm text-gray-500">12+ years</div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => setGuests({...guests, adults: Math.max(1, guests.adults - 1)})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.adults}</span>
//                   <button
//                     onClick={() => setGuests({...guests, adults: guests.adults + 1})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Children */}
//               <div className="flex items-center justify-between py-3 border-b border-gray-200">
//                 <div>
//                   <div className="font-semibold text-gray-800">Children</div>
//                   <div className="text-sm text-gray-500">0-12 years</div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => setGuests({...guests, children: Math.max(0, guests.children - 1)})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.children}</span>
//                   <button
//                     onClick={() => setGuests({...guests, children: guests.children + 1})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Rooms */}
//               <div className="flex items-center justify-between py-3">
//                 <div>
//                   <div className="font-semibold text-gray-800">Rooms</div>
//                   <div className="text-sm text-gray-500">Select rooms</div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => setGuests({...guests, rooms: Math.max(1, guests.rooms - 1)})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="text-xl font-bold text-gray-800 w-8 text-center">{guests.rooms}</span>
//                   <button
//                     onClick={() => setGuests({...guests, rooms: guests.rooms + 1})}
//                     className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() => setShowGuestModal(false)}
//               className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Why Book With Us */}
//       {/* <div className="max-w-7xl mx-auto mt-12 mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Book With Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Shield className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
//             <p className="text-sm text-gray-600">100% secure payment with trusted gateways</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Star className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
//             <p className="text-sm text-gray-600">Lowest prices or we refund the difference</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Phone className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
//             <p className="text-sm text-gray-600">Customer support available anytime, anywhere</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="font-bold text-gray-800 mb-2">Instant Confirmation</h3>
//             <p className="text-sm text-gray-600">Get booking confirmation immediately</p>
//           </div>
//         </div>
//       </div> */}

//       {/* Tips Section */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
//           <h2 className="text-2xl font-bold mb-4">💡 Booking Tips</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="flex items-start gap-3">
//               <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
//               <div>
//                 <h3 className="font-semibold mb-1">Book in Advance</h3>
//                 <p className="text-sm text-blue-100">Save up to 40% by booking 2-3 months ahead</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <Calendar className="w-5 h-5 flex-shrink-0 mt-1" />
//               <div>
//                 <h3 className="font-semibold mb-1">Flexible Dates</h3>
//                 <p className="text-sm text-blue-100">Weekday bookings are usually cheaper than weekends</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <Star className="w-5 h-5 flex-shrink-0 mt-1" />
//               <div>
//                 <h3 className="font-semibold mb-1">Read Reviews</h3>
//                 <p className="text-sm text-blue-100">Check recent guest reviews before booking</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelBookingForm;