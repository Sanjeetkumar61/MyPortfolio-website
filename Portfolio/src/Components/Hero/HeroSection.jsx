
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroImg from '../../assets/Hero/pic.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] bg-gradient-to-br from-gray-300 via-white to-gray-400 text-gray-800 flex items-center px-6 md:px-20 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h3
            className="text-3xl md:text-3xl font-bold mb-4 tracking-tight text-gray-700"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello,
          </motion.h3>

          {/* Typewriter Effect */}
          <motion.h3
            className="text-2xl md:text-2xl font-bold mb-4 tracking-wide text-gray-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Typewriter
              words={['Welcome to my Portfolio']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h3>

          <motion.h1
            className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            I'm <span className="font-extrabold text-indigo-600">Sanjeet</span>, a Full Stack Developer.
          </motion.h1>

          {/* Buttons */}
          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(79,70,229,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Hire Me
            </motion.button>
            
            <motion.a
              href="/Sanjeet.Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Get CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center pb-8"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gray-200"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <img
              src={heroImg}
              alt="Developer illustration"
              className="w-full h-full object-cover"
            />
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-indigo-400 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

