"use client";

import Image from "next/image";
import React from 'react'
import Link from "next/link";
interface SlideItem {
    id: number;
    title: string;
    img: string;

    description: string
}

const items: SlideItem[] = [
    { id: 1, title: "Improve VR technology", img: "/tasks1.webp", description: "Improve VR technology." },
    { id: 2, title: "Evaluate text-to-speech audio clips", img: "/tasks2.webp", description: "advertising, Digital marketing and Branding." },
    { id: 3, title: "Evaluate search results on entertainment platforms", img: "/task3.webp", description: "Customer experience and Account management." },
    { id: 4, title: "Complete a wide variety tasks online", img: "/task4.webp", description: "Graphic, Digital and Product design." },
]
const Categories = () => {
    return (
        <section className="bg-gray-50 py-10 px-4">
            <h2 className="text-4xl font-bold text-center  mt-10">
                Explore different types of tasks
            </h2>
            <p className="text-center mt-4 mb-10">Find tasks that fit your lifestyle and earn on your own schedule by applying to one or multiple projects.</p>


            <div className="container max-w-6xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-6 px-2">
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
                            <h3 className="text-lg font-bold  mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm flex-1">
                                {item.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-9">
                <Link href="/#" className="bg-green-700  text-white px-5 py-2 rounded-full">Explore all projects</Link>

            </div>

        </section>
    )
}

export default Categories