"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import { FreeMode , Pagination,Navigation} from 'swiper/modules';
import PopularCards from '@/app/components/Popular/PopularCards'

const Popular = () => {
  return (

    <div className='mt-32  mb-10 '>
        <h1 className='text-black text-[35px] font-bold uppercase text-center   '>Our Popular<span className='text-red-500'> Burger</span>   </h1>

    <Swiper className='   mt-8 '
      breakpoints={{
        340:{
            slidesPerView: 2,
            spaceBetween:10
        },
        700:{
            slidesPerView: 4,
            spaceBetween:10
        }
      }}
      navigation
      freeMode={true}
      pagination={{clickable: true}}
      modules={[FreeMode,Pagination,Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b1.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b2.png' />  </SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b3.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b2.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b5.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b6.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b7.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b7.png' /></SwiperSlide>
      <SwiperSlide> <PopularCards title="Beef Bite" price="10.50 $" review = "5" image='/images/b7.png' /></SwiperSlide>
     
    </Swiper>

    </div>
  )
}

export default Popular