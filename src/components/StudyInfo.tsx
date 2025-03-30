import React from 'react';

const StudyInfo = () => {
  const studyOptions = [
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/st_ox_undergrad3.jpg',
      title: 'Undergraduate admissions',
      alt: 'Undergraduate students'
    },
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/st_ox_grad2.jpg',
      title: 'Graduate admissions',
      alt: 'Graduate students'
    },
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/st_ox_conted2.jpg',
      title: 'Continuing education',
      alt: 'Continuing education'
    },
    {
      image: 'https://www.ox.ac.uk/sites/files/oxford/st_ox_current2.jpg',
      title: 'Current PTSN students',
      alt: 'Current Oxford students'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">STUDYING AT PTSN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyOptions.map((option, index) => (
            <StudyOption key={index} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StudyOption = ({ option }) => {
  return (
    <div className="relative group overflow-hidden">
      <img 
        src={option.image}
        alt={option.alt} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 p-4 group-hover:bg-[#002147] group-hover:bg-opacity-90 transition-colors duration-300">
        <a href="#" className="flex items-center justify-between">
          <span className="text-xl font-semibold group-hover:text-white transition-colors duration-300">{option.title}</span>
          <span className="text-2xl group-hover:text-white transition-colors duration-300">›</span>
        </a>
      </div>
    </div>
  );
};

export default StudyInfo;