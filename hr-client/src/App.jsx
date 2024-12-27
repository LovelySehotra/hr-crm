
import './App.css'
import { Button } from './components'
import Input from './components/Input/Input'

function App() {
  return (
    <>
      <Button>Login</Button>
      <Input label id="emailInput" labelText="Email Address" placeholder="email@example.com"/>
    </>
  )
}

export default App
