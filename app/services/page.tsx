'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Sparkles } from 'lucide-react';

interface ServiceData {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  colorClass: string;
  bgColorClass: string;
  lightBgClass: string;
  emoji: string;
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "DIY Activities",
    description: "Creative hands-on projects that spark imagination and build confidence",
    fullDescription: "Our DIY activities are carefully designed to engage children in meaningful, hands-on learning experiences. From crafting colorful masterpieces to building innovative projects, each activity is tailored to develop fine motor skills, creativity, and problem-solving abilities. We provide all materials and expert guidance to ensure every child creates something they're truly proud of. These activities foster independence, boost self-confidence, and create lasting memories through the joy of making something unique with their own hands.",
    images: [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2", 
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
      "https://picsum.photos/400/300?random=5"
    ],
    colorClass: "text-celesta-yellow",
    bgColorClass: "bg-celesta-yellow",
    lightBgClass: "bg-yellow-100",
    emoji: "🎨"
  },
  {
    id: 2,
    title: "Kids Play Area",
    description: "Safe, supervised play spaces where friendship and fun come together",
    fullDescription: "Our vibrant kids play area is a wonderland of safe, age-appropriate activities designed to promote physical development, social interaction, and pure joy. With soft play structures, interactive games, and supervised activities, children can explore, climb, slide, and play in a secure environment. Our trained staff ensures every child feels included and engaged, while parents can relax knowing their little ones are in capable hands. The play area encourages teamwork, builds social skills, and provides endless entertainment for children of all ages.",
    images: [
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8", 
      "https://picsum.photos/400/300?random=9",
      "https://picsum.photos/400/300?random=10"
    ],
    colorClass: "text-celesta-green",
    bgColorClass: "bg-celesta-green",
    lightBgClass: "bg-green-100",
    emoji: "🎪"
  },
  {
    id: 3,
    title: "Kids Salon & Spa",
    description: "Professional pampering services designed especially for little ones",
    fullDescription: "Transform your child's grooming experience into a magical adventure at our specialized kids salon and spa. Our gentle, experienced stylists create a fun, comfortable environment where children can enjoy professional haircuts, styling, and spa treatments designed specifically for young clients. From trendy cuts to special occasion styles, manicures to relaxing mini-facials, we use only child-safe, premium products. Each service includes fun themes, entertainment, and treats to ensure your child leaves feeling confident, beautiful, and excited about their salon experience.",
    images: [
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=12",
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=14", 
      "https://picsum.photos/400/300?random=15"
    ],
    colorClass: "text-celesta-blue",
    bgColorClass: "bg-celesta-blue",
    lightBgClass: "bg-blue-100",
    emoji: "✨"
  },
  {
    id: 4,
    title: "Birthday Parties",
    description: "Unforgettable celebrations that make every birthday wish come true",
    fullDescription: "Create magical memories with our comprehensive birthday party packages that turn your child's special day into an extraordinary celebration. From themed decorations and entertainment to delicious treats and fun activities, we handle every detail so you can focus on enjoying the moment. Our party coordinators work with you to customize themes, organize age-appropriate games, and create an atmosphere of joy and excitement. Whether it's a princess party, superhero adventure, or creative arts celebration, we ensure every birthday child feels like the star of their own amazing story.",
    images: [
      "https://picsum.photos/400/300?random=16",
      "https://picsum.photos/400/300?random=17",
      "https://picsum.photos/400/300?random=18",
      "https://picsum.photos/400/300?random=19",
      "https://picsum.photos/400/300?random=20"
    ],
    colorClass: "text-celesta-red",
    bgColorClass: "bg-celesta-red",
    lightBgClass: "bg-red-100",
    emoji: "🎂"
  },
  {
    id: 5,
    title: "Art Classes",
    description: "Inspiring creativity through guided artistic exploration and expression",
    fullDescription: "Nurture your child's artistic talents in our structured yet flexible art classes, where creativity meets technique in a supportive learning environment. Our experienced art instructors guide children through various mediums including painting, drawing, sculpture, and mixed media projects. Each class is designed to build artistic skills progressively while encouraging personal expression and creative thinking. Students learn fundamental techniques, explore different styles, and develop their unique artistic voice. These classes boost confidence, improve focus, and provide a wonderful outlet for self-expression and emotional development.",
    images: [
      "https://picsum.photos/400/300?random=21",
      "https://picsum.photos/400/300?random=22", 
      "https://picsum.photos/400/300?random=23",
      "https://picsum.photos/400/300?random=24",
      "https://picsum.photos/400/300?random=25"
    ],
    colorClass: "text-celesta-purple",
    bgColorClass: "bg-celesta-purple",
    lightBgClass: "bg-purple-100",
    emoji: "🖌️"
  },
  {
    id: 6,
    title: "Summer Camps",
    description: "Adventure-packed programs filled with learning, friendship, and fun",
    fullDescription: "Our exciting summer camps offer the perfect blend of education, adventure, and friendship in a structured yet fun environment. Each week features different themes and activities including outdoor adventures, creative projects, sports, science experiments, and team-building exercises. Campers develop new skills, build lasting friendships, and gain independence while being supervised by our caring, experienced counselors. With age-appropriate activities for different groups, nutritious snacks, and engaging field trips, our summer camps create unforgettable memories and provide parents with peace of mind during school breaks.",
    images: [
      "https://picsum.photos/400/300?random=26",
      "https://picsum.photos/400/300?random=27",
      "https://picsum.photos/400/300?random=28",
      "https://picsum.photos/400/300?random=29", 
      "https://picsum.photos/400/300?random=30"
    ],
    colorClass: "text-celesta-yellow",
    bgColorClass: "bg-celesta-yellow",
    lightBgClass: "bg-orange-100",
    emoji: "🏕️"
  }
];

interface PolaroidCarouselProps {
  images: string[];
  title: string;
  colorClass: string;
  emoji: string;
}

const PolaroidCarousel: React.FC<PolaroidCarouselProps> = ({ images, title, colorClass, emoji }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-2"
            >
              <div className="bg-white p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105 rounded-lg border-4 border-white">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="mt-3 text-center">
                  <p className="text-lg font-bold text-gray-700 flex items-center justify-center gap-2">
                    <span className="text-2xl">{emoji}</span>
                    {title} #{index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg ${colorClass} border-2 border-current hover:scale-110`}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg ${colorClass} border-2 border-current hover:scale-110`}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 h-4 bg-white border-2 border-gray-400' 
                : 'w-4 h-4 bg-white/70 hover:bg-white border-2 border-transparent hover:scale-110'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Floating decoration components
const FloatingIcons = () => {
  const icons = [
    { Icon: Star, delay: '0s' },
    { Icon: Heart, delay: '1s' },
    { Icon: Sparkles, delay: '2s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <Icon
          key={index}
          className={`absolute text-white/30 animate-float`}
          style={{
            left: `${20 + index * 30}%`,
            top: `${10 + index * 20}%`,
            animationDelay: delay,
          }}
          size={32}
        />
      ))}
    </div>
  );
};

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-celesta overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-6xl animate-bounce-gentle">🌟</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-200">🎈</span>
            <span className="text-6xl animate-bounce-gentle animation-delay-400">🎊</span>
          </div>
          <h1 className="text-responsive-xl font-bold text-white mb-6 animate-fade-in-up text-shadow-lg">
            What We Do
          </h1>
          <p className="text-responsive text-white/95 mb-8 animate-fade-in-up animation-delay-200 font-semibold">
            🌈 Discover our amazing range of magical services designed to spark creativity, joy, and unforgettable memories! 🌈
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id}
                className={`${service.lightBgClass} rounded-3xl p-8 mb-12 shadow-xl border-4 border-white`}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Image Carousel */}
                  <div className="w-full lg:w-1/2 animate-fade-in-up">
                    <PolaroidCarousel 
                      images={service.images}
                      title={service.title}
                      colorClass={service.colorClass}
                      emoji={service.emoji}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2 animate-fade-in-up animation-delay-400">
                    <div className="max-w-lg mx-auto lg:mx-0 bg-white p-8 rounded-2xl shadow-lg border-4 border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{service.emoji}</span>
                        <h2 className={`text-responsive-lg font-bold ${service.colorClass}`}>
                          {service.title}
                        </h2>
                      </div>
                      
                      <div className={`inline-block px-4 py-2 ${service.bgColorClass} text-white rounded-full text-sm font-bold mb-4`}>
                        ⭐ Popular Choice!
                      </div>
                      
                      <p className="text-responsive text-gray-700 mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      
                      <button className={`inline-flex items-center gap-2 px-8 py-4 rounded-full ${service.bgColorClass} text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-4 border-white shadow-md`}>
                        <Heart size={20} className="fill-current" />
                        <span>Learn More</span>
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-purple-blue relative overflow-hidden">
        <FloatingIcons />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center space-x-4">
            <span className="text-5xl animate-bounce-gentle">🎉</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-200">🌟</span>
            <span className="text-5xl animate-bounce-gentle animation-delay-400">🎈</span>
          </div>
          
          <h2 className="text-responsive-lg font-bold text-white mb-6 text-shadow">
            Ready to Create Amazing Memories? 🌈
          </h2>
          <p className="text-responsive text-white/95 mb-8 font-semibold">
            Join us for an unforgettable experience filled with creativity, fun, and joy. Book your magical visit today! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-celesta-purple hover:bg-gray-100 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-4 border-white">
              <Star size={24} className="fill-current" />
              Book Your Adventure Now!
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 border-4 border-white text-white hover:bg-white hover:text-celesta-purple rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              <Heart size={24} />
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}