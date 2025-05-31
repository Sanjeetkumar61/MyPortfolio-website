 import React from 'react';
import heroImg from '../../assets/Hero/img1.jpg'; // Make sure this path is correct

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center px-6 md:px-20 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Hello,
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            Welcome to my Portfolio
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            I'm <span className="font-extrabold">Sanjeet</span>, a Full Stack Developer
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-6">
            <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition-all duration-300">
              Hire Me
            </button>
            <a
              href="/SanjeetResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center pb-8">
          <img
            src={heroImg}
            alt="Developer illustration"
            className="w-96 h-96 object-cover rounded-full shadow-3xl border-4 border-white transition-transform duration-300 hover:scale-110 hover:shadow-indigo-500 hover:shadow-lg animate-pulse-on-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


 