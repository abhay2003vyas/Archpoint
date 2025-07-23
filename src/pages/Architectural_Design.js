import React, { useState, useEffect } from "react";
import p1 from "../assets/p1.jpg";
const ArchitecturalProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Markets and Disciplines data
  const markets = [
    "Aviation + Transportation",
    "Civic + Culture",
    "Commercial",
    "Federal Government",
    "Healthcare",
    "Higher Education"
  ];

  const disciplines = [
    "Lifestyle",
    "Mixed-Use",
    "Multi-Family Residential",
    "Science + Technology",
    "Senior Living + Hospitality",
    "All Projects"
  ];

  const secondaryMarkets = [
    "Architecture",
    "Landscape Architecture",
    "Planning + Urban Design",
    "Experience Design",
    "Interiors"
  ];

  const secondaryDisciplines = [
    "Planning + Urban Design",
    "Sports + Entertainment",
    "Workplace",
    "Engineering",
    "Aviation"
  ];

  // Project data with various layouts
  const projects = [
    {
      id: 1,
      title: "More Than a Stadium",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&h=800&fit=crop",
      layout: "full",
      span: "col-span-2"
    },
    {
      id: 2,
      title: "Experience Honeywell's Global HQ",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      layout: "half",
      span: "col-span-1"
    },
    {
      id: 3,
      title: "BGC Filinvest Headquarters",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      layout: "half",
      span: "col-span-1"
    },
    {
      id: 4,
      title: "Sacramento's Civic Showcase",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
      layout: "full",
      span: "col-span-2"
    },
    {
      id: 5,
      title: "A New Atlanta HQ Where People Can Thrive",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      layout: "half",
      span: "col-span-1"
    },
    {
      id: 6,
      title: "Reimagining Dallas Core",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      layout: "half",
      span: "col-span-1"
    },
    {
      id: 7,
      title: "A Natural Fit for LG North America",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop",
      layout: "full",
      span: "col-span-2"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif]">
      {/* Header Section */}
      <div className="pt-20 pb-0 px-6 lg:px-12">
        <div className="text-center mb-16">
            <div
              className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{
                backgroundImage: `url(${p1})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-0"></div>

              {/* Heading Content */}
              <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Our Projects
                </h1>
                <h2 className="text-lg tracking-widest text-white uppercase font-semibold mb-4">
                  Architecture & Design Excellence
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
                  Discover our portfolio of innovative architectural solutions that blend functionality with beauty across multiple cities and project types.
                </p>
              </div>
            </div>
          </div>

      </div>

      {/* Projects Grid Section */}
      <div className="w-full">
        <div 
          className={`transition-all duration-1200 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative group cursor-pointer overflow-hidden
        ${project.span}
        ${project.layout === 'full' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      style={{
        transitionDelay: `${300 + index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className={`
            w-full h-full object-cover transition-transform duration-700 ease-out
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />
      </div>

      {/* Dark Overlay */}
      <div 
        className={`
          absolute inset-0 bg-black transition-opacity duration-500 ease-out
          ${isHovered ? 'bg-opacity-50' : 'bg-opacity-30'}
        `}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="text-center">
          <h3 
            className={`
              text-white font-['Merriweather',serif] text-2xl lg:text-3xl font-light
              transition-all duration-500 ease-out
              ${isHovered ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-90'}
            `}
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            {project.title}
          </h3>
          
          {/* Decorative Line */}
          <div 
            className={`
              w-16 h-0.5 bg-white mx-auto mt-4 transition-all duration-500 ease-out
              ${isHovered ? 'w-24 opacity-100' : 'w-16 opacity-80'}
            `}
          />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div 
        className={`
          absolute inset-0 border-2 border-transparent transition-all duration-500 ease-out
          ${isHovered ? 'border-white border-opacity-20' : ''}
        `}
      />
    </div>
  );
};

export default ArchitecturalProjects;

