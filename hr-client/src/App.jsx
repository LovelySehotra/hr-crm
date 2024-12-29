
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components'
import Input from './components/Input/Input'
import Sidebar from './components/SideBar/SideBar'
import Typography from './components/Typography/Typography'
import LoginForm from './features/LoginForm/LoginForm'
import RegisterForm from './features/RegisterForm/RegisterForm'
import Login from './pages/Login/Login'
import Carousel from './features/Carousel/Carousel'
import Register from './pages/Register/Register'
import DialogBox from './components/DialogBox/DialogBox'
import { useState } from 'react'
import SelectOption from './components/SelectOption/SelectOption'

import TableRow from './components/TableRow/TableRow'
import TableHeading from './components/TableHeading/TableHeading'
import Table from './features/Table/Table'
import DashboardTopBar from './components/DashboardTopBar/DashboardTopBar'
import Candidates from './pages/Candidates/Candidates'

function App() {
 
  
  
  return (
    <>
      <div>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/candidate' element={<Candidates/>}/>
      </Routes>
      </div>
     
      
    </>
  )
}

export default App
