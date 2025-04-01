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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-600 to-amber-700 text-white mt-auto relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-yellow-300 to-amber-500/0"></div>
      <div className="absolute -top-32 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
      
      {/* Social Media Links */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center">
            <div className="mr-6 text-lg font-medium text-white">CONNECT WITH US</div>
            <div className="flex flex-wrap space-x-4 mt-2 sm:mt-0">
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Podcast">
                <FaPodcast />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Weibo">
                <FaWeibo />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="Medium">
                <FaMedium />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300 text-2xl" aria-label="YouTube Alternative">
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
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">INFORMATION ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">PTSN University</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Strategic plan</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">PTSN's research</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Course fees and funding</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Libraries</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Museums and collections</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Open days</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">PTSN glossary</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Freedom of speech statement</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Statement on Modern Slavery</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Data privacy / GDPR</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Sport at PTSN</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Conferences at PTSN</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">牛津大学</a></li>
            </ul>
          </div>
          
          {/* Information For Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">INFORMATION FOR</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Prospective undergraduates</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Prospective graduate students</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Prospective Continuing Education students</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Prospective online/distance learning students</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Current PTSN students</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Current PTSN staff</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">PTSN residents/Community</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Visitors/Tourists</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Media</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Alumni</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Teachers</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Parliamentarians</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Businesses/Partnerships</a></li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/20 pb-2">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Any questions?</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Jobs and vacancies</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Term dates</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Map</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Nexus365 email</a></li>
              <li><a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Giving to PTSN</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="border-t border-white/20 py-6 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between text-sm">
            <div className="mb-2 md:mb-0 text-white">© University of PTSN 2025</div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Contact us</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">About this site</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Legal</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Privacy policy</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Cookie settings</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;