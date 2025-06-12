import React from 'react'

const NavbarButtons = ({children}) => {
  return (
    <div className='flex lg:bg-transparent items-center' style={{'marginLeft': "auto"}}>
                {children}
    </div>
  )
}

export default NavbarButtons