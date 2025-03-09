// components/RecommendationsPage.jsx
import React from 'react';

const RecommendationsPage = () => {
  // Sample recommendations data (you can replace this with your actual data)
  const recommendations = [
    {
      id: 1,
      title: "Explore New Horizons",
      description: "Dive into uncharted territories of knowledge and discovery",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Master Your Craft",
      description: "Enhance your skills with expert-led guidance",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Find Your Zen",
      description: "Discover inner peace through mindful practices",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          Your Personal Recommendations
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Curated just for you, based on your unique interests and aspirations
        </p>
      </div>

      {/* Recommendations Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">
                  {rec.category}
                </span>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {rec.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">{rec.description}</p>
                <button className="mt-4 text-indigo-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-200 rounded-full -translate-y-12 translate-x-12 opacity-20 group-hover:opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Want More Recommendations?
          </h3>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            Update Your Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;