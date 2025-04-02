import React, { useState, useEffect } from 'react';
import { GraduationCap, ChevronRight, Menu } from 'lucide-react';

function Vc() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  return (
    <div className="min-h-screen relative overflow-hidden bg-amber-50/50 shadow-lg">
      {/* Decorative elements - scaled for responsiveness */}
      <div className="absolute -top-12 sm:-top-16 md:-top-24 -right-12 sm:-right-16 md:-right-24 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-24 -left-12 sm:-left-16 md:-left-24 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative">
        {/* VC Desk Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-16">
          {/* Left Column - Image and Pattern - Stacks on mobile */}
          <div className="relative w-full md:w-1/3 mb-8 md:mb-0">
            {/* Background Patterns - scaled for mobile */}
            <div className="absolute top-0 right-0 w-24 sm:w-36 md:w-52 h-24 sm:h-36 md:h-52 bg-yellow-400/30 opacity-50 transform translate-x-1/4 -translate-y-1/4 rounded-full"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-amber-500/30 opacity-50 rounded-full"></div>

            {/* Image Container - centralized on mobile */}
            <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-amber-400/20">
                <img
                  src="https://ptsnsuniversity.ac.in/website/Images/VCPTSNSU.jpg"
                  alt="Vice Chancellor"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-2xl"></div>
              </div>

              {/* Decorative Elements - scaled for mobile */}
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -right-3 sm:-right-4 md:-right-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-amber-500/30 rounded-full blur-lg"></div>
              <div className="absolute -top-3 sm:-top-4 md:-top-6 -left-3 sm:-left-4 md:-left-6 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-yellow-500/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-amber-200">
              {/* Title Section */}
              <div className="relative mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-2 md:mb-3">VC Desk</h2>
                <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
                <div className="absolute -top-5 sm:-top-8 md:-top-10 -left-5 sm:-left-8 md:-left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
              </div>

              {/* Greeting - responsive text size */}
              <h3 className="text-lg sm:text-xl md:text-2xl text-amber-800 font-serif italic mb-4 sm:mb-6 md:mb-8">
                Dear students, faculties and all stakeholders of the esteemed University,
              </h3>

              {/* Main Content - responsive text */}
              <div className="prose prose-sm sm:prose md:prose-lg text-amber-900/80 space-y-3 sm:space-y-4 md:space-y-6">
                <p className="leading-relaxed">
                  Our vision is to establish ourselves as a frontier and leading university 
                  for academic excellence and innovation. We are committed to being a flagship 
                  of research development that meets industry and national needs, all the while 
                  keeping students and excellence at the core.
                </p>
                {!isMobile && (
                  <p className="leading-relaxed">
                    At PTSN University, we strive to foster an environment that encourages critical thinking,
                    creativity, and ethical leadership. Our diverse academic programs are designed to equip
                    students with the knowledge and skills needed to excel in a rapidly changing global landscape.
                  </p>
                )}
              </div>

              {/* Signature Section */}
              <div className="pt-4 sm:pt-5 md:pt-6 border-t border-amber-200 mt-4 sm:mt-5 md:mt-6">
                <p className="text-amber-900 font-semibold">Sincerely,</p>
                <p className="text-amber-900 text-lg sm:text-xl font-bold">Prof. John Doe</p>
                <p className="text-amber-700 text-sm sm:text-base">Vice Chancellor</p>
              </div>

              {/* CTA Button - smaller on mobile */}
              <button className="group relative mt-4 sm:mt-6 md:mt-8 inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Read More
                <ChevronRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Vc;