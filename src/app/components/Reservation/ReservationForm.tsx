import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const ReservationForm = () => {
  return (
    <div className='bg-green-700   p-6 rounded-lg '>
        <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto  '/>
        <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white  '>
                Reservation
        </h1>
        <p className='uppercase text-[20px] md:text-[25px] text-white font-semibold text-center   '>Book Your Table</p>

        <div className='mt-[2rem]'>
            <div className='flex flex-col sm-flex-row space-y-3 sm:space-y-0 items-center font-bold w-[80%] mx-auto justify-between space-x-4 '>
                <select className=' mb-6 px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100 
                    name="Client"
                    id="client"
                     '>
                        <option value="1"  className='text-black'>Client 1</option>
                        <option value=" 2"  className='text-black'>Client 2</option>
                        <option value=" 3"  className='text-black'>Client 3</option>
                        <option value=" 4"  className='text-black'>Client 4</option>
                </select>
                <input type="date" className='    px-10  py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100  '/>
            </div>
            <input type="time" className='px-10  py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100 block w-[80%] mx-auto mt-[1rem] ' />
                <div className='mt-[2rem] w-[80%] text-center mx-auto   '>
                    <button className="px-8 py-3 rounded-lg mb-[3rem] text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-orange-700 text-white   ">Book Now </button>
                </div>
        
        
        </div>

    </div>
  )
}

export default ReservationForm