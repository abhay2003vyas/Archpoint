import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const PROJECT_STORIES = [
  {
    id: 1,
    title: "Modern Public Library",
    description: "A contemporary library design that bridges traditional knowledge with digital innovation.",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
    category: "Public Architecture",
    year: "2024"
  },
  {
    id: 2,
    title: "Sustainable Office Complex",
    description: "Green building practices meet modern workplace design in this innovative commercial space.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    year: "2023"
  },
  {
    id: 3,
    title: "Urban Residential Tower",
    description: "Redefining city living with thoughtful design and community-focused amenities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    category: "Residential",
    year: "2024"
  },
  {
    id: 4,
    title: "Cultural Arts Center",
    description: "A dynamic space that celebrates creativity and brings the community together.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    category: "Cultural",
    year: "2023"
  },
  {
    id: 5,
    title: "Eco-Friendly Campus",
    description: "Educational environment designed with sustainability and student well-being in mind.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    category: "Educational",
    year: "2024"
  }
];

const ProjectStories = ({
  autoplay = true,
  pauseOnHover = true,
  projects = [],
}) => {
  projects = projects.length > 0 ? projects : PROJECT_STORIES;

  const [currentProject, setCurrentProject] = useState(0);
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false
  );
  
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const controls = useAnimation();
  const slideX = useMotionValue(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      {/* Header */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Project Stories
          </h2>
          <button className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-sm uppercase tracking-widest font-medium">
            SEE ALL PROJECTS →
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg bg-white shadow-2xl">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                  <span className="ml-3 text-sm opacity-75">
                    {projects[currentProject].year}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {projects[currentProject].title}
                </h3>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
                  {projects[currentProject].description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-gray-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ProjectStories;