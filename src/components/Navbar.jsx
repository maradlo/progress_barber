import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event, target) => {
    // Close the menu after clicking a link (for mobile responsiveness)
    setIsMenuOpen(false);

    // Scroll smoothly to the target section
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = window.innerWidth > 768 ? -60 : -200; // Adjust the offset for different screen sizes
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-gray-950 p-4 fixed w-full z-10">
      <div className="container mx-auto">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-8" src={logo} alt="ProgressBarber Logo" />
        <a href="#home" className="text-white text-2xl font-bold ml-2" onClick={(e) => handleLinkClick(e, '#home')}>
          ProgressBarber
        </a>
      </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              className="text-white text-xl focus:outline-none"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? 'X' : '☰'}
            </button>
          </div>

          {/* Desktop menu links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Domov
            </a>
            <a
              href="#about"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              O mne
            </a>
            <a
              href="#mywork"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#mywork')}
            >
              Moja práca
            </a>
            <a
              href="#pricelist"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#pricelist')}
            >
              Cenník
            </a>
            <a
              href="#wheretofindme"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#wheretofindme')}
            >
              Kde ma nájdeš
            </a>
            <a
              href="#contact"
              className="text-white hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a
              href="#home"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Domov
            </a>
            <a
              href="#about"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              O mne
            </a>
            <a
              href="#mywork"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#mywork')}
            >
              Moja práca
            </a>
            <a
              href="#pricelist"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#pricelist')}
            >
              Cenník
            </a>
            <a
              href="#wheretofindme"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#wheretofindme')}
            >
              Kde ma nájdeš
            </a>
            <a
              href="#contact"
              className="block text-white py-2 hover:text-orange-500"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Kontakt
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
