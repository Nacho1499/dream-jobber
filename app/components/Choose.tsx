import React from 'react'
import Image from 'next/image'

function Choose() {
    return (
        <div className='py-16 px-4'>
            <h1 className='text-3xl text-center font-bold'>Why Wealthpath careers?</h1>
            <p className='text-center mt-8'>We are committed to providing a fair, supportive, and healthy environment where everyone can succeed. <br />
                Read our Wealthpath careers Code of Ethics.</p>

            <div className='max-w-6xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-5 mt-10'>
                <div className='border-solid border border-gray-200 p-5 rounded-lg'>
                    <div className='flex mb-3 item-center gap-4'>
                        <div>
                            <Image src="/choose1.svg" height={15} width={35} alt='payment' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium mb-3'>Quick payments</h1>
                        </div>
                    </div>
                    <p>Withdraw your earnings easily using your preferred method, such as PayPal, Payoneer, Airtm, and others.</p>
                </div>
                <div className='border-solid border border-gray-200 p-5 rounded-lg'>
                    <div className='flex mb-3 item-center gap-4'>
                        <div>
                            <Image src="/choose2.svg" height={15} width={35} alt='payment' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium mb-3'> Flexible hours</h1>
                        </div>
                    </div>
                    <p>Work at any time of the day as long as you complete your weekly targets.</p>
                </div>
                <div className='border-solid border border-gray-200 p-5 rounded-lg'>
                    <div className='flex mb-3 item-center gap-4'>
                        <div>
                            <Image src="/choose3.svg" height={15} width={35} alt='payment' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium mb-3'>Work from anywhere</h1>
                        </div>
                    </div>
                    <p>Whether you’re on a beach or at home with a baby, you can mold your work around your life.</p>
                </div>
            </div>
        </div>
    )
}

export default Choose