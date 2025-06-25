import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import FilterBar from './FilterBar'
import BlogCard from './BlogCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { backendUrl } from '../../globals'
import Spinner from './Spinner'

const Blogs = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [blogs, setBlogs] = useState()

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
            console.log(data.data)

            }catch(error){
            console.log(error)
            }
        }

        useEffect(()=>{
            getBlogs()
          }, [])
    
    const category = searchParams.get("category")




    return (
    <div className='p-8 w-full' >
        <h1 className='text-3xl font-medium'>Blog</h1>
        <p className='text-lg text-gray-700'>Here, we share travel tips, destiation guides and stories that inspire your next adventure.</p>

        <div className='space-x-4 space-y-1 mt-8'>
            <FilterBar category={category} setSearchParams={setSearchParams} >All</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Destination</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Culinary</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Lifestyle</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Tips & Hacks</FilterBar>
        </div>

        {blogs ? (<div className='flex gap-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-12 mx-auto w-fit'>
            { 
                blogs.map((blog, index)=>(
                    <BlogCard
                        key={index}
                        image={blog.imageUrl}
                        blogId={blog._id}
                        category={blog.category}
                        // date={blog.date}
                        // minRead={blog.minRead}
                        title={blog.title}
                        content={blog.content}
                        author={blog.userId}
                    
                    />

                ))
            }
        </div>) : <div className='w-full flex justify-center items-center h-[70vh]'><Spinner width={45}/></div>}

        <div className='mx-auto w-fit flex space-x-3 mt-8'>
            <div className='w-[39px] h-[39px] flex items-center justify-center border border-gray-300 rounded-md cursor-pointer'> <IoIosArrowBack /> </div>
            <div className='w-[40px] h-[40px] flex items-center justify-center bg-gray-300 rounded-md cursor-pointer'>1</div>
            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer'>2</div>
            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer'>3</div>
            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer'>4</div>
            <div className='w-[39px] h-[39px] flex items-center justify-center border border-gray-300 rounded-md cursor-pointer'> <IoIosArrowForward /> </div>
        </div>
    </div>
  )
}

export default Blogs