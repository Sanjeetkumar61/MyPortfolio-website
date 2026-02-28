import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaClock } from 'react-icons/fa';

const blogData = {
  1: {
    title: "AI Integrated in Web Development",
    date: "Dec 2024",
    readTime: "5 min read",
    content: "Artificial Intelligence is revolutionizing the way we build web applications. From intelligent code completion to automated testing and personalized user experiences, AI is becoming an essential part of modern web development workflows. This article explores the latest AI tools and techniques that developers can leverage to build smarter, more efficient web applications."
  },
  2: {
    title: "Future of Frontend Frameworks",
    date: "Nov 2024",
    readTime: "7 min read",
    content: "The frontend ecosystem continues to evolve at a rapid pace. With the rise of React Server Components, Astro's island architecture, and Qwik's resumability, we're seeing a paradigm shift in how we think about client-side rendering. This article dives deep into the emerging trends and what they mean for the future of web development."
  },
  3: {
    title: "The Role of APIs in 2025",
    date: "Oct 2024",
    readTime: "6 min read",
    content: "APIs are the backbone of modern software architecture. As we move into 2025, GraphQL continues to gain adoption, REST remains relevant, and new patterns like tRPC are emerging for type-safe API communication. Learn how to choose the right API strategy for your next project."
  }
};

const FullBlogPage = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-2">
              <FaCalendar className="text-purple-400" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="text-purple-400" />
              {blog.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </motion.div>

        {/* Gradient Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 origin-left"
        ></motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111111] p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {blog.content}
          </p>
        </motion.article>
      </div>
    </div>
  );
};

export default FullBlogPage;
