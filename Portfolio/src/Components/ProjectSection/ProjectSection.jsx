import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// --- 3D Tilt Card Sub-Component ---
const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-[450px] w-full rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden group transition-colors duration-500 hover:border-white/20"
    >
      {/* 3D Content Layer */}
      <div style={{ transform: "translateZ(50px)" }} className="p-8 flex flex-col h-full relative z-10">
        <span className="text-6xl font-black text-white/5 absolute top-4 right-6 pointer-events-none">
          0{index + 1}
        </span>

        <div className={`w-12 h-1 bg-gradient-to-r ${project.color} mb-6 rounded-full`} />
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.a
          href={project.link}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.color} text-black font-bold text-sm w-fit shadow-lg`}
        >
          View Live <FaExternalLinkAlt size={12} />
        </motion.a>
      </div>

      {/* Hover Glow Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.color} blur-3xl -z-10`} />
    </motion.div>
  );
};

const ProjectSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const projects = [
    { title: "AI Learning Assistant", description: "AI-powered learning platform with dashboard, document upload, quiz generation, and smart assistant features.", link: "https://ai-learning-assistant-frontend.vercel.app/dashboard", tags: ["React", "Node.js", "MongoDB", "Gemini API"], color: "from-indigo-400 to-purple-500" },
    { title: "Imagify AI", description: "AI-powered image generation app using Clipdrop API with real-time results.", link: "https://imagify-app-sandy.vercel.app/", tags: ["React", "AI", "API"], color: "from-purple-500 to-pink-500" },
    { title: "E-Commerce Platform", description: "Full-featured e-commerce application with authentication, cart system, and secure checkout.", link: "https://e-commerce-frontend-five-swart.vercel.app/", tags: ["React", "Node.js", "MongoDB", "Stripe"], color: "from-pink-400 to-rose-500" },
    { title: "Fixl HR Management", description: "HR management platform with leave tracking and role-based authentication.", link: "https://fixl-hr-system-ar6v.vercel.app/leave-history", tags: ["React", "Node.js", "RBAC"], color: "from-red-400 to-orange-500" },
    { title: "Dynamic Form Builder", description: "Customizable form builder with validation, storage, and dynamic field creation.", link: "https://form-builder-frontend-seven.vercel.app/", tags: ["React", "Node.js", "REST API"], color: "from-violet-400 to-purple-500" },
    { title: "ProfileCraft", description: "Secure MERN-based portfolio platform with JWT authentication and admin dashboard.", link: "https://profile-craft-app.vercel.app/", tags: ["MERN", "JWT", "MongoDB"], color: "from-cyan-400 to-blue-500" },
    { title: "Disaster Alert", description: "Monitoring system providing early alerts for natural disasters with real-time data.", link: "https://68e24a187a1a645ba88951c2--exquisite-granita-c2aff6.netlify.app/", tags: ["React", "Maps", "API"], color: "from-emerald-400 to-green-500" },
    { title: "TextUtils", description: "Advanced text analyzing web-app with multiple transformation features.", link: "https://text-utils-ochre-omega.vercel.app/", tags: ["React", "JS"], color: "from-orange-400 to-amber-500" },
    { title: "Smart Hire Interview", description: "AI-driven interview system for smart hiring and candidate evaluation.", link: "https://smart-hire-interview-prototype.vercel.app/login", tags: ["React", "Express", "AI API"], color: "from-teal-400 to-cyan-500" },
    
    
  ];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden" 
      id="projects"
    >
      {/* --- Cursor Spotlight Effect --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.05), transparent 80%)`
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
              Selected Works
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              Featured <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4">
            <button className="nav-prev p-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white transition-all">
              <FaChevronLeft />
            </button>
            <button className="nav-next p-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white transition-all">
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Project Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="!pb-20 project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
