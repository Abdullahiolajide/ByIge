import React from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import FilterBar from './FilterBar'
import BlogCard from './BlogCard'

const Blogs = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get("category")

    return (
    <div className='p-8 w-full'>
        <h1 className='text-3xl font-medium'>Blog</h1>
        <p className='text-lg text-gray-700'>Here, we share travel tips, destiation guides and stories that inspire your next adventure.</p>

        <div className='space-x-4 space-y-1 mt-8'>
            <FilterBar category={category} setSearchParams={setSearchParams} >All</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Destination</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Culinary</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Lifestyle</FilterBar>
            <FilterBar category={category} setSearchParams={setSearchParams}>Tips & Hacks</FilterBar>
        </div>

        <div className='flex gap-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-12 mx-auto w-fit'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </div>
  )
}

export default Blogs