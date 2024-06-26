import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const WhereToFindMe = () => {
  const locations = [
    {
      address: 'Námestie Svätého Juraja 2244, 927 01 Šaľa',
      image: '/images/place8.jpg',
    },
    // {
    //   address: 'Námestie Svätého Juraja 2244, 927 01 Šaľa',
    //   image: '/images/place3.jpeg',
    // },
  ];

  const imagePaths = [
    '/images/newplace1.JPG',
    '/images/newplace2.JPG',
    '/images/newplace3.JPG',
  ];

  return (
    <section id='wheretofindme' className="py-8 bg-gray-200 w-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Kde ma nájdeš</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 px-12">
          {locations.map((location, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-80 object-scale-down object-center"
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