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
  Home,
  Award,
  MapPin,
  Heart,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ResidentialDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  // Hero carousel images - Residential focused
  const heroImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop", // Modern residential
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop", // Luxury home exterior
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=800&fit=crop", // Contemporary residence
  ];

  // Project data with residential images
  const projects = [
    {
      name: "Hemant Ji Residence",
      mainImage: "/images/ResidentialDesign/HemantJiResidence/1.jpg",
      thumbnails: [
        "/images/ResidentialDesign/HemantJiResidence/1.jpg",
        "/images/ResidentialDesign/HemantJiResidence/2.jpg",
        "/images/ResidentialDesign/HemantJiResidence/3.jpg",
        "/images/ResidentialDesign/HemantJiResidence/4.jpg",
        "/images/ResidentialDesign/HemantJiResidence/5.jpg",
        "/images/ResidentialDesign/HemantJiResidence/6.jpg",
        "/images/ResidentialDesign/HemantJiResidence/7.jpg",
        "/images/ResidentialDesign/HemantJiResidence/8.jpg",
      ],
    },

    {
      name: "Bharil Ji Residence",
      mainImage: "/images/ResidentialDesign/BharilJiResidence/1.jpg",
      thumbnails: [
        "/images/ResidentialDesign/BharilJiResidence/1.jpg",
        "/images/ResidentialDesign/BharilJiResidence/2.jpg",
        "/images/ResidentialDesign/BharilJiResidence/3.jpg",
        "/images/ResidentialDesign/BharilJiResidence/4.jpg",
        "/images/ResidentialDesign/BharilJiResidence/5.jpg",
        "/images/ResidentialDesign/BharilJiResidence/6.jpg",
        "/images/ResidentialDesign/BharilJiResidence/7.jpg",
        "/images/ResidentialDesign/BharilJiResidence/8.jpg",
        "/images/ResidentialDesign/BharilJiResidence/9.jpg",
        "/images/ResidentialDesign/BharilJiResidence/10.jpg",
      ],
    },

    {
      name: "Kapil Ji Out House",
      mainImage: "/images/ResidentialDesign/KapilJiOutHouse/1.jpg",
      thumbnails: [
        "/images/ResidentialDesign/KapilJiOutHouse/1.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/2.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/3.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/4.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/5.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/6.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/7.jpg",
        "/images/ResidentialDesign/KapilJiOutHouse/8.jpg",
      ],
    },
    {
      name: "Himanshu Ji",
      mainImage: "/images/ResidentialDesign/HimanshuJi/1.jpg",
      thumbnails: [
        "/images/ResidentialDesign/HimanshuJi/1.jpg",
        "/images/ResidentialDesign/HimanshuJi/2.jpg",
        "/images/ResidentialDesign/HimanshuJi/3.jpg",
        "/images/ResidentialDesign/HimanshuJi/4.jpg",
        "/images/ResidentialDesign/HimanshuJi/5.jpg",
        "/images/ResidentialDesign/HimanshuJi/6.jpg",
        "/images/ResidentialDesign/HimanshuJi/7.jpg",
        "/images/ResidentialDesign/HimanshuJi/8.jpg",
      ],
    },
    {
      name: "Pankaj Ji",
      mainImage: "/images/ResidentialDesign/PankajJi/1.jpg",
      thumbnails: [
        "/images/ResidentialDesign/PankajJi/1.jpg",
        "/images/ResidentialDesign/PankajJi/2.jpg",
        "/images/ResidentialDesign/PankajJi/3.jpg",
        "/images/ResidentialDesign/PankajJi/4.jpg",
        "/images/ResidentialDesign/PankajJi/5.jpg",
        "/images/ResidentialDesign/PankajJi/6.jpg",
        "/images/ResidentialDesign/PankajJi/7.jpg",
        "/images/ResidentialDesign/PankajJi/8.jpg",
      ],
    },
    {
      name: "Kuldeep Ji Residence",
      mainImage: "/images/ResidentialDesign/KuldeepJiResidence/3.jpg",
      thumbnails: [
        "/images/ResidentialDesign/KuldeepJiResidence/1.jpg",
        "/images/ResidentialDesign/KuldeepJiResidence/2.jpg",
        "/images/ResidentialDesign/KuldeepJiResidence/3.jpg",
        "/images/ResidentialDesign/KuldeepJiResidence/4.jpg",
        "/images/ResidentialDesign/KuldeepJiResidence/5.jpg",
      ],
    },
  ];

  // Arch Point Advantages (from website reference)
  const advantages = [
    { icon: Building, number: "300+", label: "Projects" },
    { icon: MapPin, number: "10+", label: "Cities" },
    { icon: Users, number: "50+", label: "Team" },
    { icon: Award, number: "ISO", label: "Certified" },
    { icon: Globe, number: "Govt.", label: "Recognised" },
    { icon: Heart, number: "Quantum", label: "Architecture" },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Split number into numeric part and suffix
  const splitNumber = (numStr) => {
    const match = numStr.match(/^(\d+)(.*)$/);
    return match ? { value: parseInt(match[1]), suffix: match[2] } : null;
  };
  // Residential Design Services
  const designServices = [
    {
      icon: Home,
      title: "Dream Home Planning",
      description:
        "Complete architectural planning to bring your dream home to life",
    },
    {
      icon: Building,
      title: "3D Visualization",
      description:
        "Realistic 3D renders to help you visualize your future home",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality design standards ensuring lasting beauty",
    },
    {
      icon: Heart,
      title: "Personalized Design",
      description: "Every design reflects your personality and lifestyle needs",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      quote:
        "Arch Point made our dream home a reality. The design perfectly captured our vision and the execution was flawless.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Villa Owner",
      quote:
        "Outstanding residential design! Every detail was thoughtfully planned and beautifully executed. Highly recommended.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Family Home Owner",
      quote:
        "The team understood our family needs perfectly. Our new home is everything we dreamed of and more.",
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
                alt={`Residential Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-wide">
            <span className="text-yellow-400">Residential</span>
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

      {/* Residential Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Residential <span className="text-yellow-500">Services</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We design the best home architecture plan for you to live your
                dreams.
              </p>

              {showFullDescription && (
                <div className="text-gray-600 leading-relaxed mb-6">
                  <p className="mb-4">
                    Having a beautiful home or residence is one of the most
                    important dreams of everyone. Everyone in this world wishes
                    for a perfect residence with everything precisely designed
                    and decorated. And therefore Arch Point design the best home
                    architecture plan for you to live your dreams.
                  </p>
                  <p className="mb-4">
                    Our residential design approach combines functionality with
                    aesthetic appeal, creating spaces that not only look
                    beautiful but also enhance your daily living experience.
                    Every project is unique, reflecting the personality and
                    lifestyle of its inhabitants.
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

      {/* Design Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-yellow-500">Design Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our USP Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our <span className="text-yellow-500">USP</span>
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                Dream Home Realization
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in turning your dream home vision into reality
                through innovative design solutions and quantum architecture
                principles. Every residence we design is a perfect blend of
                functionality, aesthetics, and personal expression, ensuring
                your home truly reflects who you are.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
                alt="Dream Home Design"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Arch Point Advantages Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-yellow-500" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Arch Point <span className="text-yellow-200">Advantages</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              const numberParts = splitNumber(advantage.number);

              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
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
                      advantage.number
                    )}
                  </h3>
                  <p className="text-yellow-200 font-semibold text-sm">
                    {advantage.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-yellow-200 text-lg italic">
              Thanks to all visionaries for believing in Arch Point
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Residential <span className="text-yellow-500">Projects</span>
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
            What Our <span className="text-yellow-500">Customers Says</span>
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

export default ResidentialDesign;
