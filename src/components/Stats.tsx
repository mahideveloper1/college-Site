import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { label: "Total Students", value: "50,000+", icon: "👨‍🎓" },
  { label: "Graduates", value: "30,000+", icon: "🎓" },
  { label: "Currently Enrolled", value: "20,000+", icon: "📚" },
  { label: "Scholarship Holders", value: "5,000+", icon: "🏆" },
  { label: "International Students", value: "3,000+", icon: "🌎" }
];

const Stats = () => {
  const [isPaused, setIsPaused] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Animation for scrolling
  useEffect(() => {
    if (!isPaused && statsRef.current) {
      const interval = setInterval(() => {
        if (statsRef.current) {
          statsRef.current.scrollLeft += 2; // Adjust speed here
          
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
  }, [isPaused]);

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
      className={`relative w-full py-12 bg-gradient-to-r from-amber-50 to-yellow-50 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-300/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-8 text-amber-800">
          <span className="inline-block relative">
            University Stats
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
          </span>
        </h2>
        
        <div
          ref={statsRef}
          className="flex overflow-x-auto hide-scrollbar whitespace-nowrap space-x-6 px-6 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the items to create seamless loop */}
          {[...statsData, ...statsData].map((stat, index) => (
            <div
              key={index}
              className="inline-block transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white border border-amber-200 text-amber-900 rounded-xl px-8 py-6 shadow-md hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 flex flex-col items-center min-w-[220px]">
                <span className="text-4xl mb-3">{stat.icon}</span>
                <div className="text-3xl font-bold mb-2 text-amber-700">{stat.value}</div>
                <div className="text-lg text-amber-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          <button 
            className="w-8 h-1 rounded-full bg-amber-200 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll left"
            onClick={() => {
              if (statsRef.current) {
                statsRef.current.scrollLeft -= 300;
              }
            }}
          />
          <button 
            className="w-8 h-1 rounded-full bg-amber-300 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll center"
            onClick={() => {
              if (statsRef.current) {
                statsRef.current.scrollLeft = (statsRef.current.scrollWidth - statsRef.current.clientWidth) / 2;
              }
            }}
          />
          <button 
            className="w-8 h-1 rounded-full bg-amber-200 hover:bg-amber-400 transition-colors duration-300"
            aria-label="Scroll right"
            onClick={() => {
              if (statsRef.current) {
                statsRef.current.scrollLeft += 300;
              }
            }}
          />
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Stats;