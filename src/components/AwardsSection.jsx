import React from 'react';

const demoAwards = [
  { title: "Asia's Leadership Award 2025", desc: 'For sustainable design innovation', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', link: '#' },
  { title: 'IIBL Award', desc: 'Excellence in integrated architecture', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', link: '#' },
  { title: 'Pride of Rajasthan', desc: 'Pioneer of quantum architecture', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', link: '#' },
  { title: 'National Icon Award 2025', desc: 'For EKASA innovation', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', link: '#' },
];

const AwardsSection = () => (
  <section id="awards" className="py-16 bg-beige">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Awards & Recognition</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {demoAwards.map((award, idx) => (
        <a key={idx} href={award.link} target="_blank" rel="noopener noreferrer" className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <img src={award.img} alt={award.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-4 bg-white">
            <h3 className="text-lg font-bold text-gold mb-1">{award.title}</h3>
            <p className="text-dark text-sm">{award.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default AwardsSection; 