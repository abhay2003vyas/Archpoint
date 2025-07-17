import React, { useState, useEffect } from 'react';
import { Award, Star, Trophy, Medal, Crown, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/Asia.jpg';
import img2 from '../assets/IIBL.jpg';
import A1 from '../assets/Awards1.jpg';
import A2 from '../assets/Awards2.jpg';
import A3 from '../assets/Awards3.jpeg';
import A4 from '../assets/Awards4.jpeg';
import A5 from '../assets/Awards5.jpg';

const AwardsRecognition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const awards = [
    {
      id: 1,
      title: "3rd Asia's Leadership Award",
      year: "2025",
      description: "In recognition of sustainable design innovation and contribution to the community.",
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      category: "Leadership",
      image: img1,
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100"
    },
    {
      id: 2,
      title: "IIBL Award",
      year: "2024",
      description: "For excellence in integrated architecture and project management—firming up our status as a comprehensive design force to be counted on.",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      category: "Architecture",
      image: img2,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      id: 3,
      title: "Excellence in Design Award",
      year: "2023",
      description: "Recognized for outstanding architectural design and innovative solutions in hospitality sector.",
      icon: <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      category: "Design",
      image: A1,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    },
    {
      id: 4,
      title: "Sustainability Champion Award",
      year: "2023",
      description: "Honored for commitment to sustainable practices and environmental responsibility in all projects.",
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      category: "Sustainability",
      image: A2,
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100"
    },
    {
      id: 5,
      title: "Innovation Excellence Award",
      year: "2022",
      description: "Awarded for breakthrough innovations in architectural design and smart building solutions.",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      category: "Innovation",
      image: A4,
      bgColor: "bg-gradient-to-br from-red-50 to-rose-100"
    },
    {
      id: 6,
      title: "Quality Excellence Award",
      year: "2022",
      description: "Recognized for maintaining highest standards of quality in all architectural projects.",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />,
      category: "Quality",
      image: A5,
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('awards-container');
    if (container) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('awards-container');
    if (container) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-fade-in">
              Awards & Recognition
            </h1>
            <div className={`h-1 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-1000 delay-300 ${isVisible ? 'w-20 sm:w-32' : 'w-0'}`}></div>
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden sm:flex items-center space-x-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <button 
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            <a href="#" className="text-gray-500 hover:text-red-500 text-sm font-medium transition-all duration-300 hover:scale-105">
              SEE ALL AWARDS →
            </a>
          </div>
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="flex sm:hidden justify-between items-center mb-6">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Single Card Display */}
        <div className="sm:hidden relative mb-8 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                  {/* Award Image with Background - Increased height for mobile */}
                  <div className={`relative h-64 overflow-hidden ${award.bgColor}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img 
                        src={award.image} 
                        alt={award.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg">
                      {award.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-red-500/90 hover:scale-105 shadow-lg">
                      {award.category}
                    </div>
                  </div>

                  {/* Award Content - Increased padding */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-500 hover:text-red-500 transition-all duration-300">
                        {award.year.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 fill-current transition-all duration-300 hover:animate-pulse hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-all duration-300 line-clamp-2">
                      {award.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-800 transition-all duration-300 line-clamp-3">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Scroll - Increased card sizes */}
        <div className="hidden sm:block relative mb-16">
          <div 
            id="awards-container"
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className={`flex-shrink-0 w-80 md:w-96 lg:w-[420px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-3 hover:scale-105 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(award.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Award Image with Background - Significantly increased height */}
                <div className={`relative h-56 md:h-64 lg:h-72 overflow-hidden ${award.bgColor}`}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  <div className={`absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 ${
                    hoveredCard === award.id ? 'scale-110 rotate-12 shadow-lg' : 'scale-100 rotate-0'
                  }`}>
                    {award.icon}
                  </div>
                  <div className={`absolute bottom-5 left-5 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    hoveredCard === award.id ? 'bg-red-500/90 scale-105 shadow-lg' : 'bg-black/80'
                  }`}>
                    {award.category}
                  </div>
                </div>

                {/* Award Content - Increased padding and spacing */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-semibold transition-all duration-300 ${
                      hoveredCard === award.id ? 'text-red-500 scale-105' : 'text-gray-500'
                    }`}>
                      {award.year.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 text-yellow-400 fill-current transition-all duration-300 ${
                            hoveredCard === award.id ? 'animate-pulse scale-110' : ''
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl md:text-2xl font-bold mb-4 line-clamp-2 transition-all duration-300 ${
                    hoveredCard === award.id ? 'text-red-600' : 'text-gray-800'
                  }`}>
                    {award.title}
                  </h3>
                  
                  <p className={`text-sm md:text-base leading-relaxed line-clamp-3 transition-all duration-300 ${
                    hoveredCard === award.id ? 'text-gray-800' : 'text-gray-600'
                  }`}>
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile "See All Awards" Link */}
        <div className="sm:hidden text-center">
          <a href="#" className="text-gray-500 hover:text-red-500 text-sm font-medium transition-all duration-300 hover:scale-105">
            SEE ALL AWARDS →
          </a>
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
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default AwardsRecognition;