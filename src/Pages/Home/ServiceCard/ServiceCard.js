import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {img, serviceName, price, description, _id} = service;
    return (
      <div className="serviceCard  bg-white shadow-2xl mt-5">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="w-full h-[200px] rounded-lg	" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <p className="text-xl font-semibold text-justify">{serviceName}</p>
        <p className="text-[tomato] text-justify">Price: ${price}</p>
        <p className=" text-justify">{description.slice(0, 100)}....</p>
        <Link
          to={`/services/${_id}`}
          className="px-16 py-2 rounded-l-lg font-serif rounded-r-lg font-semibold mt-5 inline-block bg-[#141414] text-white hover:bg-[#3e3c3c]"
        >
          View Details
        </Link>
      </div>
    );
};

export default ServiceCard;