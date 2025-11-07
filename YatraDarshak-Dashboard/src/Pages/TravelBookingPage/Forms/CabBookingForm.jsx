import {
  ArrowLeftRight,
  Calendar,
  MapPin,
  Clock,
  Info,
  CarIcon,
  Navigation,
} from "lucide-react";
import React, { useState } from "react";

// 🔹 State → City Mapping
const locations = {
  "Delhi": ["Delhi"],
  "Himachal Pradesh": ["Manali", "Shimla", "Kullu", "Dharamshala"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
  "Uttarakhand": ["Rishikesh", "Nainital", "Mussoorie"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bangalore", "Mysore", "Hampi"],
  "Kerala": ["Kochi", "Munnar", "Alleppey"],
  "Tamil Nadu": ["Chennai", "Ooty", "Kodaikanal"],
  "Goa": ["North Goa", "South Goa"],
  "Jammu and Kashmir": ["Srinagar", "Gulmarg", "Pahalgam"],
  "Sikkim": ["Gangtok", "Lachung", "Pelling"],
  "Meghalaya": ["Shillong", "Cherrapunji", "Dawki"],
  "Gujarat": ["Kutch", "Ahmedabad", "Dwarka"],
  "West Bengal": ["Darjeeling", "Kolkata"],
  "Punjab": ["Amritsar", "Chandigarh"],
  "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow"],
};

const CabBookingForm = () => {
  const [tripType, setTripType] = useState("outstation");
  const [cabType, setCabType] = useState("oneway");
  const [fromState, setFromState] = useState("Delhi");
  const [fromCity, setFromCity] = useState("Delhi");
  const [toState, setToState] = useState("Uttar Pradesh");
  const [toCity, setToCity] = useState("Agra");
  const [pickupDate, setPickupDate] = useState("2025-11-27");
  const [pickupTime, setPickupTime] = useState("10:00");

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
      {/* Trip Type Selection */}
      <div className="flex items-center gap-6 mb-8">
        {["outstation", "local", "airport"].map((type) => (
          <label
            key={type}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={tripType === type}
                onChange={(e) => setTripType(e.target.value)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-yellow-600 peer-checked:border-[6px] transition-all duration-200"></div>
            </div>
            <span className="text-gray-700 font-semibold capitalize group-hover:text-yellow-600 transition-colors">
              {type === "outstation"
                ? "Outstation"
                : type === "local"
                ? "Local/Hourly"
                : "Airport Transfer"}
            </span>
          </label>
        ))}
      </div>

      {/* One Way / Round Trip Toggle */}
      {tripType === "outstation" && (
        <div className="mb-6 flex gap-4">
          {["oneway", "roundtrip"].map((type) => (
            <button
              key={type}
              onClick={() => setCabType(type)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                cabType === type
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type === "oneway" ? "One Way" : "Round Trip"}
            </button>
          ))}
        </div>
      )}

      {/* Main Search Form */}
      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200">
        <div className="flex flex-wrap">
          {/* From */}
          <div className="flex-1 min-w-[250px] p-6 border-r border-b border-gray-200 hover:bg-yellow-50/30 transition-colors">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              From
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-yellow-600" />
                <select
                  value={fromState}
                  onChange={(e) => {
                    setFromState(e.target.value);
                    setFromCity(locations[e.target.value][0]);
                  }}
                  className="border-none outline-none text-lg font-semibold text-gray-800 bg-transparent cursor-pointer"
                >
                  {Object.keys(locations).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="border-none outline-none text-sm text-gray-600 bg-transparent cursor-pointer"
              >
                {locations[fromState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-[25.5%] top-[72px] -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
            <button
              onClick={swapCities}
              className="w-12 h-12 rounded-full bg-white border-4 border-yellow-500 text-yellow-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To */}
          <div className="flex-1 min-w-[250px] p-6 border-b border-gray-200 hover:bg-yellow-50/30 transition-colors">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              To
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-600" />
                <select
                  value={toState}
                  onChange={(e) => {
                    setToState(e.target.value);
                    setToCity(locations[e.target.value][0]);
                  }}
                  className="border-none outline-none text-lg font-semibold text-gray-800 bg-transparent cursor-pointer"
                >
                  {Object.keys(locations).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="border-none outline-none text-sm text-gray-600 bg-transparent cursor-pointer"
              >
                {locations[toState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex-1 min-w-[200px] p-6 border-r border-gray-200 hover:bg-yellow-50/30 transition-colors">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-0 top-1 text-yellow-600 w-6 h-6" />
              <div className="pl-8">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full text-2xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
                <div className="text-sm text-gray-500 mt-1">
                  {getDayOfWeek(pickupDate)}
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Time */}
          <div className="flex-1 min-w-[180px] p-6 hover:bg-yellow-50/30 transition-colors">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="absolute left-0 top-1 text-yellow-600 w-6 h-6" />
              <div className="pl-8">
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full text-2xl font-bold text-gray-800 border-none outline-none bg-transparent cursor-pointer"
                />
                <div className="text-sm text-gray-500 mt-1">Select time</div>
              </div>
            </div>
          </div>
        </div>
      {/* Search Button */}
      <button className="w-full py-5 mt-4 rounded-b-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
        SEARCH CABS
      </button>
      </div>


      {/* Important Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">Booking Guidelines</p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Driver will wait for 5 minutes at pickup location (free)</li>
              <li>Toll charges and parking fees are extra</li>
              <li>Cancellation charges may apply as per policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabBookingForm;

