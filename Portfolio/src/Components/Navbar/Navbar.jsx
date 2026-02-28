 import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [navOpen]);

  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  // Custom function to handle navigation and smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setNavOpen(false); // Close menu first

    const element = document.getElementById(id);
    if (element) {
      // Thoda delay dete hain taaki mobile menu close hone ka animation complete ho sake
      setTimeout(() => {
        const offset = 80; // Navbar height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100); 
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter text-white cursor-pointer"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            PORT<span className="text-cyan-400">FOLIO</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  activeSection === link.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-cyan-400 p-2 z-50 relative"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen w-full bg-black/95 backdrop-blur-2xl z-[40] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-3xl font-black uppercase tracking-tighter transition-all ${
                    activeSection === link.id ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;