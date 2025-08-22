'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection: FC = () => {
  const router=useRouter();
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src="/images/hero1.jpg"
        alt="Kahani Galore Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-bebas tracking-wider">
            Welcome to Kahani Galore
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-medium animate-fade-in-up animation-delay-200 font-twinkle">
            Where Magic Meets Creativity
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-twinkle">
            Creating unforgettable experiences for children through art, play, and imagination
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-600">
            <button className="bg-white text-[#8b6baf] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#fff572] hover:text-[#231f20] transition-all duration-300 transform hover:scale-105 shadow-lg font-twinkle" onClick={()=>router.push('/services')}>
              Explore Services
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#8b6baf] transition-all duration-300 transform hover:scale-105 font-twinkle">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;