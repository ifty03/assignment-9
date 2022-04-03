import React from "react";

const Home = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4 mx-5 flex-col mt-8">
      <div className="col-span-3 my-auto">
        <h1 className="md:text-6xl text-5xl font-extrabold font-sens">
          Your Next Phone
        </h1>
        <h1 className="lg:text-6xl text-5xl font-extrabold font-sens text-purple-700">
          Your Best Phone
        </h1>
        <p className="font-sens text-xl mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore
          obcaecati est, nesciunt modi optio reprehenderit provident? Laudantium
          exercitationem autem quidem iste enim totam eaque dicta, inventore
          officiis,
        </p>
        {/* button */}
        <button
          href="#_"
          class="relative px-5 py-2 font-medium text-white group mt-7"
        >
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

          <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span class="relative">Live Demo</span>
        </button>
      </div>
      <div className="col-span-2 my-auto">
        <img src="pc.webp" alt="" />
      </div>
    </div>
  );
};

export default Home;
