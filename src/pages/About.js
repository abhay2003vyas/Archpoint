import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import Inquiry from "../components/inquiry";
import {
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Users,
  FileText,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Award,
  Building,
  Target,
  Heart,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bgImage from "../assets/p1.jpg"; // Use your image path here
import d1 from "../assets/director1.png";
import d2 from "../assets/director2.png";

const PMCLandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const testimonials = [
    {
      text: "Having a beautiful home or residence is one of the most important dreams of everyone. Everyone in this world wishes for a perfect residence with everything precisely designed and decorated. Arch Point designed the best home architecture plan for us to live our dreams.",
      author: "Satisfied Client",
      company: "Residential Project",
      rating: 5,
    },
    {
      text: "We thoroughly know the demand of time in the field of architecture, and Arch Point's team delivers exactly what we envisioned while dealing with social, economic, geographic and cultural constraints to assure the finest results.",
      author: "Commercial Client",
      company: "Commercial Development",
      rating: 5,
    },
    {
      text: "Their main focus before starting any project was to do deep research in relevance with our amenities. Design is indeed a process, and Arch Point proved it cannot be done 'In the Flick of an Eye'.",
      author: "Institutional Client",
      company: "Educational Facility",
      rating: 5,
    },
  ];

  const processSteps = [
    {
      title: "Research & Analysis",
      description: "Deep research about client needs and site conditions",
    },
    {
      title: "Conceptual Design",
      description: "Innovative ideas with scientific and artistic approach",
    },
    {
      title: "Design Development",
      description:
        "Detailed planning with social, economic, and cultural considerations",
    },
    {
      title: "Project Execution",
      description: "High quality design and vastu solutions implementation",
    },
    {
      title: "Client Satisfaction",
      description:
        "Proper presentation so you can visualize your dream in reality",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: "Accuracy is our Goal",
      description: "Precise planning and execution for every project milestone",
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Design is our Love",
      description: "Passionate approach to architectural excellence",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Quality Assurance",
      description:
        "High quality design solutions across different project magnitudes",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Expert Team",
      description: "Professionals with marvelous experience in architecture",
    },
    {
      icon: <Building className="w-8 h-8 text-yellow-500" />,
      title: "Quantum Architecture",
      description:
        "Specialized in quantum architecture - your vibes matter to us",
    },
  ];

  const coreValues = [
    { letter: "A", value: "Authentic" },
    { letter: "R", value: "Responsible" },
    { letter: "C", value: "Confident" },
    { letter: "H", value: "Honest" },
    { letter: "P", value: "Passionate" },
    { letter: "O", value: "Optimistic" },
    { letter: "I", value: "Impressive" },
    { letter: "N", value: "Noble" },
    { letter: "T", value: "Trustworthy" },
  ];

  const stats = [
    {
      number: 300,
      suffix: "+",
      label: "Projects",
      subtitle: "Thanks to all visionaries for believing in Arch Point",
    },
    {
      number: 10,
      suffix: "+",
      label: "Cities",
      subtitle: "We believe in growing together",
    },
    {
      number: 50,
      suffix: "+",
      label: "Team Members",
      subtitle:
        "Dedicated and integrated team which believes design is our love",
    },
    {
      number: null,
      label: "ISO",
      subtitle: "Recognised for our commitment",
    },
    {
      number: null,
      label: "Govt.",
      subtitle: "Recognised as startup by Government of India",
    },
  ];

  const services = [
    "Residential Projects",
    "Commercial Developments",
    "Health Clubs & Spas",
    "Pharmaceutical Facilities",
    "Exhibition Spaces",
    "Hospitality Projects",
    "Institutional Buildings",
    "Master Planning",
    "Architectural Design",
    "Landscape Design",
    "Interior Design",
    "Lighting Design",
    "Furniture Design",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 

  const directors = [
    {
      id: 1,
      name: "Ar. Amit Khandelwal",
      title: "Principal Architect & Founder",
      image: d1,
      description:
        "Dynamic professional with expertise in sustainable design and commercial architecture from Aayojan School of Architecture.",
      expertise: [
        "Sustainable Design",
        "Urban Planning",
        "Commercial Architecture",
      ],
      experience: "17+ Years",
      projects: "200+",
    },
    {
      id: 2,
      name: "Ar. Poonam Jain",
      title: "Co-Founder & Design Director",
      image: d2,
      description:
        "Specialized in interior design and residential projects with a keen eye for space planning and aesthetic excellence.",
      expertise: ["Interior Design", "Residential Projects", "Space Planning"],
      experience: "17+ Years",
      projects: "150+",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust if needed
  });
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <span className="text-yellow-400"> ArchPoint</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            Having a beautiful home or residence is one of the most important
            dreams of everyone.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Arch Point designs the best architecture plans for you to live your
            dreams with everything precisely designed and decorated.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center group"
          >
            Start Your Dream Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-yellow-600 font-semibold mb-4 italic">
                "Your dream is our Mission, Accuracy is our Goal, Perfection is
                our Attitude, Achievement is our Habit, and Design is our
                Love..!!"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Arch Point Consultants Pvt. Ltd.
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Arch Point Consultants Pvt. Ltd. is a prominent architectural
                company which is best known for its consultancy service in the
                vast field of architecture and interior designing. We have a
                team of professionals having a marvelous experience in their
                particular fields of architecture.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are delivering high quality design and vastu solutions to the
                projects of different magnitude across the country. We
                understand the need and want of our client and offer our
                innovative ideas, helping the client in all aspects.
              </p>
              <p className="text-lg text-gray-600">
                We thoroughly know the demand of time in the field of
                architecture, so while designing and accomplishing, we not only
                deal with science and art but also with social, economic,
                geographic and cultural constraints to assure the finest
                results.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-center transform rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    About Archpoint
                  </div>
                  <div className="text-gray-600 mb-2">
                    Comprehensive solutions in
                  </div>
                  <div className="text-gray-900 font-semibold text-lg">
                    Architecture & Interior Design
                  </div>
                  <div className="mt-4 text-yellow-600 font-medium">
                    From Concept to Completion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The ARCHPOINT way of excellence
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {coreValues.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-yellow-600 transition-colors">
                  {item.letter}
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Arch Point
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence in every project
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="bg-yellow-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive architectural and design solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-yellow-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              "Design is a Process, and cannot be done 'In the Flick of an Eye'"
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-yellow-200 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-4 border-yellow-400 relative z-10">
                    <span className="text-xl font-bold text-yellow-600">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Arch Point Advantages */}
      <section className="py-20 bg-yellow-500" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Arch Point Advantages
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-black">
                <div className="text-4xl font-bold mb-2">
                  {stat.number !== null ? (
                    <>
                      {inView ? (
                        <CountUp end={stat.number} duration={2} />
                      ) : (
                        "0"
                      )}
                      {stat.suffix}
                    </>
                  ) : (
                    stat.label
                  )}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {stat.number !== null ? stat.label : ""}
                </div>
                <div className="text-sm opacity-90">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            What Our Customers Say
          </h2>
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex justify-center mb-4">
                {Array.from({
                  length: testimonials[activeTestimonial].rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-xl text-gray-600 mb-6 italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Our Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comprehensive Design Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We know "Design Is a Process, and cannot be done 'In the Flick
                of an Eye'". So our main focus is, before starting any project,
                we ask ourselves to do as deep research as we can do in the
                relevance with the client and his/her amenities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Arch Point has successfully executed several prestigious real
                estate projects, including residential, commercial, health
                clubs, spas and salons, pharmaceutical, exhibition spaces,
                hospitality, institutional and other high integrated projects.
              </p>
              <p className="text-lg text-gray-600">
                We also offer design services for the built environment,
                encompassing master planning, architectural, landscape,
                interior, lighting and furniture design.
              </p>
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Our Commitment
                </h4>
                <p className="text-gray-600 mb-6">
                  "Our aim is the satisfaction of our clients, to achieve this
                  our team work hard for the proper presentation of their
                  thoughts regarding the design, so that you can visualize your
                  dream building in reality."
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-medium text-center">
                    Specializing in Quantum Architecture - Your vibes matter to
                    us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Our Directors
            </h2>
            <div className="w-12 h-0.5 bg-yellow-500 mx-auto"></div>
          </div>

          {/* Directors Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {directors.map((director) => (
              <div
                key={director.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3]">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-contain object-top rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {director.name}
                  </h3>
                  <p className="text-yellow-600 font-medium text-sm mb-2">
                    {director.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Experience:</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {director.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <Inquiry />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PMCLandingPage;
