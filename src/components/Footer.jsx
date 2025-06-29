import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold text-white text-lg">A</div>
        <span className="font-bold text-lg tracking-wide">Arch Point</span>
      </div>
      <div className="text-sm text-center md:text-right">
        <div>Contact: info@archpoint.com | +91 12345 67890</div>
        <div>Address: Mansarovar, Jaipur, Rajasthan</div>
        <div className="mt-2">&copy; {new Date().getFullYear()} Arch Point Architecture Pvt. Ltd. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer; 