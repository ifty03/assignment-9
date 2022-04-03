import React from "react";
import useReview from "../hooks/hooks";

const DefaultReviews = () => {
  const [reviews, setReviews] = useReview();
  console.log(reviews);
  return (
    <div>
      <h1>this is default reviews</h1>
    </div>
  );
};

export default DefaultReviews;
