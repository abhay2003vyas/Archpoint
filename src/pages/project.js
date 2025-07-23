import React, { useState, useEffect } from 'react';
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
const Architectural_Design = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      image: p1,
      caption: 'Luxury Lobby Design',
      delay: 0
    },
    {
      id: 2,
      image: p2,
      caption: 'Modern Suite Interior',
      delay: 100
    },
    {
      id: 3,
      image: p3,
      caption: 'Executive Lounge',
      delay: 200
    },
    {
      id: 4,
      image: p4,
      caption: 'Rooftop Restaurant',
      delay: 300
    },
    {
      id: 5,
      image: p5,
      caption: 'Spa & Wellness Center',
      delay: 400
    },
    {
      id: 6,
      image: p6,
      caption: 'Conference Hall',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Animated Hero Title */}
          <div className="text-center mb-8">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Architectural 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">
                Design
              </span>
            </h1>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-8">
              <div 
                className={`h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000 delay-300 ease-out ${
                  isVisible ? 'w-24' : 'w-0'
                }`}
              />
            </div>
          </div>

          {/* Description */}
          <div 
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
              At ArchPoint, we craft exceptional hospitality experiences through innovative design and luxury interior architecture. 
              Each project reflects our commitment to creating spaces that blend sophistication with comfort, 
              setting new standards in hotel design excellence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${400 + project.delay}ms`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption */}
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div 
                      className={`text-white text-center transform transition-all duration-500 ease-out ${
                        hoveredProject === project.id
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {project.caption}
                      </h3>
                      <div className="w-12 h-0.5 bg-amber-400 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Subtle border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-200/30 rounded-2xl transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div 
            className={`text-center mt-20 transition-all duration-1000 delay-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Let ArchPoint bring your vision to life with our expertise in luxury hotel design and architecture.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architectural_Design;