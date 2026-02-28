 import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHeart, FaInstagramSquare } from "react-icons/fa"; // Fixed Import
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjeet-kumar-5159a3286", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/_skverma_07?igsh=ZGpzNWx1cjZ4dGk5", label: "Instagram" },
    { icon: <FaSquareXTwitter />, link: "https://x.com/SANJEET66098445?t=OIktjSZ3rS4qJlBh9PI6QQ&s=09", label: "Twitter" },
  ];

  const handleSubscribe = () => {
    if (email) {
      const subject = encodeURIComponent("Newsletter Subscription");
      const body = encodeURIComponent(`Please subscribe me to your newsletter: ${email}`);
      window.location.href = `mailto:contactsanjeetbuild@gmail.com?subject=${subject}&body=${body}`;
      setEmail('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-16 pb-8 px-4 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section - FIXED Side-by-Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tighter">
            Stay <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Updated</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base px-2">
            Subscribe to get updates on my latest projects and insights.
          </motion.p>
          
          {/* Side-by-Side Responsive Form */}
          <motion.div variants={itemVariants} className="flex flex-row max-w-lg mx-auto gap-2 sm:gap-3 px-2">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 px-3 sm:px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-all text-xs sm:text-sm"
            />
            <button
              onClick={handleSubscribe}
              className="px-4 sm:px-8 py-3 bg-cyan-500 text-black font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.div>
        </motion.div>

        {/* Footer Grid - Responsive columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-white uppercase">
              Sanjeet <span className="text-cyan-500">Kumar</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Full Stack Developer crafting digital experiences with clean code and creative design.
            </p>
          </motion.div>

          {/* Navigation Grid */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="break-words px-4 sm:px-0">
                <a href="mailto:contactsanjeetbuild@gmail.com" className="hover:text-cyan-400 transition-colors">
                  contactsanjeetbuild@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919572640590" className="hover:text-cyan-400 transition-colors">
                  +91-95726 40590
                </a>
              </li>
              <li>Jaipur, India</li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#22d3ee" }}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-500 hover:border-cyan-500/30 transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 text-[10px] sm:text-xs flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Sanjeet. Built with 
            <FaHeart className="text-cyan-500 animate-pulse" /> 
            in India.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;