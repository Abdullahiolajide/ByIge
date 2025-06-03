import React from 'react'

const NavbarLogo = ({children}) => {
  return (
    <div className='flex items-center pr-4 '>
                    <h1 className='md:text-3xl text-xl'>{children}</h1>
    </div>
  )
}

export default NavbarLogo