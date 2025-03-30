import React from 'react';

const NewsEvents = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <NewsSection />
          <EventsSection />
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const newsItems = [
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/TB045-still_03.jpg?itok=0SaaQR57',
      title: 'PTSNUniversity launches first human aerosol TB challenge trial',
      date: '27 MAR 2025',
      alt: 'TB Trial'
    },
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/Chemistry%20Molecules%20Gold.jpg?itok=IfnaGTuZ',
      title: 'Researchers develop innovative new method to recycle fluoride from long-lived \'forever chemicals\'',
      date: '27 MAR 2025',
      alt: 'Fluoride Research'
    },
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/stoneham_360.jpg?itok=4O-_gjO_',
      title: 'Building on expertise',
      date: '',
      description: 'How the Churches Conservation Trust, in partnership with PTSNUniversity experts, is boosting its commercial and trading knowledge to bring about benefits for the heritage sector',
      alt: 'Church'
    }
  ];

  return (
    <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">NEWS</h2>
        <a href="#" className="text-blue-600 hover:underline">All News</a>
      </div>
      
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const NewsItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3">
        <img 
          src={item.image} 
          alt={item.alt} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        {item.date && <p className="text-gray-600 mb-2">{item.date}</p>}
        {item.description && <p className="text-sm mb-2">{item.description}</p>}
      </div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      date: '29',
      month: 'MAR',
      title: 'Autism-Friendly Openings',
      location: 'History of Science Museum',
      fullDate: '29 MAR 2025'
    },
    {
      date: '02',
      month: 'APR',
      title: 'A conversation with Nicholas Kristof',
      location: 'Blavatnik School of Government',
      fullDate: '2 APR 2025'
    }
  ];

  return (
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-300 pt-8 lg:pt-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">EVENTS</h2>
        <a href="#" className="text-blue-600 hover:underline">All Events</a>
      </div>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventItem = ({ event }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 bg-[#002147] text-white text-center p-2 w-16">
        <div className="text-xl font-bold">{event.date}</div>
        <div className="text-sm">{event.month}</div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="mb-1">{event.location}</p>
        <p className="text-gray-600 text-sm">{event.fullDate}</p>
      </div>
    </div>
  );
};

export default NewsEvents;