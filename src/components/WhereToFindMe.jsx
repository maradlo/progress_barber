import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const WhereToFindMe = () => {
  const locations = [
    {
      address: 'Petra Pázmaňa 11, 927 01 Šaľa',
      image: '/images/place2.jpeg',
    },
    {
      address: 'Petra Pázmaňa 11, 927 01 Šaľa',
      image: '/images/place3.jpeg',
    },
  ];

  const imagePaths = [
    '/images/place7.jpeg',
    '/images/new/priestor1.jpg',
    '/images/new/priestor2.jpg',
    '/images/new/priestor3.jpg',
    ];

  return (
    <section id='wheretofindme' className="py-8 bg-gray-200 w-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Kde ma nájdeš</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-12">
          {locations.map((location, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-4">
                <p className="text-gray-600">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-center mt-12 mb-4">Fotky priestorov</h2>
        <div className="mx-auto max-w-md">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
            {imagePaths.map((imagePath, index) => (
              <div key={index}>
                <img className='custom-carousel-image' src={imagePath} alt={`Priestor ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindMe;