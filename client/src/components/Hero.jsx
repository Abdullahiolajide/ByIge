import React, { useContext, useState } from 'react'
import Navbar from './Navbar/index'
import { IoSearchSharp } from 'react-icons/io5'
import Badge from './Badge'
import UserBadge from './UserBadge'
import { MdClose } from 'react-icons/md'
import LogIn from './Auth/LogIn'
import Auth from '../pages/Auth'
import { ToastContext } from '../App'


const Hero = () => {
    const [showAuth, setShowAuth] = useState(false);
    const [path, setPath] = useState('')
    
    return (
        
        <div className='relative rounded-lg overflow-hidden h-[70vh] hero-body'>
            <div className='fixed w-full overflow-hidden z-50'>
                  <Navbar
                    navColors=""
                    listColors=""
                    >
                    <Navbar.Container>
                        <Navbar.Logo>
                        <span className="font-bold">BI </span>ByIge
                        </Navbar.Logo>

                        <Navbar.MenuIcon />

                        <Navbar.List>
                        <Navbar.ListItem>Hotel</Navbar.ListItem>
                        <Navbar.ListItem>Train</Navbar.ListItem>
                        <Navbar.ListItem>Flight</Navbar.ListItem>
                        <Navbar.ListItem>Travel</Navbar.ListItem>
                        <Navbar.ListItem>Car Rental</Navbar.ListItem>
                        <Navbar.ListItem>
                            <div className='nav-input-container flex md:py-2 py-1 px-2 md:px-3 md:px-5 text-sm bg-white/30 backdrop-blur-lg duration-300 rounded-md border border-1 border-gray-400 w-fit justify-between items-center' >
                                <input type="text" placeholder='Search Destination...' className='search-input focus:outline-0' />
                                                <IoSearchSharp />
                            </div>
                        </Navbar.ListItem>
                        </Navbar.List>

                        <Navbar.Buttons>
                            <button className='text-sm md:text-base cursor-pointer  py-2 px-4 rounded-md mx-2' onClick={()=>{setShowAuth(true); setPath('/login')}}>Log In</button>
                            <button className='text-sm md:text-base cursor-pointer text-black py-2 px-4 border border-white bg-white rounded-md mx-2' onClick={()=>{setShowAuth(true); setPath('/register')}}>Sign Up</button>
                        {/* <Button>Login</Button>
                        <Button outline className="text-black">Signup</Button> */}
                        </Navbar.Buttons>
                    </Navbar.Container>

                    {/* Mobile Section */}
                    <Navbar.Mobile>
                        <Navbar.List screen>
                        <Navbar.ListItem screen>Hotel</Navbar.ListItem>
                        <Navbar.ListItem screen>Train</Navbar.ListItem>
                        <Navbar.ListItem screen>Flight</Navbar.ListItem>
                        <Navbar.ListItem screen>Travel</Navbar.ListItem>
                        <Navbar.ListItem screen>Car Rental</Navbar.ListItem>
                        <Navbar.ListItem>
                            <div className='nav-input flex md:py-2 py-1 px-2 md:px-3 md:px-5 text-sm bg-white/30 backdrop-blur-lg      rounded-md border border-1 border-gray-400 w-fit justify-between items-center' >
                            <input type="text" placeholder='Search Destination...' className='focus:outline-0 search-input' />
                                <IoSearchSharp />
                            </div>
                        </Navbar.ListItem>
                        </Navbar.List>
                    </Navbar.Mobile>
                    </Navbar>
            </div>
            
            <div className='absolute -z-50 h-full w-full'>
                <img src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg" alt="" className=' w-full h-full object-cover'/>
            </div>
            
            {/* bakdrop */}
                <div className='absolute -z-50 bg-black/50 w-full h-full'></div>

                        {showAuth && <Auth path={path} showAuth={showAuth} setShowAuth={setShowAuth}/>}
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