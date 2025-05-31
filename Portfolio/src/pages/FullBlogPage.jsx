import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  1: {
    title: "AI Integrated in Web Development",
    content: "Full article content about AI in web dev..."
  },
  2: {
    title: "Future of Frontend Frameworks",
    content: "Full article content about frontend..."
  },
  3: {
    title: "The Role of APIs in 2025",
    content: "Full article content about APIs..."
  }
};

const FullBlogPage = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <div></div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-700">{blog.content}</p>
    </div>
  );
};

export default FullBlogPage;
