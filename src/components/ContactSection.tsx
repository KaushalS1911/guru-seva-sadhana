
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    purpose: 'general'
  });
  const { toast } = useToast();

  const ashramContacts = [
    {
      name: 'Shree Gurushaktidham Mahudi',
      address: 'Village Mahudi, Dist. Kheda, Gujarat - 387210',
      phone: '+91 98765 43210',
      email: 'mahudi@gurutattva.org',
      manager: 'Shri Ramesh Patel',
      timings: '5:00 AM - 10:00 PM',
      icon: '🏛️'
    },
    {
      name: 'Shree Gurushaktidham Rajkot',
      address: 'Kalawad Road, Rajkot, Gujarat - 360005',
      phone: '+91 98765 43211',
      email: 'rajkot@gurutattva.org',
      manager: 'Shri Vikram Shah',
      timings: '5:30 AM - 9:30 PM',
      icon: '🏢'
    },
    {
      name: 'Shree Gurushaktidham Ajmer',
      address: 'Pushkar Road, Ajmer, Rajasthan - 305001',
      phone: '+91 98765 43212',
      email: 'ajmer@gurutattva.org',
      manager: 'Shri Mohan Sharma',
      timings: '5:00 AM - 10:00 PM',
      icon: '🕌'
    },
    {
      name: 'Administrative Office',
      address: 'Central Office, Ahmedabad, Gujarat - 380001',
      phone: '+91 98765 43213',
      email: 'admin@gurutattva.org',
      manager: 'Dr. Priya Agarwal',
      timings: '9:00 AM - 6:00 PM',
      icon: '🏢'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We will respond within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      purpose: 'general'
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Connect</span> with Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for seva opportunities, spiritual guidance, ashram visits, 
            or any questions about our divine mission. We're here to help you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Purpose of Contact
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="seva">Seva Opportunities</option>
                  <option value="donation">Donation Related</option>
                  <option value="ashram">Ashram Visit</option>
                  <option value="spiritual">Spiritual Guidance</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg rounded-lg transition-colors duration-200"
              >
                Send Message
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                You will receive a copy of this message and we will respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-orange-600">📞</div>
                  <div>
                    <div className="text-black font-semibold">Main Office</div>
                    <div className="text-gray-600">+91 7383626702</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-orange-600">✉️</div>
                  <div>
                    <div className="text-black font-semibold">Email</div>
                    <div className="text-gray-600">admin@gurutattva.org</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-orange-600">💬</div>
                  <div>
                    <div className="text-black font-semibold">WhatsApp</div>
                    <div className="text-gray-600">+91 7383626702</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media</h3>
              <div className="grid grid-cols-2 gap-4 text-black">
                <a href="#" className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="text-orange-600">📱</div>
                  <span className="font-semibold">Telegram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="text-orange-600">📘</div>
                  <span className="font-semibold">Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="text-orange-600">📸</div>
                  <span className="font-semibold">Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="text-orange-600">🎥</div>
                  <span className="font-semibold">YouTube</span>
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Holidays:</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ashram Contacts */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Ashram Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ashramContacts.map((ashram, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{ashram.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{ashram.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="text-orange-600 mt-1">📍</div>
                        <div>{ashram.address}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-orange-600">📞</div>
                        <div>{ashram.phone}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-orange-600">✉️</div>
                        <div>{ashram.email}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-orange-600">👨‍💼</div>
                        <div>Manager: {ashram.manager}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-orange-600">🕒</div>
                        <div>{ashram.timings}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Ashrams</h3>
          <p className="text-gray-600 mb-6">
            Experience the divine energy of our sacred spaces. All visitors are welcome for darshan, 
            meditation, and participation in daily activities.
          </p>
          <div className="bg-white rounded-lg p-8 text-gray-600">
            <div className="text-6xl mb-4">🗺️</div>
            <p>Interactive map showing all ashram locations</p>
            <p className="text-sm mt-2">(Click on any ashram contact above for detailed directions)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
