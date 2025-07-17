import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PROJECT_STORIES = [
  {
    id: 1,
    title: "Modern Public Library",
    description:
      "A contemporary library design that bridges traditional knowledge with digital innovation.",
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
    category: "Public Architecture",
    year: "2024",
  },
  {
    id: 2,
    title: "Sustainable Office Complex",
    description:
      "Green building practices meet modern workplace design in this innovative commercial space.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    category: "Commercial",
    year: "2023",
  },
  {
    id: 3,
    title: "Urban Residential Tower",
    description:
      "Redefining city living with thoughtful design and community-focused amenities.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    category: "Residential",
    year: "2024",
  },
  {
    id: 4,
    title: "Cultural Arts Center",
    description:
      "A dynamic space that celebrates creativity and brings the community together.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    category: "Cultural",
    year: "2023",
  },
  {
    id: 5,
    title: "Eco-Friendly Campus",
    description:
      "Educational environment designed with sustainability and student well-being in mind.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    category: "Educational",
    year: "2024",
  },
];

const ProjectStories = ({ autoplay = true, projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = projects.length > 0 ? projects : PROJECT_STORIES;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoplay]);

  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + items.length) % items.length)
      return "left";
    if (index === (currentIndex + 1) % items.length) return "right";
    return "hidden";
  };

  return (
    <div className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel */}
        <div className="relative h-[600px] sm:h-[640px]">
          <div className="flex justify-center items-center space-x-0 relative h-full">
            {items.map((project, index) => {
              const position = getPosition(index);

              let scale = 1;
              let offset = "0%";
              let zIndex = 10;
              let blur = "blur-none opacity-100";

              if (position === "left") {
                scale = 0.85;
                offset = "-90%";
                zIndex = 5;
                blur = "blur-sm opacity-60";
              } else if (position === "right") {
                scale = 0.85;
                offset = "90%";
                zIndex = 5;
                blur = "blur-sm opacity-60";
              } else if (position === "hidden") {
                return null;
              }

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute top-0 left-1/2 transform ${blur} transition-transform duration-700`}
                  style={{
                    width: "90%",
                    height: "100%",
                    transform: `translateX(calc(-50% + ${offset})) scale(${scale})`,
                    zIndex,
                  }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center rounded-md shadow-md"
                      loading="lazy"
                    />

                    {position === "center" && (
                      <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 text-center text-black px-6 py-4  ">
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                          {project.category} + {project.year}
                        </p>
                        <h3 className="text-xl font-light tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 backdrop-blur-md p-3 rounded-full z-20"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 backdrop-blur-md p-3 rounded-full z-20"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-20 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStories;
