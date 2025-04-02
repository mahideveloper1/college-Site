import React, { useState, useEffect } from 'react';

function Study() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Study options data
  const studyOptions = [
    {
      id: 1,
      title: "Undergraduate Admissions",
      description: "Begin your academic journey with our comprehensive undergraduate programs",
      image: "https://www.ox.ac.uk/sites/files/oxford/st_ox_undergrad3.jpg",
      alt: "Undergraduate students"
    },
    {
      id: 2,
      title: "Graduate Admissions",
      description: "Advance your expertise with our specialized graduate programs",
      image: "https://www.ox.ac.uk/sites/files/oxford/st_ox_grad2.jpg",
      alt: "Graduate students"
    },
    {
      id: 3,
      title: "Continuing Education",
      description: "Lifelong learning opportunities for personal and professional growth",
      image: "https://www.ox.ac.uk/sites/files/oxford/st_ox_conted2.jpg",
      alt: "Continuing education"
    },
    {
      id: 4,
      title: "Current PTSN Students",
      description: "Resources and information for our current student community",
      image: "https://www.ox.ac.uk/sites/files/oxford/st_ox_current2.jpg",
      alt: "Current PTSN students"
    }
  ];

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
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="py-8 sm:py-12 md:py-16 lg:py-24 border-t border-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-800 mb-2 sm:mb-4 tracking-tight">
            STUDYING AT PTSN
            <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-amber-400 to-yellow-300 mt-1 sm:mt-2 rounded-full"></div>
          </h2>
          <p className="text-amber-700 mb-6 sm:mb-8 md:mb-12 max-w-3xl text-base sm:text-lg">
            Discover your academic journey through our diverse range of programs and opportunities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {studyOptions.map((option) => (
              <div 
                key={option.id}
                className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-amber-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
                <img 
                  src={option.image}
                  alt={option.alt} 
                  className="w-full h-48 sm:h-60 md:h-70 lg:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <a href="#" className="block" aria-label={`Learn more about ${option.title}`}>
                    <h3 className={`text-xl sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 delay-100`}>
                      {option.title}
                    </h3>
                    <p className={`text-gray-200 text-xs sm:text-sm ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 delay-200`}>
                      {option.description}
                    </p>
                    <span className="mt-2 sm:mt-3 md:mt-4 inline-block text-white text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-300">
                      Learn more ›
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;