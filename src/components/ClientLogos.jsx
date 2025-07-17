import React, { useState, useEffect } from 'react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample hotel and hospitality clients - replace with actual client logos
  const clients = [
    { name: "Marriott", logo: "M", color: "bg-red-600" },
    { name: "Hilton", logo: "H", color: "bg-blue-600" },
    { name: "Hyatt", logo: "HY", color: "bg-purple-600" },
    { name: "Four Seasons", logo: "4S", color: "bg-amber-600" },
    { name: "Ritz Carlton", logo: "RC", color: "bg-emerald-600" },
    { name: "InterContinental", logo: "IC", color: "bg-indigo-600" },
    { name: "Sheraton", logo: "S", color: "bg-rose-600" },
    { name: "Westin", logo: "W", color: "bg-teal-600" },
    { name: "Waldorf Astoria", logo: "WA", color: "bg-orange-600" },
    { name: "St. Regis", logo: "SR", color: "bg-cyan-600" },
    { name: "Conrad", logo: "C", color: "bg-pink-600" },
    { name: "Grand Hyatt", logo: "GH", color: "bg-violet-600" }
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to serve the world's most prestigious hotels and hospitality brands, 
            delivering exceptional service solutions that exceed expectations.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Animated Logo Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group-hover:bg-white/90">
                  <div className={`w-16 h-16 ${client.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {client.logo}
                  </div>
                  <h3 className="text-center text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Scroll Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl py-8 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex animate-scroll space-x-12">
                {duplicatedClients.map((client, index) => (
                  <div 
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30"
                  >
                    <div className={`w-12 h-12 ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                      {client.logo}
                    </div>
                    <span className="text-white font-semibold text-lg whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-slate-600 font-semibold">Hotels Served</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-slate-600 font-semibold">Client Satisfaction</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-slate-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientLogos;