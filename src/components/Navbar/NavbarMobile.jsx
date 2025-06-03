import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const NavbarMobile = ({children}) => {
    const {show} = useContext(NavbarContext)
    
  return (
        <section className={`duration-300 ${show ? '-translate-x-[100%]' : "translate-x-0"}`}>
            <div className='absolute w-full shadow'>
                {children}
            </div>
        </section>
  )
}

export default NavbarMobile