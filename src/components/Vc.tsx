import React from 'react';
import { GraduationCap, ChevronRight, Menu } from 'lucide-react';

function Vc() {
  return (
    <div className="min-h-screen relative overflow-hidden">


      {/* Content Container */}
      <div className="relative">
        {/* VC Desk Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-16">
          {/* Left Column - Image and Pattern */}
          <div className="relative w-full md:w-1/3">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-52 h-52 dot-pattern opacity-50 transform translate-x-1/4 -translate-y-1/4 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 dot-pattern opacity-50 rounded-full"></div>

            {/* Image Container */}
            <div className="relative z-10 animate-float  wave-container">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-300">
                <img
                  src="https://ptsnsuniversity.ac.in/website/Images/VCPTSNSU.jpg"
                  alt="Vice Chancellor"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full blur-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              {/* Title Section */}
              <div className="relative mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">VC Desk</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-30"></div>
              </div>

              {/* Greeting */}
              <h3 className="text-2xl text-gray-700 font-serif italic mb-8">
                Dear students, faculties and all stakeholders of the esteemed University,
              </h3>

              {/* Main Content */}
              <div className="prose prose-lg text-gray-600 space-y-6">

                <p className="leading-relaxed">
                  Our vision is to establish ourselves as a frontier and leading university 
                  for academic excellence and innovation. We are committed to being a flagship 
                  of research development that meets industry and national needs, all the while 
                  keeping students and excellence at the core.
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-900 font-semibold">Sincerely,</p>
                <p className="text-gray-900 text-xl font-bold">Prof. John Doe</p>
                <p className="text-gray-600">Vice Chancellor</p>
              </div>

              {/* CTA Button */}
              <button className="group relative mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Read More
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Vc;