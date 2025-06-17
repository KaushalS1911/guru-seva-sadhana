
import React from 'react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const articles = [
    {
      title: 'The Power of Surrender in Spiritual Life',
      excerpt: 'Understanding the deep meaning of surrendering to the divine will and how it transforms our spiritual journey.',
      category: 'Teachings',
      readTime: '5 min read',
      date: 'December 15, 2024',
      image: '🙏'
    },
    {
      title: 'Seva: The Path to Self-Realization',
      excerpt: 'How selfless service becomes a powerful tool for spiritual growth and connection with the divine.',
      category: 'Spirituality',
      readTime: '7 min read',
      date: 'December 10, 2024',
      image: '🤝'
    },
    {
      title: 'Building Sacred Spaces: The Ashram Journey',
      excerpt: 'The divine inspiration behind establishing ashrams and their role in community spiritual development.',
      category: 'Ashram Life',
      readTime: '6 min read',
      date: 'December 5, 2024',
      image: '🏛️'
    },
    {
      title: 'Meditation Practices for Daily Life',
      excerpt: 'Simple yet profound meditation techniques that can be incorporated into modern living.',
      category: 'Practice',
      readTime: '4 min read',
      date: 'November 28, 2024',
      image: '🧘'
    },
    {
      title: 'The Divine Connection: Guru and Disciple',
      excerpt: 'Exploring the sacred relationship between Guru and disciple in the path of spiritual awakening.',
      category: 'Teachings',
      readTime: '8 min read',
      date: 'November 20, 2024',
      image: '✨'
    },
    {
      title: 'Festivals and Their Spiritual Significance',
      excerpt: 'Understanding the deeper meaning behind Hindu festivals and their role in spiritual upliftment.',
      category: 'Culture',
      readTime: '6 min read',
      date: 'November 15, 2024',
      image: '🎉'
    }
  ];

  const categories = ['All', 'Teachings', 'Spirituality', 'Ashram Life', 'Practice', 'Culture'];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Divine</span> Teachings & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore profound spiritual insights, devotional experiences, and the timeless wisdom 
            shared by our beloved Guru and the community of devotees.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{article.image}</div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-orange-600 hover:bg-orange-100"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected with Divine Wisdom</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive the latest teachings, stories, and updates from our spiritual community.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
