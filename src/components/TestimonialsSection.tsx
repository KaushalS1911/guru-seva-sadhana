
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const testimonials = [
    {
      name: 'Priya Patel',
      location: 'Mumbai, Maharashtra',
      category: 'Transformation',
      video: '🎥',
      quote: 'The ashram experience completely transformed my spiritual journey. The peace and divine energy I felt there continues to guide my daily life.',
      duration: '3:45',
      seva: 'Digital Gurukarya Volunteer'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      category: 'Seva Experience',
      video: '🎬',
      quote: 'Participating in Annadan Seva taught me the true meaning of selfless service. Every meal served felt like a prayer.',
      duration: '2:30',
      seva: 'Annadan Seva Coordinator'
    },
    {
      name: 'Dr. Meera Sharma',
      location: 'Pune, Maharashtra',
      category: 'Healing',
      video: '📹',
      quote: 'The medical seva camps organized here have touched thousands of lives. The combination of physical and spiritual healing is remarkable.',
      duration: '4:15',
      seva: 'Medical Seva Volunteer'
    },
    {
      name: 'Amit Gujarati',
      location: 'Ahmedabad, Gujarat',
      category: 'Ashram Life',
      video: '🎭',
      quote: 'Living in the ashram taught me discipline, devotion, and the joy of community living. It\'s a divine experience beyond words.',
      duration: '5:20',
      seva: 'Ashram Resident Volunteer'
    },
    {
      name: 'Sushila Devi',
      location: 'Rajkot, Gujarat',
      category: 'Transformation',
      video: '🎪',
      quote: 'Swamiji\'s teachings and the ashram environment helped me overcome life\'s biggest challenges with faith and inner strength.',
      duration: '3:10',
      seva: 'Regular Devotee'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      category: 'Youth Impact',
      video: '🎨',
      quote: 'The youth programs here shaped my character and gave me direction. Now I volunteer to guide other young seekers.',
      duration: '2:55',
      seva: 'Youth Program Coordinator'
    },
    {
      name: 'Lakshmi Nair',
      location: 'Bangalore, Karnataka',
      category: 'Gau Seva',
      video: '🌟',
      quote: 'Working in the gaushala connected me with nature and taught me compassion towards all living beings.',
      duration: '4:05',
      seva: 'Gau Seva Volunteer'
    },
    {
      name: 'Ramesh Agarwal',
      location: 'Indore, Madhya Pradesh',
      category: 'Business Impact',
      video: '💼',
      quote: 'The spiritual principles learned here transformed not just my personal life but also how I conduct my business ethically.',
      duration: '3:35',
      seva: 'Major Donor & Volunteer'
    }
  ];

  const categories = ['All', 'Transformation', 'Seva Experience', 'Healing', 'Ashram Life', 'Youth Impact', 'Gau Seva', 'Business Impact'];

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Voices</span> of Devotees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformational stories and spiritual journeys of our beloved devotees. 
            Their testimonials reflect the divine grace and impact of our mission.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Video Thumbnail */}
              <div className="relative bg-gray-200 h-48 flex items-center justify-center cursor-pointer group">
                <div className="text-6xl opacity-70 group-hover:opacity-90 transition-opacity">
                  {testimonial.video}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-8 border-l-orange-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {testimonial.duration}
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  {testimonial.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                  <p className="text-xs text-orange-600 font-semibold">{testimonial.seva}</p>
                </div>
                
                <blockquote className="text-gray-600 italic mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-orange-600 hover:bg-orange-100 w-full"
                >
                  Watch Full Video
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Experience</h3>
          <p className="text-gray-600 mb-6">
            Have you been touched by our mission? We'd love to hear your story and share it with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Submit Your Testimonial
            </Button>
            <Button 
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3"
            >
              Record Video Testimonial
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
            <div className="text-gray-600 text-sm">Video Testimonials</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600 mb-1">25+</div>
            <div className="text-gray-600 text-sm">Cities Represented</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600 mb-1">8</div>
            <div className="text-gray-600 text-sm">Experience Categories</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600 mb-1">5000+</div>
            <div className="text-gray-600 text-sm">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
