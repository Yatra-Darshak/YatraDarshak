import {
  ArrowLeftRight,
  Calendar,
  MapPin,
  Info,
  Shield,
  Star,
  Phone,
  CheckCircle,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const locations = {
  Delhi: ["Delhi"],
  "Himachal Pradesh": [
    "Manali",
    "Shimla",
    "Kullu",
    "Dharamshala",
    "Khajjiar",
    "Dalhousie",
  ],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Mount Abu"],
  Uttarakhand: ["Rishikesh", "Nainital", "Mussoorie", "Haridwar", "Auli"],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Lonavala",
    "Mahabaleshwar",
    "Ajanta and Ellora Caves",
  ],
  Karnataka: ["Bangalore", "Mysore", "Hampi", "Coorg", "Gokarna"],
  Kerala: ["Kochi", "Munnar", "Alleppey", "Wayanad", "Varkala", "Kumarakom"],
  "Tamil Nadu": ["Chennai", "Ooty", "Kodaikanal", "Rameswaram", "Kanyakumari"],
  Goa: ["North Goa", "South Goa"],
  "Jammu and Kashmir": [
    "Srinagar",
    "Gulmarg",
    "Pahalgam",
    "Vaishno Devi",
    "Kashmir Valley",
  ],
  Sikkim: ["Gangtok", "Lachung", "Pelling", "Zuluk"],
  Meghalaya: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
  "Arunachal Pradesh": ["Tawang", "Ziro", "Bomdila"],
  "West Bengal": ["Darjeeling", "Kolkata", "Sundarbans", "Kalimpong"],
  Gujarat: ["Kutch", "Ahmedabad", "Gir", "Somnath", "Dwarka"],
  "Andaman and Nicobar Islands": [
    "Port Blair",
    "Havelock Island",
    "Neil Island",
  ],
  Ladakh: ["Leh", "Nubra Valley", "Pangong Lake"],
  Punjab: ["Amritsar", "Chandigarh"],
  "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Mathura"],
  "Madhya Pradesh": ["Khajuraho", "Bhopal", "Indore", "Pachmarhi"],
  Odisha: ["Puri", "Bhubaneswar", "Konark"],
  Assam: ["Guwahati", "Kaziranga", "Majuli"],
  Telangana: ["Hyderabad", "Warangal"],
  "Andhra Pradesh": ["Vishakhapatnam", "Tirupati"],
  Chhattisgarh: ["Raipur", "Jagdalpur"],
  Bihar: ["Patna", "Bodh Gaya"],
  Jharkhand: ["Ranchi", "Jamshedpur"],
  Manipur: ["Imphal"],
  Mizoram: ["Aizawl"],
  Nagaland: ["Kohima"],
  Tripura: ["Agartala"],
  Lakshadweep: ["Kavaratti", "Agatti Island"],
};

const BusBookingForm = () => {
  const [fromState, setFromState] = useState("Delhi");
  const [fromCity, setFromCity] = useState("Delhi");
  const [toState, setToState] = useState("Himachal Pradesh");
  const [toCity, setToCity] = useState("Manali");
  const [selectedDate, setSelectedDate] = useState("2025-11-27");

  const swapCities = () => {
    const tempState = fromState;
    const tempCity = fromCity;
    setFromState(toState);
    setFromCity(toCity);
    setToState(tempState);
    setToCity(tempCity);
  };

  const getDayOfWeek = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="bg-white rounded-2xl p-8">
      {/* Main Search Form */}
      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 mb-8">
        <div className="flex flex-wrap">
          {/* From */}
          <div className="flex-1 min-w-[300px] p-6 border-r border-b border-gray-200 hover:bg-red-50/30 transition-colors group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              From
            </label>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-500" />
              <div className="flex-1">
                <select
                  value={fromState}
                  onChange={(e) => {
                    setFromState(e.target.value);
                    setFromCity("");
                  }}
                  className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent"
                >
                  {Object.keys(locations).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full text-sm text-gray-500 border-none outline-none bg-transparent"
                >
                  <option value="">Select City</option>
                  {locations[fromState]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-1/3 top-[72px] -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
            <button
              onClick={swapCities}
              className="w-12 h-12 rounded-full bg-white border-4 border-red-500 text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To */}
          <div className="flex-1 min-w-[300px] p-6 border-b border-gray-200 hover:bg-red-50/30 transition-colors group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              To
            </label>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-500" />
              <div className="flex-1">
                <select
                  value={toState}
                  onChange={(e) => {
                    setToState(e.target.value);
                    setToCity("");
                  }}
                  className="w-full text-xl font-bold text-gray-800 border-none outline-none bg-transparent"
                >
                  {Object.keys(locations).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full text-sm text-gray-500 border-none outline-none bg-transparent"
                >
                  <option value="">Select City</option>
                  {locations[toState]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Date of Journey */}
          <div className="flex-1 min-w-[250px] p-6 hover:bg-red-50/30 transition-colors group">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Date of Journey
            </label>
            <div className="relative">
              <Calendar className="absolute left-0 top-1 text-red-500 w-6 h-6" />
              <div className="pl-8">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-2xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
                <div className="text-sm text-gray-500 mt-1">
                  {getDayOfWeek(selectedDate)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <Link to="/bus-booking-page">
          <button
            className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-bold transition-all duration-300 rounded-b-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            onClick={() =>
              alert(
                `Searching buses from ${fromCity}, ${fromState} to ${toCity}, ${toState}`
              )
            }
          >
            SEARCH BUSES
          </button>
        </Link>
      </div>

      {/* Info Section */}
      {/* <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">Important Information</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Please arrive at the boarding point 15 minutes before departure</li>
              <li>Carry a valid ID proof for verification</li>
              <li>Partial cancellations are not allowed for bus bookings</li>
            </ul>
          </div>
        </div>
      </div> */}

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
            <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">
              100% secure payment with trusted gateways
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
              Lowest prices or we refund the difference
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
    </div>
  );
};

export default BusBookingForm;
