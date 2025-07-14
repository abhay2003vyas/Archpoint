import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarState, setNavbarState] = useState('center'); // 'center' | 'top'
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const { bottom } = videoSection.getBoundingClientRect();
        const scrollY = window.scrollY;
        const halfScrolled = bottom < window.innerHeight / 2;

        if (scrollY === 0 || !halfScrolled) {
          setNavbarState('center');
        } else {
          if (navbarState !== 'top') {
            setIsAnimating(true);
            setNavbarState('top');
            setTimeout(() => setIsAnimating(false), 600);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarState]);

  const menu = ['Projects', 'Ideas', 'People', 'About'];

  return (
    <>
      {/* Static Logo (always on top-left) */}
      <div className="fixed top-4 left-36 z-[9999]">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Bar */}
      <nav
        className={`z-50 font-sans uppercase tracking-wider text-white transition-all duration-600 ease-out ${
          navbarState === 'center'
            ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto'
            : `fixed top-0 left-0 right-0 w-full bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 ${
                isAnimating ? 'animate-slide-down' : ''
              }`
        }`}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          zIndex: 9998, // behind the logo
        }}
      >
        {navbarState === 'center' ? (
          <ul className="flex gap-8 md:gap-12 text-xl md:text-2xl font-light">
            {menu.map((item, idx) => (
              <li key={idx} className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
                <a href={`#${item.toLowerCase()}`} className="relative group">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-between w-full">
            {/* Center Menu */}
            <ul className="hidden lg:flex gap-6 xl:gap-8 items-center text-lg xl:text-xl font-medium mx-auto">
              {menu.map((item, idx) => (
                <li key={idx} className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                  <a href={`#${item.toLowerCase()}`} className="relative group">
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-2xl hover:text-yellow-400 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 px-6 py-4 flex flex-col gap-4 text-lg animate-fade-in">
                  {menu.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-yellow-400 transition-colors duration-300 py-2"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
