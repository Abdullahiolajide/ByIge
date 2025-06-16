import React from 'react'
import { Link } from 'react-router-dom'

const EmailVerified = () => {
  return (
     <div className="text-center p-10">
        <h1 className='text-3xl text-center mb-4'><span className="font-bold">BI </span>ByIge</h1>
      <h2 className="text-2xl font-bold text-green-600">Email Successfully Verified ✅</h2>
      <p className="mt-4">You can now sign in to your account.</p>
      <Link to="/signin" className="text-blue-500 underline mt-4 inline-block">
        Go to Sign In
      </Link>
    </div>
  )
}

export default EmailVerified