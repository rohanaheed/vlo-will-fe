"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import arrow from "../assets/images/ArrowLeft.svg"

function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // 'right' or 'left'

  const nextSlide = () => {
    if (!data || data.length === 0) return;
    setDirection('right');
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!data || data.length === 0) return;
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!data || data.length === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.length]); // Dependency on data.length to reset if data changes

  if (!data || data.length === 0) return null;

  const currentSlide = data[currentIndex];


  return (
    <div className='relative w-full h-full'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={currentSlide.image}
          alt="Testimonial Background"
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Content Overlay - Positioned at bottom */}
      <div className='absolute bottom-8 left-8 right-8 flex flex-col items-center gap-6'>
        <div
          key={currentIndex}
          className={`bg-black/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-2xl overflow-hidden relative group w-full ${direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
        >
          {/* Glass effect gradient - subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          {/* Quote */}
          <h2 className='relative text-2xl md:text-3xl font-semibold leading-tight mb-8 z-10'>
            &quot;{currentSlide.quote}&quot;
          </h2>

          <div className='relative flex justify-between z-10'>
            {/* Author Info */}
            <div>
              <h3 className='text-3xl font-semibold'>{currentSlide.author}</h3>
              <p className='text-white text-lg mt-3'>{currentSlide.role}</p>
              <p className='text-white text-base mt-1'>{currentSlide.location}</p>
            </div>

            {/* Right Side: Rating & Nav */}
            <div className='flex flex-col items-end justify-between gap-6'>
              {/* Stars */}
              <div className='flex gap-1 text-[#FDB022]'>
                {[...Array(currentSlide.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className='flex gap-4'>
                <button
                  onClick={prevSlide}
                  className='w-14 h-14 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/20 transition cursor-pointer'
                >
                  <Image src={arrow} alt="Previous" className="" width={24} height={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className='w-14 h-14 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/20 transition cursor-pointer'
                >
                  <Image src={arrow} alt="Next" className="rotate-180" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots - Moved Outside Container */}
        <div className='flex justify-center gap-3 z-10 items-center'>
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-[100px] ${index === currentIndex ? 'w-6 h-1.5 bg-[var(--color-main)] opacity-100' : 'w-1.5 h-1.5 bg-white/50 opacity-100'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
