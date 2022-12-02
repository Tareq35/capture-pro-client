import React from 'react';

const ExpertArea = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-mono font-semibold">
        Our Expertise?
      </h1>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              alt=""
              src="https://i.ibb.co/fnrrfc8/reinhart-julian-Wx-M465o-M4j4-unsplash.jpg"
              className="border-8 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:text-justify">


            <p className="py-3 font-mono  text-[#646363]">
              Our team of professional photographers has years of experience shooting people and products that capture our clients' unique personality, show customer engagement and highlight product details. Since you can't meet each potential new online lead in person, professional, high-resolution photos are absolutely essential to making a positive first impression. <br />
              Whether you need a new library of photos of your business location, office, executive team and happy customers, or you have an important corporate event that you want to document and share, our in-house professional photography team can capture the important moments and details for you.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;