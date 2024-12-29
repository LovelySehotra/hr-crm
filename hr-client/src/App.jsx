
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

function App() {
 
  const rows = [
    {
      id: 1,
      fullName: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      Position: "Frontend Developer",
      jobApplication: { status: "Rejected" },
      Experience: "3 years",
      Resume: "https://resime.pdf",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "987-654-3210",
      Position: "Backend Developer",
      jobApplication: { status: "Scheduled" },
      Experience: "5 years",
      Resume: "https://resume.pdf",
    },
  ];
  const handleStatusChange = async (id, newStatus) => {}
  return (
    <>
      <div>
        {/* <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes> */}
      </div>
      {rows.map((row) => (
          <TableRow
          type="candidatePage"
            key={row.id}
            row={row}
            onStatusChange={handleStatusChange}
          />
        ))}
    </>
  )
}

export default App
