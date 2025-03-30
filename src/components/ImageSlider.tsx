import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Images for slider
  const sliderImages = [
    {
      src: 'https://ptsnsuniversity.ac.in/web-admin/ptsn_home/slider_img/fzG0nmJf3NHv.jpg',
      alt: 'Modi Image',
      title: "WELCOME TO PANDIT S. N. SHUKLA UNIVERSITY",
      subtitle: "Take a look at which graduate courses are still accepting applications for entry in 2025–26"
    },
    {
      src: 'https://ptsnsuniversity.ac.in/web-admin/ptsn_home/slider_img/collage.jpg',
      alt: 'College Collage',
      title: "DISCOVER OUR ACADEMIC EXCELLENCE",
      subtitle: "Join our diverse community of scholars and researchers making a difference"
    }
  ];
  
  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };
  
  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Slider container */}
      <div className="absolute inset-0">
        {sliderImages.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image container with proper styling */}
            <div className="w-full h-full relative">
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://via.placeholder.com/1600x800?text=Image+Not+Found';
                }}
              />
              
              {/* Text Overlay with improved gradient background */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl max-w-3xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 md:p-4 z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="text-2xl md:text-4xl text-white">‹</span>
      </button>
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 md:p-4 z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="text-2xl md:text-4xl text-white">›</span>
      </button>
      
      {/* Slider Dots */}
      <div className="absolute bottom-4 right-0 left-0 flex justify-center md:justify-end md:right-8 md:left-auto space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button 
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;