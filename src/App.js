import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
import FeaturedProjects from './components/FeaturedProjects';
import BlogSection from './pages/BlogSection';
import ClientLogos from './components/ClientLogos';
import ClientTestimonials from './components/ClientTestimonials';
import Footer from './components/Footer';
import AwardsRecognition from './components/AwardsRecognition';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import InteriorDesign from './pages/InteriorDesign';
import ResidentialDesign from './pages/ResidentialDesign';
import ProjectManagementConsultancy from './pages/ProjectManagementConsultancy';
import About from './pages/About';
import '@fontsource/montserrat';
import '@fontsource/merriweather';
import './index.css';
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EditBlog from "./pages/EditBlog";

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
  const token = localStorage.getItem("token");

  return (
    <div className="font-sans bg-beige text-dark">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/architectural-design" element={<ArchitecturalDesign />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path='/interior-design' element={<InteriorDesign />} />
        <Route path='/residential-design' element={<ResidentialDesign />} />
        <Route path="/project-management-consultancy" element={<ProjectManagementConsultancy />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={token ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={token ? <EditBlog /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
