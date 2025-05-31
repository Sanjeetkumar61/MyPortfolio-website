 import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Nav/sk.png'; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Title */}
        <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-cover shadow-md"
          />
          <h1 className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">
            MyPortfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative px-3 py-1 rounded-md cursor-pointer font-medium text-gray-700 
                transition duration-300 ease-in-out 
                hover:text-white hover:bg-indigo-600 hover:scale-105"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-white px-6 pt-4 pb-6 space-y-4 shadow-lg">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block px-4 py-2 rounded-md font-medium text-gray-700 
                           transition duration-300 ease-in-out 
                           hover:text-white hover:bg-indigo-600 hover:scale-105"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
