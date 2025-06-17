
import React from 'react';

const AboutSection = () => {
  const milestones = [
    { year: '1998', event: 'First Divine Vision', description: 'Swamiji received his first divine calling' },
    { year: '2005', event: 'Mahudi Ashram Foundation', description: 'Establishment of the first ashram in Mahudi' },
    { year: '2010', event: 'Rajkot Ashram', description: 'Expansion to Rajkot with modern facilities' },
    { year: '2015', event: 'Digital Gurukarya Initiative', description: 'Bringing spirituality to the digital age' },
    { year: '2020', event: 'Global Outreach', description: 'Connecting devotees worldwide through technology' },
    { year: '2024', event: 'Ajmer Development', description: 'Major construction progress at Ajmer Ashram' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-orange-600">Our Divine Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The sacred path of Shree Shivkrupanand Swami and the divine mission of establishing 
            spiritual centers for the upliftment of humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Shree Shivkrupanand Swami</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A divine soul chosen by the cosmic forces to guide humanity towards spiritual awakening. 
              Swamiji's journey began with profound spiritual experiences that led to the establishment 
              of multiple ashrams dedicated to seva, meditation, and spiritual growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through his divine guidance, thousands have found peace, purpose, and spiritual 
              transformation. His teachings emphasize the importance of selfless service, 
              devotion, and the realization of one's true divine nature.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 font-semibold">Spiritual Teacher</span>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 font-semibold">Ashram Builder</span>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 font-semibold">Divine Guide</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 rounded-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🙏</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
              <p className="text-gray-600 mb-6">
                To create sacred spaces where souls can connect with the divine, 
                serve humanity, and experience spiritual transformation through 
                the grace of our beloved Guru.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-orange-600 font-semibold italic">
                  "Service to humanity is service to the divine"
                </p>
                <p className="text-gray-500 text-sm mt-2">- Shree Shivkrupanand Swami</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Sacred Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-orange-600 font-bold text-xl mb-2">{milestone.year}</div>
                <h4 className="text-gray-800 font-semibold text-lg mb-2">{milestone.event}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
