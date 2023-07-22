// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PriceList from './components/PriceList';
import WhereToFindMe from './components/WhereToFindMe';

function App() {
  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = window.innerWidth > 768 ? -60 : -200;
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
    <div>
      <Navbar />
      <main>
        <Home onLinkClick={handleSmoothScroll} />
        <About onLinkClick={handleSmoothScroll} />
        <MyWork onLinkClick={handleSmoothScroll} />
        <PriceList onLinkClick={handleSmoothScroll} />
        <WhereToFindMe onLinkClick={handleSmoothScroll} />
        <Contact onLinkClick={handleSmoothScroll} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
