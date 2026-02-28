 import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaCode, FaPalette, FaChartLine, FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description: "Building responsive, high-performance web applications with modern technologies. I create scalable solutions using React, Node.js, and cloud services.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34, 211, 238, 0.2)",
  },
  {
    id: 2,
    icon: FaPalette,
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user interfaces with modern design principles. I focus on creating visually appealing layouts that enhance user experience.",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
    featured: true,
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Digital Strategy",
    description: "Developing effective digital strategies to boost your online presence. I combine SEO, content marketing, and analytics to drive meaningful results.",
    color: "from-emerald-400 to-green-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
];

// --- 3D Tilt Card Sub-Component ---
const ServiceCard = ({ service, isHovered }) => {
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

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 ${
        service.featured ? "md:scale-105 border-cyan-500/30 ring-1 ring-cyan-500/10" : ""
      }`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {/* Icon with Glowing Background */}
        <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${service.color} text-black shadow-xl group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={32} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors"
        >
          Read More <FaArrowRight size={12} />
        </motion.button>
      </div>

      {/* Internal Glow Effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${service.color} blur-3xl -z-10`} 
      />

      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg shadow-cyan-500/20">
          Most Popular
        </div>
      )}
    </motion.div>
  );
};

const ServiceSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden" 
      id="services"
    >
      {/* --- Cursor Spotlight Effect --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.05), transparent 80%)`
        }}
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            What I Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions designed to transform your ideas into reality with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;