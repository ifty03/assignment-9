import React, { useEffect, useState } from "react";
import Blog from "./Bolg/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div>
      <h1 className="text-4xl text-purple-700 font-sans font-bold mt-4">
        MY BLOGS
      </h1>
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
