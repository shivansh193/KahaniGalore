// components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

// Define an interface for the shape of each slide object
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string; // e.g., "from-[#8b6baf] to-[#74dff6]"
}

const HeroSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Apply the Slide interface to our array for type safety
  const slides: Slide[] = [
    {
      title: 'Welcome to Celesta Fiesta',
      subtitle: 'Where Magic Meets Creativity',
      description: 'Creating unforgettable experiences for children through art, play, and imagination',
      bgColor: 'from-[#8b6baf] to-[#74dff6]',
    },
    {
      title: 'DIY Activities & More',
      subtitle: "Unleash Your Child's Creativity",
      description: 'Over 50 exciting DIY activities designed to inspire and educate',
      bgColor: 'from-[#75c044] to-[#fff572]',
    },
    {
      title: 'Professional Kids Salon',
      subtitle: 'Pampering for Little Ones',
      description: 'The only professional kids salon in Gurgaon with SLS and paraben-free products',
      bgColor: 'from-[#f05656] to-[#8b6baf]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // TypeScript knows 'prev' is a number and 'slides.length' is a number
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#fff572] opacity-20 animate-bounce animation-delay-1000"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-[#75c044] opacity-30 animate-bounce animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-[#f05656] opacity-25 animate-bounce animation-delay-3000"></div>
    </div>
  );
};

export default HeroSection;
