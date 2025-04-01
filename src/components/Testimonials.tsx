import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define keyframes for the animations
const animationKeyframes = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes floatHorizontal {
  0% { transform: translateX(0px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes morphBlob {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-horizontal {
  animation: floatHorizontal 8s ease-in-out infinite;
}

.animate-spin {
  animation: spin 20s linear infinite;
}

.animate-morph {
  animation: morphBlob 15s ease-in-out infinite;
}
`;

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
  const intervalRef = useRef<number | null>(null);

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset autoplay timer when manually navigating
  const handleNavigation = (callback: () => void) => {
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
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
      {/* Add the animation styles */}
      <style>{animationKeyframes}</style>
      
      {/* Morphing background blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-yellow-200/20 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-amber-300/30 rounded-full blur-3xl animate-morph" style={{ animationDelay: '5s' }}></div>
      
      {/* Spinning gradient disc */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-conic-gradient from-amber-200/10 via-yellow-300/20 to-amber-100/10 rounded-full blur-xl animate-spin"></div>
      
      {/* Animated subtle particles */}
      <div className="absolute top-20 left-1/5 w-4 h-4 bg-amber-400/40 rounded-full animate-float" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-yellow-300/40 rounded-full animate-float-horizontal" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-amber-300/40 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-yellow-400/40 rounded-full animate-float-horizontal" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-1/3 left-1/5 w-10 h-10 border-2 border-amber-400/30 rotate-45 animate-float" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 right-1/5 w-8 h-8 border-2 border-yellow-400/30 rounded-md rotate-12 animate-float-horizontal" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      
      {/* Small turmeric grain-like particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-amber-500/50 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-3">Hear From Our Students</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-amber-700 max-w-3xl mx-auto">Discover what our students and alumni have to say about their experiences at Pandit S. N. Shukla University.</p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="overflow-hidden">
            <div className="mt-8 p-4">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative border border-amber-200 transition-all duration-300 hover:shadow-xl">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-full text-white shadow-md">
                  <QuoteIcon />
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Student avatar */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-amber-200 shadow-md">
                      <img 
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="flex-1">
                    <p className="text-amber-900 italic mb-4 leading-relaxed">"{testimonials[currentIndex].quote}"</p>
                    
                    <div className="mt-4">
                      <h4 className="font-bold text-xl text-amber-800">{testimonials[currentIndex].name}</h4>
                      <p className="text-amber-700">{testimonials[currentIndex].role}</p>
                      <p className="text-amber-600 text-sm">{testimonials[currentIndex].course}</p>
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
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-105"
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
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-amber-500 w-8' : 'bg-amber-200 w-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next button */}
            <button 
              onClick={() => handleNavigation(goToNext)}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Dynamic animated strips */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-amber-100/0 via-amber-400/30 to-amber-100/0 animate-float-horizontal" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-amber-100/0 via-yellow-400/30 to-amber-100/0 animate-float-horizontal" style={{ animationDuration: '20s', animationDelay: '5s' }}></div>
      
      {/* Spotlight effect */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDuration: '20s' }}></div>
      
      {/* Floating turmeric dust particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={`dust-${i}`}
          className="absolute w-0.5 h-0.5 bg-yellow-500/60 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random() * 1.5})`
          }}
        ></div>
      ))}
    </section>
  );
}

export default StudentTestimonials;