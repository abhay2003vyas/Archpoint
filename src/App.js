import React from 'react';
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
import '@fontsource/montserrat';
import '@fontsource/merriweather';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-beige text-dark">
      <Navbar />
      <VideoSection />
      <CompanyIntro />
      <AwardsRecognition/>
      <FeaturedProjects/>
      <ClientLogos />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}

export default App;
