import React from 'react'

const MenuItem = ({children, className=""}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default MenuItem