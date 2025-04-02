import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { label: "Total Students", value: "50,000+", icon: "👨‍🎓" },
  { label: "Graduates", value: "30,000+", icon: "🎓" },
  { label: "Currently Enrolled", value: "20,000+", icon: "📚" },
  { label: "Scholarship Holders", value: "5,000+", icon: "🏆" },
  { label: "International Students", value: "3,000+", icon: "🌎" }
];

function Stats() {
  const [isPaused, setIsPaused] = useState(false);
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(2);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setScrollSpeed(mobile ? 1 : 2); // Slower scroll on mobile
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Animation for scrolling
  useEffect(() => {
    if (!isPaused && statsRef.current) {
      const interval = setInterval(() => {
        if (statsRef.current) {
          statsRef.current.scrollLeft += scrollSpeed; // Adjust speed based on device
          
          // Reset scroll position when it gets too far
          const containerWidth = statsRef.current.scrollWidth;
          const viewWidth = statsRef.current.offsetWidth;
          if (statsRef.current.scrollLeft > containerWidth - viewWidth) {
            statsRef.current.scrollLeft = 0;
          }
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isPaused, scrollSpeed]);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => {
      if (statsContainerRef.current) {
        observer.unobserve(statsContainerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={statsContainerRef}
      className={`relative w-full py-6 sm:py-8 md:py-12 bg-gradient-to-r from-amber-50 to-yellow-50 overflow-hidden transition-opacity shadow-lg duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-amber-300/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-yellow-300/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-amber-800">
          <span className="inline-block relative">
            University Stats
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
          </span>
        </h2>
        
        <div
          ref={statsRef}
          className="flex overflow-x-auto hide-scrollbar whitespace-nowrap space-x-3 sm:space-x-4 md:space-x-6 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
          onMouseEnter={() => setIsPaused(true)}
          onTouchStart={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)} // Resume after touch with delay
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the items to create seamless loop */}
          {[...statsData, ...statsData].map((stat, index) => (
            <div
              key={index}
              className="inline-block transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white border border-amber-200 text-amber-900 rounded-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-md hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 flex flex-col items-center min-w-[140px] sm:min-w-[180px] md:min-w-[220px]">
                <span className="text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-3">{stat.icon}</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-amber-700">{stat.value}</div>
                <div className="text-sm sm:text-base md:text-lg text-amber-600 text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation indicators */}
        <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 space-x-2">
          <button 
            className="w-6 sm:w-8 h-1 rounded-full bg-amber-200 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll left"
            onClick={() => {
              if (statsRef.current) {
                const scrollAmount = isMobile ? 150 : 300;
                statsRef.current.scrollLeft -= scrollAmount;
              }
            }}
          />
          <button 
            className="w-6 sm:w-8 h-1 rounded-full bg-amber-300 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll center"
            onClick={() => {
              if (statsRef.current) {
                statsRef.current.scrollLeft = (statsRef.current.scrollWidth - statsRef.current.clientWidth) / 2;
              }
            }}
          />
          <button 
            className="w-6 sm:w-8 h-1 rounded-full bg-amber-200 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll right"
            onClick={() => {
              if (statsRef.current) {
                const scrollAmount = isMobile ? 150 : 300;
                statsRef.current.scrollLeft += scrollAmount;
              }
            }}
          />
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx="true">{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Stats;