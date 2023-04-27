
import axios from 'axios'
import Login from './pages/Login'
import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
const App= () => {
  const [Search, SetSearch] = useState<string>('')
  const [Results, SetResults] = useState<any[]>([])
  

  //render results in rows and columns, featuring the food name, calories, macros

  return (

    
    <div>
      <Header />
      <Dashboard/>
    </div>
  )

}

export default App
