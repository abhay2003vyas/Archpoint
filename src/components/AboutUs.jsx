import React from 'react';

const ArchitectureShowcase = () => {
  const data = [
    {
      title: 'Architecture',
      img: 'https://cdn.prod.website-files.com/65249822a54c89915817034b/6554242a85c2ff25407fa859_Copy%20of%20Riverpoint%20Apartments%20319.webp', // dummy image
      description:
        'Working across every sector and scale, our team conceptualise and articulate city-shaping ideas into successfully delivered high-quality and enduring architecture.',
    },
    {
      title: 'Urban Design',
      img: 'https://cdn.prod.website-files.com/65249822a54c89915817034b/6553ee9978191c02c4cfa0b7_Brisbane%20Live.webp',
      description:
        'Leading with urban design, we think comprehensively about every project to realise the latent potential of the site and maximise benefit for all.',
    },
    {
      title: 'Landscape Architecture',
      img: 'https://cdn.prod.website-files.com/65249822a54c89915817034b/654419acfb0ac45cff9a15f2_archipelago-about-3.webp',
      description:
        'The relationship between buildings, landscapes, and the space between is intrinsic and essential. We are experts in creating high-quality public spaces.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                <div className="absolute bottom-6 left-6">
                  {item.title === 'Landscape Architecture' ? (
                    <>
                      <h2 className="text-4xl font-light text-white mb-1">Landscape</h2>
                      <h2 className="text-4xl font-light text-white">Architecture</h2>
                    </>
                  ) : (
                    <h2 className="text-4xl font-light text-white">{item.title}</h2>
                  )}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureShowcase;
