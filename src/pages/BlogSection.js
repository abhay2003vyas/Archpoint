import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://archpoint.onrender.com/api/blogs');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBlogPosts(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blog posts. Please try again later.');
      // Fallback to sample data for demonstration
      setBlogPosts([
        {
          id: 1,
          title: "The Future of Architecture: Sustainable Design Trends",
          excerpt: "Exploring how modern architecture is evolving to meet environmental challenges while maintaining aesthetic appeal and functionality.",
          category: "Sustainability",
          author: "Sarah Johnson",
          date: "2025-08-05",
          views: 1250,
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          featured: true
        },
        {
          id: 2,
          title: "Smart Building Technologies Revolutionizing Construction",
          excerpt: "Discover how IoT, AI, and automation are transforming the way we design and construct buildings for the digital age.",
          category: "Technology",
          author: "Michael Chen",
          date: "2025-08-03",
          views: 890,
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          featured: false
        },
        {
          id: 3,
          title: "Minimalist Design: Less is More in Modern Architecture",
          excerpt: "Understanding the principles of minimalist architecture and how it creates spaces that promote wellbeing and functionality.",
          category: "Design",
          author: "Emma Rodriguez",
          date: "2025-08-01",
          views: 675,
          readTime: "4 min read",
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          featured: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Generate categories dynamically from the fetched blog posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const SearchIcon = () => (
    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const EyeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const TrendingIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const RefreshIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-16 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Our
              <span className="text-amber-600"> Blog</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Loading the latest insights and articles...
            </p>
          </div>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mt-16 mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our
            <span className=" text-amber-600"> Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover insights, trends, and innovations in architecture and design. 
            Stay updated with the latest industry developments and expert perspectives.
          </p>
          {error && (
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-amber-700 mb-3 text-sm">{error}</p>
              <button 
                onClick={fetchBlogs}
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-300"
              >
                <RefreshIcon />
                Retry
              </button>
            </div>
          )}
        </div>

        {/* Search and Filter Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* No posts found message */}
        {filteredPosts.length === 0 && !featuredPost && !loading && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredPost.image || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                    alt={featuredPost.title}
                    className="h-64 lg:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-lg">
                      <TrendingIcon />
                      <span className="ml-2">Featured</span>
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {featuredPost.author?.charAt(0) || 'A'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{featuredPost.author || 'Anonymous'}</p>
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <span className="flex items-center">
                            <CalendarIcon />
                            <span className="ml-1">{new Date(featuredPost.date || featuredPost.createdAt).toLocaleDateString()}</span>
                          </span>
                          <span className="flex items-center">
                            <EyeIcon />
                            <span className="ml-1">{featuredPost.views || 0} views</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-semibold bg-yellow-50 px-3 py-1 rounded-full">
                      {featuredPost.readTime || '5 min read'}
                    </span>
                  </div>
                  
                  <button className="group flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg w-fit transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Read More
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularPosts.map((post, index) => (
              <div 
                key={post.id || post._id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                      alt={post.title}
                      className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {(post.author || 'A').charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {post.author || 'Anonymous'}
                          </p>
                          <div className="flex items-center text-gray-500 text-xs space-x-3">
                            <span className="flex items-center">
                              <CalendarIcon />
                              <span className="ml-1">{new Date(post.date || post.createdAt).toLocaleDateString()}</span>
                            </span>
                            <span className="flex items-center">
                              <EyeIcon />
                              <span className="ml-1">{post.views || 0}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-yellow-600 font-semibold bg-yellow-50 px-2 py-1 rounded-full">
                        {post.readTime || '5 min read'}
                      </span>
                    </div>
                    
                    <button className="group flex items-center text-yellow-600 hover:text-yellow-700 font-semibold w-fit transition-all duration-300">
                      Read More
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {regularPosts.length > 0 && (
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-transparent border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-600 mb-2">{blogPosts.length}+</div>
            <div className="text-gray-600 font-medium">Published Articles</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-600 mb-2">{Math.floor(blogPosts.reduce((sum, post) => sum + (post.views || 0), 0) / 100) || 10}K+</div>
            <div className="text-gray-600 font-medium">Total Views</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-600 mb-2">{new Set(blogPosts.map(post => post.author)).size || 15}+</div>
            <div className="text-gray-600 font-medium">Expert Authors</div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={`mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 lg:p-12 text-center transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest trends, tips, and innovations in architecture and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            />
            <button className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;