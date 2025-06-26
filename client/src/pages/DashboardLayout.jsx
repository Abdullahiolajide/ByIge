import React, { createContext, useEffect, useState } from 'react'
import { backendUrl } from '../../globals'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { FiEdit } from 'react-icons/fi'
import Menu from '../components/Menu/Menu'
import MenuButton from '../components/Menu/MenuButton'
import MenuList from '../components/Menu/MenuList'
import MenuItem from '../components/Menu/MenuItem'
const UserContext = createContext()

const DashboardLayout = () => {
    const [authorized, setAuthorized] = useState(true)
    const [user, setUser] = useState('')
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(()=>{
        const authorize = async ()=>{
            const res = await fetch(`${backendUrl}/api/dashboard`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("ByIgeAuthToken")}`
                }
            })
            if(!res.ok){
                return setAuthorized(false)
                
            }
            const data = await res.json()
            setUser(data.data)

        }
        authorize()
    }, [])

    if (authorized) {
        return (
          <div>
              <nav className='flex border border-b border-gray-200 px-6 py-2 items-center justify-between fixed w-full top-0 bg-white'>
              <div className='flex items-center'>
                  <div className='text-2xl'>
                    <span className="font-bold">BI </span>ByIge
                </div>
               <div>
                {/* <input type="text" placeholder='Search' className='bg-gray-200 px-2 mx-3 py-2'/> */}
                    <div className='nav-input flex md:py-2 py-1 px-2 md:px-3 md:px-5 mx-3 md:mx-6 text-sm bg-gray-100 backdrop-blur-lg rounded-4xl w-fit justify-between items-center ' >
                        <span className='text-2xl text-gray-600'><CiSearch /></span>
                    <input type="text" placeholder='Search' className='focus:outline-0 search-input px-2' />
                    </div>
               </div>
              </div>

               <div className='flex space-x-6 items-center'>
                    <Link to={'create-blog'}><button><div className='flex items-center text-gray-400 cursor-pointer'> <span className='text-2xl  mx-2'><FiEdit /> </span> <span>Write</span></div></button></Link>
                    <div className='text-3xl text-gray-400'><CiBellOn /></div>
                    <Menu className='z-50'>
                              <MenuButton>
                                <div className='cursor-pointer flex items-center w-[40px] h-[40px] bg-gray-700 text-white text-xl rounded-full justify-center'>{user.email && user.email.split('')[0].toUpperCase()}</div>
                              </MenuButton>
                              <MenuList>
                               <div className='z-100 w-100 shadow-md mt-3 -ml-26'>
                                <MenuItem className='bg-white p-4 hover:bg-gray-300 cursor-pointer'><span onClick={()=> navigate('/') }>Home</span></MenuItem>
                                 <MenuItem className='bg-white p-4 hover:bg-gray-300 cursor-pointer'>My Blogs </MenuItem>
                                 <MenuItem className='bg-white p-4 hover:bg-gray-300 cursor-pointer'>Logout </MenuItem>
                               </div>
                              </MenuList>
                        </Menu>
                    
               </div>
              </nav>

              <UserContext.Provider value={user}>
                <Outlet />
              </UserContext.Provider>
              
          </div>
        )
    }else{
        return <Navigate to={'/login'} state={{message:"You need to Login fisrt", from:location.pathname}}/>
    }

}

export default DashboardLayout
export {UserContext}