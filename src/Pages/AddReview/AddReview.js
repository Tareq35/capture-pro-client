import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();
  useTitle("Add Review")

  const { price, serviceName, img, _id } = service;
  console.log(service)

  const handleReviewPost = event => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const reviewAdd = {
      name: user?.displayName,
      email: user?.email,
      comment: review,
      img: user?.photoURL,
      serviceName,
      price,
      serviceImg: img
    };

    fetch("https://capture-pro-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewAdd)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success("Your Review Successfully Posted!!")
          form.reset();
          navigate(`/services/${_id}`)
        }
      })
  }

  return (
    <div>
      <div className="bg-white mx-auto mb-10 p-5 shadow-2xl rounded-lg">
        <form onSubmit={handleReviewPost}>
          <label
            className="text-2xl text-black font-serif font-semibold my-3 inline-block"
            htmlFor="review"
          >
            Add Review
          </label>{" "}
          <br />
          <textarea
            className="w-full rounded-lg border border-gray-700"
            name="review"
            id="review"
            cols="30"
            rows="4"
          ></textarea>
          <div>
            <button
              className="px-16 py-2 rounded-l-lg rounded-r-lg my-7 font-semibold font-serif inline-block bg-sky-700 text-white hover:bg-sky-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;