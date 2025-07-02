"use client";

import Image from "next/image";
import React from 'react'
interface SlideItem {
    id: number;
    title: string;
    img: string;
}

const items: SlideItem[] = [
    { id: 1, title: "Developer", img: "/jobber.jpg" },
    { id: 2, title: "Designer", img: "/jobber1.jpg" },
    { id: 3, title: "Marketer", img: "/jobber2.jpg" },
    { id: 4, title: "Writer", img: "/jobber3.jpg" },
]
const Categories = () => {
    return (
        <section className="bg-gray-50 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700 mt-10">
                Explore Top Jobs
            </h2>

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
                            <p className="text-gray-600 text-sm flex-1">
                                Find opportunities in {item.title}. Apply now and boost your career.
                            </p>
                            <button className="mt-4 bg-gradient-to-r from-teal-400 to-green-600 text-white py-2 rounded-full hover:from-teal-500 hover:to-green-700 transition">
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