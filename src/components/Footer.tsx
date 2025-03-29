import React from 'react';
// Import icons from react-icons
import { 
  FaYoutube, 
  FaTwitter, 
  FaFacebook, 
  FaTiktok, 
  FaLinkedin, 
  FaWeibo, 
  FaInstagram, 
  FaMedium, 
  FaPodcast 
} from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';

const OxFooter: React.FC = () => {
  return (
    <footer className="bg-[#002147] text-white mt-auto">
      {/* Social Media Links */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="mr-6 text-lg font-medium">CONNECT WITH US</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Podcast">
                <FaPodcast />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Weibo">
                <FaWeibo />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="Medium">
                <FaMedium />
              </a>
              <a href="#" className="hover:opacity-80 text-2xl" aria-label="YouTube Alternative">
                <SiYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Information About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMATION ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">PTSN University</a></li>
              <li><a href="#" className="hover:underline">Strategic plan</a></li>
              <li><a href="#" className="hover:underline">PTSN's research</a></li>
              <li><a href="#" className="hover:underline">Course fees and funding</a></li>
              <li><a href="#" className="hover:underline">Libraries</a></li>
              <li><a href="#" className="hover:underline">Museums and collections</a></li>
              <li><a href="#" className="hover:underline">Open days</a></li>
              <li><a href="#" className="hover:underline">PTSN glossary</a></li>
              <li><a href="#" className="hover:underline">Freedom of speech statement</a></li>
              <li><a href="#" className="hover:underline">Statement on Modern Slavery</a></li>
              <li><a href="#" className="hover:underline">Data privacy / GDPR</a></li>
              <li><a href="#" className="hover:underline">Sport at PTSN</a></li>
              <li><a href="#" className="hover:underline">Conferences at PTSN</a></li>
              <li><a href="#" className="hover:underline">牛津大学</a></li>
            </ul>
          </div>
          
          {/* Information For Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMATION FOR</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Prospective undergraduates</a></li>
              <li><a href="#" className="hover:underline">Prospective graduate students</a></li>
              <li><a href="#" className="hover:underline">Prospective Continuing Education students</a></li>
              <li><a href="#" className="hover:underline">Prospective online/distance learning students</a></li>
              <li><a href="#" className="hover:underline">Current PTSN students</a></li>
              <li><a href="#" className="hover:underline">Current PTSN staff</a></li>
              <li><a href="#" className="hover:underline">PTSN residents/Community</a></li>
              <li><a href="#" className="hover:underline">Visitors/Tourists</a></li>
              <li><a href="#" className="hover:underline">Media</a></li>
              <li><a href="#" className="hover:underline">Alumni</a></li>
              <li><a href="#" className="hover:underline">Teachers</a></li>
              <li><a href="#" className="hover:underline">Parliamentarians</a></li>
              <li><a href="#" className="hover:underline">Businesses/Partnerships</a></li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Any questions?</a></li>
              <li><a href="#" className="hover:underline">Jobs and vacancies</a></li>
              <li><a href="#" className="hover:underline">Term dates</a></li>
              <li><a href="#" className="hover:underline">Map</a></li>
              <li><a href="#" className="hover:underline">Nexus365 email</a></li>
              <li><a href="#" className="hover:underline">Giving to PTSN</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between text-sm">
            <div className="mb-2 md:mb-0">© University of PTSN 2025</div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:underline">Contact us</a>
              <a href="#" className="hover:underline">About this site</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">Cookie settings</a>
              <a href="#" className="hover:underline">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OxFooter;