import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Review from '../Review/Review';

const ServiceDetails = () => {
  
    const service = useLoaderData();
    const {serviceName, description, img, _id} = service
    useTitle("Service Details")

    return (
      <div>
        <div className="grid lg:grid-cols-2 gap-7">
          <div className=" rounded-lg border  p-3 my-6 shadow-2xl bg-white">
            <img className=" rounded-lg w-full" src={img} alt="" />
            <p className="text-2xl font-semibold font-serif my-3">
              {serviceName}
            </p>
            <p className=" text-justify">{description}</p>
          </div>
          <div>
            <Review id={_id} serviceName={serviceName}></Review>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;