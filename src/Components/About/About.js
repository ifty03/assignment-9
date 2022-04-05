import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-coolGray-800 text-coolGray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How computer mart works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          About Our Services
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">Who we Are</h3>
            <p className="mt-1 text-coolGray-400">
              Computer Services Ltd, is one of the pioneer in the technological
              business domain of Bangladesh as ICT Infrastructure Development &
              Integrated ICT Systems Integration Service Provider, since its
              inception in 1987 and already partnered with a number of global
              companies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Data Storage </h3>
            <p className="mt-1 text-coolGray-400">
              We offer from high performance all-flash arrays to hybrid flash
              platforms and scale-out NAS systems that helps data-intensive
              organizations deliver optimal experiences.We offer ECM solution to
              organize & store organization’s documents and other contents
              relating to the organization’s processes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Network & IT Security</h3>
            <p className="mt-1 text-coolGray-400">
              We help to design and develop enterprise network architecture and
              layered security model to ensure data availability, reliability
              and security to our clients.We provide you required server &
              virtualization solutions to ensure high performance of your ICT
              infrastructure and cloud platform.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Enterprise Application</h3>
            <p className="mt-1 text-coolGray-400">
              We provide Enterprise Business Solutions for a scalable ,easy to
              manage business management and information accessibility for our
              clients.We help to design & develop efficient, agile, intelligent,
              cost-effective and future-ready data center to deliver continuous
              business value to meet the needs of your evolving enterprise.
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/contact"
        className="relative px-5 py-2 font-medium text-white group mt-7"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
        <span className="relative">About more...</span>
      </Link>
    </section>
  );
};

export default About;
