import React, { useState, useEffect } from 'react';
import { Award, Star, Trophy, Medal, Crown, Shield, ChevronLeft, ChevronRight, BatteryCharging } from 'lucide-react';

// Using placeholder images since actual imports aren't available in artifacts
import img1 from '../assets/Asia.jpg';
import img2 from '../assets/IIBL.jpg';
import A1 from '../assets/Awards1.jpg';
import A2 from '../assets/Awards2.jpg';
import A3 from '../assets/Awards3.jpeg';
import A4 from '../assets/Awards4.jpeg';
import A5 from '../assets/Awards5.jpg';
import { BiCertification } from 'react-icons/bi';

const AwardsRecognition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % awards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying]);

  const awards = [
    {
      id: 1,
      title: " Certification 3rd Asia's Leadership Award",
      year: "2025",
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Leadership",
      image: img1,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    },
    {
      id: 2,
      title: "Indian ICONIC Brands and Leaders (IIBL) Award",
      year: "2024",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Architecture",
      image: img2,
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100"
    },
    {
      id: 3,
      title: "IIBL Certification of Achievement",
      year: "2023",
      icon: <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Design",
      image: A1,
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100"
    },
    {
      id: 4,
      title: "Asia Leadership Award ",
      year: "2025",
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Sustainability",
      image: A2,
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100"
    },
    {
      id: 5,
      title: "National ICON Award",
      year: "2025",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Innovation",
      image: A4,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    },
    {
      id: 6,
      title: "Certification of National ICON Award",
      year: "2022",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Quality",
      image: A5,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
    },
    {
      id: 7,
      title: "Pride of Rajasthan Award",
      year: "2022",
      icon: <BiCertification className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
      category: "Quality",
      image: A3,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200 mb-6">
            <span className="text-yellow-700 font-semibold text-sm uppercase tracking-wide">Recognition & Excellence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Awards & <span className="text-yellow-600">Recognition</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Celebrating our commitment to excellence, innovation, and sustainable design practices recognized by industry leaders worldwide.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Controls - Desktop */}
        <div className={`hidden sm:flex justify-center items-center space-x-4 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-yellow-600 border border-yellow-200/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="px-4 py-2 bg-white/90 rounded-full border border-yellow-200/50 shadow-lg">
            <span className="text-slate-700 font-medium text-sm">Scroll to explore all awards</span>
          </div>
          <button 
            onClick={scrollRight}
            className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-yellow-600 border border-yellow-200/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-between items-center mb-6">
          <button 
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-yellow-600 border border-yellow-200/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-slate-300 w-2 hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-yellow-600 border border-yellow-200/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Single Card Display */}
        <div className="sm:hidden relative mb-8 overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 border border-yellow-200/50">
                  {/* Award Image - Fixed sizing for mobile */}
                  <div className={`relative h-64 overflow-hidden ${award.bgColor} flex items-center justify-center p-4`}>
                    <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
                      <img 
                        src={award.image} 
                        alt={award.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg border border-yellow-200/50">
                      {award.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                      {award.category}
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 fill-current transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-800 line-clamp-2">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden sm:block relative mb-16">
          <div 
            id="awards-container"
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className={`flex-shrink-0 w-80 md:w-96 lg:w-[380px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-3 hover:scale-105 border border-yellow-200/50 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(award.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Award Image - Fixed sizing for desktop */}
                <div className={`relative h-80 overflow-hidden ${award.bgColor} flex items-center justify-center p-6`}>
                  <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute top-5 right-5 bg-white/95 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-yellow-200/50 ${
                    hoveredCard === award.id ? 'scale-110 rotate-12 shadow-lg' : 'scale-100 rotate-0'
                  }`}>
                    {award.icon}
                  </div>
                  <div className={`absolute bottom-5 left-5 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg ${
                    hoveredCard === award.id 
                      ? 'bg-gradient-to-r from-yellow-600 to-amber-600 scale-105' 
                      : 'bg-gradient-to-r from-yellow-500 to-amber-500'
                  }`}>
                    {award.category}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                      hoveredCard === award.id 
                        ? 'text-yellow-700 bg-yellow-200 scale-105' 
                        : 'text-yellow-600 bg-yellow-100'
                    }`}>
                      {award.year}
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
                    hoveredCard === award.id ? 'text-yellow-600' : 'text-slate-800'
                  }`}>
                    {award.title}
                  </h3>

                  <button className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    hoveredCard === award.id
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                  }`}>
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
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
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AwardsRecognition;