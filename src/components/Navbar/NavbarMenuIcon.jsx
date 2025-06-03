import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";

const NavbarMenuIcon = ({children}) => {
    const {show, setShow} = useContext(NavbarContext)
  return (
     <div className='lg:hidden block active:bg-gray-100/50 p-2 cursor-pointer' onClick={()=> setShow(prev=> !prev)}>
                      {show ? <RxHamburgerMenu />  
                          : <GoX />}
                          {children}
    
    </div>
  )
}

export default NavbarMenuIcon