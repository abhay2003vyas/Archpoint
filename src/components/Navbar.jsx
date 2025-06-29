import React, { useState } from 'react';
import { FaChevronDown, FaSearch, FaMicrophone } from 'react-icons/fa';

const menu = [
  { label: 'Home' },
  { label: 'Portfolio', dropdown: true, items: ['Architecture', 'Interior Design', 'PMC'] },
  { label: 'Projects', dropdown: true, items: ['Residential', 'Commercial', 'Hospitality'] },
  { label: 'People', dropdown: true, items: ['Team', 'Partners'] },
  { label: 'Blog', dropdown: true, items: ['Latest Posts', 'Industry News'] },
  { label: 'Contact' },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-10 py-4 flex items-center justify-between" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Menu */}
      <ul className="flex gap-8 items-center text-white text-xl font-medium">
        {menu.map((item, idx) => (
          <li
            key={item.label}
            className="relative flex items-center gap-1 cursor-pointer hover:opacity-80"
            onMouseEnter={() => item.dropdown && setOpenDropdown(idx)}
            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
          >
            {item.label}
            {item.dropdown && <FaChevronDown className="ml-1 text-base" />}
            {/* Dropdown */}
            {item.dropdown && openDropdown === idx && (
              <ul className="absolute top-full left-0 mt-2 min-w-[180px] bg-white bg-opacity-95 text-dark rounded shadow-lg py-2 z-50">
                {item.items.map((sub, subIdx) => (
                  <li key={sub} className="px-5 py-2 hover:bg-gray-100 whitespace-nowrap cursor-pointer text-base">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Search Bar */}
      <div className="flex items-center bg-white bg-opacity-20 border border-white rounded-full px-4 py-1 gap-2">
        <FaSearch className="text-white text-lg" />
        <input
          type="text"
          placeholder=""
          className="bg-transparent outline-none border-none text-white placeholder-white w-24 text-lg font-normal"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        />
        <FaMicrophone className="text-white text-lg" />
      </div>
    </nav>
  );
};

export default Navbar; 