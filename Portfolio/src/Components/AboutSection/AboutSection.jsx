 import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20" id="about">
      {/* Main Flex Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pt-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-indigo-500 
                       transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500 hover:shadow-lg"
          />
        </div>

        {/* Text Section in one div with gray background */}
        <div className="w-full md:w-1/2 bg-gray-200 p-8 rounded-xl shadow-md text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
            Hi, I'm <span className="text-indigo-600 font-semibold">Sanjeet</span>, a passionate Full Stack Developer who loves turning innovative ideas into powerful digital solutions. I specialize in building full-stack web applications using modern technologies like React, Tailwind CSS, Node.js, and MongoDB. My mission is to craft responsive user interfaces, write clean and maintainable code, and continuously grow by exploring new tools and frameworks to deliver top-notch digital experiences.
          </p>

          {/* Download CV Button */}
          <a
            href="/SanjeetResume.pdf"
            download
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow 
                       hover:bg-white hover:text-indigo-600 hover:border hover:border-indigo-600
                       transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
