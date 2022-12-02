import React from 'react';

const About = () => {
    return (
      <div className="grid lg:grid-cols-2 mt-12 mb-6 shadow-2xl">
        <div className="bg-white text-justify p-10 rounded-l-lg">
          <p className=" underline decoration-orange-400 decoration-4  font-bold  font-serif mb-3 tracking-widest">
            ABOUT ATTORNA
          </p>
          <p className="  font-mono text-[#555555]">
            Attrona is my licensed professional lawyer portfolio, who advises
            and represents others in legal matters.I am always sincere while
            also protecting a client's rights. To carry out these duties by the
            grace of Allah I Could understand the law and be an effective
            communicator, Alhamdulillah !!.
          </p>
          <p className=" font-mono text-2xl text-center mt-3">
            Mikayeil Harish
          </p>
          <p className="tracking-widest text-[12px] text-center mt-2">
            LAWYER & ADVISOR OF SUPREME COURT
          </p>
        </div>
        <div>
          <img
            className=" rounded-r-lg h-full"
            src="https://as2.ftcdn.net/v2/jpg/00/62/45/59/1000_F_62455935_yjM9OfhbtBVyonwlUSxOClvPNb5P8ksx.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default About;