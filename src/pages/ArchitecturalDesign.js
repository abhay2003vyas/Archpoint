import React, { useState, useEffect } from "react";
import Contact from "../components/contact";
import Footer from '../components/Footer';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  User,
  Building,
  Users,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const ArchitecturalDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Hero carousel images
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=800&fit=crop",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=800&fit=crop",
  ];

  // Project data with images
  const projects = [
    {
      name: "Hotel Kapish",
      mainImage: "/images/ArchitecturalDesign/kapish/View.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/kapish/1.jpg",
        "/images/ArchitecturalDesign/kapish/2.jpg",
        "/images/ArchitecturalDesign/kapish/3.jpg",
        "/images/ArchitecturalDesign/kapish/4.jpg",
        "/images/ArchitecturalDesign/kapish/5.jpg",
        "/images/ArchitecturalDesign/kapish/6.jpg",
        "/images/ArchitecturalDesign/kapish/7.jpg",
        "/images/ArchitecturalDesign/kapish/8.jpg",
        "/images/ArchitecturalDesign/kapish/9.jpg",
      ],
    },
    {
      name: "Dhai Dweep Temple",
      mainImage: "/images/ArchitecturalDesign/DhaiDeep/4.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/DhaiDeep/1.jpg",
        "/images/ArchitecturalDesign/DhaiDeep/2.jpg",
        "/images/ArchitecturalDesign/DhaiDeep/3.jpg",
        "/images/ArchitecturalDesign/DhaiDeep/4.jpg",
        "/images/ArchitecturalDesign/DhaiDeep/5.jpg",
      ],
    },
    {
      name: "CLC Institute",
      mainImage: "/images/ArchitecturalDesign/CLC/2.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/CLC/1.jpg",
        "/images/ArchitecturalDesign/CLC/2.jpg",
        "/images/ArchitecturalDesign/CLC/3.jpg",
        "/images/ArchitecturalDesign/CLC/4.jpg",
      ],
    },
    {
      name: "Medical College Auditorium",
      mainImage: "/images/ArchitecturalDesign/Medical_clg/2.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/Medical_clg/1.jpg",
        "/images/ArchitecturalDesign/Medical_clg/2.jpg",
      ],
    },
    {
      name: "Kapish Tower",
      mainImage: "/images/ArchitecturalDesign/KapishTower/1.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/KapishTower/1.jpg",
        "/images/ArchitecturalDesign/KapishTower/2.jpg",
        "/images/ArchitecturalDesign/KapishTower/3.jpg",
        "/images/ArchitecturalDesign/KapishTower/4.jpg",
      ],
    },
    {
      name: "Amar Jain Hospital",
      mainImage: "/images/ArchitecturalDesign/AmarJainHospital/2.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/AmarJainHospital/1.jpg",
        "/images/ArchitecturalDesign/AmarJainHospital/2.jpg",
        "/images/ArchitecturalDesign/AmarJainHospital/3.jpg",
        "/images/ArchitecturalDesign/AmarJainHospital/4.jpg",
        "/images/ArchitecturalDesign/AmarJainHospital/5.jpg",
        "/images/ArchitecturalDesign/AmarJainHospital/6.jpg",
      ],
    },
    {
      name: "Todarmal Smarak",
      mainImage: "/images/ArchitecturalDesign/TodarmalSmarak/5.jpg",
      thumbnails: [
        "/images/ArchitecturalDesign/TodarmalSmarak/1.jpg",
        "/images/ArchitecturalDesign/TodarmalSmarak/2.jpg",
        "/images/ArchitecturalDesign/TodarmalSmarak/3.jpg",
        "/images/ArchitecturalDesign/TodarmalSmarak/4.jpg",
        "/images/ArchitecturalDesign/TodarmalSmarak/5.jpg",
        "/images/ArchitecturalDesign/TodarmalSmarak/6.jpg",
      ],
    },
  ];

  // Milestones
  const milestones = [
    { icon: Building, number: "300+", label: "Projects" },
    { icon: User, number: "20 Yr", label: "Experience" },
    { icon: Users, number: "100+", label: "Team" },
    { icon: Globe, number: "Global", label: "Services" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const splitNumber = (numStr) => {
    const match = numStr.match(/^(\d+)(.*)$/);
    return match ? { value: parseInt(match[1]), suffix: match[2] } : null;
  };
  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Hotel Owner",
      quote:
        "Arch Point transformed our vision into reality. Their quantum architecture approach created a space that perfectly balances functionality and aesthetics.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Resort Manager",
      quote:
        "The team delivered exceptional design solutions that exceeded our expectations. Every detail was carefully crafted.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Property Developer",
      quote:
        "Working with Arch Point was a seamless experience. Their expertise in architectural design is unmatched.",
      rating: 5,
    },
  ];

  // Auto-slide hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );

  const nextProject = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-wide">
            <span className="text-yellow-400">Architectural</span>
            <br />
            Design
          </h1>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <ChevronRight size={48} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Architectural Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Architectural <span className="text-yellow-500">Services</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide complete architectural services to make your project
                remarkable.
              </p>

              {showFullDescription && (
                <div className="text-gray-600 leading-relaxed mb-6">
                  <p className="mb-4">
                    At Arch Point, a leading architectural firm, we specialize
                    in creating thoughtfully designed spaces that harmonize
                    aesthetics and functionality. Our design philosophy blends
                    artistic expression with architectural precision—balancing
                    light, material, and form to craft timeless environments
                    that elevate everyday living and reflect the unique vision
                    of each client.
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold"
              >
                {showFullDescription ? "Read Less" : "Read More"}
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>

            {/* Right Column - Contact Form */}
             <Contact />
          </div>
        </div>
      </section>

      {/* Our USP Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our <span className="text-yellow-500">USP</span>
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Quantum Architecture
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Quantum Architecture focuses on the relationship of visual
                energy with built form. We believe architecture is not just
                about creating spaces, but about crafting experiences that
                resonate with human emotions and environmental harmony.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                alt="Modern Architecture"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-yellow-500" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our <span className="text-yellow-200">Milestones</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const numberParts = splitNumber(milestone.number);

              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {numberParts ? (
                      <>
                        {inView ? (
                          <CountUp end={numberParts.value} duration={2} />
                        ) : (
                          "0"
                        )}
                        {numberParts.suffix}
                      </>
                    ) : (
                      milestone.number
                    )}
                  </h3>
                  <p className="text-yellow-200 font-semibold">
                    {milestone.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>

          {/* Main Project Image */}
          <div className="relative mb-8">
            <img
              src={projects[currentProject].mainImage}
              alt={projects[currentProject].name}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                {projects[currentProject].name}
              </h3>
            </div>

            {/* Project Navigation */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects[currentProject].thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`${projects[currentProject].name} ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
    </div>
  );
};

export default ArchitecturalDesign;
