import React from 'react'

const UserBadge = ({src, width, children, className}) => {
  return (
     <div className='flex items-center'>
     <div className={`w-[${width}px] h-[${width}px] rounded-3xl overflow-hidden ${className}`}>
        <img src={src} alt="" width={width} />
    </div>
        <p className='px-2 text-lg'>{children}</p>
    </div>
  )
}

export default UserBadge