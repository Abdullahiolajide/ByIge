import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const NavbarMobile = ({children}) => {
    const {show} = useContext(NavbarContext)
    
  return (
    // ${show ? '-translate-x-[100%]' : "translate-x-0"} 
        <section className={` duration-300  z-50  ${show ? '-translate-x-[100%] absolute' : "translate-x-0 "}`}>
            <div className=' w-full shadow'>
                {children}
            </div>
        </section>
  )
}

export default NavbarMobile