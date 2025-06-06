import React from 'react'
import Badge from './Badge'
import UserBadge from './UserBadge'

const BlogCard = () => {
  return (
    <div className='container max-w-xl'>
        {/* image div  */}
        <div className='w-full rounded-md overflow-hidden relative h-64 -z-50'>
            <img src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg" alt="" className='w-full h-full object-cover absolute -z-50' />
            <div className='m-2 '><Badge>Lifestyle</Badge></div>
        </div>
        <p className='py-2 text-gray-500'>24 Jan 2024 • 10 mins read</p>
        <h1 className='text-2xl font-medium'>Unveiling the Secrets Beyound the Tourist Trails</h1>
        <h3 className='h-12 ellipsis-2-lines text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, rem fuga adipisci excepturi consequuntur commodi voluptates assumenda ipsa, debitis, atque dolorum porro dolores reprehenderit ea nisi doloribus? Iste, nemo eum?</h3>
      <div className='mt-3'>
         <UserBadge 
        src={"https://i.pinimg.com/736x/b9/b5/fb/b9b5fbe0ce482fb220303222f70fcac0.jpg"} width={40} className={"text-black"}>
            Ige Abdullahi Olajide
        </UserBadge>
      </div>
    </div>
  )
}

export default BlogCard