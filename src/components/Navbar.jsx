import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaSearch, FaMicrophone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const menu = [
  { label: 'Home' },
  { label: 'Portfolio', dropdown: true, items: ['Architecture', 'Interior Design', 'PMC'] },
  { label: 'Projects', dropdown: true, items: ['Interior Design', 'Project Management Consultancy (PMC)', 'Architecture'] },
  { label: 'People', dropdown: true, items: ['Team', 'Partners'] },
  { label: 'Blog', dropdown: true, items: ['Latest Posts', 'Industry News'] },
  { label: 'Contact' },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  const handleDropdownToggle = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'
      }`} 
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Logo and Menu Container */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logo}
            alt="Logo" 
            className="h-8 w-auto md:h-10" 
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 items-center text-white text-lg xl:text-xl font-medium">
          {menu.map((item, idx) => (
            <li
              key={item.label}
              className="relative flex items-center gap-1 cursor-pointer hover:opacity-80"
              onMouseEnter={() => item.dropdown && setOpenDropdown(idx)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              {item.label}
              {item.dropdown && <FaChevronDown className="ml-1 text-sm" />}
              {/* Desktop Dropdown */}
              {item.dropdown && (
                <ul className={`absolute top-full left-0 mt-2 min-w-[220px] bg-white bg-opacity-95 text-gray-800 rounded shadow-lg py-2 z-50 transition-all duration-300 ease-out transform origin-top ${
                  openDropdown === idx 
                    ? 'opacity-100 scale-y-100 translate-y-0' 
                    : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
                }`}>
                  {item.items.map((sub, subIdx) => (
                    <li key={sub} className="px-5 py-2 hover:bg-gray-100 whitespace-nowrap cursor-pointer text-base transition-colors duration-200">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Search Bar and Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex items-center bg-white bg-opacity-20 border border-white rounded-full px-4 py-1 gap-2">
          <FaSearch className="text-white text-lg" />
          <input
            type="text"
            placeholder=""
            className="bg-transparent outline-none border-none text-white placeholder-white w-20 lg:w-24 text-lg font-normal"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
          <FaMicrophone className="text-white text-lg" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <img 
              src="../assets/logo.png" 
              alt="Logo" 
              className="h-8 w-auto" 
            />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 text-2xl"
              aria-label="Close mobile menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 gap-2 mb-6">
            <FaSearch className="text-gray-600 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-none text-gray-800 placeholder-gray-500 flex-1 text-lg font-normal"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
            <FaMicrophone className="text-gray-600 text-lg" />
          </div>

          {/* Mobile Menu Items */}
          <ul className="space-y-4">
            {menu.map((item, idx) => (
              <li key={item.label} className="border-b border-gray-200 pb-4">
                <div
                  className="flex items-center justify-between cursor-pointer text-gray-800 text-lg font-medium hover:text-gray-600"
                  onClick={() => item.dropdown ? handleDropdownToggle(idx) : null}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <FaChevronDown 
                      className={`text-sm transition-transform duration-200 ${
                        openDropdown === idx ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </div>
                {/* Mobile Dropdown - Slide down animation from top to bottom */}
                {item.dropdown && (
                  <div 
                    className={`transition-all duration-400 ease-in-out ${
                      openDropdown === idx 
                        ? 'max-h-60 opacity-100 mt-3' 
                        : 'max-h-0 opacity-0 mt-0'
                    }`}
                    style={{
                      overflow: 'hidden',
                      transformOrigin: 'top center'
                    }}
                  >
                    <ul className="ml-4 space-y-2">
                      {item.items.map((sub, subIdx) => (
                        <li 
                          key={sub} 
                          className={`text-gray-600 hover:text-gray-800 cursor-pointer py-1 transition-all duration-200 ${
                            openDropdown === idx 
                              ? 'translate-y-0 opacity-100' 
                              : '-translate-y-2 opacity-0'
                          }`}
                          style={{
                            transitionDelay: openDropdown === idx ? `${subIdx * 50}ms` : '0ms'
                          }}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;