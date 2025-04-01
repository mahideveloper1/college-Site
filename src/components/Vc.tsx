import React from 'react';
import { GraduationCap, ChevronRight, Menu } from 'lucide-react';

function Vc() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-amber-50/50">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative">
        {/* VC Desk Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start gap-16">
          {/* Left Column - Image and Pattern */}
          <div className="relative w-full md:w-1/3">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-yellow-400/30 opacity-50 transform translate-x-1/4 -translate-y-1/4 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-500/30 opacity-50 rounded-full"></div>

            {/* Image Container */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-300 border-4 border-amber-400/20">
                <img
                  src="https://ptsnsuniversity.ac.in/website/Images/VCPTSNSU.jpg"
                  alt="Vice Chancellor"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-2xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500/30 rounded-full blur-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200">
              {/* Title Section */}
              <div className="relative mb-8">
                <h2 className="text-4xl font-bold text-amber-900 mb-3">VC Desk</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
              </div>

              {/* Greeting */}
              <h3 className="text-2xl text-amber-800 font-serif italic mb-8">
                Dear students, faculties and all stakeholders of the esteemed University,
              </h3>

              {/* Main Content */}
              <div className="prose prose-lg text-amber-900/80 space-y-6">
                <p className="leading-relaxed">
                  Our vision is to establish ourselves as a frontier and leading university 
                  for academic excellence and innovation. We are committed to being a flagship 
                  of research development that meets industry and national needs, all the while 
                  keeping students and excellence at the core.
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-6 border-t border-amber-200 mt-6">
                <p className="text-amber-900 font-semibold">Sincerely,</p>
                <p className="text-amber-900 text-xl font-bold">Prof. John Doe</p>
                <p className="text-amber-700">Vice Chancellor</p>
              </div>

              {/* CTA Button */}
              <button className="group relative mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Read More
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Vc;