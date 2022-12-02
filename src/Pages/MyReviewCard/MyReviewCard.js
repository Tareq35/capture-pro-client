import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./MyReviewCard.css";

const MyReviewCard = ({ review, handleReviewDelete }) => {
  const { name, serviceImg, comment,img,email, _id, serviceName } = review;

  return (
    <div className="my-5 shadow-2xl rounded-lg">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              onClick={() => handleReviewDelete(_id)}
              className="btn btn-square btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="MyReview-card">
            <div>
              <img
                className="w-full h-[130px] rounded-lg"
                src={serviceImg}
                alt=""
              />
            </div>
            <div className="text-start ml-2">
              <p className=" font-serif font-medium text-xl">{serviceName}</p>
              <p className="text-[12px] text-justify">
                {comment.slice(0, 160)}...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 my-2">
                  <div className="avatar">
                    <div className=" rounded-xl w-6 h-6">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold font-serif text-[13px]">
                        {name}
                      </p>
                      <p className="text-[#3c3b3a] font-serif text-[11px] font-medium">
                        {email}
                      </p>
                    </div>
                  </div>
                </div>
                <Link to={`/update/${_id}`}>
                  <AiFillEdit
                    title="Need To Edit"
                    className="text-3xl text-stone-900"
                  ></AiFillEdit>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;