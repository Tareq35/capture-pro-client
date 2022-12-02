import React from 'react';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-[#141414] text-neutral-content">
        <div className="text-justify">
          <div>
            <p className=" font-serif normal-case text-xl tracking-widest font-bold">
              ATTORNA
            </p>
            <p className=" text-[10px] font-medium tracking-widest text-[#e1dcdc]">
              ATTORNEY AT LAW
            </p>
          </div>
          <p className='text-[#e1dcdc]'>
            I should be incapable of drawing <br /> a single stroke at the
            present <br />
            moment; and yet I feel that <br /> I never was a greater artist than
            now
          </p>
        </div>
        <div className="text-justify">
          <p className=" font-serif text-2xl text-center text-white">
            Contact Info
          </p>
          <div className="text-xl">
            <p className=" text-[#A7ABAB]">
              Box 3233 <br /> 1810 Kings Way <br /> King Street, 5th Avenue,{" "}
              <br /> New York
            </p>
            <p className=" text-[#A7ABAB] my-3">
              +1-2355-3345-5 <br /> Contact@Attornasite.co
            </p>
          </div>
        </div>
        <div>
          <span className="text-2xl text-white font-serif">Practice Area</span>
          <a href="/" className="link link-hover text-lg font-medium">
            Family Violence
          </a>
          <a href="/" className="link link-hover text-lg font-medium">
            Car Accident Insurance
          </a>
          <a href="/" className="link link-hover text-lg font-medium">
            Public Company Fraud
          </a>
          <a href="/" className="link link-hover text-lg font-medium">
            Privacy Matter
          </a>
          <a href="/" className="link link-hover text-lg font-medium">
            Failure of Apple Acquisition
          </a>
        </div>
      </footer>
    );
};

export default Footer;