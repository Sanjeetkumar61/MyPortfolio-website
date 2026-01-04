 import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/Nav/sk.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white shadow-md fixed w-full z-50 top-0 "
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Title */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-cover shadow-md"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
          <h1 className="text-3xl font-bold gap-4 font-ubuntu text-indigo-600 hover:text-indigo-800">
          Sanjeet Kumar
          </h1>

        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 cursor-pointer">
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={link.href}
                className="relative px-3 py-1 rounded-md cursor-pointer font-medium text-gray-700 
                transition duration-300 ease-in-out 
                hover:text-white hover:bg-indigo-600"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu  "
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:hidden bg-white px-6 pt-4 pb-6 space-y-4 shadow-lg "
          >
            {links.map(link => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <a
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className="block px-4 py-2 rounded-md font-medium text-gray-700 
                             transition duration-300 ease-in-out 
                             hover:text-white hover:bg-indigo-600 "
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
