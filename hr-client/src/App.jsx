
import './App.css'
import { Button } from './components'
import Input from './components/Input/Input'
import Typography from './components/Typography/Typography'

function App() {
  return (
    <>
      <Button>Login</Button>
      <Input label id="emailInput" labelText="Email Address" placeholder="email@example.com"/>

      <Typography type="caption">Welcome to Dashboard</Typography>
      <Input label labelText="Password" id="password" type="password" />
    </>
  )
}

export default App
