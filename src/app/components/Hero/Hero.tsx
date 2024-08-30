/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import BurgerImg1 from '/public/images/b1.png'
import BurgerImg2 from '/public/images/b2.png'
import {BiCycling} from 'react-icons/bi'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Hero = () => {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    customTransition="all .5"
    arrows={false}
    transitionDuration={500}
    containerClass="carousel-container"
    itemClass="item"
    
    >
            
            <div className="  h-[88vh]  w-[100%] bg-blue-900 clip-path flex flex-col md:flex-row  justify-center items-center "   >
                {/* information  */}
                <div className=' ml-[4rem]'>
                   <h1 className='text-[40px] mb-3 text-yellow-600 font-semibold'>Fast Food Burger</h1>
                   <h1 className='text-[40px] uppercase text-white font-bold'>Best <br/>Burger<br/>Beef</h1>
                   <p className='text-[18px] text-white font-semibold opacity-70 mt-[10px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                     Nemo nulla, ea excepturi voluptas eveniet laudantium. 
                     Dignissimos, magni quia. Maiores, impedit.
                    </p>
                    <button className=' text-white px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-orange-800 transition-all duration-200 hover:bg-gray-800 flex items-center space-x-2 mt-3  rounded-md  '>
                        <span> <BiCycling  className=' w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]  ' /> </span>
                        <span className=' font-bold'>Order Now</span>
                    </button>
                 </div>
                    {/* image */}
                    <div className='w-[80%] '>
                        <Image src={BurgerImg1} alt="burger" />
                    </div>

            </div>

            {/* 2nd slider */}
         
            <div className="  h-[90vh] w-[100%] bg-blue-700 clip-path flex flex-col md:flex-row  justify-center items-center "   >
                {/* information  */}
                <div className=' ml-[4rem]'>
                   <h1 className='text-[40px] mb-2 text-yellow-600 font-semibold'>Fast Food Burger</h1>
                   <h1 className='text-[40px] uppercase text-white font-bold'>Best <br/> Burger <br/>chicken</h1>
                   <p className='text-[18px] text-white font-semibold opacity-70 mt-[10px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                     Nemo nulla, ea excepturi voluptas eveniet laudantium. 
                     Dignissimos, magni quia. Maiores, impedit.
                    </p>
                    <button className=' text-white px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-orange-800 transition-all duration-200 hover:bg-gray-800 flex items-center space-x-2 mt-3  rounded-md  '>
                        <span> <BiCycling  className=' w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]  ' /> </span>
                        <span className=' font-bold'>Order Now</span>
                    </button>
                 </div>
                    {/* image */}
                    <div className='w-[80%]'>
                        <Image src={BurgerImg2} alt="burger" />
                    </div>

            </div>


    </Carousel>
  )
}

export default Hero