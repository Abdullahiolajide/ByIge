import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import UserBadge from '../components/UserBadge'
import { backendUrl } from '../../globals'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './DashboardLayout'
import Menu from '../components/Menu/Menu'
import MenuButton from '../components/Menu/MenuButton'
import MenuList from '../components/Menu/MenuList'
import MenuItem from '../components/Menu/MenuItem'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'


const MyBlogs = () => {
  const {email, _id} = useContext(UserContext)
  const [blogs, setBlogs] = useState([])
  const [showEdit, setShowEdit] = useState(false)
  const [editId, setEditId] = useState('')
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

   const handleChange = (e)=>{
    
        setPost(prevPost=>({
            ...prevPost,
            [e.target.name]: e.target.value,

        }))
    }
  
 const getBlogs = async()=>{
         try{
           const response = await fetch(`${backendUrl}/api/blogs/myBlogs/${_id ? _id : ""}`, {
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
  }, [_id])

 const showEditBlog = async (blogId, i)=>{
    setEditId(blogId)
    setPost({
        title: blogs[i].title,
        content: blogs[i].content
    })
    setShowEdit(true)
 }
 const edit = async ()=>{
    setLoading(true)
         try{
              const response = await fetch(`${backendUrl}/api/blogs/editBlog/${editId}`, {
                method: 'PATCH',
                headers:{
                  'Content-Type':'application/json'
                },
                body: JSON.stringify(post)
              })
              if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
              const data = await response.json()
              getBlogs()
              console.log(data)
              setShowEdit(false)
              setLoading(false)

        
            }catch(error){
            setLoading(false)
              console.log(error)
            }
 }
 const deleteBlog = async(blogId)=> {
    setLoading(true)

    try{
              const response = await fetch(`${backendUrl}/api/blogs/deleteBlog/${blogId}`, {
                method: 'DELETE',
                headers:{
                  'Content-Type':'application/json'
                }
              })
              if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
              const data = await response.json()
              getBlogs()
              console.log(data)
              alert("Deleted Successfully")
        
              setLoading(false)
            }catch(error){
                setLoading(false)
              console.log(error)
            }
 }


   if(blogs) {return (
    <div className='mt-20 -z-50'>
        {loading && <div className='w-full bg-gray-300/30 h-[100vh] flex items-center justify-center fixed z-50 top-0'><Spinner width={50}/></div>}
     {showEdit &&
        <div className='absolute top-0 w-full bg-gray-300/30 h-[100vh] '>
        <div>
            <div className='shadow-lg bg-white w-full max-w-3xl mx-auto z-50'>
                <div className='float-left px-4 cursor-pointer py-1 rounded-full text-white mx-3 my-1 bg-green-500' onClick={edit}>Edit</div>
                <div className='text-3xl text-gray-800 w-fit float-right p-2 cursor-pointer' onClick={()=> setShowEdit(prev=> !prev)}><MdClose /></div>
                <section className='mt-10 max-w-3xl mx-auto flex flex-col write px-10'>
            <div className="relative w-fit p-3 hidden">
                <label
                    htmlFor="file-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    Upload Image
                    
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="ms-2"
                    onChange={(e) =>
                    setPost({ ...post, imageFile: e.target.files[0] })
                    }
                />
                </div>

            <input type="text" placeholder='Title' value={post?.title} className='text-4xl md:text-6xl write my-8' name='title' onChange={handleChange}/>
            <textarea type="text" value={post?.content} placeholder='Tell our story' className='write text-xl md:text-2xl w-full h-100' name='content' onChange={handleChange}/>
        </section>
                
            </div>

        </div>

        </div>}

             {blogs.map((blog, i)=>(
               <div className='z-0 h-43 md:h-52 border-b border-gray-300 mx-4 md:mx-auto md:py-3 max-w-2xl flex justify-between' key={i} onClick={()=> navigate(`/blog/${blog._id}`)}>
                <div className='w-fit p-2 md:p-3'>
                  <main className='flex items-center justify-between'>
                     <UserBadge  width={15}>
                        {blog.userId.email}
                    </UserBadge>

                <div onClick={(e)=> e.stopPropagation()}>
                     <Menu className='z-50 text-sm'>
                            <MenuButton>
                            <div className='cursor-pointer h-[30px] w-[30px] rounded-full p-1 hover:bg-gray-100 flex items-center justify-center'><BsThreeDotsVertical /></div>
                            </MenuButton>
                            <MenuList>
                            <div className='z-100 w-50 shadow-md mt-3 -ml-26'>
                            <MenuItem className='bg-white p-4 hover:bg-gray-300 cursor-pointer' onClick={()=> showEditBlog(blog._id, i)}>Edit</MenuItem>
                                <MenuItem className='bg-white p-4 hover:bg-gray-300 cursor-pointer' onClick={()=>deleteBlog(blog._id)}> <span className='text-red-500'>Delete</span> </MenuItem>
                               
                            </div>
                            </MenuList>
                    </Menu>
                </div>
                  </main>
                <h1 className='text-xl md:text-2xl font-bold mt-3'>{blog.title}</h1>
               <h3 className='h-10 md:h-12 text-sm md:text-base ellipsis-2-lines text-gray-500'>{blog.content}</h3>
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

export default MyBlogs