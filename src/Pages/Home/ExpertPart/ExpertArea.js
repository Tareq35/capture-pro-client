import React from 'react';

const ExpertArea = () => {
    return (
      <div>
        <div className="hero my-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/low-angle-shot-tall-business-building-nyc_181624-615.jpg?size=626&ext=jpg&ga=GA1.2.939492190.1661093851&semt=ais"
                className="w-4/5 h-full rounded-lg shadow-2xl"
              />
              <img
                alt=""
                src="https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-582.jpg?w=1380&t=st=1668058198~exp=1668058798~hmac=5bfbdfcbfbee783243a2dae9e800eef80108259be5030c71adffea4393215f25"
                className="absolute top-[-25%] right-5 w-3/4 border-8 rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 lg:text-justify">
              <p className="text-md font-semibold text-[#A8A8A8] tracking-widest pb-3">
                WHAT WE ARE EXPERT AT
              </p>
              <h1 className="text-4xl font-serif font-semibold">
                Why Clients Choose Us
              </h1>
              <p className="py-3 font-sans text-xl text-cyan-400">
                We can provide corporate governance, helping clients manage the
                responsibilities of running a corporation in financial field.
              </p>
              <p className="py-3 font-sans  text-[#646363]">
                I am apply the law to specific cases. I investigate the facts
                and the evidence by conferring with My clients and reviewing
                documents, and I prepare and file the pleadings in court. At the
                trial, I introduce evidence, interrogate witnesses, and argue
                questions of law and fact.........
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExpertArea;