import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner lg:flex items-center justify-center p-4 text-white">
        <div className="banner-section">
          <div>
            <img
              className=" lg:w-[350px] h-[430px] banner-img"
              src="https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-546.jpg?w=826&t=st=1668061907~exp=1668062507~hmac=893037c799311eff15e2226ba186a79b74833d800ee6cf667c169cef6baa7c93"
              alt=""
            />
          </div>
          <div className="">
            <p className=" lg:text-7xl font-mono font-semibold">We Enforce</p>
            <h1 className=" text-6xl font-serif font-semibold">
              Justice For You
            </h1>
            <h3 className="lg:text-lg  uppercase text-center text-black font-medium bg-[#D9A86D] py-2 my-3 rounded-lg">
              I Am Always Prepared For Any Case{" "}
            </h3>
            <p className="">
              A lawyer is a professional who is qualified to offer advice about
              the law or represent someone in legal matters. A lawyer can also
              be called an attorney, a solicitor, a counselor, a barrister, or —
              pejoratively — an ambulance chaser.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;