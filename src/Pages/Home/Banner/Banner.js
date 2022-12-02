import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner items-center justify-center p-4 text-white">
      <div className="banner-section text-center w-1/2 mx-auto mt-20">
        <div>
          <p className=" lg:text-7xl font-mono font-semibold">We are here to help you <br /> to <br /> remember the best days.</p>
          <p className="font-mono mt-5">
          Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;