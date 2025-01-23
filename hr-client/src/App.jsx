
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Candidates from './pages/Candidates/Candidates'
import Employees from './pages/Employees/Employees'
import ProtectedRoute from './helpers/protectedRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Sidebar } from './components'
import Attendances from './pages/Attendances/Attendances'
import Profile from './pages/Profile/Profile'
import LagoutPage from "./pages/Logout/Logout"
import Leaves from './pages/Leaves/:eaves'
import DragDrop from './components/DragDrop/DragDrop'
import KanbanBoard from './components/Kanban/Kanban'

import ChatMessage from './components/chatMessage/ChatMessage'


function App() {

  const data = [
    {
      id: 1,
      title: "Post 1",
      comments: ["Great work!", "Keep it up!"],
    },
    {
      id: 2,
      title: "Post 2",
      comments: ["This is amazing!", "Nice content.", "Love it!"],
    },
    {
      id: 3,
      title: "Post 3",
      comments: ["Fantastic job!", "Brilliant idea!"],
    },
  ];

  return (
    <>
      <div>
        <Routes>
          <Route path='/drag' element={<DragDrop />} />
          <Route path='/kanban' element ={<KanbanBoard/>}/>
          <Route path = '/chat' element={<ChatMessage data={data}/>} />
          <Route path='/*' element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>

          } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/candidate' element={
            <ProtectedRoute>
              <Candidates />
            </ProtectedRoute>
          } />
          <Route path='/employee' element={
            <ProtectedRoute>
            <Employees />
          </ProtectedRoute>} />
          <Route path='/attendance' element={
            <ProtectedRoute>
           <Attendances/>
          </ProtectedRoute>} />
          <Route path='/profile' element={
            <ProtectedRoute>
          <Profile/>
          </ProtectedRoute>} />
          <Route path='/logout' element={
            <ProtectedRoute>
          <LagoutPage/>
          </ProtectedRoute>} />
          <Route path='/leaves' element={
            // <ProtectedRoute>
          <Leaves/>
          // </ProtectedRoute>
        } 
          />
        </Routes>
     
      </div>


    </>
  )
}

export default App
