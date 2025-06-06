import React, { createContext, useEffect, useRef, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import {Link} from 'react-router-dom'

const NavbarContext = createContext()

const Navbar = ({children, navColors, listColors}) => {
    const [show, setShow] = useState(true)
    const [navStyle, setNavStyle] = useState(' text-white')
    useEffect(()=>{
      const scrollStyle = ()=>{
        const top = window.pageYOffset
          if (top > 20) {
            setNavStyle("bg-white border rounded-md")
          }else{
            setNavStyle("bg-transparent text-white")
          }
        }
        window.addEventListener('scroll', scrollStyle)
        return ()=> window.removeEventListener("scroll", scrollStyle)
    }, [])
      
    
    
  return (
    <div className='pr-4 z-50' >
        <NavbarContext.Provider value={{ show, setShow, listColors}}>

        <nav className={`duration-300 ${navColors} ${navStyle} `} >
         {children}
        </nav>

        </NavbarContext.Provider>
    </div>
  )
}

export default Navbar
export {NavbarContext}