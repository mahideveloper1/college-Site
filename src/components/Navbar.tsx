import { useState, useEffect } from "react";
import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      title: "Colleges", 
      submenu: [
        { label: "Science College", link: "#" },
        { label: "Arts College", link: "#" },
        { label: "Commerce College", link: "#" },
        { label: "Engineering & Technology", link: "#" },
        { label: "Medical College", link: "#" },
        { label: "Law College", link: "#" }
      ] 
    },
    { 
      title: "Divisions & Departments", 
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
    }
  ];

  return (
    <>
      {/* Original navbar (always visible) */}
      <nav className="w-full z-40 backdrop-blur-lg bg-white/30 shadow-lg transition-all duration-300 relative">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center py-4">
            {/* Placeholder for spacing */}
            <div className="w-10"></div>
            
            {/* Hamburger Button - Mobile only */}
            <button
              className="text-[#040434] sm:hidden focus:outline-none mr-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Main navigation links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } sm:flex flex-col sm:flex-row absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg sm:rounded-none text-[#040434]`}
            >
              {navItems.map((item, index) => (
                <div key={index} className="group relative">
                  <button className="py-2 px-4 text-[#040434] font-semibold flex items-center transition-all duration-300 hover:text-[#dc2626]">
                    {item.title}
                    {item.submenu.length > 0 && (
                      <svg
                        className="ml-2 h-4 w-3 fill-current transition-transform duration-300 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.submenu.length > 0 && (
                    <div className="hidden group-hover:flex flex-col absolute z-50 bg-white text-[#040434] shadow-lg min-w-max w-48 mt-1 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
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
                </div>
              ))}
            </div>
            
            {/* Search box */}
            <div className="ml-auto flex items-center">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="py-1 px-3 pr-8 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 text-sm text-black placeholder-black"
                />
                <svg 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" 
                  width="16" 
                  height="16" 
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
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center py-4">
            {/* Logo - only in sticky navbar */}
            <div className="flex-shrink-0 mr-6">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4u3nm1_7AX51zulS3t3TJbKj6aVmy68-lw&s" 
                alt="Logo" 
                className="h-14 w-auto"
              />
            </div>
            
            {/* Hamburger Button - Mobile only */}
            <button
              className="text-[#040434] sm:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Main navigation links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } sm:flex flex-col sm:flex-row absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg sm:rounded-none text-[#040434]`}
            >
              {navItems.map((item, index) => (
                <div key={index} className="group relative">
                  <button className="py-2 px-4 text-[#040434] font-semibold flex items-center transition-all duration-300 hover:text-[#dc2626]">
                    {item.title}
                    {item.submenu.length > 0 && (
                      <svg
                        className="ml-2 h-4 w-3 fill-current transition-transform duration-300 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.submenu.length > 0 && (
                    <div className="hidden group-hover:flex flex-col absolute z-50 bg-white text-[#040434] shadow-lg min-w-max w-48 mt-1 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
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
                </div>
              ))}
            </div>
            
            {/* Search box */}
            <div className="ml-auto flex items-center">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="py-1 px-3 pr-8 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 text-sm text-black placeholder-black"
                />
                <svg 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" 
                  width="16" 
                  height="16" 
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
    </>
  );
};

export default Navbar;