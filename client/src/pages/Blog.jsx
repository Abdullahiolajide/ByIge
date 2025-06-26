import React, { useEffect, useState } from 'react'
import { backendUrl } from '../../globals'
import { useLocation, useParams } from 'react-router-dom'
import UserBadge from '../components/UserBadge'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'
import Navbarm from '../components/Navbarm'

const Blog = () => {
     const [blog, setBlog] = useState({})
     const {title, content, imageUrl, } = blog
     const params = useParams()
      
      const getBlog = async()=>{
        try{
          const response = await fetch(`${backendUrl}/api/blogs/getBlog/${params.id}`, {
            method: 'GET',
            headers:{
              'Content-Type':'application/json'
            }
          })
          if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
          const data = await response.json()
          setBlog(data.data)
          console.log(data.data)
    
        }catch(error){
          console.log(error)
        }
      }

       useEffect(()=>{
          getBlog()
        }, [])

 if(blog){
     return (
    <div>
        <div className='flex top-2 px-2 absolute'><Navbarm color={"black"} /></div>
        <section className=' flex flex-col justify-center items-center mb-22'>
           <div className='h-[55vh] w-full flex items-center justify-center'>
             <img src={imageUrl || "https://res.cloudinary.com/dsr9rtryb/image/upload/v1732467046/alhsgvtdfvzhahstndfd.jpg"} alt="" className='w-full h-full object-cover' />
           </div>
           <div className='w-full max-w-3xl'>
            <div className='my-6 flex justify-center flex-col items-center'>
                <h1 className='text-center text-3xl font-medium pb-2'>{title}</h1>
            <UserBadge  width={15} className={"text-black"}>
                                {blog?.userId?.email || "o"}
            </UserBadge>
            </div>
            <p className='write text-xl px-2'>{content}</p>
           </div>
        </section>
        <Footer />
    </div>
  )
 }else{
    return <Spinner width={60}/>
 }
}

export default Blog