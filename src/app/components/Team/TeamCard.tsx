import React from 'react'
import Image from 'next/image'

interface props{
    name:string;
    position:string;
    image:string;
}


const TeamCard = ({name,position,image}:props) => {
    return(
        <div className=" hover:bg-white p-6 rounded-lg bg-slate-300 transition-all duration-200   ">
                
                    <Image  className='rounded-2xl mx-auto' width={200}  height={200} src={image} alt={name} />
               
                    
                        <h1 className="text-center text-[35px] text-gray-800 font-bold mt-6"> {name}</h1>

                        <p className='text-center font-semibold bg-green-600 py-1 px-3 mx-auto  text-white mt-3 w-fit '> {position}</p>
                        <p className="mt-4 font-semibold text-center">Lorem ipsum dolor sit amet consectetu amet consectetu amet consectetur</p>
                    
                    

        </div>

    )
}
export default TeamCard




