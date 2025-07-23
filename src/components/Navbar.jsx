import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarState, setNavbarState] = useState("center"); // 'center' | 'top'
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const { bottom } = videoSection.getBoundingClientRect();
        const scrollY = window.scrollY;
        const halfScrolled = bottom < window.innerHeight / 2;

        if (scrollY === 0 || !halfScrolled) {
          setNavbarState("center");
        } else {
          if (navbarState !== "top") {
            setIsAnimating(true);
            setNavbarState("top");
            setTimeout(() => setIsAnimating(false), 600);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarState]);

  const menu = ["Home", "About", "Projects", "Blog"];

  const projectsSubMenu = [
    { label: "Architectural Design", path: "/projects" },
    { label: "Interior Design", path: "/interior-design" },
    { label: "Residential Design", path: "/residential-design" },
    {
      label: "Project Management Consultancy",
      path: "/project-management-consultancy",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    const isHomePage =
      location.pathname === "/" || location.pathname === "/home";

    if (!isHomePage) {
      setNavbarState("top");
      return;
    }

    const handleScroll = () => {
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const { bottom } = videoSection.getBoundingClientRect();
        const scrollY = window.scrollY;
        const halfScrolled = bottom < window.innerHeight / 2;

        if (scrollY === 0 || !halfScrolled) {
          setNavbarState("center");
        } else {
          if (navbarState !== "top") {
            setIsAnimating(true);
            setNavbarState("top");
            setTimeout(() => setIsAnimating(false), 600);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navbarState]);

  return (
    <>
      {/* Static Logo (always on top-left) */}
      <div className="fixed top-4 left-36 z-[9999]">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Bar */}
      <nav
        className={`z-50 font-sans tracking-wider transition-all duration-600 ease-out ${
          navbarState === "center"
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto text-white"
            : `fixed top-0 left-0 uppercase right-0 w-full bg-white shadow-lg px-6 py-4 text-gray-800 ${
                isAnimating ? "animate-slide-down" : ""
              }`
        }`}
        style={{
          fontFamily: "Ag",
          zIndex: 9998,
        }}
      >
        {navbarState === "center" ? (
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-4xl md:text-6xl lg:text-7xl font-light">
            {menu.map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-300 relative group animate-fade-in-down"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0,
                  animation: `fadeInDown 0.8s ease-out forwards ${idx * 100}ms`,
                }}
              >
                <a href={`#${item.toLowerCase()}`} className="relative group">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Center Navbar Dropdown */}
                {item === "Projects" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out">
                    <div className="w-64 bg-white shadow-2xl rounded-lg border border-gray-200 overflow-hidden transform scale-95 group-hover:scale-100 transition-all duration-500 ease-out">
                      <div className="py-2">
                        {projectsSubMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.path}
                            className="block px-6 py-3 text-lg font-light text-gray-800 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 hover:text-white capitalize transition-all duration-300 ease-out transform hover:translate-x-2"
                            style={{
                              animationDelay: `${subIdx * 50}ms`,
                              animation: "fadeInUp 0.3s ease-out forwards",
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-between w-full">
            {/* Top Navbar Menu */}
            <ul className="hidden lg:flex gap-8 xl:gap-12 items-center text-xl xl:text-2xl font-medium mx-auto">
              {menu.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group cursor-pointer hover:text-yellow-600 transition-colors duration-300 animate-fade-in-down"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    opacity: 0,
                    animation: `fadeInDown 0.8s ease-out forwards ${
                      idx * 100
                    }ms`,
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative capitalize"
                  >
                    {item}
                  </a>

                  {item === "Projects" && (
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out">
                      <div className="w-64 bg-white shadow-2xl rounded-lg border border-gray-200 overflow-hidden transform scale-95 group-hover:scale-100 transition-all duration-500 ease-out">
                        <div className="py-2">
                          {projectsSubMenu.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 hover:text-white capitalize transition-all duration-300 ease-out transform hover:translate-x-2"
                              style={{
                                animationDelay: `${subIdx * 50}ms`,
                                animation: "fadeInUp 0.3s ease-out forwards",
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Search Icon for Top Navbar */}
            <div className="hidden lg:flex items-center">
              <button
                className="text-gray-800 hover:text-yellow-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <FiSearch className="text-2xl" />
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Search Icon for Mobile */}
              <button
                className="text-gray-800 hover:text-yellow-600 transition-colors duration-300 p-2"
                aria-label="Search"
              >
                <FiSearch className="text-xl" />
              </button>

              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 text-2xl hover:text-yellow-600 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-lg animate-fade-in">
                  {menu.map((item, idx) => (
                    <div
                      key={idx}
                      className="animate-fade-in-down"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                        opacity: 0,
                        animation: `fadeInDown 0.6s ease-out forwards ${
                          idx * 100
                        }ms`,
                      }}
                    >
                      {item === "Projects" ? (
                        <div>
                          <button
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className="w-full text-left text-gray-800 hover:text-yellow-600 transition-colors duration-300 py-2 capitalize flex justify-between items-center"
                          >
                            Projects
                            {projectsOpen ? (
                              <FiChevronUp className="text-xl" />
                            ) : (
                              <FiChevronDown className="text-xl" />
                            )}
                          </button>

                          {projectsOpen && (
                            <div className="pl-4 mt-2 flex flex-col gap-2">
                              {projectsSubMenu.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  to={subItem.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-gray-600 hover:text-yellow-500 text-sm capitalize transition-all duration-300 flex items-center gap-2"
                                  style={{
                                    animationDelay: `${subIdx * 80}ms`,
                                    animation: `fadeInUp 0.3s ease-out forwards`,
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-gray-800 hover:text-yellow-600 transition-colors duration-300 py-2 capitalize"
                        >
                          {item}
                        </a>
                      )}
                    </div>
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        /* Enhanced dropdown animations */
        .group:hover .group-hover\\:opacity-100 {
          animation: fadeIn 0.5s ease-out forwards;
        }

        /* Staggered animation for dropdown items */
        .group:hover a[style*="animation-delay"] {
          opacity: 0;
          transform: translateY(10px);
        }

        .group:hover a[style*="animation-delay"]:nth-child(1) {
          animation-delay: 0ms;
        }

        .group:hover a[style*="animation-delay"]:nth-child(2) {
          animation-delay: 50ms;
        }

        .group:hover a[style*="animation-delay"]:nth-child(3) {
          animation-delay: 100ms;
        }

        .group:hover a[style*="animation-delay"]:nth-child(4) {
          animation-delay: 150ms;
        }

        /* Smooth nav item load animation */
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-20px);
        }

        /* Mobile menu item staggered animation */
        .animate-fade-in-down:nth-child(1) {
          animation-delay: 0ms;
        }

        .animate-fade-in-down:nth-child(2) {
          animation-delay: 100ms;
        }

        .animate-fade-in-down:nth-child(3) {
          animation-delay: 200ms;
        }

        .animate-fade-in-down:nth-child(4) {
          animation-delay: 300ms;
        }
      `}</style>
    </>
  );
};

export default Navbar;
