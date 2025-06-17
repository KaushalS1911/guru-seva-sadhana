
import React from 'react';

const AwardsSection = () => {
  const awards = [
    {
      title: 'Spiritual Leadership Excellence Award',
      givenBy: 'World Spiritual Council',
      year: '2023',
      location: 'New Delhi',
      description: 'For outstanding contribution to spiritual awakening and community service',
      image: '🏆'
    },
    {
      title: 'Seva Ratna Award',
      givenBy: 'Indian Spiritual Heritage Foundation',
      year: '2022',
      location: 'Mumbai',
      description: 'Recognition for selfless service and ashram development initiatives',
      image: '🎖️'
    },
    {
      title: 'Dharma Shiromani',
      givenBy: 'Gujarat Spiritual Society',
      year: '2021',
      location: 'Ahmedabad',
      description: 'Honoring dedication to preserving and spreading Dharmic values',
      image: '🏅'
    },
    {
      title: 'Community Service Excellence',
      givenBy: 'National NGO Alliance',
      year: '2020',
      location: 'Pune',
      description: 'For exceptional work in education seva and medical camps',
      image: '⭐'
    },
    {
      title: 'Spiritual Innovation Award',
      givenBy: 'Digital Dharma Initiative',
      year: '2019',
      location: 'Bangalore',
      description: 'For pioneering digital approaches to spiritual guidance',
      image: '💫'
    },
    {
      title: 'Gau Seva Samman',
      givenBy: 'All India Gau Raksha Sabha',
      year: '2018',
      location: 'Haridwar',
      description: 'Recognition for exemplary cow protection and care services',
      image: '🐄'
    }
  ];

  const certifications = [
    {
      title: 'Yoga Acharya Certification',
      authority: 'Yoga Alliance International',
      year: '2017',
      type: 'Professional Certification'
    },
    {
      title: 'Vedic Studies Diploma',
      authority: 'Sanskrit University',
      year: '2015',
      type: 'Educational Qualification'
    },
    {
      title: 'Meditation Master Certification',
      authority: 'International Meditation Society',
      year: '2014',
      type: 'Spiritual Qualification'
    },
    {
      title: 'NGO Management Certificate',
      authority: 'Social Development Institute',
      year: '2013',
      type: 'Administrative Qualification'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Awards</span> & Recognitions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Divine blessings reflected through worldly recognition of our Guru's selfless service 
            and spiritual contributions to society.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Prestigious Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{award.image}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">Awarded by:</span>
                    <span className="text-sm text-orange-600 font-medium">{award.givenBy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">Year:</span>
                    <span className="text-sm text-gray-800">{award.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">Location:</span>
                    <span className="text-sm text-gray-800">{award.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Certifications & Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
                <div className="text-3xl">📜</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h4>
                  <div className="text-sm text-gray-600 mb-1">{cert.authority}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                      {cert.type}
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recognition Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Years of Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Certifying Bodies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">States Honored In</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg">
            <p className="text-gray-700 italic">
              "These recognitions are not personal achievements, but acknowledgments of the divine grace 
              that flows through our collective seva and spiritual practice."
            </p>
            <p className="text-orange-600 font-semibold mt-2">- Shree Shivkrupanand Swami</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
