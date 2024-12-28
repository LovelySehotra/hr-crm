
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components'
import Input from './components/Input/Input'
import Sidebar from './components/SideBar/SideBar'
import Typography from './components/Typography/Typography'
import LoginForm from './features/LoginForm/LoginForm'

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </div>

    </>
  )
}

export default App
