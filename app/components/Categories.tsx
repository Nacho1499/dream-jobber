'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SlideItem {
  id: number;
  title: string;
  img: string;
  description: string;
}

const items: SlideItem[] = [
  { id: 1, title: "Improve VR technology", img: "/tasks1.webp", description: "WealthPath Careers supports innovation by helping tech professionals find roles where they can contribute to advancing VR technology and immersive experiences." },
  { id: 2, title: "Evaluate text-to-speech audio clips", img: "/tasks2.webp", description: "WealthPath Careers offers opportunities in emerging fields, including roles where professionals evaluate text-to-speech audio clips for quality, clarity, and accuracy." },
  { id: 3, title: "Evaluate search results on entertainment platforms", img: "/task3.webp", description: "WealthPath Careers connects users to roles that involve evaluating search results on entertainment platforms to ensure relevance, accuracy, and user satisfaction." },
  { id: 4, title: "Complete a wide variety of tasks online", img: "/task4.webp", description: "WealthPath Careers allows users to complete a wide variety of tasks online, including browsing job listings, submitting applications, uploading resumes, and tracking application status—all from one convenient platform." },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Categories = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore different types of tasks
      </motion.h2>

      <motion.p
        className="text-center mt-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Find tasks that fit your lifestyle and earn on your own schedule by applying to one or multiple projects.
      </motion.p>

      <motion.div
        className="container max-w-6xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
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
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-9"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link href="/#" className="bg-green-700 text-white px-5 py-4 rounded-full hover:bg-green-800 transition">
          Explore all projects
        </Link>
      </motion.div>
    </section>
  );
};

export default Categories;
