'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Sector() {
  return (
    <div className='py-16 px-4'>
      <motion.h1
        className='text-3xl text-center font-bold lg:text-5xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join our Wealthpath careers
      </motion.h1>

      <motion.p
        className='text-center mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Whether you’re a student, a stay-at-home parent, a professional, or a retiree, our global <br />
        community embraces everyone, regardless of their background or abilities.
      </motion.p>

      <div className='max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
        {[
          { icon: '/romote.svg', value: '1m+', label: 'Remote members' },
          { icon: '/lang.svg', value: '100', label: 'Languages' },
          { icon: '/choose2.svg', value: '$67M', label: 'Earned in 2024' },
          { icon: '/choose3.svg', value: '75', label: 'Countries' },
        ].map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
          >
            <div className='flex gap-2 items-center justify-center'>
              <Image className='' src={item.icon} height={35} width={28} alt={item.label} />
              <h1 className='text-2xl font-bold'>{item.value}</h1>
            </div>
            <h4 className='text-center'>{item.label}</h4>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='mt-10'
      >
        <Image className='mx-auto' src="/world.jpg" height={100} width={900} alt='world-members' />
      </motion.div>
    </div>
  );
}
