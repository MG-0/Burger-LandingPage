import React from 'react'

const NewLetter = () => {
  return (
    <div className=" pt-[5rem] pb-[5rem] ">
        <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center" className=" text-center ">
            <h1 className='text-[28px] sm:text-[38px] mg:text-[50px] text-black font-bold '>Join For Hot Offers</h1>
            <p className=" text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto ">Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Quia voluptatibus
                 velit fugiat veritatis distinctio quibusdam,
                  iusto iure culpa dolorum ducimus!
            </p>
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" className='flex items-center space-x-2 mt-[3rem] justify-center'>
                <input type="email" placeholder='Enter Your Email'  className='px-5 py-4 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black   '/>
                <button className='px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200 rounded-lg text-white font-bold' >Subscribe</button>
            </div>
        </div> 
    </div>
  )
}

export default NewLetter