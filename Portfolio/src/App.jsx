 import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/Hero/HeroSection'
import AboutSection from './Components/AboutSection/AboutSection'
import SkillsSection from './Components/SkillsSection/SkillsSection'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import BlogSection from './Components/BlogSection/BlogSection'
import FullBlogPage from './pages/FullBlogPage';
import ContactSection from './Components/ContactSection/ContactSection'
import FooterSection from './Components/FooterSection/FooterSection'



 
 
 const App = () => {
   return (
     <div>
       <Navbar/>
       <HeroSection/>
       <AboutSection/>
       <SkillsSection/>
       <ProjectSection/>
       <BlogSection/>
       <FullBlogPage/>
       <ContactSection/>
       <FooterSection/>


         
     </div>
   )
 }
 
 export default App
 