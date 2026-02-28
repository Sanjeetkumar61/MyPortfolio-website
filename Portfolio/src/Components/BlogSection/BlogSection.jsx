import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes, FaCalendar } from "react-icons/fa";

const blogs = [
  {
    title: "AI Integration in Web Development",
    date: "May 2025",
    excerpt: "Discover how AI is transforming web development through personalized UX, chatbots, and intelligent code generation.",
    fullContent: `AI is revolutionizing web development by enabling personalized user experiences, automating repetitive tasks, and enhancing functionality with intelligent features. 
Key areas include:
- AI chatbots for real-time support.
- AI-powered code suggestions and auto-complete.
- Personalization using machine learning.
- Voice and image recognition integration.

AI tools like GitHub Copilot, ChatGPT, and TensorFlow.js are helping developers build smarter apps faster than ever.`,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Top Web Design Trends in 2025",
    date: "April 2025",
    excerpt: "Explore the latest design trends including glassmorphism, 3D elements, dark mode, and motion UI.",
    fullContent: `Web design in 2025 is all about user interaction and immersive experiences. Popular trends include:
- Glassmorphism with blurry glass-like backgrounds.
- 3D design elements for depth and realism.
- Motion UI and micro-animations.
- Voice UI and accessibility improvements.`,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Boosting SEO with React and Next.js",
    date: "March 2025",
    excerpt: "Learn how to optimize your React apps using server-side rendering, dynamic routing, and structured metadata.",
    fullContent: `React apps can struggle with SEO unless optimized properly. Using frameworks like Next.js allows:
- Server-side rendering (SSR) for crawlable content.
- Meta tag management with Head component.
- Faster page load via static generation (SSG).
- Dynamic routing with cleaner URLs.`,
    color: "from-emerald-500 to-green-600"
  },
];

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="relative bg-[#0a0a0a] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts and insights on web development, design trends, and modern technology.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedBlog(blog)}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-xl bg-[#111111] border border-white/5 hover:border-purple-500/30 overflow-hidden transition-all duration-300 flex flex-col">
                {/* Top Accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${blog.color}`}></div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FaCalendar className="text-purple-400 w-3 h-3" />
                    <span className="text-xs">{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${blog.color} pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-[#0a0a0a] rounded-xl border border-white/10 max-w-2xl w-full max-h-[80vh] overflow-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Gradient */}
              <div className={`h-1 w-full bg-gradient-to-r ${selectedBlog.color}`}></div>

              <div className="p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FaTimes size={16} />
                </button>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <FaCalendar className="text-purple-400 w-3 h-3" />
                  <span>{selectedBlog.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedBlog.title}
                </h2>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">
                    {selectedBlog.fullContent}
                  </p>
                </div>

                {/* Close CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBlog(null)}
                  className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
