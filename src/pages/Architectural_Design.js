import React, { useState, useEffect } from "react";
import p1 from "../assets/p1.jpg";

const ArchitecturalProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

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

  const achievements = [
    {
      number: "300+",
      label: "Projects Completed",
      description: "Thanks to all visionaries for believing in us",
    },
    {
      number: "10+",
      label: "Cities",
      description: "We believe in growing together",
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated team which believes design is our love",
    },
    {
      number: "ISO",
      label: "Certified",
      description: "Recognised for our commitment to quality",
    },
  ];

  const designPhilosophy = {
    principles: [
      {
        icon: "🎨",
        title: "Art & Architecture Integration",
        description: "Seamlessly blending artistic vision with architectural precision to create spaces that inspire and elevate human experience.",
      },
      {
        icon: "💡",
        title: "Light & Shadow Mastery",
        description: "Strategic use of natural and artificial lighting to enhance spatial dynamics and create dramatic architectural moments.",
      },
      {
        icon: "🏗️",
        title: "Functionality First",
        description: "Every design decision prioritizes practical functionality while maintaining aesthetic excellence and user comfort.",
      },
      {
        icon: "🌟",
        title: "Client Vision Realization",
        description: "Transforming client dreams into tangible architectural reality through innovative design solutions and meticulous attention to detail.",
      },
    ],
  };

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

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {[
              { id: "projects", label: "Featured Projects" },
              { id: "overview", label: "Design Philosophy" },
              { id: "achievements", label: "Achievements" },
              { id: "markets", label: "Markets & Disciplines" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeSection === "overview" && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Design Philosophy
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  We create spaces considering functionality & form to achieve aesthetics that satisfy the requirements of every project. Our design blends art and architecture, light and shadow, texture and color to add value by creating an ambience that projects your dreams.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {designPhilosophy.principles.map((principle, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Central Design Statement */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Creating Ambience That Projects Your Dreams
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  Every project is a unique journey where we blend artistic vision with practical solutions, ensuring that each space not only meets functional requirements but also inspires and elevates the human experience within it.
                </p>
              </div>
            </div>
          )}

          {activeSection === "achievements" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Our Track Record
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className="text-4xl font-bold text-amber-600 mb-3">
                      {achievement.number}
                    </div>
                    <div className="text-xl font-semibold text-slate-800 mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-slate-600">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">300+</div>
                  <div className="text-lg font-medium">Completed Projects</div>
                  <div className="text-amber-100 text-sm mt-2">Across multiple sectors</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-lg font-medium">Cities Served</div>
                  <div className="text-blue-100 text-sm mt-2">Pan-India presence</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-lg font-medium">Years Experience</div>
                  <div className="text-green-100 text-sm mt-2">Industry expertise</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "markets" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Markets & Disciplines
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Markets */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Markets We Serve
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {markets.map((market, index) => (
                      <div key={index} className="flex items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                        <span className="text-slate-700 font-medium">{market}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disciplines */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Our Disciplines
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {disciplines.map((discipline, index) => (
                      <div key={index} className="flex items-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                        <span className="text-slate-700 font-medium">{discipline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary Services */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">
                    Additional Services
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {secondaryMarkets.map((service, index) => (
                      <span key={index} className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">
                    Specialized Areas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {secondaryDisciplines.map((area, index) => (
                      <span key={index} className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Introduction when projects tab is active */}
          {activeSection === "projects" && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Featured Projects
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Explore our diverse portfolio of architectural achievements spanning residential, commercial, and institutional projects. Each project represents our commitment to excellence and innovation in design.
                </p>
              </div>

              {/* Project Categories */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                  Project Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: "🏢", name: "Commercial", count: "120+" },
                    { icon: "🏠", name: "Residential", count: "150+" },
                    { icon: "🏛️", name: "Institutional", count: "80+" },
                    { icon: "🏭", name: "Industrial", count: "50+" },
                  ].map((category, index) => (
                    <div key={index} className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <div className="font-semibold text-slate-800">{category.name}</div>
                      <div className="text-amber-600 font-bold">{category.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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