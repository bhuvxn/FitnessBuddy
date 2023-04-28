
import axios from 'axios'
import Login from './pages/Login'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
const App = () => {
  const [ClientId, setClientId] = useState<string>("")
  //check if client token is in local storage




  return (

    
    <div>
      
      <Header />
      <Dashboard/>
    </div>
  )

}

export default App
