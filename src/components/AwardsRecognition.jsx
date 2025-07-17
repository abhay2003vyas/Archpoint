import React from 'react';
import { Award, Star, Trophy, Medal, Crown, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/Asia.jpg';
import img2 from '../assets/IIBL.jpg';
import A1 from '../assets/Awards1.jpg';
import A2 from '../assets/Awards2.jpg';
import A3 from '../assets/Awards3.jpeg';
import A4 from '../assets/Awards4.jpeg';
import A5 from '../assets/Awards5.jpg';

const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      title: "3rd Asia's Leadership Award",
      year: "2025",
      description: "In recognition of sustainable design innovation and contribution to the community.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      category: "Leadership",
      image: img1
    },
    {
      id: 2,
      title: "IIBL Award",
      year: "2024",
      description: "For excellence in integrated architecture and project management—firming up our status as a comprehensive design force to be counted on.",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      category: "Architecture",
      image: img2
    },
    {
      id: 3,
      title: "Excellence in Design Award",
      year: "2023",
      description: "Recognized for outstanding architectural design and innovative solutions in hospitality sector.",
      icon: <Medal className="w-8 h-8 text-green-500" />,
      category: "Design",
      image: A1
    },
    {
      id: 4,
      title: "Sustainability Champion Award",
      year: "2023",
      description: "Honored for commitment to sustainable practices and environmental responsibility in all projects.",
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      category: "Sustainability",
      image: A2
    },
    {
      id: 5,
      title: "Innovation Excellence Award",
      year: "2022",
      description: "Awarded for breakthrough innovations in architectural design and smart building solutions.",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      category: "Innovation",
      image: A4
    },
    {
      id: 6,
      title: "Quality Excellence Award",
      year: "2022",
      description: "Recognized for maintaining highest standards of quality in all architectural projects.",
      icon: <Star className="w-8 h-8 text-orange-500" />,
      category: "Quality",
      image: A5
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('awards-container');
    container.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('awards-container');
    container.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Awards & Recognition
            </h1>
            <div className="w-24 h-1 bg-red-500"></div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm font-medium">
              SEE ALL AWARDS →
            </a>
          </div>
        </div>

        {/* Awards Horizontal Scroll */}
        <div className="relative">
          <div 
            id="awards-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {awards.map((award) => (
              <div 
                key={award.id} 
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Award Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {award.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award.category}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {award.year.toUpperCase()}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="group">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="group">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600">Leadership Awards</p>
            </div>
            <div className="group">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Quality Certified</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AwardsRecognition;