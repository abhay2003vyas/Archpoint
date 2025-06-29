import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import logo from '../assets/logo.jpg';

const images = [
  require('../assets/img1.png'),
  require('../assets/img2.png'),
  require('../assets/img3.png'),
];

const HeroSection = () => (
  <section id="hero" className="relative h-[80vh] w-full">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      className="h-full"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`carousel-${idx}`} className="w-full  object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Logo overlay */}
    <img src={logo} alt="Arch Point Logo" className="absolute left-12 top-1/4 h-32 w-auto object-contain z-20" />
  </section>
);

export default HeroSection; 