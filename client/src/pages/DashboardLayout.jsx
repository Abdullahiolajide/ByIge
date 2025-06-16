import React, { useEffect, useState } from 'react'
import { backendUrl } from '../../globals'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const DashboardLayout = () => {
    const [authorized, setAuthorized] = useState(true)
    const location = useLocation();
    useEffect(()=>{
        console.log('ran')
        const authorize = async ()=>{
            const res = await fetch(`${backendUrl}/api/dashboard`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("ByIgeAuthToken")}`
                }
            })
            if(!res.ok){
                setAuthorized(false)
                return console.log(res)
            }
            const data = await res.json()
            console.log(data)

        }
        authorize()
    }, [])

    if (authorized) {
        return (
          <div>
              The dashboard Loayout
              <Outlet />
          </div>
        )
    }else{
        return <Navigate to={'/login'} state={{message:"You need to Login fisrt", from:location.pathname}}/>
    }

}

export default DashboardLayout