import React, { useState, useEffect } from 'react';
import OxFooter from './Footer';
// import pic1 from '../assets/pic1.jpg';

const Homepage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      <header className="bg-[#002147] text-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and University Name */}
          <div className="flex items-center">
            <img 
              src='https://ptsnsuniversity.ac.in/website/assets/images/resources/PTSNSU%20Website%202023.png'
              alt="PSNSU Logo" 
              className="h-24 w-auto mr-4" 
            />
            <div className="hidden lg:block">
              <div className="text-lg font-bold">पंडित एस. एन. शुक्ला विश्वविद्यालय, शहडोल, मध्य प्रदेश</div>
              <div className="text-lg font-semibold">Pandit S. N. Shukla University, Shahdol, M.P.</div>
            </div>
          </div>

          {/* Search Bar - Right aligned */}
          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-gray-800 px-4 py-1 rounded w-48"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Menu */}
        <div className="bg-[#002147] border-t border-gray-700 mt-2">
          <div className="container mx-auto">
            <nav className="flex justify-between">
              <div className="flex flex-wrap">
                {/* Main navigation items with dropdowns */}
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    ADMISSIONS
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
                
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    RESEARCH
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
                
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    NEWS & EVENTS
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
                
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    ABOUT
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
                
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    Colleges
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
                
                <div className="group relative">
                  <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
                    Divisions & departments
                    <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
                    {/* Dropdown content would go here */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Bottom Navigation Links */}
        <div className="bg-[#002147] border-t border-gray-700">
          <div className="container mx-auto flex justify-end">
            <div className="flex text-sm">
              <a href="#" className="py-2 px-4 hover:underline">Staff</a>
              <a href="#" className="py-2 px-4 hover:underline">PTSN students</a>
              <a href="#" className="py-2 px-4 hover:underline">Alumni</a>
              <a href="#" className="py-2 px-4 hover:underline">Local community</a>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navbar on Scroll */}
      <div className={`fixed top-0 left-0 right-0 bg-[#002147] text-white z-50 transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center">
            <div className="py-2 pr-4">
              <img 
                src='https://ptsnsuniversity.ac.in/website/assets/images/resources/PTSNSU%20Website%202023.png'
                alt="PSNSU Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="py-4 px-2 font-semibold hover:text-gray-300">ADMISSIONS</a>
              <a href="#" className="py-4 px-2 font-semibold hover:text-gray-300">RESEARCH</a>
              <a href="#" className="py-4 px-2 font-semibold hover:text-gray-300">NEWS & EVENTS</a>
              <a href="#" className="py-4 px-2 font-semibold hover:text-gray-300">ABOUT</a>
            </div>
          </nav>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="py-4 hover:text-gray-300">Staff</a>
            <a href="#" className="py-4 hover:text-gray-300">PTSN students</a>
            <a href="#" className="py-4 hover:text-gray-300">Alumni</a>
            <a href="#" className="py-4 hover:text-gray-300">Local community</a>
          </div>
        </div>
      </div>

      {/* FIXED: Hero Section / Image Slider */}
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
        
        {/* Navigation Arrows - improved for better responsiveness */}
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
        
        {/* Slider Dots - improved positioning */}
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

      {/* News and Events Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* NEWS Section */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">NEWS</h2>
                <a href="#" className="text-blue-600 hover:underline">All News</a>
              </div>
              
              {/* News Articles */}
              <div className="space-y-8">
                {/* News Article 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57' 
                      alt="TB Trial" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">PTSNUniversity launches first human aerosol TB challenge trial</h3>
                    <p className="text-gray-600 mb-2">27 MAR 2025</p>
                  </div>
                </div>

                {/* News Article 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/Chemistry%20Molecules%20Gold.jpg?itok=IfnaGTuZ'
                      alt="Fluoride Research" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Researchers develop innovative new method to recycle fluoride from long-lived 'forever chemicals'</h3>
                    <p className="text-gray-600 mb-2">27 MAR 2025</p>
                  </div>
                </div>

                {/* News Article 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/stoneham_360.jpg?itok=4O-_gjO_' 
                      alt="Church" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Building on expertise</h3>
                    <p className="text-sm mb-2">How the Churches Conservation Trust, in partnership with PTSNUniversity experts, is boosting its commercial and trading knowledge to bring about benefits for the heritage sector</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENTS Section */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-300 pt-8 lg:pt-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">EVENTS</h2>
                <a href="#" className="text-blue-600 hover:underline">All Events</a>
              </div>
              
              {/* Event Listings */}
              <div className="space-y-6">
                {/* Event 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-[#002147] text-white text-center p-2 w-16">
                    <div className="text-xl font-bold">29</div>
                    <div className="text-sm">MAR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Autism-Friendly Openings</h3>
                    <p className="mb-1">History of Science Museum</p>
                    <p className="text-gray-600 text-sm">29 MAR 2025</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-[#002147] text-white text-center p-2 w-16">
                    <div className="text-xl font-bold">02</div>
                    <div className="text-sm">APR</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">A conversation with Nicholas Kristof</h3>
                    <p className="mb-1">Blavatnik School of Government</p>
                    <p className="text-gray-600 text-sm">2 APR 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studying at Oxford Section */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#333333] mb-10">STUDYING AT PTSN</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Undergraduate admissions */}
            <div className="relative group overflow-hidden">
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_undergrad3.jpg'
                alt="Undergraduate students" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 p-4 group-hover:bg-[#002147] group-hover:bg-opacity-90 transition-colors duration-300">
                <a href="#" className="flex items-center justify-between">
                  <span className="text-xl font-semibold group-hover:text-white transition-colors duration-300">Undergraduate admissions</span>
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">›</span>
                </a>
              </div>
            </div>
            
            {/* Graduate admissions */}
            <div className="relative group overflow-hidden">
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_grad2.jpg' 
                alt="Graduate students" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 p-4 group-hover:bg-[#002147] group-hover:bg-opacity-90 transition-colors duration-300">
                <a href="#" className="flex items-center justify-between">
                  <span className="text-xl font-semibold group-hover:text-white transition-colors duration-300">Graduate admissions</span>
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">›</span>
                </a>
              </div>
            </div>
            
            {/* Continuing education */}
            <div className="relative group overflow-hidden">
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_conted2.jpg'  
                alt="Continuing education" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 p-4 group-hover:bg-[#002147] group-hover:bg-opacity-90 transition-colors duration-300">
                <a href="#" className="flex items-center justify-between">
                  <span className="text-xl font-semibold group-hover:text-white transition-colors duration-300">Continuing education</span>
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">›</span>
                </a>
              </div>
            </div>
            
            {/* Current Oxford students */}
            <div className="relative group overflow-hidden">
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_current2.jpg'  
                alt="Current Oxford students" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 p-4 group-hover:bg-[#002147] group-hover:bg-opacity-90 transition-colors duration-300">
                <a href="#" className="flex items-center justify-between">
                  <span className="text-xl font-semibold group-hover:text-white transition-colors duration-300">Current PTSN students</span>
                  <span className="text-2xl group-hover:text-white transition-colors duration-300">›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <OxFooter />
    </div>
  );
};

export default Homepage;