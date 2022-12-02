import React from 'react';

const About = () => {
    return (
      <section className="mt-20">
        <h2 className="text-4xl font-mono">ABOUT US</h2>
        <div className="grid lg:grid-cols-2 mt-12 mb-6 shadow-2xl">
        <div className="bg-white text-justify p-10 rounded-l-lg">
          <p className=" underline decoration-sky-700 decoration-4  font-bold  font-serif mb-3 tracking-widest">
            ABOUT CAPTURE PRO
          </p>
          <p className="  font-mono text-[#555555]">
          Visual content is king. Whether you need to breathe life into your website, social media marketing, or advertising, CAPTURE PRO'S photographers tell dimensional stories with photos that are styled, lit and edited for maximum impact.
          </p>
          <p className=" font-mono text-2xl text-center mt-3">
            TOMAS TOM
          </p>
          <p className="tracking-widest text-[12px] text-center mt-2">
            PROFESSIONAL PHOTOGRAPHER
          </p>
        </div>
        <div>
          <img
            className=" rounded-r-lg h-[50vh] mx-auto w-[80%]"
            src="https://i.ibb.co/NCpRkf8/danie-franco-7-Xq-L-DVu-BMw-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      </section>
    );
};

export default About;