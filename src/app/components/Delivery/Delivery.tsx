import React from 'react'
import Image from 'next/image'
import DeliveryImg from '/public/images/delivery.svg'
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className='mt-28  '>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className='  mx-auto w-[80%] flex flex-col md:flex-row items-center justify-center'>
            {/* image */}
            <div className='w-[100%]'>
                <Image src={DeliveryImg} alt='DeliveryImg'  />
            </div>

            {/* text informatio */}
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className='ml-16' >
                    <h1 className='text-[40px]   font-bold uppercase  '>Your <span className='text-red-500'> Faviorte Burger </span> On <br/> The Way!</h1>
                    <p className='text-[20px] opacity-70 text-gray-600 font-semibold mt-[1rem] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quasi.  adipisicing elit. Fuga, quasi. adipisicing elit. Fuga, quasi.</p>
                
                        {/* icons */}
                <div className='flex items-center  space-x-3 mt-[2rem]'>
                    <RiEBike2Fill className='text-orange-700 text-[25px]'/>
                    <h1 className='font-semibold text-[20px]  '>Delivery In 30 Minutes</h1>
                </div>

                <div className='flex items-center  space-x-3 mt-[1rem]'>
                    <IoFastFood className='text-orange-700 text-[25px]'/>
                    <h1 className='font-semibold text-[20px]  '>Free Shipping From 75$</h1>
                </div>

                <div className='flex items-center  space-x-3 mt-[1rem]'>
                    <BsDoorOpen className='text-orange-700 text-[25px]'/>
                    <h1 className='font-semibold text-[20px]  '>Delivery On Your DoorStep</h1>
                </div>

            </div> 
        </div>
    </div>
  )
}

export default Delivery