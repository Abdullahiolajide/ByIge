import React, { useContext, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import Badge from './Badge'
import UserBadge from './UserBadge'
import { MdClose } from 'react-icons/md'
import LogIn from './Auth/LogIn'
import Auth from '../pages/Auth'
import { ToastContext } from '../App'
import Navbarm from './Navbarm'


const Hero = () => {
    // const [showAuth, setShowAuth] = useState(false);
    // const [path, setPath] = useState('')
    
    return (
        
        <div className='relative rounded-lg overflow-hidden h-[70vh] hero-body'>
            <div className='fixed w-full overflow-hidden z-50'>
               <Navbarm />
            </div>
            
            <div className='absolute -z-50 h-full w-full'>
                <img src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg" alt="" className=' w-full h-full object-cover'/>
            </div>
            
            {/* bakdrop */}
                <div className='absolute -z-50 bg-black/50 w-full h-full'></div>
                

                        {/* {showAuth && <Auth path={path} showAuth={showAuth} setShowAuth={setShowAuth}/>} */}
            {/* content div  */}
            <section className='h-full flex'>
                <div className='mt-auto w-full'>
                  <main className='text-white md:flex justify-between p-3 md:p-8 w-[100%]'>
                    {/* post content  */}
                    <div className='max-w-lg mb-4'>
                        <Badge>Destination</Badge>
                        <h2 className='mt-4 mb-2 text-3xl font-medium'>Exploring the Wonders of Hiking</h2>
                        <p className='text-md tracking-wide max-w-sm'>An iconic landmarks, the post unveils the secrets that make this destination a traveler's paradise.</p>
                    </div>
                    {/* post content end  */}

                    {/* post details  */}
                     <div className='max-w-sm flex items-center ml-auto'>
                       <div className="ml-auto mt-10 md:mt-0">
                       
                           <UserBadge src={"https://i.pinimg.com/736x/b9/b5/fb/b9b5fbe0ce482fb220303222f70fcac0.jpg"} width={45}>
                           Theodore Reginald</UserBadge>
                       
                        <p className='text-center py-3'>24 Jan 2024 • 10 mins read</p>
                       </div>
                    </div>
                    {/* post details end  */}
                  </main>
                </div>
            </section>

            {/* The Auth Section for Signup and SignIn  */}
           
        </div>
  )
}

export default Hero