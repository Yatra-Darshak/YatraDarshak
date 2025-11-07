import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Shield,
  X,
  Plus,
  Minus,
  CheckCircle,
} from "lucide-react";
import React, { useState } from "react";

const HolidayBookingForm = () => {
  const [destination, setDestination] = useState("Goa");
  const [checkInDate, setCheckInDate] = useState("2025-12-15");
  const [nights, setNights] = useState(3);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [showTravelerModal, setShowTravelerModal] = useState(false);
  const [guestDetails, setGuestDetails] = useState([]);

  // Popular destinations
  const destinations = [
  "Andaman & Nicobar Islands", "Arunachal Pradesh", "Delhi", "Goa", "Gujarat", "Himachal Pradesh", "Jammu and Kashmir", "Karnataka", "Kerala", "Ladakh", "Maharashtra", "Meghalaya", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Lakshadweep", "Pondicherry"
  ];

  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  const getCheckOutDate = () => {
    const checkIn = new Date(checkInDate);
    checkIn.setDate(checkIn.getDate() + nights);
    return checkIn.toISOString().split("T")[0];
  };

  const updateGuest = (index, field, value) => {
    const updated = [...guestDetails];
    updated[index][field] = value;
    setGuestDetails(updated);
  };

  return (
    <div className="bg-white rounded-2xl p-8">
      {/* Search Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
        <div className="flex flex-wrap">
          {/* Destination */}
          <div className="flex-1 min-w-[280px] p-6 border-r border-b border-gray-200 hover:bg-purple-50/30 transition-colors cursor-pointer">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Where to?
            </label>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-purple-500" />
              <div className="flex-1">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-lg font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                >
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
                <div className="text-sm text-gray-500">India</div>
              </div>
            </div>
          </div>

          {/* Check-in Date */}
          <div className="flex-1 min-w-[240px] p-6 border-r border-b border-gray-200 hover:bg-purple-50/30 transition-colors cursor-pointer">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-0 top-1 text-purple-500 w-6 h-6" />
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

          {/* Nights */}
          <div className="flex-1 min-w-[200px] p-6 border-r border-b border-gray-200 hover:bg-purple-50/30 transition-colors">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Nights
            </label>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-purple-500" />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setNights(Math.max(1, nights - 1))}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">{nights}</span>
                <button
                  onClick={() => setNights(nights + 1)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-2 ml-9">
              Check-out: {getDayOfWeek(getCheckOutDate())}
            </div>
          </div>

          {/* Travelers */}
          <div
            className="flex-1 min-w-[240px] p-6 border-b border-gray-200 hover:bg-purple-50/30 transition-colors cursor-pointer"
            onClick={() => setShowTravelerModal(true)}
          >
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Travelers & Rooms
            </label>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-500" />
              <div className="flex-1">
                <div className="text-xl font-bold text-gray-800">
                  {travelers.adults + travelers.children} Traveler{travelers.adults + travelers.children > 1 ? "s" : ""}
                </div>
                <div className="text-sm text-gray-500">
                  {travelers.rooms} Room{travelers.rooms > 1 ? "s" : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
          SEARCH PACKAGES
        </button>
      </div>  

      {/* Traveler Selection Modal */}
      {showTravelerModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Select Travelers</h3>
              <button onClick={() => setShowTravelerModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Adults", key: "adults", subtitle: "12+ years", min: 1 },
                { label: "Children", key: "children", subtitle: "2-12 years", min: 0 },
                { label: "Rooms", key: "rooms", subtitle: "Select rooms", min: 1 }
              ].map(({ label, key, subtitle, min }) => (
                <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-800">{label}</div>
                    <div className="text-sm text-gray-500">{subtitle}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTravelers({ ...travelers, [key]: Math.max(min, travelers[key] - 1) })}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{travelers[key]}</span>
                    <button
                      onClick={() => setTravelers({ ...travelers, [key]: travelers[key] + 1 })}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-purple-500 flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowTravelerModal(false)}
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Why Book With Us */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Book With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, title: "Secure Booking", desc: "100% safe payment" },
            { icon: Star, title: "Best Price", desc: "Lowest prices guaranteed" },
            { icon: Users, title: "24/7 Support", desc: "Round the clock help" },
            { icon: CheckCircle, title: "Verified Hotels", desc: "Trusted properties" }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-5 shadow-lg text-center border-2 border-gray-100 hover:border-purple-300 transition-all duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HolidayBookingForm;
