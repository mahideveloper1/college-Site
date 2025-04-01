import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className=" w-full z-50 backdrop-blur-lg bg-white/30 shadow-lg transition-all duration-300 relative">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}


          {/* Hamburger Button */}
          <button
            className="text-black sm:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg sm:rounded-none text-[#040434] transition-all duration-300`}
          >
            {navItems.map((item, index) => (
              <div key={index} className="group relative">
                <button className="py-3 px-6 text-[#040434] font-semibold flex items-center justify-between transition-all duration-300 hover:text-[#dc2626]">
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
                    <div className="border-t-4 z-50 border-[#fa8334]"></div> {/* Top Border Line */}
                    {item.submenu.map((sub, subIndex) => (
                      <a 
                        key={subIndex} 
                        href={sub.link} 
                        className="block px-4 py-2 hover:text-[#fa8334] transition-all duration-300"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;