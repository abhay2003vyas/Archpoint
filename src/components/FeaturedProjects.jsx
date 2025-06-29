import React from 'react';

export default function FeaturedProjects() {
  return (
    <div className="bg-gray-200 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Featured Projects Text */}
          <div className="col-span-4 flex items-start">
            <h1 className="text-7xl font-bold text-gray-500 leading-tight">
              Featured<br />
              Projects
            </h1>
          </div>

          {/* Right Column - Projects Grid */}
          <div className="col-span-8 grid grid-cols-6 gap-4 auto-rows-min">
            
            {/* First Row - 3 equal columns */}
            <div className="col-span-2 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80" 
                alt="Modern Cafe Interior"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="col-span-2 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" 
                alt="Industrial Construction"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="col-span-2 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=400&q=80" 
                alt="Traditional Temple"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Second Row - Wide restaurant image */}
            <div className="col-span-4 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Restaurant Interior"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="col-span-2 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80" 
                alt="Urban Planning"
                className="w-full h-40 object-cover"
              />
            </div>

            {/* Third Row - City and apartments */}
            <div className="col-span-3 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" 
                alt="Modern City Development"
                className="w-full h-36 object-cover"
              />
            </div>
            <div className="col-span-3 relative bg-gray-700 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80" 
                alt="Siddhapura Apartments"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-lg font-semibold mb-1">Siddhapura Apartments</h3>
                <p className="text-sm font-medium">G+15</p>
                <p className="text-xs text-center mt-1">Anand Vihar, Jaipur</p>
                <p className="text-xs">Rajasthan</p>
              </div>
            </div>

            {/* Fourth Row - Mixed sizes */}
            <div className="col-span-2 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80" 
                alt="Modern Residential"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="col-span-4 bg-white rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Outdoor Seating"
                className="w-full h-32 object-cover"
              />
            </div>

            {/* Tall temple image on the right */}
            <div className="col-span-2 row-span-2 bg-white rounded-lg overflow-hidden" style={{gridRow: 'span 2'}}>
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80" 
                alt="Traditional Temple Architecture"
                className="w-full h-full object-cover"
                style={{minHeight: '280px'}}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}