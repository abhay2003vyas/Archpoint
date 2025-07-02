import React from 'react';

const HeroSection = () => (
  <section id="hero" className="relative h-screen sm:h-[110vh] w-full">
    <img 
      src={require('../assets/img1.png')} 
      alt="Hero image" 
      className="w-full h-full object-cover" 
    />
  </section>
);

export default HeroSection;