"use client";

import Image from 'next/image';

export default function Sector() {
  return (
    <div className="bg-gray-50 py-15 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-red-100 p-5 rounded-lg w-full max-w-md mx-auto md:mx-0">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-bold mb-2">For Employers</h1>
            <p>Find professionals from around the world and across all skills.</p>
            <button className="mt-4 w-40 p-2 rounded-full text-white bg-green-700">
              Post jobs for Free
            </button>
          </div>
          <div className="hidden md:block flex-1">
            <Image
              src="/sector.jpg"
              alt="sector"
              width={200}
              height={150}
              className="rounded object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-red-100 p-5 rounded-lg w-full max-w-md mx-auto md:mx-0">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-bold mb-2">For Employees</h1>
            <p>Build your professional profile, find new job opportunities.</p>
            <button className="mt-4 w-40 p-2 rounded-full text-white bg-green-700">
              Find Avaliable jobs
            </button>
          </div>
          <div className="hidden md:block flex-1">
            <Image
              src="/sector.jpg"
              alt="sector"
              width={200}
              height={150}
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
