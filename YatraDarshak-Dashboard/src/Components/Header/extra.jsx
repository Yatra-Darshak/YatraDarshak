import React, { useState } from 'react';
import { Search, Plane, Building, Palmtree, Train, Bus, Car, Shield, MessageCircle } from 'lucide-react';

const Extra = () => {
  const [activeTab, setActiveTab] = useState('One Way');
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-800">YATRADARSHAK</span>
            </div>
            
            {/* Partner Badge */}
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Yatradarshak Partner</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Travel Diary</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Contact Us</a>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-800 transition-colors">
              Login or Create Account
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Background Image */}
        <div 
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="landscape" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2387CEEB;stop-opacity:1" /><stop offset="30%" style="stop-color:%2398D8E8;stop-opacity:1" /><stop offset="70%" style="stop-color:%23DEB887;stop-opacity:1" /><stop offset="100%" style="stop-color:%23CD853F;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23landscape)"/><path d="M0,600 Q300,550 600,580 T1200,600 L1200,800 L0,800 Z" fill="%23228B22" opacity="0.6"/><path d="M0,650 Q400,620 800,640 T1200,650 L1200,800 L0,800 Z" fill="%238FBC8F" opacity="0.4"/><circle cx="200" cy="200" r="80" fill="%23FFFF00" opacity="0.8"/><rect x="500" y="500" width="200" height="100" fill="%238B4513" opacity="0.7"/></svg>')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
          
          <div className="relative z-10 px-6 pt-12">
            <div className="max-w-4xl mx-auto text-center">
              {/* Search Bar */}
              <div className="mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg max-w-2xl mx-auto">
                  <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Namaste ! Plan Your Trips with Me......."
                      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                    />
                    {/* Chat Bot */}
                    <button 
                      onClick={() => setChatVisible(!chatVisible)}
                      className="relative"
                    >
                      <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto mb-16">
                {/* Service Icons */}
                <div className="flex justify-center items-center space-x-8 mb-8">
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
                      <Plane className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-semibold text-sm">Flights</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Hotels</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Palmtree className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Holidays</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Train className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Trains</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Bus className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Buses</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Car className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Cabs</span>
                  </div>
                  <div className="text-center cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                      <Shield className="w-8 h-8 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">Travel Insurance</span>
                  </div>
                </div>

                {/* Trip Type Tabs */}
                <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
                  {['One Way', 'Round Trip', 'Multi City'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-white text-teal-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">From</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Departure city"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">To</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Destination city"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Departure</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Return</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Travellers and Class</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>1 Adult, Economy</option>
                      <option>2 Adults, Economy</option>
                      <option>1 Adult, Business</option>
                      <option>Family Pack</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold py-4 rounded-xl hover:from-cyan-500 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Search
                </button>
              </div>

              {/* Tour Categories Section */}
              <div className="relative">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Tour Categories
                  </h2>
                  <p className="text-xl text-white/90 drop-shadow-md">
                    Wonderful Places For You
                  </p>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Plane className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-800">Adventure</h3>
                          <p className="text-sm text-gray-600 mt-1">Explore</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      {chatVisible && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border z-50">
          <div className="bg-teal-600 text-white p-4 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Travel Assistant</h3>
              <button 
                onClick={() => setChatVisible(false)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-4 h-72 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-3">
              <p className="text-sm">Hello! I'm here to help you plan your perfect trip. How can I assist you today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;