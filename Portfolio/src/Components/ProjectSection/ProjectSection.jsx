import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    link: "http://text-utils-ochre-omega.vercel.app",
  },
  
  {
    title: "Imagify",
    description: "An AI-powered image generation app using Clipdrop API.",
    link: "https://imagify-app-sandy.vercel.app/",
  },
  {
    title: "ProfileCraft",
    description: "Developed a secure MERN-based portfolio platform with JWT authentication.",
    link: "https://profile-craft-app.vercel.app/",
  },
  {
    title: "Disaster Early Warning System",
    description: "Designed a monitoring system to provide early alerts for natural disasters such as floods, cyclones, and earthquakes.",
    link: "https://68e24a187a1a645ba88951c2--exquisite-granita-c2aff6.netlify.app/",
  },
  {
    title: "TextUtils Web-App",
    description: "A text analyzing web-app using Reactjs.",
    link: "https://text-utils-ochre-omega.vercel.app/",
  },
];

const ProjectSection = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900"
      id="projects"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌊 My Projects
        </motion.h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 
                           rounded-2xl shadow-lg p-8 h-80 flex flex-col 
                           justify-between cursor-pointer hover:shadow-cyan-400/40 
                           transition-all duration-500"
              >
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-md text-gray-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block bg-cyan-500 text-white font-medium 
                             px-5 py-2 rounded-lg hover:bg-cyan-600 transition-all"
                >
                  Live Project
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
