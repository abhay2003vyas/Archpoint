import React from 'react';
import logo from '../assets/logo.jpg';
import videoBg from '../assets/video.mp4';

const VideoSection = () => (
  <section
    
    className="relative h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden"
  >
    <video
    id="video-section"
      className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      src={videoBg}
      autoPlay
      loop
      muted
      playsInline
    />
  </section>
);

export default VideoSection;