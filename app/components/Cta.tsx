import React from 'react'
import Link from 'next/link'

function Cta() {
    return (
        <div className='py-16 px-4 flex justify-center'>
            <div className='bg-green-700 p-10 text-center  rounded-circle rounded-lg'>
                <h1 className='text-3xl text-white '>Lead the future of Wealthpath careers</h1>
                <p className='text-white mt-3 mb-7'>Join us in creating a more relevant, trustworthy, and truthful AI, all while earning on your own terms.</p>
               <Link href="#"  className='bg-green-600  text-white px-6 py-2 rounded-full'>work with Wealthpath</Link>
                
            </div>

        </div>
    )
}

export default Cta