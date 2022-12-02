import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({review}) => {
    const {name, img, comment} = review;

    return (
      <div
        id="review-card"
        className="flex  bg-white my-3 shadow-2xl rounded-md p-3"
      >
        <div>
          <img className="w-full h-[50px] rounded-full" src={img} alt="" />
        </div>
        <div className="">
          <p className="text-[17px] font-serif font-semibold text-start">
            {name}
          </p>
          <p className="text-[13px] font-serif text-justify">{comment}</p>
        </div>
      </div>
    );
};

export default ReviewCard;