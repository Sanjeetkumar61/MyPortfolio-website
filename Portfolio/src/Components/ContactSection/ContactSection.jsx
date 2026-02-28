import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "contactsanjeetbuild@gmail.com",
      link: "mailto:contactsanjeetbuild@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91-95726 40590",
      link: "tel:+919572640590",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Jaipur, India",
      link: null,
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black"
      id="contact"
    >
      {/* Background orbs */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link || "#"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-400/20 group-hover:bg-cyan-400/40 text-cyan-400 transition-colors">
                  <info.icon size={20} />
                </div>
                <h3 className="font-semibold text-white text-sm">{info.label}</h3>
              </div>
              <p className="text-slate-300 text-sm">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form - Glassmorphism */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="p-8 md:p-10 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/30 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                required
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-sm font-medium text-slate-200 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <FaPaperPlane size={16} />
            Send Message
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0}}
              className="text-cyan-400 text-sm font-medium"
            >
              ✓ Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
