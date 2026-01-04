import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    if (email) {
      const subject = encodeURIComponent("Subscribe Me");
      const body = encodeURIComponent(`Please add this email to your mailing list: ${email}`);
      window.location.href = `mailto:support@yourdomain.com?subject=${subject}&body=${body}`;
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white pt-12 px-6 md:px-20">
      {/* Title and Input */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-3">GET UPDATES FROM ANYWHERE</h2>
        <p className="text-white text-lg mb-6">
          Subscribe to stay updated on my latest projects, blogs, and more. Just drop your email!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.input
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-100 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="border-t border-white/20 py-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-semibold text-lg">Support :</h3>
            <p>Email: <a href="mailto:sanjeetkr9910@gmail.com" className="hover:underline">sanjeetv090@gmail.com</a></p>
            <p>Phone: <a href="tel:+919572640590" className="hover:underline">+91-95726 40590</a></p>
          </div>

          {/* Social Links with motion hover effects */}
          <div className="flex gap-6 text-2xl">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjeet-kumar-5159a3286" },
              { icon: <FaInstagramSquare />, link: "https://www.instagram.com/_skverma_07?igsh=ZGpzNWx1cjZ4dGk5" },
               { icon: <FaSquareXTwitter />, link: "https://x.com/SANJEET66098445?t=OIktjSZ3rS4qJlBh9PI6QQ&s=09" },
              { icon: <FaFacebookSquare />, link: "https://facebook.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                whileHover={{ y: -5, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <p className="text-center text-sm text-white/80 pb-6">
        © {new Date().getFullYear()} Sanjeet. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;

