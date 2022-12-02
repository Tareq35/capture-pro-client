import React, { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const Services = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch("https://capture-pro-server.vercel.app/services")
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setServices(data)
      })

  }, [])

  useTitle("Services")

  return (
    <div>
      {loading ? (
        <HashLoader className="m-auto" color="#36d7b7" />
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 my-12">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;