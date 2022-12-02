import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = ({ id, serviceName }) => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://capture-pro-server.vercel.app/review?serviceName=${serviceName}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("attorney-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [serviceName]);

  return (
    <div className="mt-7">
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
      {reviews.length === 0 ? (
        <p className=" text-xl font-serif font-semibold">No Review Found For This Service !!!</p>
      ) : (
        <></>
      )}
      {user?.uid ? (
        <div className="w-[250px] h-[180px] sticky bottom-0 p-4 my-6 bg-white rounded-lg shadow-lg">
          <p className="text-xl font-serif font-semibold">
            Forward your review
          </p>
          <p className="text-[#686666] font-serif font-medium mt-2">
            Please give your valuable review here!!
          </p>
          <Link
            to={`/addReview/${id}`}
            className="px-6 py-2 rounded-l-lg font-serif rounded-r-lg text-[15px] font-semibold mt-4 inline-block bg-sky-700 text-white hover:bg-sky-500"
          >
            Add Your Review
          </Link>
        </div>
      ) : (
        <div className="w-[250px] sticky bottom-0 h-[160px] p-4 my-6 bg-white rounded-lg shadow-lg">
          <p className="text-xl font-serif font-semibold">You Are Signed Out</p>
          <p className="text-[#686666] font-serif font-medium mt-2">
            You Must Sign In to Review
          </p>
          <Link
            to="/login"
            className="px-6 py-2 rounded-l-lg font-serif rounded-r-lg text-[13px] mr-4 font-semibold mt-4 inline-block bg-[#141414] text-white hover:bg-[#3e3c3c]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 rounded-l-lg font-serif rounded-r-lg font-semibold text-[13px] mt-4 inline-block bg-[#141414] text-white hover:bg-[#3e3c3c]"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Review;