import React from 'react'
import Image from 'next/image'

const Sector = () => {
  return (

    <div className="flex flex-col  md:flex-row justify-center items-center gap-6 bg-gray-50 p-6">
      {/* Card 1 */}
      <div className="flex  flex-col md:flex-row justify-between items-center gap-6 bg-red-100 p-6 rounded-lg w-full max-w-2xl">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-xl mb-2 font-bold">For Employers</h1>
          <p>
            Find professionals from around <br /> the world and across all skills.
          </p>
          <button className="p-2 bg-gradient-to-r from-teal-400 to-green-600 text-white cursor-pointer rounded-full mt-5 w-40">
            Get Started
          </button>
        </div>
        <div className="hidden md:block flex-1">
          <Image src="/sector.jpg" alt="sector" width={200} height={150} className="object-cover rounded" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col  md:flex-row justify-between items-center gap-6 bg-red-100 p-6 rounded-lg w-full max-w-2xl">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-xl mb-2 font-bold">For Employees</h1>
          <p>
            Find opportunities from around <br /> the world and across all fields.
          </p>
          <button className="p-2 bg-gradient-to-r from-teal-400 to-green-600 text-white cursor-pointer rounded-full mt-5 w-40">
            Get Started
          </button>
        </div>
        <div className="hidden md:block flex-1">
          <Image src="/sector.jpg" alt="sector" width={200} height={150} className="object-cover rounded" />
        </div>
      </div>
    </div>

  )
}

export default Sector