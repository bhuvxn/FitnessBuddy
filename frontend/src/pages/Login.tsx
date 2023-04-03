import Axios from 'axios'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  return (
    <div>
      <h1>Fitness Buddy</h1>
      <form> 
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
        <button type = "submit">Continue in Demo Mode</button>
      </form>
      <button type="submit">Sign Up</button>
    </div>
  )
}

export default Login