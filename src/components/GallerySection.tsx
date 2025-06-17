
import React, { useState } from 'react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const images = [
    {
      id: 1,
      category: 'Ashrams',
      title: 'Mahudi Ashram Main Temple',
      description: 'The divine sanctum of our first ashram',
      image: '🏛️'
    },
    {
      id: 2,
      category: 'Events',
      title: 'Annual Spiritual Gathering',
      description: 'Thousands of devotees celebrating together',
      image: '🎉'
    },
    {
      id: 3,
      category: 'Seva',
      title: 'Annadan Seva in Progress',
      description: 'Volunteers serving meals with love',
      image: '🍽️'
    },
    {
      id: 4,
      category: 'Ashrams',
      title: 'Rajkot Ashram Gardens',
      description: 'Peaceful meditation gardens',
      image: '🌺'
    },
    {
      id: 5,
      category: 'Events',
      title: 'Guru Purnima Celebration',
      description: 'Sacred festival of gratitude',
      image: '🪔'
    },
    {
      id: 6,
      category: 'Seva',
      title: 'Medical Camp Service',
      description: 'Free healthcare for all',
      image: '🏥'
    },
    {
      id: 7,
      category: 'Ashrams',
      title: 'Ajmer Construction Progress',
      description: 'New ashram taking shape',
      image: '🏗️'
    },
    {
      id: 8,
      category: 'Events',
      title: 'Youth Spiritual Workshop',
      description: 'Guiding the next generation',
      image: '🧘'
    },
    {
      id: 9,
      category: 'Seva',
      title: 'Gau Seva Activities',
      description: 'Caring for sacred cows',
      image: '🐄'
    },
    {
      id: 10,
      category: 'Ashrams',
      title: 'Dwarka Ashram Foundation',
      description: 'Groundbreaking ceremony',
      image: '⛩️'
    },
    {
      id: 11,
      category: 'Events',
      title: 'Digital Satsang Session',
      description: 'Connecting devotees worldwide',
      image: '💻'
    },
    {
      id: 12,
      category: 'Seva',
      title: 'Educational Seva Program',
      description: 'Teaching underprivileged children',
      image: '📚'
    }
  ];

  const categories = ['All', 'Ashrams', 'Events', 'Seva'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Divine</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the sacred moments, beautiful ashrams, and heartwarming seva activities 
            that define our spiritual community and mission.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {image.image}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <div className="text-orange-600 text-xl">👁️</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{image.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">High Quality Images</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Ashrams Documented</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-gray-600">Events Captured</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Seva Activities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contribute to Our Gallery</h3>
          <p className="text-gray-600 mb-6">
            Have photos from ashram visits, seva activities, or events? Share them with our community 
            to inspire others on their spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Submit Photos
            </button>
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
