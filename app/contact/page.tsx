'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Star, Heart, Sparkles, MessageCircle, Users, Award } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  query: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  query?: string;
}

const ContactUsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Contact Information
  const contactInfo = {
    email: 'hello@kahanigalore.com', // Replace with your actual email
    phone: '+1-555-0123', // Replace with your actual phone number
    address: '123 Magic Street, Wonderland City, WL 12345', // Replace with actual address
    hours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM'
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required! 📝';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters! ✨';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required! 📧';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address! 💌';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required! 📱';
    } else if (!/^[\+]?[(]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number! 📞';
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Please tell us how we can help! 💭';
    } else if (formData.query.trim().length < 10) {
      newErrors.query = 'Please provide more details (at least 10 characters)! 📝';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Hi there! 🌟

You have a new contact form submission:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

💭 Message:
${formData.query}

---
Sent from Kahanigalore Contact Form 🎨
    `;

    // Create mailto link
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleCallNow = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  // Floating decoration components
  const FloatingIcons = () => {
    const icons = [
      { Icon: Star, delay: '0s', position: { left: '10%', top: '20%' } },
      { Icon: Heart, delay: '1s', position: { left: '85%', top: '15%' } },
      { Icon: Sparkles, delay: '2s', position: { left: '15%', top: '60%' } },
      { Icon: MessageCircle, delay: '3s', position: { left: '80%', top: '70%' } },
      { Icon: Users, delay: '4s', position: { left: '50%', top: '10%' } },
      { Icon: Award, delay: '5s', position: { left: '50%', top: '80%' } },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icons.map(({ Icon, delay, position }, index) => (
          <Icon
            key={index}
            className="absolute text-white/20 animate-float"
            style={{
              ...position,
              animationDelay: delay,
            }}
            size={24}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-celesta overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-6xl animate-bounce-gentle">📞</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-200">💌</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-400">🌟</span>
          </div>
          <h1 className="text-responsive-xl font-bold text-white mb-6 animate-fade-in-up text-shadow-lg">
            Contact Us
          </h1>
          <p className="text-responsive text-white/95 mb-8 animate-fade-in-up animation-delay-200 font-semibold">
            🌈 We'd love to hear from you! Get in touch and let's create something magical together! 🌈
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-100 animate-fade-in-up">
              <div className="text-center mb-8">
                <span className="text-5xl mb-4 block">📝</span>
                <h2 className="text-responsive-lg font-bold text-celesta-purple mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you super fast! ⚡
                </p>
              </div>

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-celesta-blue/30 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-celesta-blue'
                    }`}
                    placeholder="Enter your awesome name! ✨"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-celesta-blue/30 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-celesta-blue'
                    }`}
                    placeholder="your.email@example.com 💌"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-celesta-blue/30 ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-celesta-blue'
                    }`}
                    placeholder="(555) 123-4567 📞"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">{errors.phone}</p>
                  )}
                </div>

                {/* Query Field */}
                <div>
                  <label htmlFor="query" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <span className="text-lg">💭</span>
                    How Can We Help You?
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-celesta-blue/30 resize-none ${
                      errors.query ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-celesta-blue'
                    }`}
                    placeholder="Tell us about your magical ideas, questions, or how we can help make your child's day special! 🌟"
                  />
                  {errors.query && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">{errors.query}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isLoading}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-purple-blue text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-4 border-white disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        Send Message ✨
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCallNow}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-celesta-green text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-4 border-white"
                  >
                    <Phone size={24} />
                    Call Us Now! 📞
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="bg-yellow-100 rounded-3xl p-8 shadow-xl border-4 border-white animate-fade-in-up animation-delay-200">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">📍</span>
                  <h3 className="text-responsive-lg font-bold text-celesta-yellow mb-2">
                    Get In Touch
                  </h3>
                  <p className="text-gray-700">
                    Multiple ways to reach our amazing team! 🎉
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md border-2 border-gray-100">
                    <div className="bg-celesta-blue text-white p-3 rounded-full">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Email Us! 📧</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-celesta-blue font-semibold hover:text-celesta-purple transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We reply within 24 hours! ⚡</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md border-2 border-gray-100">
                    <div className="bg-celesta-green text-white p-3 rounded-full">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Call Us! 📱</h4>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-celesta-green font-semibold hover:text-celesta-purple transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available during business hours! 🕐</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md border-2 border-gray-100">
                    <div className="bg-celesta-red text-white p-3 rounded-full">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Visit Us! 📍</h4>
                      <p className="text-gray-700 font-semibold">{contactInfo.address}</p>
                      <p className="text-sm text-gray-600 mt-1">Come see the magic in person! ✨</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md border-2 border-gray-100">
                    <div className="bg-celesta-purple text-white p-3 rounded-full">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Business Hours! 🕐</h4>
                      <p className="text-gray-700 font-semibold">{contactInfo.hours}</p>
                      <p className="text-sm text-gray-600 mt-1">We're here when you need us! 🌟</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Facts Card */}
              <div className="bg-blue-100 rounded-3xl p-8 shadow-xl border-4 border-white animate-fade-in-up animation-delay-400">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">🎉</span>
                  <h3 className="text-responsive-lg font-bold text-celesta-blue mb-2">
                    Why Choose Us?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-celesta-purple">⚡</div>
                    <div className="text-sm font-semibold text-gray-700 mt-2">Quick Response</div>
                    <div className="text-xs text-gray-600">Within 24 hours!</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-celesta-green">❤️</div>
                    <div className="text-sm font-semibold text-gray-700 mt-2">Friendly Staff</div>
                    <div className="text-xs text-gray-600">We love what we do!</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-celesta-blue">🌟</div>
                    <div className="text-sm font-semibold text-gray-700 mt-2">Quality Service</div>
                    <div className="text-xs text-gray-600">Exceeding expectations!</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-celesta-red">🎨</div>
                    <div className="text-sm font-semibold text-gray-700 mt-2">Creative Solutions</div>
                    <div className="text-xs text-gray-600">Unique & magical!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-celesta relative overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-5xl animate-bounce-gentle">🤗</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-200">💫</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-400">🌈</span>
          </div>
          
          <h2 className="text-responsive-lg font-bold text-white mb-6 text-shadow">
            Can't Wait to Hear From You! 🌟
          </h2>
          <p className="text-responsive text-white/95 mb-8 font-semibold">
            Whether you have questions, want to book a service, or just want to say hello - we're here for you! ✨
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleCallNow}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-celesta-purple hover:bg-gray-100 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-4 border-white"
            >
              <Phone size={24} />
              Call Us Right Now! 📞
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;