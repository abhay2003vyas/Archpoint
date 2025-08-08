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
  Clock,
  Target,
  Shield,
  CheckCircle,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ProjectManagementConsultancy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Hero carousel images - PMC focused
  const heroImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop", // Construction management
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop", // Project planning
    "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&h=800&fit=crop", // Team coordination
  ];

  // Project data with images
  const projects = [
    {
      name: "Baxi's Residence",
      mainImage: "/images/pmc/BaxisResidence/1.jpg",
      thumbnails: [
        "/images/pmc/BaxisResidence/1.jpg",
        "/images/pmc/BaxisResidence/2.jpg",
        "/images/pmc/BaxisResidence/3.jpg",
        "/images/pmc/BaxisResidence/4.jpg",
        "/images/pmc/BaxisResidence/5.jpg",
        "/images/pmc/BaxisResidence/6.jpg",
        "/images/pmc/BaxisResidence/7.jpg",
        "/images/pmc/BaxisResidence/8.jpg",
        "/images/pmc/BaxisResidence/9.jpg",
        "/images/pmc/BaxisResidence/10.jpg",
      ],
    },
    {
      name: "Pranav Ji Residence",
      mainImage: "/images/pmc/PranavJiResidence/1.jpg",
      thumbnails: [
        "/images/pmc/PranavJiResidence/1.jpg",
        "/images/pmc/PranavJiResidence/2.jpg",
        "/images/pmc/PranavJiResidence/3.jpg",
        "/images/pmc/PranavJiResidence/4.jpg",
        "/images/pmc/PranavJiResidence/5.jpg",
        "/images/pmc/PranavJiResidence/6.jpg",
        "/images/pmc/PranavJiResidence/7.jpg",
        "/images/pmc/PranavJiResidence/8.jpg",
      ],
    },
    {
      name: "Kailash Ji Residence",
      mainImage: "/images/pmc/KailashJiResidence/1.jpg",
      thumbnails: [
        "/images/pmc/KailashJiResidence/1.jpg",
        "/images/pmc/KailashJiResidence/2.jpg",
        "/images/pmc/KailashJiResidence/3.jpg",
        "/images/pmc/KailashJiResidence/4.jpg",
        "/images/pmc/KailashJiResidence/5.jpg",
        "/images/pmc/KailashJiResidence/6.jpg",
        "/images/pmc/KailashJiResidence/7.jpg",
        "/images/pmc/KailashJiResidence/8.jpg",
        "/images/pmc/KailashJiResidence/9.jpg",
      ],
    }
  ];

  // Milestones
  const milestones = [
    { icon: Building, number: "200+", label: "Projects Managed" },
    { icon: User, number: "20 Yr", label: "Experience" },
    { icon: Clock, number: "98%", label: "On-Time Delivery" },
    { icon: Target, number: "100%", label: "Client Satisfaction" },
  ];
const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Helper: Extract numeric part & suffix
  const splitNumber = (numStr) => {
    const match = numStr.match(/^(\d+)(.*)$/);
    return match ? { value: parseInt(match[1]), suffix: match[2] } : { value: 0, suffix: "" };
  };
  // PMC Services
  const pmcServices = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage of construction",
    },
    {
      icon: Clock,
      title: "Timeline Management",
      description: "Ensuring projects are delivered on schedule",
    },
    {
      icon: Target,
      title: "Budget Control",
      description: "Cost optimization without compromising quality",
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensuring all regulatory and safety standards are met",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Baxi Family",
      role: "Homeowner",
      quote:
        "Arch Point PMC team managed our residence project flawlessly. Every detail was monitored and delivered exactly as promised.",
      rating: 5,
    },
    {
      name: "Pranav Sharma",
      role: "Property Owner",
      quote:
        "The project management was exceptional. They kept us informed at every step and delivered on time within budget.",
      rating: 5,
    },
    {
      name: "Resort Management",
      role: "Client",
      quote:
        "Professional project management that exceeded expectations. Their systematic approach ensured zero delays.",
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
                alt={`PMC Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center tracking-wide">
            <span className="text-yellow-400">Project Management</span>
            <br />
            <span className="text-3xl md:text-5xl">Consultancy</span>
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

      {/* PMC Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Project Management{" "}
                <span className="text-yellow-500">Consultancy</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive PMC services to ensure seamless project
                execution.
              </p>

              {showFullDescription && (
                <div className="text-gray-600 leading-relaxed mb-6">
                  <p className="mb-4">
                    At Arch Point, our Project Management Consultancy (PMC)
                    services are designed to ensure the seamless execution of
                    architectural and interior projects—from concept to
                    completion. We act as a single point of contact,
                    representing our clients' interests at every stage to
                    deliver projects on time, within budget, and to the highest
                    quality standards.
                  </p>
                  <p className="mb-4">
                    Our experienced PMC team brings systematic planning,
                    rigorous quality control, and professional oversight to
                    every project, ensuring successful outcomes that exceed
                    client expectations.
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

      {/* PMC Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-yellow-500">PMC Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pmcServices.map((service, index) => {
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
                Single Point of Contact
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We act as your dedicated single point of contact throughout the
                entire project lifecycle. Our comprehensive PMC approach ensures
                seamless coordination between all stakeholders, maintaining
                quality standards while delivering projects on time and within
                budget.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Project Management"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {milestones.map((item, index) => {
            const { value, suffix } = splitNumber(item.number);
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                <div className="text-3xl font-bold text-black mb-2">
                  {inView ? <CountUp end={value} duration={2} /> : "0"}
                  {suffix}
                </div>
                <div className="text-lg font-semibold text-gray-700">{item.label}</div>
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
            Delivering excellence through comprehensive project management
            consultancy services.
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

export default ProjectManagementConsultancy;
