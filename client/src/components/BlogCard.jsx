import React from 'react'
import Badge from './Badge'
import UserBadge from './UserBadge'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({image, blogId, category, date, minRead, title, content, author}) => {
  const navigate = useNavigate()
  
  return (
    <div className='container max-w-xlflex flex-col justify-between cursor-pointer' onClick={()=> navigate(`/blog/${blogId}`)}>
        {/* image div  */}
        <div>
          <div className='w-full rounded-md overflow-hidden relative h-64 -z-50'>
            <img src={image || null} alt="" className='w-full h-full object-cover absolute -z-50' />
            {/* <div className='m-2 '><Badge>{category}</Badge></div> */}
        </div>
        {/* <p className='py-2 text-gray-500'>{date} • {minRead} mins read</p> */}
        <h1 className='text-2xl font-medium'>{title}</h1>
        <h3 className='h-12 ellipsis-2-lines text-gray-500'>{content}</h3>
        </div>
      <div className='mt-auto bottom-0'>
         <UserBadge>
            {author.email}
        </UserBadge>
      </div>
    </div>
  )
}

export default BlogCard