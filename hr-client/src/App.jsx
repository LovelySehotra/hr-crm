
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components'
import Input from './components/Input/Input'
import Sidebar from './components/SideBar/SideBar'
import Typography from './components/Typography/Typography'
import LoginForm from './features/LoginForm/LoginForm'
import RegisterForm from './features/RegisterForm/RegisterForm'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </div>

    </>
  )
}

export default App
