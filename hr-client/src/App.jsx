
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
import ChatMessage from './components/ChatMessage/ChatMessage'
import ChatBox from './features/ChatBox/ChatBox'
import Breadcrumbs from './components/BreadCrumb/BreadCrumb'



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
const kanbanData = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          title: "Design Homepage",
          description: "Create wireframes for the homepage layout",
          priority: "High",
          assignee: "Alice",
        },
        {
          id: "task-2",
          title: "Set Up Environment",
          description: "Install Node.js and necessary dependencies",
          priority: "Medium",
          assignee: "Bob",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-3",
          title: "Develop Login Feature",
          description: "Implement user authentication using JWT",
          priority: "High",
          assignee: "Charlie",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-4",
          title: "Set Up Database",
          description: "Configure MongoDB and create initial schema",
          priority: "Medium",
          assignee: "Diana",
        },
      ],
    },
  ]
}
  return (
    <>
      <div>
          <Breadcrumbs/>
        <Routes>
          <Route path='/drag' element={<DragDrop />} />
          <Route path='/kanban' element ={<KanbanBoard initialData={kanbanData}/>}/>
          <Route path = '/message' element={<ChatBox initialMessages={[
        {
          sender: "John",
          message: "Hello!",
          timestamp: "10:00 AM",
        },
        {
          sender: "Jane",
          message: "Hi there!",
          timestamp: "10:05 AM",
        }
      ]}/>} />
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
