'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const reasons = [
  {
    title: 'Quick payments',
    description:
      'Withdraw your earnings easily using your preferred method, such as PayPal, Payoneer, Airtm, and others.',
    icon: '/choose1.svg',
  },
  {
    title: 'Flexible hours',
    description: 'Work at any time of the day as long as you complete your weekly targets.',
    icon: '/choose2.svg',
  },
  {
    title: 'Work from anywhere',
    description: 'Whether you’re on a beach or at home with a baby, you can mold your work around your life.',
    icon: '/choose3.svg',
  },
  {
    title: 'User-friendly guides',
    description: 'Read user-friendly guides and complete practice quizzes to increase your chances of passing the tests',
    icon: '/lang.svg',
  },
  {
    title: 'Work  with wealthpath',
    description: 'Get into wealthpath work right away, even without technical experience. Boost your resume with in-demand skills.',
    icon: '/lang.svg',
  },
  {
    title: 'Competitive pay',
    description: 'We believe in fair compensation for the work you do, and this is reflected in the pay you receive.',
    icon: '/choose2.svg',
  },
];

const Choose = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.h1
        className="text-3xl md:text-4xl text-center font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Wealthpath Careers?
      </motion.h1>


      <motion.p
        className="text-center mt-6 text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We are committed to providing a fair, supportive, and healthy environment where everyone can succeed. <br />
        <Link href="/ethics" className="text-green-700 font-semibold">Read our Wealthpath Careers Code of Ethics.</Link>
      </motion.p>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14"
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
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Choose;
