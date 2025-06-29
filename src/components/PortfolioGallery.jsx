import React, { useState } from 'react';

const demoTabs = [
  { label: 'Architecture', images: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  ] },
  { label: 'Interior Design', images: [
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  ] },
  { label: 'PMC', images: [
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  ] },
];

const PortfolioGallery = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="portfolio" className="py-16 bg-beige">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portfolio</h2>
      <div className="flex justify-center gap-4 mb-8">
        {demoTabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`px-6 py-2 rounded-full font-semibold border-2 transition-all ${active === idx ? 'bg-gold text-white border-gold' : 'bg-white text-dark border-gold hover:bg-gold hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {demoTabs[active].images.map((img, idx) => (
          <img key={idx} src={img} alt="portfolio" className="w-full h-56 object-cover rounded-lg shadow-md" />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery; 