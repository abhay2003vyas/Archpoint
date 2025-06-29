import React from 'react';
import logo from '../assets/logo.jpg';
import videoBg from '../assets/video.mp4';

const VideoSection = () => (
  <section className="relative h-[40vh] md:h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
    
    {/* Background video */}
    <video
      className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      src={videoBg}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Logo layered above the video */}
    <div className="mb-6 flex justify-center z-10">
      <img
        src={logo}
        alt="Arch Point Consultants Pvt. Ltd."
        className="h-28 w-auto object-contain rounded-md p-2"
      />
    </div>

  </section>
);

export default VideoSection;
