import React from 'react'
import {FaBurger, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa6';
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='pt-[5rem]  pb-[3rem] bg-gray-900 '>
        <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start  border-b-[2px] border-b-gray-300 border-opacity-50 pb-[2rem] ">
            <div className=''>
                {/* logo */}
                <div className='flex text-white justify-center items-center space-x-2'>
                    <FaBurger className='text-orange-500 w-[1.4rem] h-[1.4rem] sm:w-[1.4rem] sm:h[1.4rem] '/>
                    <h1 className='text-[20px] sm:text-[30px] font-semibold '>
                        BurgerBite
                    </h1>
                </div>
                    <p className='text-white text-opacity-60 mt-[0.4rem] ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Asperiores fuga maxime, eligendi quisquam voluptas unde 
                         odio accusantium nesciunt et soluta?
                    </p>
                    <p className='text-white mt-[1rem] '>Supporte@example.com</p>
                    <p className='text-red-300 text-[19px] font-bold'>(+2) 01145583518</p>
            </div>
                                 {/*1st  */}
                <div>
                <h1 className='text-[32px] font-semibold mb-[2rem] text-white  '>Products</h1>

                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Chicken Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Beef Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>crispy Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Classic Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Delight Burger</p>
                </div>
                    {/* 2nd */}
                <div>
                        <h1 className='text-[32px] font-semibold mb-[2rem] text-white  '>Quick Link</h1>
                        <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Home</p>
                        <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>About</p>
                        <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Menu</p>
                        <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>Products</p>
                        <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transitiont-all duration-200 cursor-pointer w-fit '>NewLitters</p>
                </div>

                {/* 4th */}
                <div>
                    <h1 className='text-[32px] font-semibold mb-[2rem] text-white  '>Opening Hours </h1>
                    <p className='text-white text-[16px]'>Monday - Friday : <span className='text-yellow-300'>8 Am : 4 Pm </span></p>
                    <p className='text-white text-[15px]'>Saturday - Friday : <span className='text-yellow-300'> 8 Am : 12 Am </span> </p>
                    {/* icons social Media */}
                    <div className="flex mt-[2rem] items-center space-x-6 ">
                        <Link href="#">
                          <FaFacebook className="  w-[1rem] h-[1rem] text-blue-600 "  />
                        </Link>
                        <Link href="#">
                            <FaInstagram className=" w-[1rem] h-[1rem] text-red-400 "/>
                        </Link>
                        <Link href="#">
                          <FaTwitter className=" w-[1rem] h-[1rem] text-blue-400 "/>
                        </Link>
                        
                    </div>
                   
                </div>
               
        </div>
                    {/* copyright */}
                    <h1 className='text-white text-center text-[18px] mt-6'>@copyright: BurgerRestaurant By Created  <span className='text-red-300'> Eng: Mahmoud Gamal</span></h1>
                    
    </div>
  )
}

export default Footer