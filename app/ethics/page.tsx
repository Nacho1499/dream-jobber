"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const reasons = [
  {
    title: 'Inclusive',
    description:
      'A diverse, inclusive culture is vital to our mission of helping build better AI. We offer opportunities for individuals of all abilities and backgrounds.',
    icon: '/hand.svg',
  },
  {
    title: 'Crowd Voice',
    description: 'Our Crowd has a valued voice at Appen, and their feedback helps us to continuously improve.',
    icon: '/talk.svg',
  },
  {
    title: 'Privacy and Confidentiality',
    description: 'Any information collected about the crowd is requested solely for project purposes. We take precautions to protect that information and do not release private data to third parties without consent.',
    icon: '/privacy.svg',
  },
];

const EthicsPage = () => {
  return (
    <>
      <Navbar />

      <header className="text-center px-4 py-10 mt-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">WealthPath Code of Ethics</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Code of Ethics shows our dedication to the well-being of our Contributors and is built on a foundation of <br /> <strong>fair pay, inclusion, and privacy</strong>. 
          It formalizes the best practices Appen has developed over <br /> the past several years to support and promote contractor wellness.
        </p>
        <div className="mt-8">
          <Image
            className="mx-auto rounded-lg"
            src="/world.jpg"
            width={700}
            height={400}
            alt="Global ethics illustration"
          />
        </div>
      </header>

      <section className="bg-white py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default EthicsPage;
