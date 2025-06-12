
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App() {
  const authPaths = ['/login', '/signin', '/register', '/signup']

  return (
    <div className='app-body'>
      <Routes>
        <Route path='/' element={<Home />}/>
        {authPaths.map((authPath)=>(
          <Route path={authPath} element={<Auth />}/>
        ))}
      </Routes>
    </div>
  )
}

export default App
