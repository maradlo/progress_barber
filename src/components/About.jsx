import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import image from "../assets/image.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 w-screen">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <img
          src={image}
          alt="My Photo"
          className="rounded-full w-64 h-64 mb-4"
        />
        <h2 className="text-3xl font-bold text-orange-500">O mne</h2>
        <p className="max-w-md text-center text-md mt-4 px-4">
          Čauko, <br />
          volám sa Lukáš, a.k.a Progressbarber. <br />
          Prečo Lukáš? O tom rozhodli rodičia 😁 Prečo Progressbarber? Celý
          život je v podstate progres. Učíme sa celý život. <br />
          Rozhodol som sa nechať prácu v korporatnej spoločnosti a ísť si po
          svojom. Ako rád hovorievam, stále je to hlavne moje hobby ktoré
          vykonávam s láskou. Hovorí sa, že pokiaľ si ochotný to robiť aj
          zadarmo, je to to pravé a dlho tomu tak aj bolo. Snažím sa na sebe
          pracovať denno denne a poskytnúť ti službu najvyššej úrovne. <br />
          Ako ortodoxný bradatý muž je samozrejmosťou možnosť zakúpenia rôznych
          produktov na starostlivosť o bradu. <br />
          Ďakujem! <br />
          S pozdravom, <br />
          Slanec Lukáš <br />
          <p className="text-orange-500">#progressbarber</p>
        </p>
        <div className="flex mt-6 space-x-4">
          <a
            href="https://www.facebook.com/progressbarber.sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl text-black hover:text-orange-500" />
          </a>
          <a
            href="https://www.instagram.com/progressbarber.sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-black hover:text-orange-500" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpfb8jQy96o-iZfm1Bc1eqA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-3xl text-black hover:text-orange-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
