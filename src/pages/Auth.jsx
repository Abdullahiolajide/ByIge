import React, { useEffect, useState } from 'react'
import LogIn from '../components/Auth/LogIn'
import Register from '../components/Auth/Register'
import { MdClose } from 'react-icons/md'
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function Auth({ path, setShowAuth, showAuth }){
    const [locationPath, setLocationPath] = useState('')
    const [isClosed, setIsClosed] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        setLocationPath(path || location.pathname)
    }, [])

    function close(){
        if (setShowAuth) {
            setIsClosed(true)
            setTimeout(() => {
                setShowAuth(false)
            }, 150);
        }else{
            navigate('/')
        }
    }
   
    return (
        <>
        <section className={`duration-800 auth-section h-full backdrop-blur-xs w-full fixed top- z-50 flex items-center justify-center`}>
            <div className='w-[100%] mr-3 bg-black/20 -z-50 h-full absolute' onClick={()=>close()}></div>
            <div className={`bg-white rounded animate-show max-w-2xl w-full ${isClosed ? 'animate-close' :""}`}>
                <span className='text-2xl float-right m-2 text-gray-500 hover:text-gray-900 cursor-pointer' onClick={()=>close()}><MdClose /></span>
                    <main className='mx-2 my-10'>
                      {locationPath == '/signin' || locationPath == '/login' ? <LogIn setLocationPath={setLocationPath}/> : <Register setLocationPath={setLocationPath}/>}
                      {/* <LogIn /> */}
                    </main>
            </div>
        </section>
        </>
    )
}