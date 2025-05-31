import React, { useState } from 'react';

const blogs = [
  {
    title: 'AI Integration in Web Development',
    date: 'May 2025',
    excerpt:
      'Discover how AI is transforming web development through personalized UX, chatbots, intelligent code generation...',
    fullContent: `AI is revolutionizing web development by enabling personalized user experiences, automating repetitive tasks, and enhancing functionality with intelligent features. 
Key areas include:
- AI chatbots for real-time support.
- AI-powered code suggestions and auto-complete.
- Personalization using machine learning.
- Voice and image recognition integration.

AI tools like GitHub Copilot, ChatGPT, and TensorFlow.js are helping developers build smarter apps faster than ever.`,
  },
  {
    title: 'Top Web Design Trends in 2025',
    date: 'April 2025',
    excerpt:
      'Explore the latest design trends including glassmorphism, 3D elements, dark mode, and motion UI...',
    fullContent: `Web design in 2025 is all about user interaction and immersive experiences. Popular trends include:
- Glassmorphism with blurry glass-like backgrounds.
- 3D design elements for depth and realism.
- Motion UI and micro-animations.
- Voice UI and accessibility improvements.`,
  },
  {
    title: 'Boosting SEO with React and Next.js',
    date: 'March 2025',
    excerpt:
      'Learn how to optimize your React apps using server-side rendering, dynamic routing, and structured metadata...',
    fullContent: `React apps can struggle with SEO unless optimized properly. Using frameworks like Next.js allows:
- Server-side rendering (SSR) for crawlable content.
- Meta tag management with Head component.
- Faster page load via static generation (SSG).
- Dynamic routing with cleaner URLs.`,
  },
];

const BlogSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white" id="blog">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-Black mb-12">Latest Blogs</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-left"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-gray-700 font-medium mb-4">
                {blog.excerpt}
                {expandedIndex === index && (
                  <span className="block mt-4 text-gray-600 whitespace-pre-line">
                    {blog.fullContent}
                  </span>
                )}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-200"
              >
                {expandedIndex === index ? 'Show Less' : 'Read More →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


