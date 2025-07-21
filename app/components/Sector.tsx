
import Image from 'next/image';

export default function Sector() {
  return (
    <div className='py-16 px-4'>
      <h1 className='text-3xl  text-center font-bold lg:text-5xl'>Join our global crowd</h1>
      <p className='text-center mt-8'>Whether you’re a student, a stay-at-home parent, a professional, or a retiree, our global <br /> community
        embraces everyone, regardless of their background or abilities.</p>
      <div className='max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5  mt-10'>

        <div>
          <div className='flex gap-2 item-center justify-center'>
            <div>
              <Image className='mx-auto' src="/romote.svg" height={15} width={35} alt='remote' />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>1m+</h1>
            </div>
          </div>
          <h4 className='text-center'>Remote members</h4>
        </div>
        <div>
          <div className='flex gap-2 items-center justify-center'>
            <div>
              <Image className='mx-auto' src="/lang.svg" height={15} width={35} alt='remote' />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>100</h1>
            </div>
          </div>
          <h4 className='text-center'>Languages</h4>

        </div>
        <div>
          <div className='flex gap-2 items-center justify-center'>
            <div>
              <Image className='mx-auto' src="/earnings.svg" height={15} width={35} alt='remote' />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>$67M</h1>
            </div>
          </div>
          <h4 className='text-center'>Earned in 2024</h4>
        </div>
         <div>
          <div className='flex gap-2 items-center justify-center'>
            <div>
              <Image className='mx-auto' src="/country.svg" height={15} width={35} alt='remote' />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>75</h1>
            </div>
          </div>
          <h4 className='text-center'>Countries</h4>

        </div>
      </div>
      <Image className='mx-auto  ' src="/world.jpg" height={100} width={900} alt='world-members'/>

    </div>
  );
}
