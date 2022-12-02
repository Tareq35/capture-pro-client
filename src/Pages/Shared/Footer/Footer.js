import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-sky-700 text-neutral-content">
      <div className="text-justify">
        <div>
          <p className=" font-serif normal-case text-2xl tracking-widest font-bold">
            Capture Pro
          </p>
        </div>
        <p className='text-white font-medium'>
          Our in-house photography services team <br />made up of professional photographers can <br /> add value to your website with high-resolution <br /> team photos, corporate event photography <br /> and product photography.
        </p>
      </div>
      <div className="text-justify">
        <p className=" font-serif text-2xl text-center text-white">
          Contact Info
        </p>
        <div className="text-xl">
          <p className=" text-white">
            BEAN TOWN
            867 Boylston Street, <br /> 5th Floor
            Boston, MA 02116
          </p>
        </div>
      </div>
      <div>
        <span className="text-2xl text-white font-serif">Specialized At</span>
        <a href="/" className="link link-hover text-lg font-medium">
        Corporate team photography
        </a>
        <a href="/" className="link link-hover text-lg font-medium">
        Product photography
        </a>
        <a href="/" className="link link-hover text-lg font-medium">
        Commercial photography
        </a>
        <a href="/" className="link link-hover text-lg font-medium">
        Event photography
        </a>
        <a href="/" className="link link-hover text-lg font-medium">
        Lifestyle photography
        </a>
      </div>
    </footer>
  );
};

export default Footer;