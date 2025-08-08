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
      color: "bg-gradient-to-r from-yellow-500 to-amber-600",
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
      color: "bg-gradient-to-r from-amber-500 to-yellow-600",
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
      color: "bg-gradient-to-r from-yellow-600 to-orange-500",
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
      color: "bg-gradient-to-r from-amber-400 to-yellow-500",
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
      color: "bg-gradient-to-r from-yellow-500 to-amber-500",
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
            Discover why industry leaders trust ArchPoint to deliver exceptional hospitality solutions and drive measurable results.
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
                  <p className="text-slate-500 text-xs">{current.location}</p>
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
        <div className={`flex justify-center space-x-3 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`relative group transition-all duration-300 ${
                index === currentTestimonial ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-80'
              }`}
            >
              <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md border-3 ${
                index === currentTestimonial ? 'border-yellow-400' : 'border-transparent'
              } group-hover:border-yellow-300 transition-all duration-300`}>
                {testimonial.image}
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-slate-800 rounded-lg px-2 py-1 text-white text-xs whitespace-nowrap">
                  {testimonial.name}
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

        {/* Trust Badge */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl px-8 py-4 shadow-lg border border-yellow-200/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">4.9/5</div>
              <div className="flex space-x-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-left border-l border-slate-200 pl-4">
              <p className="text-slate-700 font-medium text-sm">Excellent Rating</p>
              <p className="text-slate-500 text-xs">Based on 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;