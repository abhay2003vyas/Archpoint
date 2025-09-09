import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real client testimonials from Arch Point Consultants
  const testimonials = [
    {
      id: 1,
      name: "Parth Saini",
      position: "Home Owner",
      company: "Residential Project",
      rating: 5,
      text: "One of the best architects in Jaipur! Excellent services, professional approach, and very friendly nature. The house plan and commercials were explained in detail, which made everything clear and smooth. Recently got my home completed in Mansarovar, and I'm truly grateful to Arch Point Consultants and Amit Ji for their wonderful work.",
      image: "PS",
      color: "bg-gradient-to-r from-yellow-500 to-amber-600",
      location: "Mansarovar, Jaipur",
      category: "Residential"
    },
    {
      id: 2,
      name: "SP Bharill",
      position: "Hospital Administrator",
      company: "Amar Jain Hospital",
      rating: 5,
      text: "Arch Point Consultants has done an excellent job in completing the Amar Jain Hospital project with architectural, interior, and PMC services, ensuring everything was delivered with precision and professionalism. They have also beautifully managed the interiors of our residence, giving it a modern yet comfortable touch. A reliable team that blends creativity with commitment.",
      image: "SB",
      color: "bg-gradient-to-r from-amber-500 to-yellow-600",
      location: "Jaipur",
      category: "Commercial & Residential"
    },
    {
      id: 3,
      name: "Riddhi Kapoor",
      position: "Client",
      company: "Design Consultation",
      rating: 5,
      text: "The team at Arch Point Consultants was an absolute delight to work with! 🌟 Their professionalism, creativity, and collaborative approach made the entire experience seamless. I especially loved the soothing and positive environment they create, which truly reflects in their work.",
      image: "RK",
      color: "bg-gradient-to-r from-yellow-600 to-orange-500",
      location: "Jaipur",
      category: "Consultation"
    },
    {
      id: 4,
      name: "Gopal Sharma",
      position: "Flat Owner",
      company: "Seven Heaven Flats",
      rating: 5,
      text: "A big thank you to Arch Point Consultants for completing the interiors of our Seven Heaven flat at Gandhi Path, Mansarovar so beautifully. The design, finishing, and attention to detail have truly exceeded our expectations. The team has done an amazing job, and we appreciate their hard work and creativity.",
      image: "GS",
      color: "bg-gradient-to-r from-amber-400 to-yellow-500",
      location: "Gandhi Path, Mansarovar",
      category: "Interior Design"
    },
    {
      id: 5,
      name: "Anurag Aman",
      position: "Client",
      company: "Residence Interior",
      rating: 5,
      text: "Arch Point Consultants is really an amazing choice for your dream construction, they have hardworking team which delivers their work on time and have aesthetic sense to design your building. I hired them for my relative's residence interior it was really amazing experience.",
      image: "AA",
      color: "bg-gradient-to-r from-yellow-500 to-amber-500",
      location: "Jaipur",
      category: "Interior Design"
    },
    {
      id: 6,
      name: "Vivek Kalra",
      position: "Home Owner",
      company: "Residential Design",
      rating: 5,
      text: "Getting our residence designed and executed by Arch Point Consultants has been a very satisfying experience. Right from the first discussion till the final handover, the team was approachable and clear in their process. They guided us at every stage, balanced creativity with practicality, and ensured the work moved smoothly without unnecessary stress.",
      image: "VK",
      color: "bg-gradient-to-r from-amber-600 to-orange-500",
      location: "Jaipur",
      category: "Residential"
    },
    {
      id: 7,
      name: "Hetansh Sheth",
      position: "Client",
      company: "Design Consultation",
      rating: 5,
      text: "Professional approach and creative solutions, listens to the client's demands and gives an appropriate design. I highly recommend this consultancy for your design needs.",
      image: "HS",
      color: "bg-gradient-to-r from-yellow-400 to-amber-400",
      location: "Jaipur",
      category: "Consultation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextTestimonial, 6000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, currentTestimonial]);

  const current = testimonials[currentTestimonial];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-yellow-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-200 to-amber-200"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200 mb-6">
            <span className="text-yellow-700 font-semibold text-sm uppercase tracking-wide">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            What Our <span className="text-yellow-600">Valued Clients</span> Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real clients who trusted Arch Point Consultants with their architectural dreams in Jaipur and beyond.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`relative mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-yellow-200/50 hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute -top-3 right-8">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                {current.category}
              </span>
            </div>

            {/* Testimonial Content */}
            <div className="text-center pt-4">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current mx-0.5" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-8 max-w-4xl mx-auto">
                "{current.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className={`w-14 h-14 ${current.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {current.image}
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-slate-800">{current.name}</h4>
                  <p className="text-slate-600 text-sm">{current.position}</p>
                  <p className="text-yellow-700 font-medium text-sm">{current.company}</p>
                  <p className="text-slate-500 text-xs flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-300 shadow-md border border-yellow-200/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-300 shadow-md border border-yellow-200/50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className={`flex justify-center space-x-2 mb-8 overflow-x-auto pb-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`relative group transition-all duration-300 flex-shrink-0 ${
                index === currentTestimonial ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-80'
              }`}
            >
              <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md border-3 ${
                index === currentTestimonial ? 'border-yellow-400' : 'border-transparent'
              } group-hover:border-yellow-300 transition-all duration-300`}>
                {testimonial.image}
              </div>
              <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-slate-800 rounded-lg px-2 py-1 text-white text-xs whitespace-nowrap">
                  {testimonial.name}
                  <div className="text-yellow-300 text-xs">{testimonial.category}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress Dots */}
        <div className={`flex justify-center space-x-2 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-slate-300 hover:bg-yellow-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center bg-white rounded-xl px-6 py-4 shadow-lg border border-yellow-200/50">
            <div className="text-2xl font-bold text-slate-800">5/5</div>
            <div className="flex justify-center space-x-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 text-sm">Perfect Rating</p>
            <p className="text-slate-500 text-xs">From all clients</p>
          </div>
          
          <div className="text-center bg-white rounded-xl px-6 py-4 shadow-lg border border-yellow-200/50">
            <div className="text-2xl font-bold text-slate-800">100+</div>
            <div className="text-yellow-600 font-semibold text-sm">Projects Completed</div>
            <p className="text-slate-500 text-xs">Residential & Commercial</p>
          </div>
          
          <div className="text-center bg-white rounded-xl px-6 py-4 shadow-lg border border-yellow-200/50">
            <div className="text-2xl font-bold text-slate-800">18+</div>
            <div className="text-yellow-600 font-semibold text-sm">Years Experience</div>
            <p className="text-slate-500 text-xs">In Jaipur & Beyond</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;