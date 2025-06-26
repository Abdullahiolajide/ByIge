import React, { useContext } from 'react'
import { MenuContext } from './Menu'

const MenuButton = ({children}) => {
    const {change} = useContext(MenuContext)
  return (
    <div onClick={change} className="content">{children}</div>
  )
}

export default MenuButton