"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

function Cta() {
    return (
     <div className="py-16 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-green-700 p-10 text-center rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Lead the future of Wealthpath careers
        </h1>
        <p className="text-white mt-4 mb-8 text-lg">
          Join us in creating a more relevant, trustworthy, and truthful AI, all while earning on your own terms.
        </p>
        <Link
          href="/login"
          className="bg-green-600  hover:bg-green-500 transition duration-300 text-white px-6 py-4 rounded-full font-medium"
        >
          Work with Wealthpath
        </Link>
      </motion.div>
    </div>
    )
}

export default Cta