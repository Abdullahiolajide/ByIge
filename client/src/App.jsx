
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import EmailVerified from './pages/EmailVerified'
import { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import DashboardLayout from './pages/DashboardLayout'
import Dashboard from './pages/Dashboard'
import CreateBlog from './pages/CreateBlog'
import Blogs from './components/Blogs'
const ToastContext = createContext()

function App() {
  const authPaths = ['/login', '/signin', '/register', '/signup']
  const [show, setShow] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [pauseClose, setPauseClose] = useState(1000)

  const myToast = (message, autoClose=2000)=>{
    setToastMessage(message)
    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, autoClose);
    
  }
 

  return (
    <div className='app-body w-full'>
     {show && <div className="toast w-full bg-transparent  absolute mx-auto flex top-5 items-center justify-center">
        <div className='w-full bg-white border border-2 border-green-600 p-4 rounded-md z-100 max-w-sm overflow-wrap text-center shadow-lg'>
          {toastMessage}rw
        </div>
      </div>}
      <ToastContainer position="top-right" autoClose={3000} />
      <ToastContext.Provider value={{myToast}}>
        <Routes>
        <Route path='/' element={<Home />}/>
        {authPaths.map((authPath)=>(
          <Route path={authPath} element={<Auth />}/>
        ))}
        <Route path='/email-verified' element={<EmailVerified />}/>
        <Route path='/blogs' element={<Blogs />}/>

        <Route path='/dashboard/' element={<DashboardLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path='create-blog' element={<CreateBlog />}/>
        </Route>

      </Routes>
      </ToastContext.Provider>
    </div>
  )
}

export default App
export {ToastContext}
