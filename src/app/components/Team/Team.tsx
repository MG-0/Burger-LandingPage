"use client"

import React from 'react'
import TeamCard from '@/app/components/Team/TeamCard'
const Team = () => {
  return (
    <div className='mt-[3rem]'>
             <h1 className='text-[35px] text-center font-bold uppercase'>Meet Our Expert <span className='text-red-500'>Chefs</span></h1>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center ">
          <div data-aos="fade-left" data-aos-anchor-placement="top-center">
              <TeamCard  name="John Doe"  image="/images/t1.jpg" position="chef expert"  />
          </div>  
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
              <TeamCard  name="Kohn Doe"  image="/images/t2.jpg" position="chef expert" />
            </div>
            <div  data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
              <TeamCard  name="Hohn Doe"  image="/images/t3.jpg" position="chef expert" />
            </div>
            


        </div>




    </div>
  )
}

export default Team