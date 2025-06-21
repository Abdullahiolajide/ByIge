import React, { useContext, useState } from 'react'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { FiEdit } from 'react-icons/fi'
import { UserContext } from './DashboardLayout'
import { backendUrl } from '../../globals'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const {email, _id} = useContext(UserContext)
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setPost(prevPost=>({
            ...prevPost,
            [e.target.name]: e.target.value,

        }))
    }
    const publish= async()=>{
        setLoading(true)
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('content', post.content);
        formData.append('userId', _id);
        formData.append('image', post.imageFile)
        for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

       try{
         const result = await fetch(`${backendUrl}/api/blogs/createBlog`, {
            method: 'POST',
            body:formData
        })
        setLoading(false)
        navigate('/dashboard')
        const data = await result.json()
        console.log(data)
    }
    catch(error){
           setLoading(false)
           console.log(error)
       }
    }

  return (
    <div>
       {loading && <div className='w-full h-[70vh] flex items-center justify-center bg-white/30 absolute'>
            <Spinner width={60}/>
        </div>}
        <nav className='flex border border-b border-gray-200 px-6 py-2 items-center justify-between fixed w-full top-0 bg-white'>
                      <div className='flex items-center'>
                          <div className='text-xl md:text-2xl min-w-[70px] md:'>
                            <span className="font-bold">BI </span>ByIge
                        </div>
                       <div>
                        {/* <input type="text" placeholder='Search' className='bg-gray-200 px-2 mx-3 py-2'/> */}
                            <div className='nav-input flex md:py-2 py-1 px-2 md:px-3 md:px-5 mx-3 md:mx-6 text-sm  w-fit justify-between items-center ' >
                                <p className='font-medium'>Draft in {email}</p>
                            </div>
                       </div>
                      </div>
        
                       <div className='flex space-x-6 items-center'>
                            <button className='py-1 px-2 cursor-pointer bg-green-500 text-xs text-white rounded-full' onClick={publish}>publish</button>
                            <div className='text-3xl text-gray-400'><CiBellOn /></div>
                            <div className='flex items-center w-[40px] h-[40px] bg-gray-700 text-white text-xl rounded-full justify-center'>A</div>
                       </div>
        </nav>

        <section className='mt-24 max-w-3xl mx-auto flex flex-col write px-10'>
            <div className="relative w-fit">
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

            <input type="text" placeholder='Title' className='text-4xl md:text-6xl write my-8' name='title' onChange={handleChange}/>
            <textarea type="text" placeholder='Tell our story' className='write text-xl md:text-2xl h-100' name='content' onChange={handleChange}/>
        </section>




    </div>
  )
}

export default CreateBlog