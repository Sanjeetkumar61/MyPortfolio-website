import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaSearch,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiFastapi } from "react-icons/si";

const skills = [
  { name: "HTML & CSS", icon: <FaHtml5 />, color: "from-orange-500/20 to-red-500/20", borderColor: "group-hover:border-orange-500/50", iconColor: "text-orange-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "from-yellow-400/20 to-yellow-600/20", borderColor: "group-hover:border-yellow-400/50", iconColor: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-cyan-400/20 to-blue-500/20", borderColor: "group-hover:border-cyan-400/50", iconColor: "text-cyan-400" },
  { name: "React.js", icon: <FaReact />, color: "from-cyan-400/20 to-blue-600/20", borderColor: "group-hover:border-blue-400/50", iconColor: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-green-400/20 to-green-600/20", borderColor: "group-hover:border-green-400/50", iconColor: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-500/20 to-emerald-600/20", borderColor: "group-hover:border-emerald-500/50", iconColor: "text-emerald-500" },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-400/20 to-gray-600/20", borderColor: "group-hover:border-gray-400/50", iconColor: "text-gray-300" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "from-slate-400/20 to-slate-800/20", borderColor: "group-hover:border-white/30", iconColor: "text-white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "from-blue-500/20 to-blue-700/20", borderColor: "group-hover:border-blue-500/50", iconColor: "text-blue-500" },
  { name: "FastAPI", icon: <SiFastapi />, color: "from-red-500/20 to-orange-600/20", borderColor: "group-hover:border-red-500/50", iconColor: "text-red-500" },
  { name: "SEO Optimization", icon: <FaSearch />, color: "from-purple-400/20 to-purple-600/20", borderColor: "group-hover:border-purple-400/50", iconColor: "text-purple-400" },
  { name: "UI/UX Design", icon: <FaFigma />, color: "from-pink-500/20 to-purple-600/20", borderColor: "group-hover:border-pink-500/50", iconColor: "text-pink-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden" id="skills">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Styled like About Me */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
            Technical DNA
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Skills & <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Mastering the tools that power the modern web, from frontend aesthetics to backend architecture.
          </p>
        </motion.div>

        {/* Improved Interactive Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 cursor-default ${skill.borderColor}`}
            >
              {/* Inner Gradient Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${skill.color} blur-2xl -z-10`} />

              <div className="flex flex-col items-center gap-4">
                <div className={`text-4xl sm:text-5xl transition-transform duration-500 group-hover:scale-110 ${skill.iconColor}`}>
                  {skill.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-400 group-hover:text-white transition-colors text-center uppercase tracking-widest">
                  {skill.name}
                </h3>
              </div>

              {/* Decorative Corner Notch */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Toolset Labels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {['Git', 'GitHub', 'AWS', 'REST APIs', 'Postman', 'VS Code', 'Redux', 'Vercel', 'Render', 'Railway'].map((tool, i) => (
            <span key={i} className="px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-500 text-sm font-medium hover:border-purple-500/30 hover:text-white transition-all">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;