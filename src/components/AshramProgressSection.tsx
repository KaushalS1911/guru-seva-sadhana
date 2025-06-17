
import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';

const AshramProgressSection = () => {
  const [hoveredAshram, setHoveredAshram] = useState(null);

  const ashrams = [
    {
      name: 'Shree Gurushaktidham Mahudi',
      location: 'Mahudi, Gujarat',
      progress: 33,
      totalNeeded: 5000000,
      raised: 1650000,
      features: ['Main Temple', 'Accommodation', 'Dining Hall', 'Garden'],
      image: '🏛️'
    },
    {
      name: 'Shree Gurushaktidham Ajmer',
      location: 'Ajmer, Rajasthan',
      progress: 47,
      totalNeeded: 8000000,
      raised: 3760000,
      features: ['Meditation Hall', 'Guest House', 'Library', 'Hospital'],
      image: '🕌'
    },
    {
      name: 'Shree Gurushaktidham Rajkot',
      location: 'Rajkot, Gujarat',
      progress: 65,
      totalNeeded: 6000000,
      raised: 3900000,
      features: ['Assembly Hall', 'Residential Quarters', 'Kitchen Complex', 'Parking'],
      image: '🏢'
    },
    {
      name: 'Shree Gurushaktidham Dwarka',
      location: 'Dwarka, Gujarat',
      progress: 25,
      totalNeeded: 7500000,
      raised: 1875000,
      features: ['Spiritual Center', 'Accommodation', 'Community Hall', 'Medical Center'],
      image: '⛩️'
    },
    {
      name: 'Shree Gurushaktidham Haridwar',
      location: 'Haridwar, Uttarakhand',
      progress: 18,
      totalNeeded: 9000000,
      raised: 1620000,
      features: ['Ashram Complex', 'Yagna Shala', 'Residential Block', 'Goshala'],
      image: '🏔️'
    },
    {
      name: 'Shree Gurushaktidham Pune',
      location: 'Pune, Maharashtra',
      progress: 55,
      totalNeeded: 5500000,
      raised: 3025000,
      features: ['Urban Ashram', 'Conference Hall', 'Meditation Rooms', 'Cafeteria'],
      image: '🌆'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="progress" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Ashram</span> Development Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track the divine progress of our sacred ashrams being built across India. 
            Each ashram represents a beacon of spiritual light in its community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ashrams.map((ashram, index) => {
            const remaining = ashram.totalNeeded - ashram.raised;
            const isHovered = hoveredAshram === index;

            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredAshram(index)}
                onMouseLeave={() => setHoveredAshram(null)}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{ashram.image}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{ashram.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{ashram.location}</p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Construction Progress</span>
                    <span className="text-lg font-bold text-orange-600">{ashram.progress}%</span>
                  </div>
                  
                  <div className="relative">
                    <Progress 
                      value={ashram.progress} 
                      className="h-3 mb-2"
                    />
                    {isHovered && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                        Need: {formatCurrency(remaining)} more
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Raised:</span>
                    <span className="font-semibold text-green-600">{formatCurrency(ashram.raised)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Target:</span>
                    <span className="font-semibold text-gray-800">{formatCurrency(ashram.totalNeeded)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Remaining:</span>
                    <span className="font-semibold text-orange-600">{formatCurrency(remaining)}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Planned Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ashram.features.map((feature, idx) => (
                      <span key={idx} className="bg-white px-2 py-1 rounded text-xs text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                  onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Support This Ashram
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Collective Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">6</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">40%</div>
              <div className="text-gray-600">Average Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{formatCurrency(15835000)}</div>
              <div className="text-gray-600">Total Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{formatCurrency(45000000)}</div>
              <div className="text-gray-600">Total Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshramProgressSection;
