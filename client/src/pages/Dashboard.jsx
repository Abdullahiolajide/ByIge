import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import UserBadge from '../components/UserBadge'
import { backendUrl } from '../../globals'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const [blogs, setBlogs] = useState()
  const navigate = useNavigate()
  
  const getBlogs = async()=>{
    try{
      const response = await fetch(`${backendUrl}/api/blogs/getBlogs`, {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      })
      if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
      const data = await response.json()
      setBlogs(data.data)
      // console.log(data.data) 

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getBlogs()
  }, [])
   if(blogs) {return (
    <div className='mt-20 -z-50'>
      {/* <div className='flex gap-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-12 mx-10 w-fit'> */}

      {/* {
        blogs.map((blog, i)=>(
                    <BlogCard
                        key={i}
                        image={blog.image}
                        category={blog.category}
                        date={blog.date}
                        minRead={blog.minRead}
                        title={blog.title}
                        content={blog.content}
                        author={blog.author}
                        
                    />
                    
                  ))
                } */}
              {/* </div> */}

             {blogs.map((blog, i)=>(
               <div className='z-0 h-52 border-b border-gray-300 mx-10 py-3 max-w-2xl flex' key={i} onClick={()=> navigate(`/blog/${blog._id}`)}>
                <div className='w-9/12 p-3'>
                   <UserBadge  width={15} className={"text-black"}>
                    {blog.userId.email}
                </UserBadge>
                <h1 className='text-2xl font-bold mt-3'>{blog.title}</h1>
               <h3 className='h-12 ellipsis-2-lines text-gray-500'>{blog.content}</h3>
                </div>

                <div className='h-12/12 overflow-hidden relative w-42 flex items-center -z-10'>
                 { blog.imageUrl &&  <img src={blog?.imageUrl} alt="" className='w-64 h-ful object-cover absolute -z-10' />}
                </div>

              </div>
             ))

             }
    </div>
  )}else{
    return (
      <div className='w-full h-[80vh] flex items-center justify-center'>
        <Spinner width={60}/>
      </div>
    )
  }
}

export default Dashboard