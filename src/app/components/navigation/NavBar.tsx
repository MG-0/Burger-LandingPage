'use client'
import React from 'react'
import {FaBurger} from 'react-icons/fa6';
import {BiCycling} from 'react-icons/bi'
import {BiShoppingBag} from 'react-icons/bi'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2';
 
interface props {
  openNav: ()=>void;
}

const NavBar = ({openNav}:props) => {



  return (
    <div className='h-[10vh]  bg-white   '>
      <div className=' flex justify-between items-center h-[100%] w-[95%] sm:w-[90%] mx-auto '>

        {/* logo */}
        <div className='flex justify-center items-center space-x-2'>
            <FaBurger className='text-orange-500 w-[1.4rem] h-[1.4rem] sm:w-[1.4rem] sm:h[1.4rem] '/>
            <h1 className='text-[20px] sm:text-[30px] font-semibold '>
                BurgerBite
            </h1>
        </div>

        {/* links */}

         <ul className='hidden lg:flex   items-center space-x-10'>

              <li className=' text-[20px] font-medium transition-all duration-200  hover:text-orange-600'>
                  <Link href='/'>Home </Link>     
              </li>

              <li className=' text-[20px] font-medium transition-all duration-200  hover:text-orange-600'>
                 <Link href='/'>Shop </Link>    
              </li>

              <li className=' text-[20px] font-medium transition-all duration-200  hover:text-orange-600'>
                <Link href='/'>Menu </Link>    
              </li>

              <li className=' text-[20px] font-medium transition-all duration-200  hover:text-orange-600'>
                <Link href='/'>Blog </Link>    
              </li>

              <li className=' text-[20px] font-medium transition-all duration-200  hover:text-orange-600'>
                <Link href='/'>Contact </Link>    
              </li>
         </ul>

         {/* Buttons */}

         <div className='flex items-center space-x-4 '>
            <button className=' text-white px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-900 transition-all duration-200 hover:bg-orange-800 flex items-center space-x-2  rounded-md  '>
                <span> <BiCycling  className=' w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]  ' /> </span>
                <span className=' font-bold'>Order Now</span>
              </button>
              <button className='text-white py-2 px-4 sm:py-3 sm:px-6 bg-orange-600 transition-all duration-200 hover:bg-green-600  rounded-md flex items-center '>
                 <BiShoppingBag className=' w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]'/> 
              </button>

              <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[2rem]  h-[2rem] text-black  '/>

         </div>
      </div>

    </div>
  )
}

export default NavBar