import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from './BlogSection';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <div className="p-6 text-center">Blog not found</div>;

  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
        <p className="text-gray-800 leading-relaxed">{blog.content}</p>
        <Link
          to="/#blog"
          className="inline-block mt-8 text-indigo-600 hover:text-indigo-800 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
