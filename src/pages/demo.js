

// DEMO CODE
import React, { useState, useEffect } from "react";
import p1 from "../assets/p1.jpg";

const Architectural_Design = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ArchPoint's actual project images and data
  const projects = [
    {
      id: 1,
      image:
        "http://www.archpoint.in/wp-content/uploads/2022/12/ship-building.jpg",
      caption: "Ship Building Complex",
      delay: 0,
    },
    {
      id: 2,
      image:
        "http://www.archpoint.in/wp-content/uploads/2022/12/swarthia-seva-sadan.jpg",
      caption: "Swarthia Seva Sadan",
      delay: 100,
    },
    {
      id: 3,
      image:
        "http://www.archpoint.in/wp-content/uploads/2022/12/jain-sant-bhawan.jpg",
      caption: "Jain Sant Bhawan",
      delay: 200,
    },
    {
      id: 4,
      image:
        "http://www.archpoint.in/wp-content/uploads/2022/12/grassfield-resort.jpg",
      caption: "Grassfield Resort",
      delay: 300,
    },
    {
      id: 5,
      image: "http://www.archpoint.in/wp-content/uploads/2022/12/srcm.jpg",
      caption: "SRCM Complex",
      delay: 400,
    },
    {
      id: 6,
      image: "http://www.archpoint.in/wp-content/uploads/2022/12/ag-tower.jpg",
      caption: "AG Tower",
      delay: 500,
    },
  ];

  const designPhilosophy = {
    title: "Design Philosophy",
    description:
      "Arch Point creates spaces considering functionality & form to achieve aesthetics to satisfy the requirement of the project. Our design blends art and architecture, light and shadow, texture and color to add value to the project by creating an ambience that projects the dream of the client.",
    principles: [
      {
        icon: "🎨",
        title: "Art & Architecture Integration",
        description:
          "Seamlessly blending artistic vision with architectural precision to create spaces that inspire and elevate human experience.",
      },
      {
        icon: "💡",
        title: "Light & Shadow Mastery",
        description:
          "Strategic use of natural and artificial lighting to enhance spatial dynamics and create dramatic architectural moments.",
      },
      {
        icon: "🏗️",
        title: "Functionality First",
        description:
          "Every design decision prioritizes practical functionality while maintaining aesthetic excellence and user comfort.",
      },
      {
        icon: "🌟",
        title: "Client Vision Realization",
        description:
          "Transforming client dreams into tangible architectural reality through innovative design solutions and meticulous attention to detail.",
      },
    ],
  };

  const achievements = [
    {
      number: "300+",
      label: "Projects Completed",
      description: "Thanks to all visionaries for believing in Arch Point",
    },
    {
      number: "10+",
      label: "Cities",
      description: "We believe in growing together",
    },
    {
      number: "50+",
      label: "Team Members",
      description:
        "Dedicated and integrated team which believes design is our love",
    },
    {
      number: "ISO",
      label: "Certified",
      description: "Recognised for our commitment to quality",
    },
  ];

  const specializations = [
    {
      title: "Quantum Architecture",
      subtitle: "Your vibes matter to us",
      description:
        "Pioneering approach to spatial design that considers energy flows and human consciousness in architectural planning.",
      icon: "⚛️",
    },
    {
      title: "Government Recognition",
      subtitle: "Startup India Certified",
      description:
        "Officially recognized as a startup by the Government of India, showcasing our innovative approach to architecture.",
      icon: "🏛️",
    },
    {
      title: "Sustainable Design",
      subtitle: "Eco-conscious Architecture",
      description:
        "Creating environmentally responsible designs that minimize impact while maximizing efficiency and beauty.",
      icon: "🌱",
    },
    {
      title: "Cultural Integration",
      subtitle: "Honoring Heritage",
      description:
        "Incorporating local cultural elements and traditional architectural wisdom into contemporary design solutions.",
      icon: "🕌",
    },
  ];

  const serviceSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision and requirements",
    },
    {
      step: "02",
      title: "Concept Design",
      description:
        "Developing preliminary design concepts and spatial arrangements",
    },
    {
      step: "03",
      title: "Design Development",
      description: "Refining designs with detailed drawings and specifications",
    },
    {
      step: "04",
      title: "Documentation",
      description: "Complete construction drawings and technical documentation",
    },
    {
      step: "05",
      title: "Project Management",
      description: "Overseeing construction to ensure design integrity",
    },
    {
      step: "06",
      title: "Completion",
      description: "Final walkthrough and project handover",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section with Projects Focus */}
      <div className="relative pt-20 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="w-full mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <div
              className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
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
              { id: "specializations", label: "Specializations" },
              { id: "process", label: "Design Process" },
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
          <div className="max-w-6xl mx-auto">
            {/* Featured Projects - Now First */}
            {activeSection === "projects" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    Our Featured Projects
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our diverse portfolio of architectural achievements spanning residential, commercial, and institutional projects across India.
                  </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-12"
                      }`}
                      style={{
                        transitionDelay: `${400 + project.delay}ms`,
                        transformStyle: "preserve-3d",
                      }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                        <img
                          src={project.image}
                          alt={project.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                        <div className="absolute inset-0 flex items-end justify-center p-6">
                          <div
                            className={`text-white text-center transform transition-all duration-500 ease-out ${
                              hoveredProject === project.id
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-90"
                            }`}
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {project.caption}
                            </h3>
                            <div className="w-12 h-0.5 bg-amber-400 mx-auto" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-200/30 rounded-2xl transition-colors duration-500" />
                    </div>
                  ))}
                </div>

                {/* Project Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

                {/* Project Categories */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
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

            {/* Design Philosophy Overview */}
            {activeSection === "overview" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    Our Design Philosophy
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    At Arch Point, we believe that great architecture emerges
                    from the perfect harmony of functionality and form. Our
                    approach considers every element - from the play of light
                    and shadow to the careful selection of textures and colors.
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
                    Every project is a unique journey where we blend artistic
                    vision with practical solutions, ensuring that each space
                    not only meets functional requirements but also inspires and
                    elevates the human experience within it.
                  </p>
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {activeSection === "achievements" && (
              <div>
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

                {/* Awards Section */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Awards & Recognition
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[1, 2, 3, 4, 5].map((cert) => (
                      <div
                        key={cert}
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                          <div className="text-2xl text-amber-600">🏆</div>
                        </div>
                        <div className="text-center mt-3 text-sm font-medium text-slate-700">
                          Excellence Award {cert}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Specializations */}
            {activeSection === "specializations" && (
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                  Our Specializations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{spec.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">
                            {spec.title}
                          </h3>
                          <div className="text-amber-600 font-semibold mb-3">
                            {spec.subtitle}
                          </div>
                          <p className="text-slate-600 leading-relaxed">
                            {spec.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Recognition */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                      🏛️ Government Recognition
                    </h3>
                    <p className="text-green-100 mb-4">
                      Officially recognized as a startup by the Government of
                      India, showcasing our innovative approach to modern
                      architectural design and sustainable building practices.
                    </p>
                    <div className="bg-white/20 px-4 py-2 rounded-full inline-block">
                      <span className="text-sm font-semibold">
                        Startup India Certified
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                      ⚛️ Quantum Architecture
                    </h3>
                    <p className="text-purple-100 mb-4">
                      Pioneering the integration of quantum principles in
                      architectural design, considering energy flows and
                      consciousness in spatial planning. Your vibes matter to
                      us.
                    </p>
                    <div className="bg-white/20 px-4 py-2 rounded-full inline-block">
                      <span className="text-sm font-semibold">
                        Innovation Leader
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Design Process */}
            {activeSection === "process" && (
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                  Our Design Process
                </h2>
                <div className="relative">
                  {/* Process Steps */}
                  <div className="space-y-8">
                    {serviceSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500 to-yellow-500 -z-10"></div>
                </div>

                {/* Process Guarantee */}
                <div className="mt-12 bg-slate-800 text-white p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Every step of our process is ISO certified, ensuring the
                    highest standards of architectural design and project
                    delivery.
                  </p>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">
                        ISO
                      </div>
                      <div className="text-slate-400">Certified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">
                        100%
                      </div>
                      <div className="text-slate-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">
                        24/7
                      </div>
                      <div className="text-slate-400">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-20 transition-all duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Let Arch Point bring your architectural dreams to life. Our
                dedicated team of 50+ professionals is ready to create spaces
                that blend functionality with beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-amber-500 hover:text-amber-600 transition-all duration-300">
                  View All Projects
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architectural_Design;