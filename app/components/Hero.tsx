import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="bg-green-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">

          {/* TEXT SECTION */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold antialiased">
              Got Talent? <br />
              Meet Opportunity
            </h1>
            <p className="mt-4 text-gray-700">Earn remotely by completing online tasks that help improve AI. 
              Work at your preferred time and gain real-world, hands-on experience in training AI.</p>
            
            <Link href="/login">
              <button className="mt-6 w-[180px] md:w-[200px] p-3 bg-green-700 text-white rounded-full shadow-md cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full max-w-xl">
            <Image
              className="rounded-lg w-full h-auto object-cover"
              src="/jobber.jpg"
              width={650}
              height={400}
              alt="hero-image"
            />

            {/* 🔔 Job Alert Overlay */}
            <div className="absolute left-4 bottom-4 rounded-lg bg-white/70 backdrop-blur-md p-3 shadow-lg animate-bounce">
              <p className="font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                🔔 Job Alert Subscribe
              </p>
            </div>

            {/* 1k+ Candidates Overlay */}
            <div className="absolute top-4 right-4 rounded-lg bg-white/70 backdrop-blur-md p-3 shadow-lg">
              <p className="mb-2 font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                1k+ candidates get jobs
              </p>
              <div className="flex relative">
                <img className="rounded-full h-10 w-10 object-cover" src="/jobber1.jpg" alt="candidate 1" />
                <img className="rounded-full h-10 w-10 -ml-4 object-cover" src="/jobber2.jpg" alt="candidate 2" />
                <img className="rounded-full h-10 w-10 -ml-4 object-cover" src="/jobber3.jpg" alt="candidate 3" />
                <img className="rounded-full h-10 w-10 -ml-4 object-cover" src="/jobber4.jpg" alt="candidate 4" />
                <div className="rounded-full h-10 w-10 -ml-4 bg-gradient-to-r from-teal-400 to-green-600 flex items-center justify-center text-white font-bold">+</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-green-50 p-4">
        <p className="text-center text-green-700 text-sm animate-bounce lg:text-lg">Scroll Down <br />↓</p>
      </div>
    </>
  );
};

export default Hero;
