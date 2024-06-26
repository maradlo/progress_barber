import React from 'react';

const PriceList = () => {
  const services = [
    {
      name: 'ŠTRAMÁK - pánsky strih do prechodu fade rôzne techniky',
      price: '13 €'
    },
    {
      name: 'JUNÁK - jednoduchý pánsky strih boky jednej dĺžky',
      price: '11 €'
    },
    {
      name: 'NA JEŽKA - strojčekom na jednu dĺžku',
      price: '9 €'
    },
    {
      name: 'TAMAGOČI - strih do 10 rokov pre vaše ratolesti',
      price: '10 €'
    },
    {
      name: 'VIKING - úprava brady, britva, gél na holenie, kolínska po holení',
      price: '10 €'
    },
    {
      name: 'Farba vlasy - farbenie krátkych pánskych vlasov',
      price: '8 €'
    },
    {
      name: 'Farba brada',
      price: '8 €'
    },
    {
      name: 'Čierna maska - čierna čistiaca zlupovacia maska',
      price: '7 €'
    },
    {
      name: 'Umývanie vlasov',
      price: '3 €'
    }
  ];
  
  return (
    <section id="pricelist" className="py-16 bg-gray-100 w-screen">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-12">Cenník služieb platný od 07.2024:</h2>
        <ul className="flex flex-col items-center">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-center w-3/4 md:w-2/4 lg:w-1/2 mb-4">
              <span className="font-semibold">{service.name}</span>
              <span className="ml-2">{service.price}</span>
            </li>
          ))}
        </ul>
        <h1 className="font-bold text-red-500 text-4xl mt-32">
          AK MI NEDÁŠ VEDIEŤ ŽE NEPRÍDEŠ ASPOŇ 1H PRED, PLATÍŠ CELÚ SUMU STRIHU!
        </h1>
      </div>
    </section>
  );
};

export default PriceList;