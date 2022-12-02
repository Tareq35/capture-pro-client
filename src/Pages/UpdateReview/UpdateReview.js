import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateReview = () => {
  const storedReview = useLoaderData();
  const navigate = useNavigate();
  useTitle("Review Update")


  const [review, setReview] = useState(storedReview);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    //   console.log(user);

    fetch(`https://capture-pro-server.vercel.app/update/${storedReview._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        ;
        if (data.modifiedCount > 0) {
          toast.success('Update Successfully!!')
          console.log(data);
          navigate(`/myReview`)
        }
      })
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...review };
    newUser[field] = value;
    setReview(newUser);
  };


  return (
    <div>
      <div className="bg-white lg:w-1/2 text-start mx-auto mb-10 p-5 shadow-2xl rounded-lg">
        <h1 className="text-2xl text-black font-serif font-semibold my-3 inline-block">
          Update Your Review Here!!
        </h1>
        <br />
        <label
          className=" text-black font-serif font-semibold my-3 inline-block"
          htmlFor="name"
        >
          Name
        </label>
        <br />
        <input
          className="w-full h-10 rounded-lg border border-gray-700"
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
        />
        <br />
        <label
          className=" text-black font-serif font-semibold my-3 inline-block"
          htmlFor="review"
        >
          Edit Review
        </label>{" "}
        <br />
        <textarea
          className="w-full rounded-lg border border-gray-700"
          onChange={handleInputChange}
          name="comment"
          id="review"
          cols="30"
          rows="4"
        ></textarea>{" "}
        <br />
        <button
          onClick={handleUpdateUser}
          className="px-16 w-full py-2 rounded-l-lg rounded-r-lg my-7 font-semibold font-serif inline-block bg-[#141414] text-white hover:bg-[#3e3c3c]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateReview;