import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyIntro from './components/CompanyIntro';
import VideoSection from './components/VideoSection';
import FeaturedProjects from './components/FeaturedProjects';
import AwardsSection from './components/AwardsSection';
import BlogSection from './components/BlogSection';
import PortfolioGallery from './components/PortfolioGallery';
import AboutUs from './components/AboutUs';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import '@fontsource/montserrat';
import '@fontsource/merriweather';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-beige text-dark">
      <Navbar />
      <HeroSection />
      <CompanyIntro />
      <VideoSection />
      <FeaturedProjects />
      <AwardsSection />
      <BlogSection />
      <PortfolioGallery />
      <AboutUs />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
