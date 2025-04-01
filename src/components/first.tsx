import React, { useState, useEffect } from 'react';
import OxFooter from './Footer';
// import pic1 from '../assets/pic1.jpg';
import Navbar from './Navbar';
import { GraduationCap, Bell, Search, ExternalLink, ChevronDown, Users, Building2, School, Users2 } from 'lucide-react';
import Vc from './Vc';
import News from "./News"
import Study from './study';
import Testimonial from "./Testimonials"
import Stats from "./Stats"
import UniversityFacilities from './facilities';
import Header from './Header'


const Homepage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className=" text-white font-bold">
        {/* <Header></Header> */}
         <Header/>
        {/* Main Navigation Menu */}
        
        <Navbar></Navbar>
        {/* Bottom Navigation Links */}
        {/* <div className="bg-[#f7a840] border-t h-80 border-gray-700">
          <div className="container mx-auto flex justify-end">
            <div className="flex text-sm">
              <a href="#" className="py-2 px-4 hover:underline">Staff</a>
              <a href="#" className="py-2 px-4 hover:underline">PTSN students</a>
              <a href="#" className="py-2 px-4 hover:underline">Alumni</a>
              <a href="#" className="py-2 px-4 hover:underline">Local community</a>
            </div>
          </div>
        </div> */}
      </header>

      {/* Sticky Navbar on Scroll */}
      

      {/* FIXED: Hero Section / Image Slider */}
      <div className="relative w-full h-96 md:h-[500px] z-0 overflow-hidden">
        {/* Slider container */}
        <div className="">
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
                  className="w-full h-full object-cover relative "
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
        
        {/* Navigation Arrows - improved for better responsiveness */}
        <button 
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 md:p-4 z-20"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="text-2xl md:text-4xl text-white">‹</span>
        </button>
        <button 
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors rounded-full p-2 md:p-4 "
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="text-2xl md:text-4xl text-white">›</span>
        </button>
        
        {/* Slider Dots - improved positioning */}
        <div className="absolute bottom-4 right-0 left-0 flex justify-center md:justify-end md:right-8 md:left-auto space-x-2 ">
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

      <Vc></Vc>


      
      

      {/* News and Events Section */}
      <News></News>

      <Stats></Stats>

      <UniversityFacilities />


      

      {/* Studying at Oxford Section */}
      <Study></Study>

      <Testimonial></Testimonial>

      {/* Footer */}
      <OxFooter />
    </div>
  );
};

export default Homepage;