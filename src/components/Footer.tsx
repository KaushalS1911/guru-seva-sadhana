
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Seva Opportunities', href: '/offerings' },
    { name: 'Ashram Progress', href: '/ashram-progress' },
    { name: 'Donations', href: '/donate' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const sevaCategories = [
    'Digital Gurukarya',
    'Ashram Seva',
    'Annadan Seva',
    'Gau Seva',
    'Medical Seva',
    'Educational Seva'
  ];

  const ashrams = [
    'Mahudi Ashram',
    'Rajkot Ashram',
    'Ajmer Ashram',
    'Dwarka Ashram',
    'Haridwar Ashram',
    'Pune Ashram'
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🕉️</div>
              <div className="text-2xl font-bold text-orange-400">Guru Tattva</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Dedicated to the divine mission of Shree Shivkrupanand Swami, we serve humanity 
              through spiritual guidance, ashram development, and various seva activities 
              across India and beyond.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="text-orange-400">📞</div>
                <span>+91 7383626702</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-orange-400">✉️</div>
                <span>admin@gurutattva.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-orange-400">📍</div>
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Seva Categories */}
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">Seva Types</h3>
            <ul className="space-y-2">
              {sevaCategories.map((seva, index) => (
                <li key={index}>
                  <a 
                    href="#offerings" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {seva}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ashrams */}
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">Our Ashrams</h3>
            <ul className="space-y-2">
              {ashrams.map((ashram, index) => (
                <li key={index}>
                  <a 
                    href="#progress" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {ashram}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-200"
                  title="Telegram"
                >
                  <div className="text-xl">📱</div>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-200"
                  title="Facebook"
                >
                  <div className="text-xl">📘</div>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-200"
                  title="Instagram"
                >
                  <div className="text-xl">📸</div>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-200"
                  title="YouTube"
                >
                  <div className="text-xl">🎥</div>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-orange-600 p-3 rounded-lg transition-colors duration-200"
                  title="WhatsApp"
                >
                  <div className="text-xl">💬</div>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-4">Stay Updated</h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Get updates on new ashram developments, events, and spiritual teachings.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-900 bg-opacity-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🙏 Divine Blessings</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            "Service to humanity is service to the divine. Through collective seva and devotion, 
            we create a world filled with peace, love, and spiritual consciousness."
          </p>
          <p className="text-orange-400 text-sm mt-2 font-semibold">- Shree Shivkrupanand Swami</p>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Guru Tattva. All rights reserved. | 
                <span className="ml-1">Reg. No: NGO/2024/GT001</span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-xs">
              This website is built with love and devotion as seva to our beloved Guru. 
              May all beings find peace and spiritual fulfillment. 🕉️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
