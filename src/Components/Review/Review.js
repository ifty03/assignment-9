import React from "react";
import DefaultReviews from "../DefaultReviews/DefaultReviews";
import useReview from "../hooks/hooks";

const Review = () => {
  /* call custom hook */
  const [reviews, setReviews] = useReview();
  return (
    <>
      <h1 className="mt-8 text-5xl font-sans font-bold text-purple-600 inline">
        Our Customer Reviews
      </h1>
      <div className="md:mx-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {reviews.map((comment) => (
          <DefaultReviews key={comment._id} comment={comment}></DefaultReviews>
        ))}
      </div>
    </>
  );
};

export default Review;
