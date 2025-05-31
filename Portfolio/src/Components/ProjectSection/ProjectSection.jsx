
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React and Tailwind CSS.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack shopping app using MERN stack.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Blog Platform',
    description: 'Responsive blog site with rich text editor and SEO features.',
    link: 'https://your-blog-link.com',
  },
  {
    title: 'Weather App',
    description: 'Weather forecast app using OpenWeather API.',
    link: 'https://your-weather-link.com',
  },
];

const ProjectSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-200" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12">
          My Projects
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-tr from-pink-500 via-blue-500 to-yellow-500 text-white rounded-2xl shadow-2xl p-8 h-80 flex flex-col justify-between transition-transform duration-300 hover:scale-95 hover:shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold mb-2 gap-4">{project.title}</h3>
                  <p className="text-md font-medium mb-4">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-white text-pink-600 font-semibold px-6 py-2 rounded-lg hover:bg-pink-100 transition-all duration-300"
                >
                  Live Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
