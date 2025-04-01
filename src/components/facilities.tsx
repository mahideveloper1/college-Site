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
    image: "https://web.mit.edu/files/images/201806/02_preview.jpeg",
    icon: "🧪"
  },
  {
    id: 3,
    title: "Sports Complexes",
    description: "Our Olympic-sized swimming pool, multipurpose indoor courts, fitness centers, and outdoor fields encourage students to maintain an active lifestyle and participate in competitive sports.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
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
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-amber-800">
            <span className="inline-block relative">
              World-Class Facilities
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mt-6">
            Our state-of-the-art infrastructure is designed to support academic excellence, 
            research innovation, and holistic student development.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left sidebar tabs */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-amber-200">
              {facilities.map((facility) => (
                <button
                  key={facility.id}
                  className={`w-full text-left p-4 border-l-4 transition-all duration-300 flex items-center ${
                    activeTab === facility.id
                      ? "border-amber-500 bg-amber-50"
                      : "border-transparent hover:border-amber-300 hover:bg-amber-50/50"
                  }`}
                  onClick={() => setActiveTab(facility.id)}
                  onMouseEnter={() => setHoveredTab(facility.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <span className={`text-2xl mr-3 transition-transform duration-300 ${
                    hoveredTab === facility.id ? "transform scale-125" : ""
                  }`}>{facility.icon}</span>
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
                <div className="overflow-hidden rounded-xl shadow-lg relative group border border-amber-200">
                  {/* Facility image - without overlay gradient */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Content overlay - with background to ensure text readability */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-3xl font-bold mb-3 text-white">
                        {facility.title}
                      </h3>
                      <p className="text-white text-lg">
                        {facility.description}
                      </p>
                      
                      {/* CTA Button */}
                      <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 font-semibold rounded-lg hover:from-amber-300 hover:to-yellow-200 transition-all duration-300 shadow-md flex items-center group">
                        Learn more
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
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
                    <div 
                      key={index} 
                      className="bg-white rounded-lg p-4 text-center hover:bg-amber-50 transition-all duration-300 border border-amber-200 hover:transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                      <div className="text-sm text-amber-700">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-amber-100/0 via-amber-300/30 to-amber-100/0"></div>
    </section>
  );
}

export default UniversityFacilities;