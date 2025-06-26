import React, { createContext, useState } from 'react'
const MenuContext = createContext()

const Menu = ({children, className=""}) => {
    const [show, setShow] = useState(false)
    const change = ()=>{
        setShow(prev => !prev)
    }
  return (
    <div className={className}>
      <MenuContext.Provider value={{change, show}}>
        <div >
            {children}
        </div>
      </MenuContext.Provider>


    </div>
  )
}

export default Menu
export {MenuContext}