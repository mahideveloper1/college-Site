import { useState, useEffect } from "react";
import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dropdown for mobile view
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('mobile-menu');
      if (isOpen && navbar && !navbar.contains(event.target) && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Navbar Items with Custom Dropdown Menus
  const navItems = [
    { 
      title: "Home", 
      submenu: [
        { label: "Welcome", link: "#" },
        { label: "Campus Tour", link: "#" },
        { label: "Administration", link: "#" },
        { label: "Contact Us", link: "#" },
        { label: "FAQ", link: "#" },
        { label: "Student Portal", link: "#" }
      ] 
    },
    { 
      title: "Admissions", 
      submenu: [
        { label: "Undergraduate", link: "#" },
        { label: "Postgraduate", link: "#" },
        { label: "PhD Admissions", link: "#" },
        { label: "Scholarships", link: "#" },
        { label: "International Students", link: "#" },
        { label: "Application Process", link: "#" }
      ] 
    },
    { 
      title: "Research", 
      submenu: [
        { label: "Publications", link: "#" },
        { label: "Projects", link: "#" },
        { label: "Funding", link: "#" },
        { label: "Research Centers", link: "#" },
        { label: "Collaborations", link: "#" },
        { label: "Conferences", link: "#" }
      ] 
    },
    { 
      title: "News & Events", 
      submenu: [
        { label: "Latest News", link: "#" },
        { label: "Upcoming Events", link: "#" },
        { label: "Press Releases", link: "#" },
        { label: "Media Coverage", link: "#" },
        { label: "Newsletter", link: "#" },
        { label: "Announcements", link: "#" }
      ] 
    },
    { 
      title: "About", 
      submenu: [
        { label: "Our History", link: "#" },
        { label: "Leadership", link: "#" },
        { label: "Mission & Vision", link: "#" },
        { label: "Accreditation", link: "#" },
        { label: "Campus Facilities", link: "#" },
        { label: "Alumni", link: "#" }
      ] 
    },
    { 
      title: "Divisions", 
      submenu: [
        { label: "Science", link: "#" },
        { label: "Arts", link: "#" },
        { label: "Commerce", link: "#" },
        { label: "Engineering", link: "#" },
        { label: "Medical", link: "#" },
        { label: "Law", link: "#" }
      ] 
    },
    { 
      title: "Student Life", 
      submenu: [
        { label: "Campus Facilities", link: "#" },
        { label: "Student Organizations", link: "#" },
        { label: "Sports & Recreation", link: "#" },
        { label: "Cultural Activities", link: "#" },
        { label: "Hostel & Accommodation", link: "#" },
        { label: "Career & Placements", link: "#" }
      ] 
    },
    { 
      title: "Info", 
      submenu: [
        { label: "Time Table", link: "#" },
        { label: "RTI Cell", link: "#" },
        { label: "Tender Notice", link: "#" },
        { label: "Tender List", link: "#" },
        { label: "Newsletter", link: "#" },
      ] 
    },
  ];

  return (
    <>
      {/* Original navbar (always visible) */}
      <nav className="w-full z-40 backdrop-blur-lg bg-white/30 shadow-lg transition-all duration-300 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Placeholder for spacing on desktop */}
            <div className="hidden md:block w-10"></div>
            
            {/* Hamburger Button - Mobile only */}
            <button
              className="text-[#040434] md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Main navigation links */}
            <div
              id="mobile-menu"
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-b-lg md:rounded-none text-[#040434] z-50`}
            >
              {navItems.map((item, index) => (
                <div key={index} className="group relative border-b md:border-b-0 border-gray-100 last:border-b-0">
                  <div 
                    className={`flex justify-between items-center py-3 px-4 md:py-2 md:px-3 lg:px-4 text-[#040434] font-semibold transition-all duration-300 hover:text-[#dc2626] ${isMobile ? 'cursor-pointer' : ''}`}
                    onClick={() => isMobile && toggleDropdown(index)}
                  >
                    <span>{item.title}</span>
                    {item.submenu.length > 0 && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        } ${!isMobile ? 'group-hover:rotate-180' : ''}`}
                      />
                    )}
                  </div>

                  {/* Desktop Dropdown Menu */}
                  {!isMobile && item.submenu.length > 0 && (
                    <div className="hidden group-hover:flex flex-col absolute z-50 bg-white text-[#040434] shadow-lg min-w-max w-48 mt-0 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 left-0">
                      <div className="border-t-4 z-50 border-amber-500"></div>
                      {item.submenu.map((sub, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={sub.link} 
                          className="block px-4 py-2 hover:bg-amber-100 hover:text-amber-700 transition-all duration-300"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Mobile Dropdown Menu */}
                  {isMobile && item.submenu.length > 0 && (
                    <div 
                      className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                        activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={sub.link} 
                          className="block px-6 py-2 hover:bg-amber-100 hover:text-amber-700 transition-all duration-300 text-sm border-l-2 border-amber-300"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Search box */}
            <div className="flex items-center">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="py-1 px-3 pr-8 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 text-xs md:text-sm text-black placeholder-black w-24 md:w-auto"
                />
                <svg 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" 
                  width="14" 
                  height="14" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sticky navbar (appears on scroll) */}
      <nav 
        className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 transform ${
          scrolled 
            ? "translate-y-0 bg-gradient-to-r from-amber-400/95 to-yellow-500/95 shadow-lg" 
            : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 md:py-3">
            {/* Logo - only in sticky navbar */}
            <div className="flex-shrink-0 mr-2 md:mr-6">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4u3nm1_7AX51zulS3t3TJbKj6aVmy68-lw&s" 
                alt="Logo" 
                className="h-10 w-auto md:h-12 lg:h-14"
              />
            </div>
            
            {/* Hamburger Button - Mobile only */}
            <button
              className="text-[#040434] md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Main navigation links - Hidden on smallest screens, shown on scroll for larger screens */}
            <div className="hidden md:flex overflow-x-auto no-scrollbar space-x-1 lg:space-x-2 py-1">
              {navItems.map((item, index) => (
                <div key={index} className="group relative whitespace-nowrap">
                  <div className="py-2 px-2 lg:px-3 text-[#040434] font-semibold text-sm lg:text-base flex items-center transition-all duration-300 hover:text-[#dc2626]">
                    <span>{item.title}</span>
                    {item.submenu.length > 0 && (
                      <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {item.submenu.length > 0 && (
                    <div className="hidden group-hover:flex flex-col absolute z-50 bg-white text-[#040434] shadow-lg min-w-max w-48 mt-0 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 left-0">
                      <div className="border-t-4 z-50 border-amber-500"></div>
                      {item.submenu.map((sub, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={sub.link} 
                          className="block px-4 py-2 hover:bg-amber-100 hover:text-amber-700 transition-all duration-300 text-sm"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Search box */}
            <div className="flex items-center">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="py-1 px-3 pr-8 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 text-xs md:text-sm text-black placeholder-black w-24 md:w-auto"
                />
                <svg 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" 
                  width="14" 
                  height="14" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Mobile dropdown for sticky navbar - only shown when scrolled and menu is open */}
          <div 
            className={`md:hidden ${isOpen && scrolled ? 'block' : 'hidden'} bg-white rounded-b-lg shadow-lg overflow-hidden transition-all duration-300`}
          >
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <div 
                  className="flex justify-between items-center py-3 px-4 text-[#040434] font-semibold cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.title}</span>
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                {/* Mobile Dropdown Menu Items */}
                <div 
                  className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                    activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.submenu.map((sub, subIndex) => (
                    <a 
                      key={subIndex} 
                      href={sub.link} 
                      className="block px-6 py-2 hover:bg-amber-100 hover:text-amber-700 transition-all duration-300 text-sm border-l-2 border-amber-300"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;