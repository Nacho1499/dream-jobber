"use client";

import Image from "next/image";
import React from 'react'
interface SlideItem {
    id: number;
    title: string;
    img: string;
    jobs:string;
   description:string
}

const items: SlideItem[] = [
    { id: 1, title: "Development & IT", img: "/program3.jpg",jobs:"8 jobs",description:"Frontend, Backend, Web and App development."  },
    { id: 2, title: "Marketing & sales", img: "/market.jpg", jobs:"5 jobs",description:"advertising, Digital marketing and Branding."  },
    { id: 3, title: "Customer Service", img: "/service.jpg", jobs:"1 job",description:"Customer experience and Account management." },
    { id: 4, title: "Design & Creative", img: "/design.jpg", jobs:"4 jobs",description:"Graphic, Digital and Product design."  },
]
const Categories = () => {
    return (
        <section className="bg-gray-50 py-10">
            <h2 className="text-3xl font-bold text-center  text-green-700 mt-10">
                Popular Category
            </h2>
            <h3 className="text-gray-600 text-sm text-center mt-2 mb-8">live jobs - 5 added today.</h3>

            <div className="container max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 px-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="object-cover w-full h-48"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <h3 className="text-lg font-bold text-green-700 mb-2">
                                {item.title}
                            </h3>
                            <h3 className="text-gray-600 text-sm flex-1 mb-2">{item.jobs}</h3>
                            <p className="text-gray-600 text-sm flex-1">
                                {item.description}
                            </p>
                            <button className="mt-4 bg-green-700 text-white py-2 rounded-full hover:from-teal-500 hover:to-green-700 transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Categories