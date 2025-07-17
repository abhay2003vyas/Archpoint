import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample testimonials - replace with actual client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "General Manager",
      company: "Grand Plaza Hotel",
      rating: 5,
      text: "ArchPoint has transformed our guest experience completely. Their attention to detail and commitment to excellence is unmatched. Our guest satisfaction scores have increased by 40% since partnering with them.",
      image: "SJ",
      color: "bg-blue-500",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Luxury Suites International",
      rating: 5,
      text: "The level of professionalism and service quality we've received from ArchPoint is extraordinary. They understand the hospitality industry like no other service provider we've worked with.",
      image: "MC",
      color: "bg-purple-500",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Hotel Owner",
      company: "Boutique Hotels Group",
      rating: 5,
      text: "Working with ArchPoint has been a game-changer for our properties. Their innovative solutions and dedicated support team have helped us achieve operational excellence across all our locations.",
      image: "ER",
      color: "bg-rose-500",
      location: "Miami, FL"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "VP of Operations",
      company: "Resort Collection",
      rating: 5,
      text: "ArchPoint's expertise in hotel services is evident in every interaction. They've helped us streamline operations while maintaining the highest standards of guest service. Truly exceptional partners.",
      image: "DT",
      color: "bg-emerald-500",
      location: "Las Vegas, NV"
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Regional Manager",
      company: "Premium Hospitality",
      rating: 5,
      text: "The results speak for themselves - increased efficiency, reduced costs, and happier guests. ArchPoint's team goes above and beyond to ensure our success. I couldn't recommend them more highly.",
      image: "LP",
      color: "bg-amber-500",
      location: "Chicago, IL"
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
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, currentTestimonial]);

  const current = testimonials[currentTestimonial];

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about their experience with ArchPoint.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Testimonial Card */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "{current.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                <div className={`w-16 h-16 ${current.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {current.image}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-white">{current.name}</h4>
                  <p className="text-blue-200">{current.position}</p>
                  <p className="text-blue-300 font-semibold">{current.company}</p>
                  <p className="text-blue-400 text-sm">{current.location}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className={`flex justify-center space-x-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`relative group transition-all duration-300 ${
                index === currentTestimonial ? 'scale-110' : 'scale-90 opacity-50'
              }`}
            >
              <div className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg border-4 ${
                index === currentTestimonial ? 'border-white' : 'border-transparent'
              } group-hover:border-white/50 transition-all duration-300`}>
                {testimonial.image}
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm whitespace-nowrap">
                  {testimonial.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress Dots */}
        <div className={`flex justify-center space-x-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-left">
              <div className="flex space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-200 text-sm">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;