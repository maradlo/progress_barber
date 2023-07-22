import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyWork = () => {
  const imagePaths = [
  '/images/fotka1.jpeg', 
  '/images/fotka2.jpeg',
  '/images/fotka3.jpeg',
  '/images/fotka4.jpeg',
  '/images/fotka5.jpeg',
  '/images/fotka6.jpg',
  '/images/fotka8.jpeg',
  ];

  return (
    <section id='mywork' className="py-8 bg-gray-200 w-screen h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Ukážky mojej práce</h2>
        <h2 className="text-xl font-normal text-center mb-8">Viac ukážok mojej práce si môžeš pozrieť na mojom <a className='hover:text-orange-500 font-bold' href='https://www.facebook.com/progressbarber.sk' alt="Facebook.com">Facebooku</a> alebo <a className='hover:text-orange-500 font-bold' href='https://www.instagram.com/progressbarber.sk' alt="Instagram.com">Instagrame</a>.</h2>
        <div className="mx-auto max-w-md">
          <Carousel showThumbs={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
            {imagePaths.map((imagePath, index) => (
              <div key={index}>
                <img src={imagePath} alt={`Fotka ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MyWork;