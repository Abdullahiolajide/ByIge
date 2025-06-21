
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import EmailVerified from './pages/EmailVerified'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import DashboardLayout from './pages/DashboardLayout'
import Dashboard from './pages/Dashboard'
import CreateBlog from './pages/CreateBlog'

function App() {
  const authPaths = ['/login', '/signin', '/register', '/signup']
 

  return (
    <div className='app-body w-full'>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />}/>
        {authPaths.map((authPath)=>(
          <Route path={authPath} element={<Auth />}/>
        ))}
        <Route path='/email-verified' element={<EmailVerified />}/>

        <Route path='/dashboard/' element={<DashboardLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path='create-blog' element={<CreateBlog />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
