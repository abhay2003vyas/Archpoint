import { useEffect, useState } from "react";

const PROJECT_STORIES = [
  {
    id: 1,
    title: "GRASS Feild Valley",
    description:
      "A contemporary library design that bridges traditional knowledge with digital innovation.",
    image:
      "/images/home/1.jpg",
    category: "Public Architecture",
    year: "2024",
  },
  {
    id: 2,
    title: "Gaurav Ji Flat",
    description:
      "Green building practices meet modern workplace design in this innovative commercial space.",
    image:
      "/images/home/2.jpg",
    category: "Interior Degign",
    year: "2023",
  },
  {
    id: 3,
    title: "Hotel Kapish",
    description:
      "Redefining city living with thoughtful design and community-focused amenities.",
    image:
      "/images/home/3.jpg",
    category: "Architectural Design",
    year: "2024",
  },
  {
    id: 4,
    title: "Bhagwati Ji Residence",
    description:
      "A dynamic space that celebrates creativity and brings the community together.",
    image:
      "/images/home/4.jpg",
    category: "Cultural",
    year: "2023",
  }
];

const ProjectStories = ({ autoplay = true, projects = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const items = projects.length > 0 ? projects : PROJECT_STORIES;

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      }, 6000);
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
    <div className="w-full bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50 py-20 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200 mb-6">
            <span className="text-yellow-700 font-semibold text-sm uppercase tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Featured <span className="text-yellow-600">Architectural</span>{" "}
            Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest architectural masterpieces that blend innovative
            design, sustainability, and functionality to create extraordinary
            spaces.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Carousel */}
        <div
          className={`relative h-[600px] sm:h-[640px] transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center items-center space-x-0 relative h-full">
            {items.map((project, index) => {
              const position = getPosition(index);

              let scale = 1;
              let offset = "0%";
              let zIndex = 10;
              let blur = "blur-none opacity-100";

              if (position === "left") {
                scale = 0.82;
                offset = "-85%";
                zIndex = 5;
                blur = "blur-sm opacity-50";
              } else if (position === "right") {
                scale = 0.82;
                offset = "85%";
                zIndex = 5;
                blur = "blur-sm opacity-50";
              } else if (position === "hidden") {
                return null;
              }

              return (
                <div
                  key={project.id}
                  className={`absolute top-0 left-1/2 transform ${blur} transition-all duration-700 ease-in-out`}
                  style={{
                    width: "85%",
                    height: "100%",
                    transform: `translateX(calc(-50% + ${offset})) scale(${scale})`,
                    zIndex,
                  }}
                >
                  <div className="relative w-full h-full group">
                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Category Badge */}
                      {position === "center" && (
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                          <span className="text-yellow-700 font-semibold text-sm">
                            {project.category}
                          </span>
                        </div>
                      )}

                      {/* Year Badge */}
                      {position === "center" && (
                        <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full shadow-md">
                          <span className="font-bold text-sm">
                            {project.year}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}

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
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full z-20 shadow-lg border border-yellow-200/50 text-yellow-600 hover:text-yellow-700 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
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
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full z-20 shadow-lg border border-yellow-200/50 text-yellow-600 hover:text-yellow-700 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
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
        <div
          className={`flex justify-center mt-32 space-x-2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-125"
                  : "bg-slate-300 hover:bg-yellow-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStories;
