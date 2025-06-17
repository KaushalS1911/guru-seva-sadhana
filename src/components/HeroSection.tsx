
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-6xl mb-4">🕉️</div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-orange-600">Guru</span> Tattva
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
            Shree Shivkrupanand Swami's Divine Mission
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join us in our sacred journey of spiritual transformation, seva, and the establishment of divine ashrams. 
          Through the blessings of our beloved Guru, we create spaces of peace, wisdom, and spiritual growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Seva
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Make a Donation
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-orange-600 hover:bg-orange-100 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Teachings
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Ashrams Established</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">50,000+</div>
            <div className="text-gray-600">Devotees Worldwide</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
