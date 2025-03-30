import React, { useState, useEffect, useRef } from 'react';

// This assumes you have the Lucide React icons installed
// If not, you can install with: npm install lucide-react
// Or replace with your preferred icon components
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Final Year Student",
    course: "BSc Computer Science",
    quote: "My experience at PTSN University has been transformative. The faculty's commitment to excellence and the cutting-edge research opportunities have prepared me for a successful career in tech.",
    avatar: "https://i.pravatar.cc/150?u=1" // Using placeholder images
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Graduate Student",
    course: "MSc Data Science",
    quote: "The personalized attention from professors and access to advanced computing facilities have allowed me to develop skills that are highly sought after in the industry. I've already secured a position at a leading tech company.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "International Student",
    course: "PhD Biotechnology",
    quote: "Coming from abroad, I found a welcoming community at PTSN. The diverse perspectives and collaborative research environment have enriched both my academic work and personal growth.",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "Alumni",
    course: "MBA Business Administration",
    quote: "The industry connections and entrepreneurial mindset I developed at PTSN were instrumental in launching my startup. The mentorship program continues to provide valuable guidance even after graduation.",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

// Quote icon component (if you don't want to use Lucide icons)
const QuoteIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);

  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Reset autoplay timer when manually navigating
  const handleNavigation = (callback) => {
    callback();
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002147] mb-3">Hear From Our Students</h2>
          <div className="w-24 h-1 bg-[#002147] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Discover what our students and alumni have to say about their experiences at Pandit S. N. Shukla University.</p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="overflow-hidden">
            <div className="mt-8 p-4">
              <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 relative`}>
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 bg-[#002147] p-2 rounded-full text-white">
                  {/* You can use the QuoteIcon component or Lucide icon if installed */}
                  <QuoteIcon />
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Student avatar */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#002147]/20">
                      <img 
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonials[currentIndex].quote}"</p>
                    
                    <div className="mt-4">
                      <h4 className="font-bold text-xl text-[#002147]">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentIndex].course}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-8">
            {/* Previous button */}
            <button 
              onClick={() => handleNavigation(goToPrev)}
              className="bg-[#002147] hover:bg-[#003366] text-white rounded-full p-3 shadow-lg transition-all hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Indicator dots */}
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-[#002147] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next button */}
            <button 
              onClick={() => handleNavigation(goToNext)}
              className="bg-[#002147] hover:bg-[#003366] text-white rounded-full p-3 shadow-lg transition-all hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentTestimonials;