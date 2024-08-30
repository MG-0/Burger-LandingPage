"use client"


import React ,{useState} from 'react'
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'

const NavBarResposive = () => {

  const [showNav,setShowNav] = useState(false);
  const openNavHandler = () =>setShowNav(true)
  const closeNavHandler = () =>setShowNav(false)


  return (
    <div>
        <NavBar openNav = {openNavHandler} />
        <NavBarMobile showNav={showNav} closeNav = {closeNavHandler} />
    </div>
  )
}

export default NavBarResposive