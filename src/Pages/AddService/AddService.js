import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import './AddService.css';

const AddService = () => {
  useTitle("Add Service")
  const navigate = useNavigate();

  const handlePostSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const title = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    // console.log(photo, title, price, description); 

    const addService = {
      img: photo,
      serviceName: title,
      price,
      description,
      date: Date()
    };

    fetch("https://capture-pro-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success("Your Service Add Successfully !!")
          form.reset();
          navigate('/');
        }
      })
  }


  return (
    <div>
    </div>
  );
};

export default AddService;