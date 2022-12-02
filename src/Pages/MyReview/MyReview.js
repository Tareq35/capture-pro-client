import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReview = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Review")

  useEffect(() => {
    fetch(`https://capture-pro-server.vercel.app/myReview?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("attorney-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [logout, user?.email])


  // Delete Review-------------------------------------------------->
  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are sure Delete this review?")
    if (proceed) {
      fetch(`https://capture-pro-server.vercel.app/myReview/${id}`, {
        method: "DElETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remain = reviews.filter((rv) => rv._id !== id);
            setReviews(remain);
            toast.success("Your Review Deleted Successfully!!");
          }
        });
    }
  };


  return (
    <div>
      {reviews.length === 0 ? (
        <p className=" text-2xl font-serif font-semibold">
          No Review Found. Please! Add Review.
        </p>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <MyReviewCard
              key={review._id}
              handleReviewDelete={handleReviewDelete}
              review={review}
            ></MyReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReview;