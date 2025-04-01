import React from 'react';

function Study() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="py-16 sm:py-24 border-t border-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-amber-800 mb-4 tracking-tight">
            STUDYING AT PTSN
            <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-yellow-300 mt-2 rounded-full"></div>
          </h2>
          <p className="text-amber-700 mb-12 max-w-3xl text-lg">
            Discover your academic journey through our diverse range of programs and opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Undergraduate admissions */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-amber-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_undergrad3.jpg'
                alt="Undergraduate students" 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <a href="#" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Undergraduate Admissions
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Begin your academic journey with our comprehensive undergraduate programs
                  </p>
                  <span className="mt-4 inline-block text-white text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Learn more ›
                  </span>
                </a>
              </div>
            </div>

            {/* Graduate admissions */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-amber-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_grad2.jpg' 
                alt="Graduate students" 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <a href="#" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Graduate Admissions
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Advance your expertise with our specialized graduate programs
                  </p>
                  <span className="mt-4 inline-block text-white text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Learn more ›
                  </span>
                </a>
              </div>
            </div>

            {/* Continuing education */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-amber-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_conted2.jpg'  
                alt="Continuing education" 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <a href="#" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Continuing Education
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Lifelong learning opportunities for personal and professional growth
                  </p>
                  <span className="mt-4 inline-block text-white text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Learn more ›
                  </span>
                </a>
              </div>
            </div>

            {/* Current PTSN students */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-amber-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <img 
                src='https://www.ox.ac.uk/sites/files/oxford/st_ox_current2.jpg'  
                alt="Current PTSN students" 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <a href="#" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Current PTSN Students
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    Resources and information for our current student community
                  </p>
                  <span className="mt-4 inline-block text-white text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Learn more ›
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;