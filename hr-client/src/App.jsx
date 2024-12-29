
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Candidates from './pages/Candidates/Candidates'
import Employees from './pages/Employees/Employees'
import ProtectedRoute from './helpers/protectedRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Sidebar } from './components'

function App() {



  return (
    <>
      <div>
        <Routes>
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
          <Route path='/employee' element={<Employees />} />
        </Routes>
      </div>


    </>
  )
}

export default App
