
import React from 'react';
import { Button } from '@/components/ui/button';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'Digital Gurukarya',
      description: 'Spread divine teachings through social media, website management, and digital outreach.',
      icon: '💻',
      activities: ['Social Media Management', 'Content Creation', 'Online Events', 'Digital Donations']
    },
    {
      title: 'Ashram Gurukarya',
      description: 'Physical seva at ashrams including maintenance, decoration, and daily operations.',
      icon: '🏛️',
      activities: ['Ashram Maintenance', 'Garden Care', 'Event Organization', 'Guest Services']
    },
    {
      title: 'Annadan Seva',
      description: 'Sacred service of feeding devotees and the needy with love and devotion.',
      icon: '🍽️',
      activities: ['Meal Preparation', 'Food Distribution', 'Kitchen Management', 'Special Events']
    },
    {
      title: 'Gau Seva',
      description: 'Care and protection of sacred cows, maintaining gaushalas with dedication.',
      icon: '🐄',
      activities: ['Cow Care', 'Gaushala Maintenance', 'Milk Distribution', 'Medical Care']
    },
    {
      title: 'Education Seva',
      description: 'Teaching spiritual values, Sanskrit, and supporting educational initiatives.',
      icon: '📚',
      activities: ['Spiritual Teaching', 'Sanskrit Classes', 'Youth Programs', 'Scholarship Support']
    },
    {
      title: 'Medical Seva',
      description: 'Providing healthcare services and organizing medical camps for the community.',
      icon: '🏥',
      activities: ['Medical Camps', 'Healthcare Support', 'Medicine Distribution', 'Health Education']
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Seva</span> Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our divine mission through various forms of selfless service. 
            Every act of seva brings you closer to the divine and serves humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{offering.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
              </div>
              
              <div className="space-y-2 mb-6">
                {offering.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {activity}
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join This Seva
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin Your Seva Journey?</h3>
          <p className="text-gray-600 mb-6">
            Connect with our seva coordinators to find the perfect way to contribute to our divine mission.
          </p>
          <Button 
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Seva Coordinator
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
