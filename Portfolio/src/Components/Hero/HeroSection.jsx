import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import heroImg from '../../assets/Hero/1.jpeg';

const HeroSection = () => {
  const socialLinks = [
    { icon: FaLinkedin, link: 'https://linkedin.com', color: 'hover:text-[#0077b5]' },
    { icon: FaGithub, link: 'https://github.com', color: 'hover:text-white' },
    { icon: FaInstagram, link: 'https://instagram.com', color: 'hover:text-[#e4405f]' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#030303] pt-24 pb-12 overflow-hidden flex items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 lg:left-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-cyan-500/10 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 lg:right-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-500/10 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
        
        {/* Visual Container - Positioned First on Mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            
            {/* Rotating Outer Rings */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute inset-3 lg:inset-4 border border-dashed border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Orbiting Skill Tags - Responsive Positioning */}
            <SkillTag name="React" color="bg-cyan-500" pos="top-0 -right-2 lg:top-10 lg:-right-5" delay={0} />
            <SkillTag name="Node.js" color="bg-green-500" pos="bottom-5 -left-2 lg:bottom-20 lg:-left-10" delay={1} />
            <SkillTag name="Python" color="bg-yellow-500" pos="top-1/2 -left-8 lg:-left-20" delay={1.5} />
            <SkillTag name="FastAPI" color="bg-teal-500" pos="-bottom-4 -right-4 lg:-bottom-8 lg:-right-12" delay={2} />
            <SkillTag name="Next.js" color="bg-gray-700" pos="bottom-1/4 -right-6 lg:-right-24" delay={2.2} />
            <SkillTag name="TypeScript" color="bg-blue-500" pos="top-1/4 -right-6 lg:-right-20" delay={2.5} />

            {/* Profile Image Container */}
            <div className="relative z-10 w-full h-full p-4 lg:p-6">
              <div className="w-full h-full rounded-full overflow-hidden border-[4px] lg:border-[6px] border-white/5 shadow-2xl relative group">
                <img 
                  src={heroImg} 
                  alt="Sanjeet Kumar" 
                  className="w-full h-full object-cover object-top scale-110 group-hover:scale-120 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-950/40" />
              </div>
              <div className="absolute inset-4 lg:inset-6 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.3)] pointer-events-none animate-pulse" />
            </div>

            <div className="absolute w-[85%] h-[85%] bg-cyan-500/15 blur-[60px] lg:blur-[80px] rounded-full -z-10" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-6 lg:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            SANJEET <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              KUMAR
            </span>
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-medium mb-6 lg:mb-8 h-8">
            I'm a <span className="text-white border-b-2 border-cyan-500">
              <Typewriter
                words={['Full Stack Developer', 'Python Expert', 'FastAPI Developer', 'MERN Expert']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </div>

          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed">
            Building high-performance web applications with modern tech stacks. 
            Focused on creating clean, scalable, and user-centric digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-5 mb-10 lg:mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 lg:py-4 bg-cyan-500 text-black font-black rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer"
            >
              Hire Me <FiArrowUpRight size={20} />
            </motion.button>
            <motion.button 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 lg:py-4 bg-white/5 border border-cyan-400/30 text-white font-black rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400/10 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] cursor-pointer"
            >
              Contact Me <FiArrowUpRight size={16} />
            </motion.button>
          </div>

          <div className="flex justify-center lg:justify-start gap-8">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer" className={`text-gray-500 text-2xl transition-all duration-300 ${item.color}`}>
                <item.icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillTag = ({ name, color, pos, delay }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay: delay }}
    className={`absolute z-20 ${pos} px-2 py-1 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-md flex items-center gap-1.5 lg:gap-2 shadow-xl whitespace-nowrap`}
  >
    <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${color}`} />
    <span className="text-white text-[9px] lg:text-xs font-bold tracking-wider">{name}</span>
  </motion.div>
);

export default HeroSection;