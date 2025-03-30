import React, { useState } from 'react';

// Sample facility data
const facilities = [
  {
    id: 1,
    title: "State-of-the-Art Libraries",
    description: "Our central library houses over 500,000 volumes and provides access to thousands of digital resources. Study spaces are designed to facilitate both collaborative work and individual research.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "📚"
  },
  {
    id: 2,
    title: "Advanced Research Labs",
    description: "Our cutting-edge research facilities include specialized labs for biotechnology, material science, computer vision, and quantum computing, supporting groundbreaking research across disciplines.",
    image: "https://images.unsplash.com/photo-1581092921461-fd0e5530d0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "🧪"
  },
  {
    id: 3,
    title: "Sports Complexes",
    description: "Our Olympic-sized swimming pool, multipurpose indoor courts, fitness centers, and outdoor fields encourage students to maintain an active lifestyle and participate in competitive sports.",
    image: "https://images.unsplash.com/photo-1590227632180-80c10da59efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "🏆"
  },
  {
    id: 4,
    title: "Smart Classrooms",
    description: "Equipped with interactive screens, surround sound systems, and video conferencing capabilities, our classrooms create immersive learning environments for students and faculty.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "💻"
  },
  {
    id: 5,
    title: "Student Accommodation",
    description: "Modern, comfortable dormitories and apartments with high-speed internet, common areas, and 24/7 security provide a safe and conducive living environment for residential students.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "🏠"
  },
  {
    id: 6,
    title: "Cultural Centers",
    description: "Our theaters, exhibition spaces, and auditoriums host performances, art shows, and cultural events that enrich campus life and connect students with diverse artistic expressions.",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    icon: "🎭"
  }
];

function UniversityFacilities() {
  const [activeTab, setActiveTab] = useState(facilities[0].id);

  return (
    <section className="py-16 bg-gradient-to-br from-[#001530] to-[#002147] text-white">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="inline-block relative">
              World-Class Facilities
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-yellow-400 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Our state-of-the-art infrastructure is designed to support academic excellence, 
            research innovation, and holistic student development.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left sidebar tabs */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              {facilities.map((facility) => (
                <button
                  key={facility.id}
                  className={`w-full text-left p-4 border-l-4 transition-all duration-300 flex items-center ${
                    activeTab === facility.id
                      ? "border-yellow-400 bg-white/10"
                      : "border-transparent hover:border-yellow-400/50 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveTab(facility.id)}
                >
                  <span className="text-2xl mr-3">{facility.icon}</span>
                  <span className="font-semibold">{facility.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={`transition-all duration-500 ${
                  activeTab === facility.id ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="overflow-hidden rounded-xl shadow-2xl relative group">
                  {/* Facility image */}
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001530]/80 to-transparent z-10"></div>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-3xl font-bold mb-3">
                        {facility.title}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {facility.description}
                      </p>
                      
                      {/* CTA Button */}
                      <button className="mt-6 px-6 py-2 bg-yellow-400 text-[#002147] font-semibold rounded-lg hover:bg-yellow-300 transition-colors flex items-center group">
                        Learn more
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {/* Each facility has 3 stats */}
                  {[
                    { label: "Students Served", value: "12,000+" },
                    { label: "Sq. Meters", value: facility.id * 1500 },
                    { label: "Investment", value: "$" + (facility.id * 2.5).toFixed(1) + "M" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UniversityFacilities;