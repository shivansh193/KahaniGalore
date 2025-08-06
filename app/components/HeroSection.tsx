'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';
import Image from 'next/image';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const HeroSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: 'Welcome to Kahani Galore',
      subtitle: 'Where Magic Meets Creativity',
      description: 'Creating unforgettable experiences for children through art, play, and imagination',
      image: '/images/hero1.jpg',
    },
    {
      title: 'DIY Activities & More',
      subtitle: "Unleash Your Child's Creativity",
      description: 'Over 50 exciting DIY activities designed to inspire and educate',
      image: '/images/hero2.jpg',
    },
    {
      title: 'Professional Kids Salon',
      subtitle: 'Pampering for Little Ones',
      description: 'The only professional kids salon in Gurgaon with SLS and paraben-free products',
      image: '/images/hero3.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-bebas tracking-wider">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-medium animate-fade-in-up animation-delay-200 font-twinkle">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-twinkle">
                {slide.description}
              </p>
              <div className="space-x-4 animate-fade-in-up animation-delay-600">
                <button className="bg-white text-[#8b6baf] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#fff572] hover:text-[#231f20] transition-all duration-300 transform hover:scale-105 shadow-lg font-twinkle">
                  Explore Services
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#8b6baf] transition-all duration-300 transform hover:scale-105 font-twinkle">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
