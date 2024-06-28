import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactMeSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 w-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Kontakt</h2>
        <ul className="max-w-md mx-auto text-center">
          <li className="flex justify-center items-center mb-4">
            <FaPhone className="text-black text-xl inline-block mr-2" />
            <a href="tel:+421944584281" className="text-black text-xl font-semibold hover:text-orange-500">
              +421 944 584 281
            </a>
          </li>
          <li className="flex justify-center items-center mb-4">
            <FaEnvelope className="text-black text-xl inline-block mr-2" />
            <a href="mailto:lukas.slanec@gmail.com" className="text-black text-xl font-semibold hover:text-orange-500">
              lukas.slanec@gmail.com
            </a>
          </li>
          <li className="flex justify-center items-center mb-4">
            <FaMapMarkerAlt className="text-black text-xl inline-block mr-2" />
            <a
              href="https://goo.gl/maps/7ndFMoJxfCwDGS2c9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl font-semibold hover:text-orange-500"
            >
              Námestie Svätého Juraja 2244, 927 01 Šaľa
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMeSection;