import React from 'react'

const AuthButton = ({text, children, onClick}) => {
  return (
        <div className='border rounded-4xl flex p-2 w-full mx-auto max-w-xs cursor-pointer' onClick={onClick}>
            <span className='text-2xl flex items-center'>{children}</span>
            <span className='w-full text-center'>{text}</span>
        </div>
  )
}

export default AuthButton