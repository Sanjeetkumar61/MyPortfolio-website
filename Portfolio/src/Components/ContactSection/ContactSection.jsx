import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      className="bg-gray-200 py-16 px-6 md:px-20 text-gray-800"
      id="contact"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading with fade-down animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Sub-text with fade-up */}
        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations or just a friendly hello 👋
        </motion.p>

        {/* Form with stagger animation */}
        <motion.form
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="w-full md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.textarea>

          {/* Button with bounce hover effect */}
          <motion.button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
