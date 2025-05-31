
import React, { useState } from 'react';
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
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">GET UPDATES FROM ANYWHERE</h2>
        <p className="text-white text-lg mb-6">
          Subscribe to stay updated on my latest projects, blogs, and more. Just drop your email!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 p-3 border border-gray-300 rounded-lg  text-gray-800 focus:outline-none"
          />
          <button
            onClick={handleGetStarted}
            className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-100 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20 py-8">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg">Support :</h3>
             <p>Email: sanjeetkr9910@gmail.com</p>
             <p>Phone: +91-95726 40590</p>
           </div>

           {/* Social Links */}
           <div className="flex gap-6 text-2xl">
             <a href="https://www.linkedin.com/in/sanjeet-kumar-5159a3286" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
               <FaLinkedin />
             </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
               <FaSquareXTwitter />
             </a>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
               <FaFacebookSquare />
             </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaInstagramSquare />
             </a>
           </div>
         </div>
       </div>

      <p className="text-center text-sm text-white/80 pb-6">© {new Date().getFullYear()} Sanjeet. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;


 
