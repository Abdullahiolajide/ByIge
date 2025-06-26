import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoMail } from 'react-icons/go'
import AuthButton from './AuthButton'
import { backendUrl } from '../../../globals'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'

const Register = ({setLocationPath}) => {
    const [emailAuth, setEmailAuth] = useState(false)
    const [userCredentials, setUserCredentials] = useState({})
    const [errMeaasge, setErrMessage] = useState('')
    const [loading, setLoading] = useState(false)

     function handleChange(e){
        const {name, value} = e.target
        setUserCredentials(prevCredentials =>({
            ...prevCredentials,
            [name]: value,
        }))
        // console.log(userCredentials)
    }

     async function register(){
        const {email, password} = userCredentials
        if(!email || !password) {
            return setErrMessage('Please input credentials')
        }

        const endpoint = `${backendUrl}/api/auth/register`
        setLoading(true)
        try{
            const res = await fetch(endpoint, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const data = await res.json()
            setLoading(false)
            if (!res.ok) throw new Error(data.message || "Registration failed");
            toast.success(
                <div>
                    <div className='text-sm'>Account created Successfully</div>
                    <div>An email has been sent to you for verification</div>
                </div>
                )
            setLocationPath('/login')
            console.log(data)
            

        }catch(err){
            setLoading(false)
            console.log(err.message)
            setErrMessage(err.message)
        }

        console.log(userCredentials)
    }
  return (
    <div className='mx-auto'>
        {!emailAuth ?
                (

                    <>
                    <main className="max-w-lg space-y-4 mx-auto">
                                <h1 className='text-3xl text-center mt-3 mb-10'>Join ByIge.</h1>
                                {/* Sign in options  */}
                                <AuthButton text="Sign up with Google"><FcGoogle /></AuthButton>
                                <AuthButton text="Sign up with Facebook">
                                    <span className='text-2xl flex items-center'><img width={25} src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /></span>
                                </AuthButton>
                                <AuthButton text="Sign up with Email"  onClick={()=>setEmailAuth(true)}><GoMail /></AuthButton>
                
                        </main>
                
                <div className='mt-5'>
                            <div className='text-sm text-center'> <span>Already have an Account?</span> <span className='cursor-pointer' onClick={()=> setLocationPath('/login')}><u>Sign in</u></span></div>
                            <div className='text-sm text-center mt-2'> <span>Forgot email or trouble signing in?</span> <span className=''><u>Get help</u></span></div>
                
                            <div className='text-sm text-center mt-2 text-gray-600 mt-10'> <span>Click “Sign in” to agree to Medium’s</span> <span className=''><u>Terms of service</u> and acknowledge that</span></div>
                
                            <div className='text-sm text-center mt-2 text-gray-600'> <span>Medium’s</span> <span className=''><u>Privacy Policy</u> applies to you</span></div>
                        </div>
                        </>

        )

        : (
                            //{/* Email register Section  */}
                        <section className='flex flex-col items-center'>
                            <div className='flex justify-center'><img width={50} src="https://miro.medium.com/v2/da:true/3e3f2c8aabad5bb10182c44f47176f83047662875df6ff780201f140e46aa1f9" alt="" /></div>

                            <h1 className='text-2xl text-center mt-3 mb-5'>Sign up with email</h1>
                            <p className='text-sm text-center'>Enter your email address and password to create an account</p>
{/* Input field  */}
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
                                <button className={`text-sm bg-black text-white px-3 py-2 rounded-3xl mx-auto cursor-pointer flex items-center space-x-2 ${loading && 'bg-black/80'}`} onClick={register}>
                                    <div>Create account</div>
                                     {loading && <Spinner width={'20px'} />}
                                     </button>
                            </div>
                        </main>

                          <div className="text-center text-sm space-y-4 mt-5">
                            <p onClick={()=>setEmailAuth(false)} className='cursor-pointer'><u>Back to sign up options</u></p>
                            <p>Already have an account <u onClick={()=> setLocationPath('/login')}>Sign in</u></p>
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

export default Register