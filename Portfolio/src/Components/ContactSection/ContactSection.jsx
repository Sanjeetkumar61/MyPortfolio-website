 import React, { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const currentData = { ...formData }; // preserve data for delayed reply

    // Send Admin Email Immediately
    emailjs
      .send(
        "service_72x345c",
        "template_6khbvmb",
        currentData,
        "o9hm38NPiwE_X0GIM"
      )
      .then(() => {

        //Send Auto Reply After 5 Seconds
        setTimeout(() => {
          emailjs.send(
            "service_72x345c",
            "template_jalpj8h",
            currentData,
            "o9hm38NPiwE_X0GIM"
          );
        }, 5000);

        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(true);
      });
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
      value: "+91-9572640590",
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
      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link || "#"}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400 transition-all"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-400">
                  <info.icon size={20} />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {info.label}
                </h3>
              </div>
              <p className="text-slate-300 text-sm">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-400/30 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <FaPaperPlane size={16} />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm font-medium">
              ✅ Message sent successfully! You’ll receive a confirmation shortly.
            </p>
          )}

          {error && (
            <p className="text-red-400 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;