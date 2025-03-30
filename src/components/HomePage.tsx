import React, { useState, useEffect } from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';
import NewsEvents from './NewsEvents';
import StudyInfo from './StudyInfo';
import Footer from './Footer';
import StudentTestimonials from './Testimonials';
import UniversityFacilities from './facilities';


const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Effect to detect scrolling for the sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header with Navigation */}
      <Header isScrolled={isScrolled} />
      
      {/* Hero Section with Image Slider */}
      <ImageSlider />
      
      {/* News and Events Section */}
      <NewsEvents />
      
      

      <UniversityFacilities />

      {/* Studying at PTSN Section */}
      <StudyInfo />
      <StudentTestimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;