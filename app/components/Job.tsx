"use client";

import Image from "next/image";

interface SlideItem {
    id: number;
    type: string;
    img: string;
    para: string;
    location: string;
    salary: string;
    day: string
}

const items: SlideItem[] = [
    { id: 1, type: "Physical", img: "/program3.jpg", location: "📌 Abuja", para: "Frontend Developer at Yootify Tech", salary: "#100k-#200k/month", day: "🕒 30 days left to apply" },
    { id: 2, type: "Physical", img: "/market.jpg", location: "📌 Lagos", para: "Frontend Developer at Yootify Tech", salary: "#100k-#200k/month", day: "🕒 30 days left to apply" },
    { id: 3, type: "Remote", img: "/service.jpg", location: "📌 Abuja", para: "Frontend Developer at Yootify Tech", salary: "#100k-#200k/month", day: "🕒 30 days left to apply" },
    { id: 4, type: "Remote", img: "/design.jpg", location: " 📌 Ibadan", para: "Frontend Developer at Yootify Tech", salary: "#100k-#200k/month", day: " 🕒30 days left to apply" },
];

export default function Job() {
    return (
        <section className=" py-16 px-4">
            <h2 className="text-3xl font-extrabold text-center text-green-700 mb-12">
                Latest Jobs
            </h2>

            <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-green-100"
                    >
                        <div>
                            <Image
                                src={item.img}
                                alt={item.para}
                                height={5} width={100}
                                className="object-cover w-[70px] h-[70px] py-3 px-3 rounded-full"
                            />
                        </div>

                        <div className="p-3 space-y-3">
                            <h3 className="text-lg font-semibold text-green-800">{item.para}</h3>

                            <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                                <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-red-100 text-red-500">
                                    {item.type}
                                </span>
                                <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-green-100 text-green-600">
                                    {item.location}
                                </span>
                                <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-gray-100 text-green-700">
                                    {item.salary}
                                </span>
                            </div>

                        </div>
                        <p className="text-sm px-3 p-3 text-green-700">{item.day}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
