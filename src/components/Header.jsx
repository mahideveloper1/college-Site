import React, { useState, useEffect } from 'react';
import { GraduationCap, Bell, Search, ExternalLink, ChevronDown, Users, Building2, School, Users2, Menu } from 'lucide-react';
import Notify from './Notify';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check viewport width on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-amber-400 to-yellow-500 shadow-md">
        <div className="container mx-auto px-4 py-3">
          {/* Mobile Header */}
          {isMobile ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4u3nm1_7AX51zulS3t3TJbKj6aVmy68-lw&s" 
                  alt="University Logo" 
                  className="w-16 h-16 rounded"
                />
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-md bg-amber-500 hover:bg-amber-600 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-red-800" />
                </button>
              </div>
              
              {/* Collapsible content */}
              <div className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-center pb-4">
                  <h1 className="text-xl font-bold text-red-800">Pandit Shambhu Nath Shukla University, Shahdol</h1>
                  <h1 className="text-lg font-bold text-red-800 mt-1">पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म. प्र.)</h1>
                  
                  {/* NAAC Styled Text - Mobile */}
                  <div className="text-2xl font-bold text-red-800 my-3 tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    NAAC <span className="text-3xl">A+</span>
                  </div>
                  
                  <img 
                    src="https://jiwaji.edu/wp-content/uploads/2021/12/mybharatlogo.png.webp" 
                    alt="Bharat Logo"  
                    className="w-32 h-16 mx-auto mt-2 drop-shadow-[0_4px_3px_rgba(0,0,0,0.8)]" 
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Header */
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4u3nm1_7AX51zulS3t3TJbKj6aVmy68-lw&s" 
                  alt="University Logo" 
                  className="w-20 h-20 rounded"
                />
                <div className="mx-4 lg:mx-8">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800">Pandit Shambhu Nath Shukla University, Shahdol</h1>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-red-800">पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म. प्र.)</h1>
                </div>
              </div>
              
              {/* NAAC Styled Text - Desktop */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-800 mx-4 tracking-wider flex items-center" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                NAAC <span className="text-3xl md:text-4xl lg:text-5xl ml-1">A+</span>
              </div>
              
              <img 
                src="https://jiwaji.edu/wp-content/uploads/2021/12/mybharatlogo.png.webp" 
                alt="Bharat Logo"  
                className="w-32 md:w-40 h-16 md:h-20 drop-shadow-[0_4px_3px_rgba(0,0,0,0.8)]" 
              />
            </div>
          )}
        </div>
      </header>
      
      {/* Tablet view - Middle breakpoint */}
      <div className="lg:hidden md:block hidden bg-amber-100 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-red-800">Pandit Shambhu Nath Shukla University, Shahdol</h1>
              <h1 className="text-xl font-bold text-red-800 mt-1">पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म. प्र.)</h1>
            </div>
            
            {/* NAAC Styled Text - Tablet */}
            <div className="text-2xl font-bold text-red-800 mx-4 tracking-wider" 
              style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>
              NAAC <span className="text-3xl">A+</span>
            </div>
          </div>
        </div>
      </div>
      
      <Notify />
    </div>
  );
}

export default Header;