import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <>
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
        <MainNavigation />
        
        {/* Bottom Navigation Links */}
        <BottomNavLinks />
      </header>

      {/* Sticky Navbar on Scroll */}
      <StickyNavbar isScrolled={isScrolled} />
    </>
  );
};

const MainNavigation = () => {
  return (
    <div className="bg-[#002147] border-t border-gray-700 mt-2">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <div className="flex flex-wrap">
            {/* Main navigation items with dropdowns */}
            <NavItem label="ADMISSIONS" />
            <NavItem label="RESEARCH" />
            <NavItem label="NEWS & EVENTS" />
            <NavItem label="ABOUT" />
            <NavItem label="Colleges" />
            <NavItem label="Divisions & departments" />
          </div>
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ label }) => {
  return (
    <div className="group relative">
      <button className="py-4 px-4 text-white font-semibold hover:bg-blue-900 flex items-center">
        {label}
        <svg className="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="hidden group-hover:block absolute z-10 bg-[#002147] shadow-lg min-w-max">
        {/* Dropdown content would go here */}
      </div>
    </div>
  );
};

const BottomNavLinks = () => {
  return (
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
  );
};

const StickyNavbar = ({ isScrolled }) => {
  return (
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
  );
};

export default Header;