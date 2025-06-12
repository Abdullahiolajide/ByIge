import React from 'react'

const NavbarListItem = ({children, screen}) => {
  return (<li className={`px-3 ${screen && 'py-2'}`}>{children}</li>
  )
}

export default NavbarListItem