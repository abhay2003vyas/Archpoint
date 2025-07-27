import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CompanyIntro from './components/CompanyIntro';
import VideoSection from './components/VideoSection';
import FeaturedProjects from './components/FeaturedProjects';
import BlogSection from './components/BlogSection';
import DesignExpertise from './components/DesignExpertise';
import ClientLogos from './components/ClientLogos';
import ClientTestimonials from './components/ClientTestimonials';
import Footer from './components/Footer';
import AwardsRecognition from './components/AwardsRecognition';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import InteriorDesign from './pages/InteriorDesign';
import ProjectManagementConsultancy from './pages/ProjectManagementConsultancy';
import About from './pages/About';
import '@fontsource/montserrat';
import '@fontsource/merriweather';
import './index.css';

const Home = () => (
  <>
    <VideoSection />
    <AwardsRecognition />
    <FeaturedProjects />
    <ClientLogos />
    <ClientTestimonials />
    <Footer />
  </>
);

function App() {
  return (
    <div className="font-sans bg-beige text-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architectural-design" element={<ArchitecturalDesign />} />
        <Route path="/about" element={<About />} />
        <Route path='/interior-design' element={<InteriorDesign />} />
        <Route path="/project-management-consultancy" element={<ProjectManagementConsultancy />} />
      </Routes>
    </div>
  );
}

export default App;
