import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageCircle,
  Headphones,
  Globe,
  Shield,
  Zap,
  CheckCircle2,
  User,
  Building2,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 1800-YATRA-HELP",
      secondary: "+91 1800-987-654",
      description: "Available 24/7 for emergency support"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "support@yatradarshak.com",
      secondary: "partners@yatradarshak.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Travel Hub, MG Road",
      secondary: "Bhopal, Madhya Pradesh 462001",
      description: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const supportCategories = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'booking', label: 'Booking Support', icon: CheckCircle2 },
    { value: 'partner', label: 'Partner Queries', icon: Building2 },
    { value: 'technical', label: 'Technical Issue', icon: Zap },
    { value: 'safety', label: 'Safety Concern', icon: Shield },
    { value: 'feedback', label: 'Feedback', icon: HelpCircle }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs"
    },
    {
      icon: Headphones,
      title: "Expert Team",
      description: "Dedicated support staff ready to help"
    },
    {
      icon: Globe,
      title: "Multi-lingual",
      description: "Support in 10+ Indian languages"
    },
    {
      icon: Shield,
      title: "Quick Response",
      description: "Average response time under 2 hours"
    }
  ];

  const faqs = [
    {
      question: "How do I book a trip on YatraDarshak?",
      answer: "Simply use our AI-powered trip planner, input your preferences, and get personalized itineraries instantly."
    },
    {
      question: "Is my personal data safe?",
      answer: "Yes! We use blockchain technology and strict encryption to ensure your data is completely secure."
    },
    {
      question: "How does the Digital Tourist ID work?",
      answer: "It's issued at check-in points and contains your travel details, valid only during your trip for safety monitoring."
    },
    {
      question: "Can I become a YatraDarshak Partner?",
      answer: "Absolutely! Visit our Partner section to learn about verification, benefits, and the application process."
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-teal-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0d9488 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-50 via-blue-50 to-teal-50 rounded-full mb-6 border-2 border-teal-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold text-teal-900 tracking-widest">
              💬 GET IN TOUCH
            </span>
            <Sparkles className="w-5 h-5 text-teal-600" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            <span className="bg-gradient-to-r from-teal-700 via-blue-700 to-teal-700 bg-clip-text text-transparent">
              Contact Us
            </span>
            <br />
            <span className="text-gray-900">We're Here to Help</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions? Need support? Our team is ready to assist you 24/7
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
              <p className="text-teal-600 font-semibold mb-1">{info.primary}</p>
              <p className="text-gray-600 text-sm mb-3">{info.secondary}</p>
              <p className="text-xs text-gray-500 italic">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-teal-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you shortly</p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-medium">Message sent successfully! We'll respond soon.</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Query Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none bg-white"
                >
                  {supportCategories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your query"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about how we can help you..."
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 hover:from-teal-700 hover:via-blue-700 hover:to-teal-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            {/* Support Features */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Why Contact Us?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Georgia, serif" }}>
                Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-all duration-300">
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-teal-600 transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <p className="mt-3 px-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Categories Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-teal-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            How Can We Assist You?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFormData({ ...formData, category: category.value })}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  formData.category === category.value
                    ? 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-500'
                    : 'bg-white border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                  formData.category === category.value
                    ? 'bg-gradient-to-br from-teal-500 to-blue-600'
                    : 'bg-gray-100 group-hover:bg-teal-100'
                }`}>
                  <category.icon className={`w-6 h-6 ${
                    formData.category === category.value ? 'text-white' : 'text-gray-600 group-hover:text-teal-600'
                  }`} />
                </div>
                <p className={`text-sm font-semibold text-center ${
                  formData.category === category.value ? 'text-teal-700' : 'text-gray-700'
                }`}>
                  {category.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        {/* <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Need Immediate Assistance?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our emergency support team is available 24/7 to help with urgent travel concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 justify-center">
              <Phone className="w-5 h-5" />
              Call Emergency Line
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 justify-center">
              <MessageCircle className="w-5 h-5" />
              Live Chat Support
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;