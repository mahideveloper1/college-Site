import React from 'react';

const News = () => {
  return (
    <div className="h-[39.5rem] relative overflow-hidden bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-40">
          <div className="absolute top-0 -left-4 w-80 h-80 bg-[#f3d7c4] rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* NEWS Section */}
        <div className="w-full h-[36rem] lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6 border-b pb-3">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">NEWS</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 hover:underline">All News</a>
          </div>

          {/* News Articles */}
          <div className="space-y-6">
          <div  className="flex flex-col md:flex-row gap-6 bg-gray-100 hover:bg-orange-50 p-4 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57' 
                    alt="TB Trial" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition duration-300">PTSN University launches first human aerosol TB challenge trial</h3>
                  <p className="text-gray-600">27 MAR 2025</p>
                </div>
              </div>

              <div  className="flex flex-col md:flex-row gap-6 bg-gray-100 hover:bg-orange-50 p-4 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57' 
                    alt="TB Trial" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition duration-300">PTSN University launches first human aerosol TB challenge trial</h3>
                  <p className="text-gray-600">27 MAR 2025</p>
                </div>
              </div>

              <div  className="flex flex-col md:flex-row gap-6 bg-gray-100 hover:bg-orange-50 p-4 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57' 
                    alt="TB Trial" 
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition duration-300">PTSN University launches first human aerosol TB challenge trial</h3>
                  <p className="text-gray-600">27 MAR 2025</p>
                </div>
              </div>
          </div>

        </div>

        {/* EVENTS Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md border-l border-gray-200">
          <div className="flex items-center justify-between mb-6 border-b pb-3">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">EVENTS</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 hover:underline">All Events</a>
          </div>

          {/* Event Listings */}
          <div className="space-y-6">
            {[{ date: '29', month: 'MAR', title: 'Autism-Friendly Openings', location: 'History of Science Museum' },
              { date: '02', month: 'APR', title: 'A conversation with Nicholas Kristof', location: 'Blavatnik School of Government' }].map((event, index) => (
              <div key={index} className="flex gap-4 bg-gray-100 hover:bg-orange-50 p-4 rounded-lg transition-transform duration-300 transform hover:-translate-x-1 hover:shadow-lg">
                <div className="flex-shrink-0 bg-[#002147] text-white text-center p-2 w-16 rounded-lg transform transition-transform hover:scale-105">
                  <div className="text-xl font-bold">{event.date}</div>
                  <div className="text-sm">{event.month}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 hover:text-blue-600 transition duration-300">{event.title}</h3>
                  <p className="mb-1 text-gray-700">{event.location}</p>
                  <p className="text-gray-600 text-sm">{event.date} {event.month} 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
