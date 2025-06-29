import React from 'react';

const coreValues = [
  { letter: 'A', value: 'Authentic', desc: "We remain true to our roots and design ethos—honoring Jaipur's cultural heritage and Vastu traditions in every project." },
  { letter: 'R', value: 'Responsible', desc: 'We take ownership of our impact—choosing eco-friendly materials, minimizing waste, and delivering projects on time and within budget.' },
  { letter: 'C', value: 'Confident', desc: 'We approach challenges with conviction, trusting our expertise in quantum architecture, PMC, interior design, and landscaping to achieve outstanding results.' },
  { letter: 'H', value: 'Honest', desc: 'We practice transparent communication with clients, consultants, and contractors—building relationships based on integrity and mutual respect.' },
  { letter: 'P', value: 'Passionate', desc: 'Our team is driven by a genuine love for design, always striving for excellence and innovation to create spaces that uplift and inspire.' },
  { letter: 'O', value: 'Optimistic', desc: 'We believe in positive outcomes—embracing each project with an attitude of possibility, even in complex or resource-constrained scenarios.' },
  { letter: 'I', value: 'Impressive', desc: 'We aim to exceed expectations—delivering visually striking, functionally superior, and memorable environments.' },
  { letter: 'N', value: 'Noble', desc: 'We uphold ethical practices—prioritizing social responsibility, fair labor, and community engagement in every endeavor.' },
  { letter: 'T', value: 'Trustworthy', desc: 'We earn and maintain our clients\' confidence through consistent quality, dependable timelines, and unwavering accountability.' },
];

const AboutUs = () => (
  <section id="about" className="py-16 bg-light">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
      <p className="mb-6 text-lg highlight-on-scroll">Founded in 2007 by visionary architect Ar. Amit Khandelwal, Arch Point Architecture has emerged as one of Jaipur's most renowned Architecture consultancies. Our Mansarovar-based, ISO-certified Architecture Firm studio boasts the skills of quantum architecture, PMC (Project Management Consultancy), interior design, and landscaping—offering higher-order integrated solutions to residential as well as commercial clients across the state of Rajasthan and even further.</p>
      <h3 className="text-2xl font-bold mt-8 mb-2">Mission</h3>
      <p className="mb-6 highlight-on-scroll">To design and deliver transformative spaces that blend innovative quantum architecture with sustainable practices, fostering well-being and functionality for residential, commercial, and hospitality clients in Jaipur and beyond. Through collaborative, client-centric processes and rigorous project management consultancy (PMC), we create environments that inspire, nurture, and endure.</p>
      <h3 className="text-2xl font-bold mt-8 mb-2">Vision</h3>
      <p className="mb-6 highlight-on-scroll">To be recognized as Rajasthan's leading full-spectrum design consultancy—championing quantum-driven architectural excellence, cutting-edge interior experiences, and regenerative landscaping. We envision a future where every project reflects our commitment to innovation, sustainability, and cultural heritage, setting new benchmarks in holistic design and execution.</p>
      <h3 className="text-2xl font-bold mt-8 mb-2">Core Values (A-R-C-H-P-O-I-N-T)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coreValues.map((cv) => (
          <div key={cv.letter} className="p-4 bg-beige rounded shadow highlight-on-scroll">
            <span className="font-bold text-gold text-xl mr-2">{cv.letter}:</span>
            <span className="font-bold">{cv.value}</span>
            <p className="text-dark text-sm mt-1">{cv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs; 