import React from 'react'

const UserBadge = ({src, width, children, className}) => {
  return (
     <div className='flex items-center'>
     {/* <div className={`w-[${width}px] h-[${width}px] rounded-3xl overflow-hidden ${className}`}>
        <img src={src} alt="" width={width} />
    </div> */}
    <div className='flex items-center md:w-[40px] w-[30px] h-[30px] md:h-[40px] bg-gray-700 text-white text-xl rounded-full justify-center font-medium'>{children.toUpperCase().split('')[0]}</div>
        <p className='px-2 text-sm'>{children}</p>
    </div>
  )
}

export default UserBadge