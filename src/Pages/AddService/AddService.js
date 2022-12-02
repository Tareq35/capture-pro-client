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
      <div>
        <p className="text-2xl my-3 font-serif font-semibold">
          Add Service
        </p>
        <div className=" lg:w-1/2 bg-white shadow-xl rounded-lg mx-auto mb-10 p-5">
          <form onSubmit={handlePostSubmit} className="add-service">
            <label htmlFor="title">Service Title</label>
            <br />
            <input type="text" name="name" id="title" required />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input type="text" name="price" id="price" required />
            <br />
            <label htmlFor="photo">Image URL</label>
            <br />
            <input type="text" name="photo" id="photo" required />
            <label htmlFor="description">Add Your Service Description</label>
            <br />
            <textarea
              className="w-full border border-gray-600 rounded-lg"
              name="description"
              id="description"
              cols="30"
              rows="5"
              required
            ></textarea>{" "}
            <div className="text-center">
              <button
                className="px-16 py-4 rounded-l-lg rounded-r-lg my-7 font-semibold font-serif inline-block bg-sky-700 text-white hover:bg-sky-500"
                type="submit"
              >
                Add To Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;