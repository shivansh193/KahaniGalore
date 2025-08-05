// components/PhotoGallery.tsx
'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

// Define an interface for the shape of each image object
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const PhotoGallery: FC = () => {
  // Type the state to accept a GalleryImage object or null
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // Apply the GalleryImage type to the array
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/api/placeholder/400/300", alt: "DIY Art Activity", category: "Activities" },
    { id: 2, src: "/api/placeholder/400/300", alt: "Kids Playing", category: "Play Area" },
    { id: 3, src: "/api/placeholder/400/300", alt: "Birthday Party", category: "Parties" },
    { id: 4, src: "/api/placeholder/400/300", alt: "Salon Service", category: "Salon" },
    { id: 5, src: "/api/placeholder/400/300", alt: "Art Class", category: "Classes" },
    { id: 6, src: "/api/placeholder/400/300", alt: "Happy Children", category: "Activities" },
    { id: 7, src: "/api/placeholder/400/300", alt: "Creative Workshop", category: "Workshops" },
    { id: 8, src: "/api/placeholder/400/300", alt: "Summer Camp", category: "Camps" },
    { id: 9, src: "/api/placeholder/400/300", alt: "Face Painting", category: "Activities" },
    { id: 10, src: "/api/placeholder/400/300", alt: "Group Fun", category: "Play Area" },
    { id: 11, src: "/api/placeholder/400/300", alt: "Craft Making", category: "DIY" },
    { id: 12, src: "/api/placeholder/400/300", alt: "Celebration", category: "Parties" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const indexStr = target.dataset.index;
            if (indexStr) {
              const index = parseInt(indexStr, 10);
              setVisibleImages((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Type the image parameter for the function
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#74dff6] via-white to-[#75c044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#231f20] mb-6 font-bebas tracking-wider">OUR GALLERY</h2>
          <p className="text-xl text-[#8b6baf] max-w-3xl mx-auto font-twinkle">
            Take a peek into the magical moments and joyful experiences we create every day
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              data-index={index}
              className={`gallery-item transform transition-all duration-700 ${
                visibleImages.includes(index)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-[#8b6baf] to-[#74dff6] flex items-center justify-center">
                  <div className="w-full h-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold text-lg p-2 text-center">
                    {image.alt}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#fff572] text-[#231f20] px-3 py-1 rounded-full text-sm font-semibold font-twinkle">
                  {image.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-bold text-lg mb-1 font-bebas tracking-wide">{image.alt}</h4>
                  <p className="text-sm opacity-90 font-twinkle">Click to view larger</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#8b6baf] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#231f20] transition-all duration-300 transform hover:scale-105 shadow-lg font-twinkle">
            View More Photos
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal} // Close modal on overlay click
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside modal */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#231f20] hover:bg-[#fff572] transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gradient-to-br from-[#8b6baf] to-[#74dff6] p-4 rounded-2xl">
              <div className="aspect-video bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white font-bold text-2xl p-4 text-center">
                {selectedImage.alt}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl font-bebas tracking-wide">{selectedImage.alt}</h3>
                <p className="text-[#fff572] mt-2 font-twinkle">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#f05656] opacity-10 animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-[#8b6baf] opacity-10 animate-bounce animation-delay-1000"></div>
    </section>
  );
};

export default PhotoGallery;
