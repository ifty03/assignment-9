import React from "react";
import useReview from "../hooks/hooks";
import DefaultReviews from "../DefaultReviews/DefaultReviews";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const threeReviews = reviews?.slice(0, 3);
  return (
    <>
      <div className="grid md:grid-cols-5 gap-4 mx-5 flex-col mt-8 mb-8">
        <Slide left>
          <div className="col-span-3 my-auto">
            <h1 className="md:text-6xl text-5xl font-extrabold font-sens">
              Your Are Slow
            </h1>
            <h1 className="lg:text-6xl text-5xl font-extrabold font-sens text-purple-700">
              Your Pc is Pro
            </h1>
            <p className="font-sens text-xl mt-7">
              Advantages of PC gaming. PCs have different advantages, including
              the ability to customize your PC, create hotkeys, sharper and more
              lifelike visuals, superior accuracy with peripherals, and greater
              ability to modify games.
            </p>
            {/* button */}
            <button
              href="#_"
              className="relative px-5 py-2 font-medium text-white group mt-7"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">Get Started</span>
            </button>
          </div>
        </Slide>
        <Slide right>
          <div className="col-span-2 my-auto">
            <img src="pc.webp" alt="" />
          </div>
        </Slide>
      </div>
      <h1 className="text-5xl font-sans font-bold text-purple-600 inline">
        Customer Reviews
      </h1>
      <div className="md:mx-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {threeReviews?.map((comment) => (
          <DefaultReviews key={comment._id} comment={comment}></DefaultReviews>
        ))}
      </div>

      {/* button */}
      <Link
        to="/review"
        className="box-border mt-8 mb-10 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-purple-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-purple-300 ring-offset-purple-200 hover:ring-offset-purple-500 ease focus:outline-none"
      >
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative z-20 flex items-center text-sm">
          <svg
            className="relative w-5 h-5 mr-2 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          See All Reviews
        </span>
      </Link>
    </>
  );
};

export default Home;
