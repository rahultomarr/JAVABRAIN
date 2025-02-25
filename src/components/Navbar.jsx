import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null); // To store timeout reference

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Prevent unwanted closing
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay closing for smooth UX
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">JAVABRAIN</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className="nav-link hover:scale-105 transition-transform">Home</Link>

                {/* Dropdown Menu */}
                <div 
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button className="nav-link focus:outline-none hover:scale-105 transition-transform">
                    What We Do
                  </button>

                  {/* Animate Presence for Smooth Exit */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }} 
                        className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 border"
                      >
                        <Link 
                          to="/WhatWeDo" 
                          className="block px-4 py-2 hover:bg-green-600 hover:text-white transition-all"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Training
                        </Link>
                        <Link 
                          to="/WhatWeDo" 
                          className="block px-4 py-2 hover:bg-green-600 hover:text-white transition-all"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Strategy
                        </Link>
                        <Link 
                          to="/WhatWeDo" 
                          className="block px-4 py-2 hover:bg-green-600 hover:text-white transition-all"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Support
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" className="nav-link hover:scale-105 transition-transform">About Us</Link>
                <Link to="/team" className="nav-link hover:scale-105 transition-transform">Our Team</Link>
                <Link to="/contact" className="nav-link hover:scale-105 transition-transform">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden behind the navbar */}
      <div className="pt-16"></div>
    </>
  );
}

export default Navbar;
