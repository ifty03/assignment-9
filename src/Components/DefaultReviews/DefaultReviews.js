import React from "react";

const DefaultReviews = ({ comment }) => {
  const { address, ratting, email, name, phone, picture, review } = comment;
  return (
    <div className="w-96 bg-purple-200 mt-4 p-7 rounded-lg">
      <img className="mx-auto rounded-full" src={picture} alt="" />
      <h1 className="text-xl font-bold font-mono mt-3">{name}</h1>
      <h1 className="text-xl font-sans">{email}</h1>
      <h2 title={review} className="font-semibold mt-3">
        {review.length > 200 ? review.slice(0, 200) + "..." : review}
      </h2>
      <h3>Ratting: {ratting} star</h3>
    </div>
  );
};

export default DefaultReviews;
