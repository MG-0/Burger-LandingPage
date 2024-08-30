import React from 'react'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

interface props{
  showNav:boolean;
  closeNav:()=>void;
}

  const NavBarMobile = ({closeNav,showNav}:props) => {

  const navStyle = showNav? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    

    <div className= {`fixed right-0 top-0 left-0 bottom-0 bg-[#000000e0] transition-all duration-500 z-[1002] h-[100vh] ${navStyle} `} >
        <ImCross onClick={closeNav} className='absolute right-[2rem] top-[2rem] w-[2rem] h-[2rem]  text-white '/>

          {/* Links */}
        <div className={` text-white flex flex-col items-center justify-center bg-slate-950 transition-all duration-500 delay-200 w-[70%] h-[100%] ${navStyle} `}>
            <ul className=' space-y-10'>

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

        </div>


    </div>

      

      

  )
}

export default NavBarMobile