import React from 'react'
import { FaDiscord, FaFacebook, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
        <footer className='bg-black text-white rounded-md p-4 mx-2'>
            <main className=' flex justify-between'>
                <div>
                <p className='text-xl'><span className="font-bold">BI </span><span>ByIge</span></p>
                <div className='text-sm max-w-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit deleniti assumenda omnis cumque asperiores.
                </div>
            </div>
            <div>
                <p className='text-sm font-medium mb-2'>About</p>
                <ul className='text-sm text-gray-400 space-y-4'>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
            </div>
            <div>
                <p className='text-sm font-medium mb-2'>Support</p>
                <ul className='text-sm text-gray-400 space-y-4'>
                    <li>Contact Us</li>
                    <li>Return</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <p className='text-sm font-medium mb-2'>Get Updates</p>
                <div className='bg-[#333333] rounded border-1 border-gray-400/40 pl-2 pr-1 py-1'>
                    <input type="text" placeholder='Enter your email' className='border-0 focus:outline-0'/>
                    <button className='text-sm font-medium cursor-pointer text-black py-2 px-3 border border-white bg-white rounded-md '>Subscribe</button>
                </div>
                <div className='mt-3 flex space-x-5'>
                    <div className='w-[40px] h-[40px] rounded-4xl bg-[#333333] flex items-center justify-center text-2xl'>
                        <IoLogoInstagram />
                    </div>
                     <div className='w-[40px] h-[40px] rounded-4xl bg-[#333333] flex items-center justify-center text-xl'>
                        <FaXTwitter />
                    </div>
                     <div className='w-[40px] h-[40px] rounded-4xl bg-[#333333] flex items-center justify-center text-xl'>
                        <FaFacebook />
                    </div> 
                    <div className='w-[40px] h-[40px] rounded-4xl bg-[#333333] flex items-center justify-center text-2xl'>
                        <FaDiscord />
                    </div>
                     <div className='w-[40px] h-[40px] rounded-4xl bg-[#333333] flex items-center justify-center text-xl'>
                        <FaTiktok />
                    </div>
                </div>
            </div>
            </main>
            <div className='text-xs font-medium flex justify-between mt-8'>
                <span>ⓒ 2025 ByIge. All rights reserved</span>
                <div>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer