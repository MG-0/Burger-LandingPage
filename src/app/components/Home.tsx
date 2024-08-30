"use client"
import React,{useEffect} from 'react'
import Hero from '@/app/components/Hero/Hero'
import Feature from '@/app/components/Feature/Feature'
import Popular from '@/app/components/Popular/Popular' 
import Delivery from '@/app/components/Delivery/Delivery'
import Team from '@/app/components/Team/Team'
import Reservation from '@/app/components/Reservation/Reservation'
import NewLetter from '@/app/components/NewLetter/NewLetter'
import AOS from 'aos'
import "aos/dist/aos.css"



const Home = () => {

  useEffect(()=>{
    const initAOS= async () =>{
      await import("aos") 
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease",
        anchorPlacement: "top-center"
  
      })
    }
    initAOS()
    
  },[])



  return (
    <div>
        <Hero/>
        <Feature/>
        <Popular/>
        <Delivery/>
        <Team/>
        <Reservation/>
        <NewLetter/>
    </div>
  )
}

export default Home