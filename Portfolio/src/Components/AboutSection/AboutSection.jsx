import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaLightbulb, FaLayerGroup } from "react-icons/fa";
import { FiCpu, FiLayout, FiDatabase } from "react-icons/fi";

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", desc: "React, Tailwind, Framer Motion", icon: <FiLayout className="text-cyan-400" /> },
    { name: "Backend Architecture", desc: "Node.js, Express, Microservices", icon: <FiCpu className="text-purple-500" /> },
    { name: "Database Design", desc: "MongoDB, PostgreSQL, Redis", icon: <FiDatabase className="text-blue-500" /> },
    { name: "Full Stack Solutions", desc: "End-to-end scalable web apps", icon: <FaLayerGroup className="text-pink-500" /> },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background Ambient Glows - Matching Hero Section */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Bold Text & Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
               Professional Bio
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
              Turning Complex Problems Into <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Elegant Code.
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in building modern, scalable web applications. My journey is fueled by a curiosity for how digital ecosystems function and a commitment to high-performance architecture.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Beyond just writing code, I focus on the user experience—ensuring every interface is intuitive and every backend is robust. From the first line of CSS to the final database optimization, I aim for excellence.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-y border-white/5">
                <div>
                    <h4 className="text-3xl font-bold text-white">15+</h4>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">Success Projects</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10 hidden sm:block" />
                <div>
                    <h4 className="text-3xl font-bold text-white">02+</h4>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</p>
                </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              Learn More <FaArrowRight className="text-cyan-400" />
            </motion.button>
          </motion.div>

          {/* Right Side: Modern DNA/Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}

            {/* A "Floating Decoration" to fill the gap */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="hidden lg:block absolute -right-20 -bottom-20 w-64 h-64 border border-white/5 rounded-full border-dashed opacity-20"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;