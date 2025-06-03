import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const NavbarList = ({children, screen}) => {
    const {listColors} = useContext(NavbarContext)
    const responsive = screen ? "lg:hidden" : "lg:flex hidden"
  return (
    <ul className={`${responsive} items-center p-2 pl-4 home-nav text-sm md:text-base ${listColors}`}>
       {children}
    </ul>
  )
}

export default NavbarList