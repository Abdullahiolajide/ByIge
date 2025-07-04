import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoMail } from 'react-icons/go'
import { GrApple } from 'react-icons/gr'
import { RiTwitterXLine } from 'react-icons/ri'
import AuthButton from './AuthButton'
import { backendUrl } from '../../../globals'
import Spinner from '../Spinner'
import { useLocation, useNavigate } from 'react-router-dom'

const LogIn = ({setLocationPath}) => {
    const [emailAuth, setEmailAuth] = useState(false)
    const [userCredentials, setUserCredentials] = useState({})
    const [errMeaasge, setErrMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const from = location.state?.from || '/dashboard'
   useEffect(()=>{
     if (location.state?.message) {
        setErrMessage(location.state?.message)
    }
   }, [])

    function handleChange(e){
        const {name, value} = e.target
        setUserCredentials(prevCredentials =>({
            ...prevCredentials,
            [name]: value,
        }))
        // console.log(userCredentials)
    }
    async function login(){
        const {email, password} = userCredentials
        const endpoint = `${backendUrl}/api/auth/login`
        if(!email || !password) {
            return setErrMessage('Please input credentials')
        }
        setLoading(true)
        try{
            const res = await fetch(endpoint, {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email, password})
                });
            const data = await res.json()
            setLoading(false)
            if (!res.ok) throw new Error(data.message ||"Error fetching data");
            const {token} = data
            console.log(data)
            localStorage.setItem("ByIgeAuthToken", token);
            navigate(from, {replace:true})


            

        }catch(err){
            setLoading(false)
            setErrMessage(err.message)
            console.log(err)
        }

        console.log(userCredentials)
    }
  return (
    <div className='mx-auto'>
        {!emailAuth ? (

        <>
                <main className="max-w-lg space-y-4 mx-auto">
                    { location.state?.message && <div className='text-sm text-red-700 text-center'>{location.state?.message}</div>
                    }
                       <h1 className='text-3xl text-center mt-3 mb-10'>Welcome back.</h1>
                    {/* Sign in options  */}

                    {/* google  */}
                    <AuthButton text="Sign in with Google"><FcGoogle /></AuthButton>
                    <AuthButton text="Sign in with Facebook">
                        <span className='text-2xl flex items-center'><img width={25} src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /></span>
                    </AuthButton>
                    <AuthButton text="Sign in with Apple"><GrApple /></AuthButton>
                    <AuthButton text="Sign in with twitterX"><RiTwitterXLine /></AuthButton>
                    <AuthButton text="Sign in with Email"  onClick={()=>setEmailAuth(true)}><GoMail /></AuthButton>

            </main>

            <div className='mt-5'>
                <div className='text-sm text-center'> <span>No account?</span> <span className='cursor-pointer' onClick={()=> setLocationPath('/register')}><u>Create one</u></span></div>
                <div className='text-sm text-center mt-2'> <span>Forgot email or trouble signing in?</span> <span className=''><u>Get help</u></span></div>

                <div className='text-sm text-center mt-2 text-gray-600 mt-10'> <span>Click “Sign in” to agree to Medium’s</span> <span className=''><u>Terms of service</u> and acknowledge that</span></div>

                <div className='text-sm text-center mt-2 text-gray-600'> <span>Medium’s</span> <span className=''><u>Privacy Policy</u> applies to you</span></div>
            </div>
        </>

)
:
(

                <section className='flex flex-col items-center'>
                        <div className='flex justify-center'><img width={50} src="https://miro.medium.com/v2/da:true/3e3f2c8aabad5bb10182c44f47176f83047662875df6ff780201f140e46aa1f9" alt="" /></div>

                        <h1 className='text-2xl text-center mt-3 mb-5'>Sign in with email</h1>
                        <p className='text-sm text-center'>Enter your email address and password to create an account</p>
                    {/* input fields  */}

                        <main className='mt-5 w-full max-w-xs'>
                            {errMeaasge && <div className='text-sm text-center text-red-600'>{errMeaasge}</div>}
                            <div className=''>
                                <label htmlFor="" className='text-sm'>Email</label> <br />
                                <input
                                name='email'
                                onChange={handleChange}
                                type="text" 
                                placeholder='Enter your email address' 
                                className='bg-gray-300 text-sm py-2 px-2 rounded w-full'
                                />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="" className='text-sm'>Password</label> <br />
                                <input
                                onChange={handleChange}
                                name='password' 
                                type="password" 
                                placeholder='Enter your password' 
                                className='bg-gray-300 text-sm py-2 px-2 rounded w-full'
                                />
                            </div>

                            <div className='flex justify-center mt-5'>
                                <button className={`text-sm bg-black text-white px-3 py-2 rounded-3xl mx-auto cursor-pointer flex items-center space-x-2 ${loading && 'bg-black/80'}`} onClick={login}>
                                <div className='px-5'>Login</div>
                                {loading && <Spinner width={'20px'} /> }
                                </button>
                            </div>
                        </main>

                        <div className="text-center text-sm space-y-4 mt-5">
                        <p onClick={()=>setEmailAuth(false)} className='cursor-pointer'><u>Back to sign in options</u></p>
                        <p>Dont have an account <u onClick={()=> setLocationPath('/register')} className='cursor-pointer'>Sign up</u></p>
                        </div>

                        <div className='text-center text-xs space-y-4 mt-5 text-gray-500 max-w-xs'>
                        <p>
                            This site is protected by reCAPTCHA Enterprise and the
                            <u> Google Privacy Policy</u> and <u>Terms of Service</u> apply.
                        </p>
                        </div>
                </section>
)
                
}
    </div>
  )
}

export default LogIn