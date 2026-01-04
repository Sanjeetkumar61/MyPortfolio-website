// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaWordpress,
//   FaSearch,
//   FaFigma,
// } from 'react-icons/fa';
// import { SiTailwindcss } from 'react-icons/si';

// const skills = [
//   { name: 'HTML & CSS', icon: <FaHtml5 className="text-4xl text-white" />, bg: 'from-orange-500 to-pink-500' },
//   { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-white" />, bg: 'from-yellow-500 to-yellow-700' },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-white" />, bg: 'from-sky-400 to-blue-600' },
//   { name: 'React.js', icon: <FaReact className="text-4xl text-white" />, bg: 'from-blue-400 to-indigo-600' },
//   { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-white" />, bg: 'from-green-500 to-green-700' },
//   { name: 'Wordpress', icon: <FaWordpress className="text-4xl text-white" />, bg: 'from-blue-500 to-gray-700' },
//   { name: 'SEO Optimize', icon: <FaSearch className="text-4xl text-white" />, bg: 'from-indigo-500 to-purple-700' },
//   { name: 'UI/UX Design', icon: <FaFigma className="text-4xl text-white" />, bg: 'from-pink-500 to-violet-600' },
// ];

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // delay between each card
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const SkillsSection = () => {
//   return (
//     <section className="py-20 px-6 md:px-20 bg-white" id="skills">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//         >
//           My Skills
//         </motion.h2>

//         {/* Grid with stagger animation */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ scale: 1.08, rotate: 2 }}
//               whileTap={{ scale: 0.95 }}
//               className={`h-44 flex flex-col items-center justify-center bg-gradient-to-br ${skill.bg} text-white text-xl font-bold rounded-2xl shadow-xl cursor-pointer`}
//             >
//               {skill.icon}
//               <p className="mt-4">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaSearch,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML & CSS", icon: <FaHtml5 className="text-5xl" />, color: "from-orange-500 to-pink-500" },
  { name: "JavaScript", icon: <FaJsSquare className="text-5xl" />, color: "from-yellow-400 to-yellow-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl" />, color: "from-sky-400 to-blue-600" },
  { name: "React.js", icon: <FaReact className="text-5xl" />, color: "from-blue-400 to-indigo-600" },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl" />, color: "from-green-500 to-green-700" },
  { name: "Wordpress", icon: <FaWordpress className="text-5xl" />, color: "from-blue-500 to-gray-700" },
  { name: "SEO Optimize", icon: <FaSearch className="text-5xl" />, color: "from-indigo-500 to-purple-700" },
  { name: "UI/UX Design", icon: <FaFigma className="text-5xl" />, color: "from-pink-500 to-violet-600" },
];

// Floating animation
const floatAnimation = {
  y: [0, -12, 0], 
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-gray-200" id="skills">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Glassmorphism floating cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              animate={floatAnimation}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 h-44 flex flex-col items-center justify-center 
              rounded-2xl shadow-lg bg-white/30 backdrop-blur-xl border border-white/20 
              text-gray-900 cursor-pointer`}
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${skill.color} text-white shadow-md`}>
                {skill.icon}
              </div>
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
