// components/ReviewsCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

// Define an interface for the structure of each review
interface Review {
  id: number;
  name: string;
  occupation: string;
  review: string;
  rating: number;
  image: string; // Placeholder for image path
}

const ReviewsCarousel: FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Apply the Review type to our data array
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      occupation: 'Software Engineer & Mother',
      review: "Celesta Fiesta is absolutely amazing! My 6-year-old daughter had the most wonderful time at their DIY activities session. The staff is so caring and creative. Highly recommend for any parent looking for quality entertainment for their kids.",
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      occupation: 'Marketing Manager & Father',
      review: "We celebrated our son&apos;s 7th birthday here and it was magical! The team went above and beyond to make it special. The play area is fantastic and the kids had a blast. Will definitely be coming back!",
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      id: 3,
      name: 'Anita Gupta',
      occupation: 'Teacher & Mother of Two',
      review: "The kids salon service is outstanding! My twins felt like little princesses. The products are safe and the stylists are so patient with children. It&apos;s the perfect place for a special treat.",
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      occupation: 'Business Owner & Father',
      review: "Exceptional service and wonderful facilities! The art classes have really helped develop my daughter&apos;s creativity. The instructors are professional and the environment is safe and fun.",
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      id: 5,
      name: 'Meera Patel',
      occupation: 'Doctor & Mother',
      review: "We love Celesta Fiesta! It&apos;s our go-to place for weekend fun with the kids. The variety of activities keeps children engaged for hours. Clean, safe, and absolutely delightful!",
      rating: 5,
      image: '/api/placeholder/80/80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#8b6baf] to-[#231f20] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-bebas tracking-wider">WHAT PARENTS SAY</h2>
          <p className="text-xl text-[#74dff6] max-w-3xl mx-auto font-twinkle">
            &quot;Don&apos;t just take our word for it - hear from the families who&apos;ve experienced the magic!&quot;
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review) => (
                    <div key={review.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto transform hover:scale-105 transition-all duration-300">
                        <div className="flex justify-center mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-[#fff572] fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-[#231f20] text-lg leading-relaxed mb-8 italic text-center font-twinkle">
                          &quot;{review.review}&quot;
                        </p>
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#74dff6] flex items-center justify-center mr-4 overflow-hidden">
                            <div className="w-12 h-12 rounded-full bg-[#8b6baf] flex items-center justify-center text-white font-bold text-lg font-bebas">
                              {review.name.charAt(0)}
                            </div>
                          </div>
                          <div className="text-center">
                            <h4 className="text-[#231f20] font-bold text-lg font-bebas tracking-wide">{review.name}</h4>
                            <p className="text-[#8b6baf] text-sm font-twinkle">{review.occupation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevReview}
            aria-label="Previous review"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? 'bg-[#fff572] scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#74dff6] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#fff572] opacity-10 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 right-0 w-20 h-20 rounded-full bg-[#75c044] opacity-10 animate-pulse animation-delay-2000"></div>
    </section>
  );
};

export default ReviewsCarousel;
