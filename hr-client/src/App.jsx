
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


function App() {



  return (
    <>
      <div>
        <Routes>
          <Route path='/drag' element={<DragDrop />} />
          <Route path='/kanban' element ={<KanbanBoard/>}/>
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
