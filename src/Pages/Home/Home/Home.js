import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ExpertArea from '../ExpertPart/ExpertArea';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    useTitle("Home")
    

    return (
      <div>
        <Banner></Banner>
        <About></About>
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard service={service} key={service._id}></ServiceCard>
          ))}
        </div>
        <Link
          to={`/services`}
          className="px-16 py-2 rounded-l-lg rounded-r-lg my-7 font-semibold font-serif inline-block bg-[#141414] text-white hover:bg-[#3e3c3c]"
        >
          SHOW ALL
        </Link>
        <div>
          <ExpertArea></ExpertArea>
        </div>
      </div>
    );
};

export default Home;