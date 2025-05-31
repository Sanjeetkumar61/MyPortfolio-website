 import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaSearch,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML & CSS', icon: <FaHtml5 className="text-4xl text-white" />, bg: 'from-orange-500 to-pink-500' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-white" />, bg: 'from-yellow-500 to-yellow-700' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-white" />, bg: 'from-sky-400 to-blue-600' },
  { name: 'React.js', icon: <FaReact className="text-4xl text-white" />, bg: 'from-blue-400 to-indigo-600' },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-white" />, bg: 'from-green-500 to-green-700' },
  { name: 'Wordpress', icon: <FaWordpress className="text-4xl text-white" />, bg: 'from-blue-500 to-gray-700' },
  { name: 'SEO Optimize', icon: <FaSearch className="text-4xl text-white" />, bg: 'from-indigo-500 to-purple-700' },
  { name: 'UI/UX Design', icon: <FaFigma className="text-4xl text-white" />, bg: 'from-pink-500 to-violet-600' },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`h-44 flex flex-col items-center justify-center bg-gradient-to-br ${skill.bg} text-white text-xl font-bold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              {skill.icon}
              <p className="mt-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
