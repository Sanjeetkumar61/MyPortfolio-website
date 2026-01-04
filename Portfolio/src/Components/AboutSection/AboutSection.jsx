import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
  { name: "Express.js", icon: <div className="text-gray-700 font-bold">Ex</div> },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-6 md:px-16 py-20 overflow-hidden"
    >
      {/* Background diagonal stripe */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white-100 to-black-100 -skew-y-0 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – Image + Skills */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://i.pravatar.cc/400?img=12"
              alt="Sanjeet"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Sanjeet Kumar</h2>
          <p className="mt-2 text-lg text-gray-700 font-medium">Full Stack Developer & AI Enthusiast</p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={skill.name}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-md cursor-pointer"
              >
                {skill.icon}
                <span className="font-semibold text-gray-800">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – Expanded About */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-lg border border-gray-200 max-h-[80vh] overflow-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Aspiring web developer and AI enthusiast pursuing B.Tech in CSE (AI & ML), 
              with hands-on experience in React, MERN stack, UI/UX design, and video editing. 
              Passionate about creating interactive and scalable applications. Skilled in 
              both frontend and backend development, and eager to contribute technical 
              expertise and creative problem-solving abilities in a dynamic, innovation-driven environment.
            </p>

            <motion.a
              href="/Sanjeet.Resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

