import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>ProgressBarber&copy;{new Date().getFullYear()}&nbsp;Všetky práva vyhradené</p>
      <p>
      Vytvoril: <a href="https://www.instagram.com/zarek_macik/" alt="@zarek_macik" target="_blank" rel="noreferrer"><b>Marek Žáčik</b></a>.
      </p>
    </footer>
  );
};

export default Footer;
