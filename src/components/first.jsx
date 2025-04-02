import React, { useState, useEffect, useRef } from 'react';
import OxFooter from './Footer';
import Navbar from './Navbar';
import { GraduationCap, Bell, Search, ExternalLink, ChevronDown, Users, Building2, School, Users2 } from 'lucide-react';
import Vc from './Vc';
import News from "./News";
import Study from './study';
import Testimonial from "./Testimonials";
import Stats from "./Stats";
import UniversityFacilities from './facilities';
import Header from './Header';

function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef(null);
  const sliderContainerRef = useRef(null);
  
  // Check screen size on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Images for slider
  const sliderImages = [
    {
      src: 'https://ptsnsuniversity.ac.in/web-admin/ptsn_home/slider_img/fzG0nmJf3NHv.jpg',
      alt: 'Modi Image',
      title: "WELCOME TO PANDIT S. N. SHUKLA UNIVERSITY",
      subtitle: "Take a look at which graduate courses are still accept applications for entry 2025–26"
    },
    {
      src: 'https://ptsnsuniversity.ac.in/web-admin/ptsn_home/slider_img/collage.jpg',
      alt: 'College Collage',
      title: "DISCOVER OUR ACADEMIC EXCELLENCE",
      subtitle: "Join our diverse community of scholars and researchers making a difference"
    }
  ];
  
  // Effect to detect scrolling for the sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };
  
  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds with pause on interaction
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };
    
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    
    // Start autoplay
    startAutoplay();
    
    // Pause autoplay when container is hovered or touched
    const sliderContainer = sliderContainerRef.current;
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoplay);
      sliderContainer.addEventListener('mouseleave', startAutoplay);
      sliderContainer.addEventListener('touchstart', stopAutoplay);
      sliderContainer.addEventListener('touchend', () => {
        // Delay restart to avoid immediate advance after touch
        setTimeout(startAutoplay, 1000);
      });
    }
    
    // Clean up
    return () => {
      stopAutoplay();
      if (sliderContainer) {
        sliderContainer.removeEventListener('mouseenter', stopAutoplay);
        sliderContainer.removeEventListener('mouseleave', startAutoplay);
        sliderContainer.removeEventListener('touchstart', stopAutoplay);
        sliderContainer.removeEventListener('touchend', startAutoplay);
      }
    };
  }, [currentSlide]);

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  // Preload images for smoother transitions
  useEffect(() => {
    sliderImages.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="text-white font-bold">
        <Header />
        <Navbar />
      </header>

      {/* Hero Section / Image Slider */}
      <div 
        ref={sliderContainerRef}
        className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] z-0 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider container */}
        <div className="h-full">
          {sliderImages.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
            >
              {/* Image container with proper styling */}
              <div className="w-full h-full relative">
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover relative"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://via.placeholder.com/1600x800?text=Image+Not+Found';
                  }}
                />
                
                {/* Text Overlay with improved gradient background */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows - improved for better responsiveness */}
        {!isMobile && (
          <>
            <button 
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 z-20"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">‹</span>
            </button>
            <button 
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 z-20"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">›</span>
            </button>
          </>
        )}
        
        {/* Slider Dots - improved positioning */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-0 left-0 flex justify-center md:justify-end md:right-6 lg:right-8 md:left-auto space-x-2 z-20">
          {sliderImages.map((_, index) => (
            <button 
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Main content sections */}
      <div className="flex flex-col space-y-2 sm:space-y-4 md:space-y-8 lg:space-y-12">
        <Vc />
        <News />
        <Stats />
        <UniversityFacilities />
        <Study />
        <Testimonial />
      </div>

      {/* Footer */}
      <OxFooter />
    </div>
  );
}

export default Homepage;