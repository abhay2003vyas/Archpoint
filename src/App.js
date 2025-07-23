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
import Projects from './pages/Architectural_Design'; // <-- new route page
import PMC from './pages/PMCPage';

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/pmc" element={<PMC />} />
      </Routes>
    </div>
  );
}

export default App;
