import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/project.png',
      title: '300+ Projects',
      desc: 'Thanks to all visionaries for believing in Arch Point',
    },
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/city-map.png',
      title: '10+ Cities',
      desc: 'We believe in growing together.',
    },
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/team.png',
      title: '50+ Team',
      desc: 'dedicated and integrated team which believes design is our love',
    },
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/certificate.png',
      title: 'ISO Certified',
      desc: 'Recognised for our commitment',
    },
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/government-building.png',
      title: 'Govt. Recognised',
      desc: 'Recognised as startup by Government of India',
    },
    {
      img: 'http://www.archpoint.in/wp-content/uploads/2022/02/quantum.png',
      title: 'Specialize in Quantum Architecture',
      desc: 'your vibes matter to us.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              width={128}
              height={128}
              className="mb-4"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
