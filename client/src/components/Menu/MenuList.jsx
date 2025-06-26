import React, { useContext } from 'react'
import { MenuContext } from './Menu'

const MenuList = ({children}) => {
    const {show} = useContext(MenuContext)
  return (
    <div className='absolute z-100 bg-white'>
        
       {show &&  <div>
            {children}
        </div>}
    </div>
  )
}

export default MenuList