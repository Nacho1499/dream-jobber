import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-green-50 h-screen">

      <div className=" h-screen flex justify-center items-center gap-20">
        <div>
          <h1 className="text-5xl font-bold antialiased">
            Got Talent? <br />
            Meet Opportunity
          </h1>
          <p className="mt-4">Company reviews. Salaries. Interviews. Jobs.</p>
          <p className="mt-1">Popular Searches:</p>
          <p className="font-bold">
            Web development, Frontend development, Backend development
          </p>
          <button className="p-3 bg-gradient-to-r from-teal-400 to-green-600 text-white shadow-md cursor-pointer rounded-full mt-4 w-[200px]">
            Get Started
          </button>
        </div>
        <div className="relative">
          <Image
            className="rounded-lg"
            src="/jobber.jpg"
            width={650}
            height={100}
            alt="hero-image"
          />
          <div className="absolute  left-4 bottom-45 rounded-lg bg-white/70 backdrop-blur-md p-3 shadow-lg animate-bounce">
            <p className="font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent"> 🔔 Job Alert Subscribe</p>
          </div>

          <div className="absolute top-75 left-80 rounded-lg bg-white/70 backdrop-blur-md p-3 shadow-lg ">
            <p className="mb-2 font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">1k+ candidates get jobs</p>
            <div className="flex  relative">
              <img
                className="rounded-full object-cover h-10 w-10  "
                src="/jobber1.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full object-cover h-10 w-10 absolute left-8 "
                src="/jobber2.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full object-cover h-10 w-10 absolute left-15 "
                src="/jobber3.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full object-cover h-10 w-10 absolute left-23 "
                src="/jobber4.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <div className="rounded-full object-cover h-10 w-10 absolute left-30 bg-gradient-to-r from-teal-400 to-green-600">
                <p className="text-white text-2xl font-bold text-center">+</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
