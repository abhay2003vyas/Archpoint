import React, { useState, useEffect } from "react";
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
const InteriorDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Hero carousel images - Interior focused
  const heroImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop", // Modern living room
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=800&fit=crop", // Luxury bedroom
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=800&fit=crop", // Modern kitchen
  ];

  // Project data with images matching your requirements
  const projects = [
    {
      name: "Air BNB",
      mainImage: "/images/InteriorDesign/AirBNB/1.jpg",
      thumbnails: [
        "/images/InteriorDesign/AirBNB/1.jpg",
        "/images/InteriorDesign/AirBNB/2.jpg",
        "/images/InteriorDesign/AirBNB/3.jpg",
        "/images/InteriorDesign/AirBNB/4.jpg",
        "/images/InteriorDesign/AirBNB/5.jpg",
        "/images/InteriorDesign/AirBNB/6.jpg",
        "/images/InteriorDesign/AirBNB/7.jpg",
        "/images/InteriorDesign/AirBNB/8.jpg",
        "/images/InteriorDesign/AirBNB/9.jpg",
        "/images/InteriorDesign/AirBNB/10.jpg",
        "/images/InteriorDesign/AirBNB/11.jpg",
        "/images/InteriorDesign/AirBNB/12.jpg",
      ],
    },
    {
      name: "SP Bharil Ji Flat",
      mainImage: "/images/InteriorDesign/SPBharilJiFlat/1.jpg",
      thumbnails: [
        "/images/InteriorDesign/SPBharilJiFlat/1.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/2.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/3.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/4.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/5.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/6.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/7.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/8.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/9.jpg",
        "/images/InteriorDesign/SPBharilJiFlat/10.jpg",
      ],
    },
    {
      name: "Bhagwati Ji",
      mainImage: "/images/InteriorDesign/BhagwatiJi/3.jpg",
      thumbnails: [
        "/images/InteriorDesign/BhagwatiJi/1.jpg",
        "/images/InteriorDesign/BhagwatiJi/2.jpg",
        "/images/InteriorDesign/BhagwatiJi/3.jpg",
        "/images/InteriorDesign/BhagwatiJi/4.jpg",
        "/images/InteriorDesign/BhagwatiJi/5.jpg",
        "/images/InteriorDesign/BhagwatiJi/6.jpg",
        "/images/InteriorDesign/BhagwatiJi/7.jpg",
      ],
    },
    {
      name: "Gaurav Ji",
      mainImage: "/images/InteriorDesign/GauravJi/1.jpg",
      thumbnails: [
        "/images/InteriorDesign/GauravJi/1.jpg",
        "/images/InteriorDesign/GauravJi/2.jpg",
        "/images/InteriorDesign/GauravJi/3.jpg",
        "/images/InteriorDesign/GauravJi/4.jpg",
        "/images/InteriorDesign/GauravJi/5.jpg",
        "/images/InteriorDesign/GauravJi/6.jpg",
        "/images/InteriorDesign/GauravJi/7.jpg",
        "/images/InteriorDesign/GauravJi/8.jpg",
      ],
    },
    {
      name: "Vivek Kalra Ji Residence",
      mainImage: "/images/InteriorDesign/VivekKalraJiResidence/4.jpg",
      thumbnails: [
        "/images/InteriorDesign/VivekKalraJiResidence/1.jpg",
        "/images/InteriorDesign/VivekKalraJiResidence/2.jpg",
        "/images/InteriorDesign/VivekKalraJiResidence/3.jpg",
        "/images/InteriorDesign/VivekKalraJiResidence/4.jpg",
        "/images/InteriorDesign/VivekKalraJiResidence/5.jpg",
      ],
    },
  ];
const milestones = [
  { icon: Building, number: "500+", label: "Interiors" },
  { icon: User, number: "20 Yr", label: "Experience" },
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Globe, number: "Premium", label: "Quality" },
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
      name: "Bhagwati Sharma",
      role: "Homeowner",
      quote:
        "Arch Point transformed our home into a masterpiece. Every corner reflects our personality while maintaining functionality.",
      rating: 5,
    },
    {
      name: "Gaurav Sharma",
      role: "Apartment Owner",
      quote:
        "The interior design exceeded our expectations. The team understood our vision perfectly and delivered beyond imagination.",
      rating: 5,
    },
    {
      name: "Vivek Kalra",
      role: "Residence Owner",
      quote:
        "Outstanding work! The attention to detail and creative solutions made our dream home a reality.",
      rating: 5,
    }
  ];

  // Auto-slide hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.contact.trim()) errors.contact = "Contact number is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", contact: "", email: "" });
    }
  };

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
                alt={`Interior Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-wide">
            <span className="text-yellow-400">Interior</span>
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

      {/* Interior Design Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Interior Design{" "}
                <span className="text-yellow-500">Services</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide complete interior design services to make your space
                remarkable.
              </p>

              {showFullDescription && (
                <div className="text-gray-600 leading-relaxed mb-6">
                  <p className="mb-4">
                    At Arch Point, we bring together deep expertise and a
                    passion for creativity to deliver innovative interior design
                    solutions tailored to each client's lifestyle. Our team of
                    best-in-class designers works closely with you to understand
                    your vision, preferences, and functional needs—transforming
                    ideas into inspiring, livable spaces.
                  </p>
                  <p className="mb-4">
                    From concept to completion, we ensure every detail reflects
                    your unique style, turning your dream home into a
                    beautifully designed reality.
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
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Us
              </h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.contact ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.contact}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
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
                Lifestyle-Centered Design
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our interior design philosophy centers on understanding your
                lifestyle and creating spaces that not only look beautiful but
                enhance your daily living experience. We blend aesthetics with
                functionality, ensuring every element serves a purpose while
                reflecting your personal style.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                alt="Modern Interior Design"
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
                  {numberParts
                    ? (
                      <>
                        {inView ? <CountUp end={numberParts.value} duration={2} /> : "0"}
                        {numberParts.suffix}
                      </>
                    )
                    : milestone.number}
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
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-yellow-500">Arch</span> Point
          </h3>
          <p className="text-gray-400 mb-8">
            Creating interior design excellence through innovative solutions and
            lifestyle-centered design.
          </p>
          <div className="flex justify-center space-x-6">
            <Phone className="text-yellow-500" size={24} />
            <Mail className="text-yellow-500" size={24} />
            <Globe className="text-yellow-500" size={24} />
          </div>
          <p className="text-gray-500 mt-8">
            &copy; 2025 Arch Point. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InteriorDesign;
