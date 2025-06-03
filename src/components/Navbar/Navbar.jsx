import React, { createContext, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import {Link} from 'react-router-dom'
import NavbarLogo from './NavbarLogo';
import NavbarContainer from './NavbarContainer';
const NavbarContext = createContext()

const Navbar = ({children, navColors, listColors}) => {
    const [show, setShow] = useState(true)
    
  return (
    <div className='' >
        <NavbarContext.Provider value={{show, setShow, listColors}}>

        <nav className={`${navColors}`} >
         {children}
        </nav>
        <div className='h-100'></div>

        </NavbarContext.Provider>
    </div>
  )
}

export default Navbar
export {NavbarContext}