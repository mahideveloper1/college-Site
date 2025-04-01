import React, { useState } from 'react';
// import { Bell, Search, Menu, ChevronDown, User } from 'lucide-react';

const Notify = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky z-50">
      <div className="container mx-auto px-4 py-0 flex items-center justify-between">
        {/* Left Section - Logo & Title */}

        {/* Right Section - Search, Notification, Profile */}
      </div>

      {/* Running Notification Bar */}
      <div className="bg-amber-100 text-amber-800 py-1 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-xl font-semibold">
           Admissions Open for 2025! Apply Now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           Check the Academics Section&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           Upcoming Event: University Convocation on April 15th 
        </div>
      </div>

      {/* Tailwind Custom Animation for Marquee */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Notify;