import React from "react";
import { Slide } from "react-reveal";
import "./Blog.css";

const Blog = ({ blog }) => {
  const { name, article, email, title } = blog;
  return (
    <Slide left>
      <div>
        <div className="container mx-auto px-20">
          <div
            className="shadow-xl rounded-md"
            style={{ backgroundColor: "rgb(245 245 245)" }}
          >
            <div
              className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0"
              style={{ cursor: "auto" }}
            >
              <Slide top>
                <a href="https://stackdiary.com/" className="group">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                      src="download.jpg"
                      alt="blog img"
                      style={{ cursor: "auto" }}
                    />
                  </div>
                </a>
              </Slide>

              <div className="sm:col-span-2" style={{ cursor: "auto" }}>
                <div
                  className="flex items-center space-x-3"
                  style={{ cursor: "auto" }}
                >
                  <div
                    className="flex items-center space-x-2"
                    style={{ cursor: "auto" }}
                  >
                    <span
                      className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
                      style={{ cursor: "auto" }}
                    >
                      <svg
                        className="mr-1.5 h-2 w-2 brand-react"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3"></circle>
                      </svg>
                      Tag #1
                    </span>

                    <span
                      className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
                      style={{ cursor: "auto" }}
                    >
                      <svg
                        className="mr-1.5 h-2 w-2 brand-packages"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3"></circle>
                      </svg>
                      Tag #2
                    </span>

                    <span
                      className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
                      style={{ cursor: "auto" }}
                    >
                      <svg
                        className="mr-1.5 h-2 w-2 brand-tutoriel"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3"></circle>
                      </svg>
                      Tag #3
                    </span>
                  </div>
                </div>

                <div className="mt-2" style={{ cursor: "auto" }}>
                  <Slide right>
                    <a
                      href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5"
                      className="group"
                    >
                      <h4
                        className="text-2xl my-4 leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary"
                        style={{ cursor: "auto" }}
                      >
                        {title}
                      </h4>
                    </a>

                    <p
                      className="mt-1 text-left mb-8 text-lg font-normal text-skin-base leading-5"
                      style={{ cursor: "auto" }}
                    >
                      {article}
                    </p>
                  </Slide>

                  <div
                    className="mt-3 flex items-center font-sans"
                    style={{ cursor: "auto" }}
                  >
                    <div className="shrink-0">
                      <a href="https://stackdiary.com/">
                        <span className="sr-only">{name}</span>

                        <img
                          className="h-10 w-10 rounded-full"
                          src="writer.jpg"
                          alt="Ashikul islam"
                          style={{ cursor: "auto" }}
                        />
                      </a>
                    </div>

                    <div className="ml-3">
                      <p className="text-sm font-medium text-skin-inverted">
                        <a
                          href="https://stackdiary.com"
                          className="hover:underline"
                          style={{ cursor: "auto" }}
                        >
                          John Doe
                        </a>
                      </p>

                      <div
                        className="flex space-x-1 text-sm text-skin-muted"
                        style={{ cursor: "auto" }}
                      >
                        <time dateTime="2022-02-01" style={{ cursor: "auto" }}>
                          1 Feb, 2022
                        </time>

                        <span aria-hidden="true">·</span>

                        <span style={{ cursor: "auto" }}>3 min read time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Blog;
