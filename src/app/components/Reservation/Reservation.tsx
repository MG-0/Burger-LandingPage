import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ReservationForm from '@/app/components/Reservation/ReservationForm'
const Reservation = () => {
  return (
    <div className='pt-[5rem] bg-[url(/images/bg-black.jpg)] relative bg-center bg-cover mt-[2rem]     '>
        <div className='absolute w-full h-full bg-[#000000a6] top-0 bottom-0 left-0 right-0 '> </div>

        <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]  '>
            <div>
                <h1 className='teaxt-[30px] md:text-[40px] lg;text-[50px] text-white font-bold uppercase leading-[3rem] md:leading-[4rem] '>
                    do you have any dinner plan today? reserve your table
                </h1>
                <p className='text-[17px] mt-[1rem] text-white text-opacity-50  '>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Consequatur numquam vero 
                    dicta, at quos dolorum eius nobis qui tenetur officiis
                     omnis sapiente quas et voluptas.
                </p>
                <div className='flex mt-[2rem] items-center space-x-4 '>
                    <div className='w-[3rem] h-[3rem] bg-red-500  rounded-full flex flex-col items-center justify-center'>
                        <BiPhone className='w-[1.7rem] h-[1.7rem] text-white ' />
                    </div>
                    <div>
                        <h1 className='text-[25px] text-white font-semibold ' >Quick Order 24/7</h1>
                        <h1 className='text-yellow-300 text-[30px] font-bold'>+201145583518</h1>
                    </div>
                </div>
            </div>
                        {/* form */}
                        <ReservationForm/>

        </div>
    </div>
  )
}

export default Reservation