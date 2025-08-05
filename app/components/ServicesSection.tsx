// components/ServicesSection.tsx
'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

// Define an interface for the shape of each service object
interface Service {
  title: string;
  description: string;
  color: string;
  textColor: string;
  icon: string;
}

const ServicesSection: FC = () => {
  // Explicitly type the state as an array of numbers
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const services: Service[] = [
    {
      title: 'DIY Activities',
      description: "Our Creation Station is filled with exciting options for 3 yr plus kids. With over 50 DIY Activities that lil' creators can make and take home.",
      color: 'bg-[#fff572]',
      textColor: 'text-[#231f20]',
      icon: '🎨',
    },
    {
      title: 'Kids Play Area',
      description: 'Happy Hive is a buzzing play zone for kids between 2-8 yrs. The playzone is especially designed to encourage kids to explore and understand.',
      color: 'bg-[#75c044]',
      textColor: 'text-white',
      icon: '🎪',
    },
    {
      title: 'Kids Salon & Spa',
      description: 'Exclusively for tiny tots and teens, ShortCuts is a spiffy salon and spa. We promise to wave our magic wand and make your precious little one feel like royalty.',
      color: 'bg-[#74dff6]',
      textColor: 'text-[#231f20]',
      icon: '✨',
    },
    {
      title: 'Birthday Parties',
      description: "Make your child's special day unforgettable with our themed birthday party packages. Complete with decorations, activities, and memories to last a lifetime.",
      color: 'bg-[#f05656]',
      textColor: 'text-white',
      icon: '🎂',
    },
    {
      title: 'Art Classes',
      description: 'Professional art instruction for children of all skill levels. From basic drawing to advanced techniques, we nurture artistic talent in a fun environment.',
      color: 'bg-[#8b6baf]',
      textColor: 'text-white',
      icon: '🖌️',
    },
    {
      title: 'Summer Camps',
      description: 'Engaging summer programs filled with creative activities, games, and learning experiences. Keep your children active and entertained during school breaks.',
      color: 'bg-[#fff572]',
      textColor: 'text-[#231f20]',
      icon: '☀️',
    },
  ];

  useEffect(() => {
    // Add type for the 'entries' parameter
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Assert target as HTMLElement to access dataset
            const target = entry.target as HTMLElement;
            const indexStr = target.dataset.index;
            
            // Ensure indexStr is not undefined before parsing
            if (indexStr) {
              const index = parseInt(indexStr, 10);
              setVisibleCards((prev) => [...new Set([...prev, index])]); // Use a Set to avoid duplicates
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff572] via-white to-[#74dff6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#231f20] mb-6 font-bebas tracking-wider">
            WHAT WE DO
          </h2>
          <p className="text-xl text-[#8b6baf] max-w-3xl mx-auto leading-relaxed font-twinkle">
            Discover our amazing range of services designed to spark creativity, joy, and unforgettable memories for children of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100 rotate-0'
                  : 'translate-y-10 opacity-0 rotate-3'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`${service.color} ${service.textColor} p-8 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-16 h-6 bg-yellow-200 opacity-70 rounded-sm"></div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 font-bebas tracking-wide">{service.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-6 font-twinkle">
                  {service.description}
                </p>
                <div className="text-center">
                  <button
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 font-twinkle ${
                      service.color === 'bg-[#fff572]' || service.color === 'bg-[#74dff6]'
                        ? 'bg-[#231f20] text-white hover:bg-[#8b6baf]'
                        : 'bg-white text-[#231f20] hover:bg-[#fff572]'
                    } transform hover:scale-105`}
                  >
                    Learn More
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 triangle-fold"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#8b6baf] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#f05656] opacity-10 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-0 w-20 h-20 rounded-full bg-[#75c044] opacity-10 animate-pulse animation-delay-2000"></div>
    </section>
  );
};

export default ServicesSection;
