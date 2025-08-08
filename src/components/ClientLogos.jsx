import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const clients = [
    { name: "Royal Orchid", logo: "/images/clients/Royal Orchid.jpeg" },
    { name: "Khama Labels", logo: "/images/clients/Khama Labels.png" },
    { name: "Kapish", logo: "/images/clients/Kapish_Logo.png" },
    { name: "Grassfield", logo: "/images/clients/Grassfiled Logo.webp" },
    { name: "Idea", logo: "/images/clients/IdeaLogo.webp" }
  ];
const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  const splitNumber = (numStr) => {
    const match = numStr.match(/^(\d+)(.*)$/);
    return match ? { value: parseInt(match[1]), suffix: match[2] } : null;
  };

  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fbbf24 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-50 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-50 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="mx-4 text-sm font-semibold text-amber-600 uppercase tracking-wider">Our Partners</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Trusted by Industry
            <span className="block text-amber-600">Leaders</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We partner with forward-thinking organizations to deliver exceptional results and drive meaningful business growth.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-xl border border-gray-100 p-8 h-32 flex items-center justify-center transition-all duration-300 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1 group">
                {/* Hover Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Logo */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg text-white font-bold text-xl shadow-lg">
                    {client.name.charAt(0)}
                  </div>
                </div>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Client Name - Always Visible */}
              <div className="text-center mt-4">
                <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700 transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
       <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-800 delay-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {stats.map((stat, index) => {
        const numberParts = splitNumber(stat.number);
        return (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">
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
                stat.number
              )}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        );
      })}
    </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-800 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gray-600 mb-6">Ready to join our growing family of successful partners?</p>
          <button className="inline-flex items-center px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-amber-200">
            <span>Start Your Project</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;