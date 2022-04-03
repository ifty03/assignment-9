import React from "react";
import DefaultReviews from "../DefaultReviews/DefaultReviews";
import useReview from "../hooks/hooks";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="md:mx-20 grid grid-cols-3 gap-4 mt-8">
      {reviews.map((comment) => (
        <DefaultReviews key={comment._id} comment={comment}></DefaultReviews>
      ))}
    </div>
  );
};

export default Review;
