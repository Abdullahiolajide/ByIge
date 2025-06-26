import React, { useContext } from 'react'
import { MenuContext } from './Menu'

const MenuItem = ({children, className="", onClick= ()=> {}}) => {
  const {change} = useContext(MenuContext)
  const clickFunction = ()=>{
    onClick()
    change()

  }
  return (
    <div className={className} onClick={clickFunction}>{children}</div>
  )
}

export default MenuItem