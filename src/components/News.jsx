import React, { useState, useEffect } from 'react';

function News() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size on component mount and resize
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

  // Sample news data
  const newsArticles = [
    {
      id: 1,
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57',
      title: 'PTSN University launches first human aerosol TB challenge trial',
      date: '27 MAR 2025',
      alt: 'TB Trial'
    },
    {
      id: 2,
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57',
      title: 'PTSN University launches first human aerosol TB challenge trial',
      date: '27 MAR 2025',
      alt: 'TB Trial'
    },
    {
      id: 3,
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57',
      title: 'PTSN University launches first human aerosol TB challenge trial',
      date: '27 MAR 2025',
      alt: 'TB Trial'
    }
  ];

  // Sample events data
  const events = [
    { 
      id: 1,
      date: '29', 
      month: 'MAR', 
      title: 'Autism-Friendly Openings', 
      location: 'History of Science Museum' 
    },
    { 
      id: 2,
      date: '02', 
      month: 'APR', 
      title: 'A conversation with Nicholas Kristof', 
      location: 'Blavatnik School of Government' 
    },
    { 
      id: 3,
      date: '15', 
      month: 'APR', 
      title: 'University Annual Convocation', 
      location: 'University Main Auditorium' 
    }
  ];

  return (
    <div className="min-h-[20rem] md:min-h-[30rem] lg:h-auto relative overflow-hidden bg-amber-50/60 p-3 sm:p-4 md:p-6 rounded-lg shadow-lg">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-40">
          <div className="absolute top-0 -left-4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
          <div className="absolute top-0 -right-4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
          <div className="absolute -bottom-8 left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 relative z-10">
        {/* NEWS Section */}
        <div className="w-full lg:w-1/2 p-3 sm:p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-amber-100">
          <div className="flex items-center justify-between mb-3 md:mb-6 border-b border-amber-200 pb-2 md:pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 hover:text-amber-600 transition duration-300">NEWS</h2>
            <a href="#" className="text-sm md:text-base text-amber-600 hover:text-amber-800 transition duration-300 hover:underline">All News</a>
          </div>

          {/* News Articles */}
          <div className="space-y-3 md:space-y-6 overflow-y-auto max-h-[20rem] sm:max-h-[24rem] md:max-h-[30rem] lg:max-h-none pr-1">
            {newsArticles.map((article) => (
              <div 
                key={article.id}
                className="flex flex-row gap-3 sm:gap-4 md:gap-6 bg-amber-50 hover:bg-amber-100/80 p-2 sm:p-3 md:p-4 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-amber-100"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.alt} 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 md:mb-2 text-amber-900 hover:text-amber-700 transition duration-300">{article.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-amber-700">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVENTS Section */}
        <div className="w-full lg:w-1/2 p-3 sm:p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-amber-100">
          <div className="flex items-center justify-between mb-3 md:mb-6 border-b border-amber-200 pb-2 md:pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 hover:text-amber-600 transition duration-300">EVENTS</h2>
            <a href="#" className="text-sm md:text-base text-amber-600 hover:text-amber-800 transition duration-300 hover:underline">All Events</a>
          </div>

          {/* Event Listings */}
          <div className="space-y-3 md:space-y-6 overflow-y-auto max-h-[20rem] sm:max-h-[24rem] md:max-h-[30rem] lg:max-h-none pr-1">
            {events.map((event) => (
              <div 
                key={event.id}
                className="flex gap-2 sm:gap-3 md:gap-4 bg-amber-50 hover:bg-amber-100/80 p-2 sm:p-3 md:p-4 rounded-lg transition-transform duration-300 transform hover:-translate-x-1 hover:shadow-lg border border-amber-100"
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-amber-600 to-yellow-500 text-white text-center p-1 sm:p-2 w-12 sm:w-14 md:w-16 rounded-lg transform transition-transform hover:scale-105 shadow-md">
                  <div className="text-base sm:text-lg md:text-xl font-bold">{event.date}</div>
                  <div className="text-xs sm:text-sm">{event.month}</div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 md:mb-1 text-amber-900 hover:text-amber-700 transition duration-300">{event.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base mb-0.5 md:mb-1 text-amber-800">{event.location}</p>
                  <p className="text-xs md:text-sm text-amber-700">{event.date} {event.month} 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;