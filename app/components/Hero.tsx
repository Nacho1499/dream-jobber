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
          <button className="p-3 bg-green-700 text-white shadow-md cursor-pointer rounded-full mt-4 w-[200px]">
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
            <p className="font-bold"> 🔔 Job Alert Subscribe</p>
          </div>

          <div className="absolute top-75 left-80 rounded-lg bg-white/70 backdrop-blur-md p-3 shadow-lg ">
            <p className="mb-2 font-bold">1k+ candidates get jobs</p>
            <div className="flex">
              <img
                className="rounded-full "
                src="/jobber1.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full "
                src="/jobber1.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full "
                src="/jobber1.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
              <img
                className="rounded-full "
                src="/jobber1.jpg"
                height={10}
                width={50}
                alt="candidates"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
