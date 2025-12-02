import React, { useState } from "react";
import {
  MapPin,
  Shield,
  Sparkles,
  Users,
  Target,
  Eye,
  Globe,
  Heart,
  Zap,
  Award,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Compass,
  Star,
} from "lucide-react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { icon: MapPin, value: "1000+", label: "Destinations Covered" },
    { icon: Users, value: "50K+", label: "Happy Travelers" },
    { icon: Shield, value: "100%", label: "Safe Journeys" },
    { icon: Award, value: "500+", label: "Verified Partners" },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Planning",
      description:
        "Personalized itineraries crafted by advanced AI based on your preferences, budget, and time.",
    },
    {
      icon: Shield,
      title: "Maximum Safety",
      description:
        "Real-time monitoring, emergency support, and blockchain-verified digital IDs for worry-free travel.",
    },
    {
      icon: Heart,
      title: "Empowering Locals",
      description:
        "Promoting local businesses, culture, and heritage, ensuring tourism benefits reach grassroots communities.",
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description:
        "AR/VR tours, multilingual guides, and authentic experiences that bring destinations to life.",
    },
  ];

  const objectives = [
    "Revolutionize travel planning with an all-in-one intelligent platform",
    "Deliver AI-driven, personalized experiences for every traveler",
    "Ensure maximum safety through real-time monitoring and support",
    "Empower local communities and promote sustainable tourism",
    "Enable data-driven decisions for better tourism infrastructure",
    "Set global standards as India's most trusted travel partner",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
              <img
                className="w-5 h-5 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"
                src="./YD-logo.png"
                alt="Yatra Darshak Main"
              />
              <span className="text-sm font-semibold text-teal-200">
                About YatraDarshak
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Transforming How India Travels
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              India's all-in-one travel platform, unifying planning, bookings,
              safety, and cultural experiences through the power of AI,
              blockchain, and real-time guidance.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(248 250 252)"
              stroke="none"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Purpose</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving the future of travel with innovation, safety, and
            authenticity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: "mission", label: "Mission", icon: Target },
            { id: "vision", label: "Vision", icon: Eye },
            { id: "values", label: "Values", icon: Star },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {activeTab === "mission" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To lead the travel revolution by creating India's most powerful
                tourism ecosystem through a unified digital platform that
                enhances{" "}
                <span className="font-semibold text-teal-600">
                  safety, accessibility, and authenticity
                </span>
                , while empowering local communities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  "Seamless travel planning experience",
                  "Enhanced traveler safety & security",
                  "Empowering local communities",
                  "Cultural preservation & promotion",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the{" "}
                <span className="font-semibold text-blue-600">
                  world's most trusted travel partner
                </span>{" "}
                and a global pioneer, transforming how the world explores,
                experiences, and connects with destinations through technology.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
                <p className="text-gray-700 italic text-center">
                  "We envision a future where every journey is seamless,
                  enriching, and reliable—powered by cutting-edge technology and
                  deep cultural understanding."
                </p>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  Our Core Values
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Innovation First",
                    desc: "Leveraging AI, blockchain, and AR/VR for revolutionary experiences",
                  },
                  {
                    title: "Safety Always",
                    desc: "Real-time monitoring and emergency support for worry-free travel",
                  },
                  {
                    title: "Community Impact",
                    desc: "Empowering local businesses and preserving cultural heritage",
                  },
                  {
                    title: "Sustainability",
                    desc: "Promoting eco-friendly travel and responsible tourism practices",
                  },
                  {
                    title: "Authenticity",
                    desc: "Delivering genuine cultural experiences and connections",
                  },
                  {
                    title: "Accessibility",
                    desc: "Making travel planning simple, inclusive, and multilingual",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge technology to deliver unmatched travel
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-teal-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Objectives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic goals driving YatraDarshak's vision for the future of
            travel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Visionaries leading India's travel revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Anishka Jain",
                role: "Founder",
                image:
                  "https://ui-avatars.com/api/?name=Anishka+Jain&background=0D8ABC&color=fff&size=200",
              },
              {
                name: "Anuj Jain",
                role: "Co-Founder",
                image:
                  "https://ui-avatars.com/api/?name=Anuj+Jain&background=14B8A6&color=fff&size=200",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-teal-300 font-semibold">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join thousands of travelers who trust YatraDarshak for safe,
            personalized, and enriching journeys across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Planning Your Trip
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
