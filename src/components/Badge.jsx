import React from 'react'

const Badge = ({children, ...rest}) => {
  return (
    <div {...rest} className=' text-white py-2 px-5 text-sm rounded-full w-fit backdrop-blur-2x bg-[#4C413D]/80'>{children}</div>
  )
}

export default Badge