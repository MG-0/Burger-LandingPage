"ues client"

import React from 'react'
import Image from 'next/image'
import Img1 from '/public/images/f1.jpg'
import Img2 from '/public/images/f2.jpg'
import Img3 from '/public/images/f3.jpg'


const Feature = () => {
  return (
    <div className='my-[4rem]'>
        
        {/* Heading */}
        <h1 className='  text-gray-900 text-[35px] font-bold uppercase text-center   '>
                Burger Made With 
                <br/> 
                Love And 
                <span className='text-red-600'> Care</span>
        </h1>

        {/* Cards */}

        <div className='w-[90%] gap-[3rem] flex flex-col md:flex-row  rounded-md items-center  mt-[1rem]  '> 

            {/* 1st cards */}

            <div data-aos="fade-left" data-aos-anchor-placement="top-center"  className=' p-6 ml-8 bg-slate-300 hover:bg-white rounded-lg transition-all duration-200  '>
                <Image src={Img1} alt='f1' className='rounded-lg' />
                    <h1 className='text-center text-black font-semibold text-[20px] mt-[12px] mb-[4px]  '> Burger Beef </h1>
                    <p className='text-center text-gray-900 font-semibold opacity-60  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          officia, enim est sunt atque tempore!
                    </p>
            </div>

            {/* 2nd Card */}
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center"  className='p-6  sm:mt[2rem] ml-5 bg-slate-300 hover:bg-white rounded-lg transition-all duration-200  '>
                <Image src={Img2} alt='f1' className='rounded-lg' />
                    <h1 className='text-center text-black font-semibold text-[20px] mt-[12px] mb-[4px]  '>Your Opinion Is Important </h1>
                    <p className='text-center text-gray-900 font-semibold opacity-60  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          officia, enim est sunt atque tempore!
                    </p>
            </div>

            {/* 3th card */}

            <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center" className='p-6 ml-5  bg-slate-300 hover:bg-white rounded-lg transition-all duration-200  '>
                <Image src={Img3} alt='f1' className='rounded-lg' />
                    <h1 className='text-center text-black font-semibold text-[20px] mt-[12px] mb-[4px]  '>chicken Burgers </h1>
                    <p className='text-center text-gray-900 font-semibold opacity-60  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          officia, enim est sunt atque tempore!
                    </p>
            </div>

  

        </div>

    </div>
  )
}

export default Feature







