import React, { useState, useEffect, useRef } from 'react';
// Import icons if needed
// import { Bell, Search, Menu, ChevronDown, User } from 'lucide-react';

function Notify() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const marqueeContainerRef = useRef(null);
  const [notifications, setNotifications] = useState([
    'Admissions Open for 2025! Apply Now',
    'Check the Academics Section',
    'Upcoming Event: University Convocation on April 15th'
  ]);

  // Add separator between notifications for better readability
  const notificationSeparator = ' 🔸 '; // Using a decorative separator
  
  // Create formatted notifications
  const formattedNotifications = notifications.map(notification => notification.trim());
  const notificationText = formattedNotifications.join(notificationSeparator);

  return (
    <header className="bg-white shadow-md sticky z-50">
      <div className="container mx-auto px-4 py-0 flex items-center justify-between">
        {/* Left Section - Logo & Title */}

        {/* Right Section - Search, Notification, Profile */}
      </div>

      {/* Running Notification Bar with Responsive Design */}
      <div 
        ref={marqueeContainerRef}
        className="bg-amber-100 text-amber-800 py-1 overflow-hidden relative"
      >
        {/* For accessibility: hidden static version for screen readers */}
        <div className="sr-only">
          {notifications.join('. ')}
        </div>
        
        {/* Using double-marquee technique for truly continuous scrolling */}
        <div className="marquee-container relative whitespace-nowrap">
          <div className="marquee-content inline-block">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide px-4">
              {notificationText} {notificationSeparator}
            </span>
          </div>
          <div className="marquee-content inline-block">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide px-4">
              {notificationText} {notificationSeparator}
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for continuous scrolling marquee */}
      <style jsx="true">
        {`
          .marquee-container {
            display: inline-block;
            white-space: nowrap;
            width: 100%;
          }
          
          .marquee-content {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
          
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          
          /* Media queries for responsive speed */
          @media (max-width: 640px) {
            .marquee-content {
              animation-duration: 15s;
            }
          }
          
          @media (min-width: 641px) and (max-width: 1024px) {
            .marquee-content {
              animation-duration: 20s;
            }
          }
          
          @media (min-width: 1025px) {
            .marquee-content {
              animation-duration: 25s;
            }
          }
        `}
      </style>
    </header>
  );
}

export default Notify;