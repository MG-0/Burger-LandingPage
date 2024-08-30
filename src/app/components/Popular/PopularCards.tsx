"use client"

import React from 'react'
import Image from 'next/image'
import {FaStar} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'

interface props{
    title: string;
    price: string;
    review: string;
    image: string;
}


const PopularCards = ({title,price,review,image}:props) => {
  return (
        // cards ---------

    <div className='m-4 hover:bg-gray-400 transition-all duration-500  bg-white p-6 rounded-lg '>


      {/* ---------------- 1st card */}
        <div className='w-[200px] h-[200px] '>
            {<Image src={image} alt={title} width={150} height={150} className='w-[75%] h-[85%] object-cover '  />}
            
        </div>
            <h1 className='text-[25px] text-black font-semibold '>{title}</h1>
            <div className='flex justify-between mt-3'>
                <div className='flex'>
                    <FaStar className='text-yellow-500'/> 
                    <FaStar className='text-yellow-500'/> 
                    <FaStar className='text-yellow-500'/> 
                    <FaStar className='text-yellow-500'/> 
                    <FaStar className='text-yellow-500'/> 
                    </div>
                    <div>
                        <h1>({review})</h1>
                    </div> 
            </div>
            <p className='font-semibold '>Lorem ipsum dolor sit  consectetur.</p>
            
            <div className='flex justify-between'>
                <h1 className='text-red-700 text-[20px] font-semibold'>{price}</h1>

                    {/* button */}
                <button className='text-white py-2 px-2  bg-orange-600 transition-all duration-200 hover:bg-green-600  rounded-md flex items-center '>
                 <BiShoppingBag /> 
              </button>
            </div>


            

    </div>
  )
}

export default PopularCards