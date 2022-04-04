import React from "react";
import { Roll } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import { BsFillStarFill } from "react-icons/bs";

const DefaultReviews = ({ comment }) => {
  const { address, ratting, email, name, phone, picture, review } = comment;
  return (
    <Roll left>
      <div className="w-96 bg-gray-100 mt-4 p-7 rounded-lg shadow-xl mx-auto">
        <img className="mx-auto rounded-full" src={picture} alt="" />
        <RubberBand>
          <h1 className="text-xl font-bold font-mono mt-3">{name}</h1>
          <h1 className="text-xl font-sans">{email}</h1>
          <h2 title={review} className="font-semibold mt-3">
            {review.length > 200 ? review.slice(0, 200) + "..." : review}
          </h2>
        </RubberBand>
        <div className="flex items-center mt-3">
          <BsFillStarFill className="text-orange-600 text-xl mr-2" /> {ratting}{" "}
          star
        </div>
        <div className="mt-4">
          <span className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-purple-100 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-purple-800 dark:text-white dark:border-purple-600 dark:hover:bg-purple-700 dark:hover:border-purple-600 dark:focus:ring-purple-700">
            Helpful
          </span>
          <span className="cursor-pointer pl-4 text-sm font-medium text-purple-600 hover:underline dark:text-purple-500">
            Report abuse
          </span>
        </div>
      </div>
    </Roll>
  );
};

export default DefaultReviews;
