import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHeart, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-16 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 md:w-[500px] h-64 md:h-80 bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Newsletter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-3">
            Stay <span className="gradient-text">Updated</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-6 max-w-md mx-auto">
            Subscribe to get updates on my latest projects and insights.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16"></div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-3">SANJEET</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer crafting digital experiences with clean code and creative design.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:sanjeetv090@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors break-words">
                  contactsanjeetbuild@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919572640590" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +91-95726 40590
                </a>
              </li>
              <li className="text-gray-400">Jaipur, India</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.2, y: -4 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Sanjeet. Made with
            <FaHeart className="w-3 h-3 text-pink-500" />
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

