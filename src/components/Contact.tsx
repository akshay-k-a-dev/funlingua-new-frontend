import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      info: "8281858400",
      action: "tel:8281858400"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "funlingualanguageacademy@gmail.com",
      action: "mailto:funlingualanguageacademy@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      info: "Peyad, Thiruvananthapuram",
      action: "https://maps.google.com"
    }
  ];

  const ctaButtons = [
    {
      title: "Invite to Campus",
      description: "Schedule a visit to see our learning environment",
      icon: MapPin,
      primary: true
    },
    {
      title: "Start a Class",
      description: "Begin your transformation journey today",
      icon: MessageCircle,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your language transformation journey? Contact us today and discover 
            how FunLingua can unlock your confidence and potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="text-lg opacity-90">
                Whether you're an individual learner, educator, or organization, 
                we're here to help you transform language learning.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4 group border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              {ctaButtons.map((button, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 border-dashed transition-all cursor-pointer group ${
                    button.primary 
                      ? 'border-orange-300 bg-orange-50 hover:border-orange-500 hover:bg-orange-100' 
                      : 'border-purple-300 bg-purple-50 hover:border-purple-500 hover:bg-purple-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      button.primary ? 'bg-orange-200 group-hover:bg-orange-300' : 'bg-purple-200 group-hover:bg-purple-300'
                    }`}>
                      <button.icon className={button.primary ? 'text-orange-600' : 'text-purple-600'} size={24} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${button.primary ? 'text-orange-800' : 'text-purple-800'}`}>
                        {button.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{button.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-orange-500 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-600">Thank you for contacting us. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your learning goals or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Recognition Badge */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 max-w-md mx-auto">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-green-800 mb-2">Recognized Startup India</h4>
            <p className="text-green-600 font-medium">Certificate: DIPP208626</p>
            <p className="text-gray-600 text-sm">Recognized on 16-12-2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;