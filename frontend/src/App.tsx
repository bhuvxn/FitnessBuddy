
import axios from 'axios'
import Login from './pages/Login'
import { useState } from 'react'
import Search from './components/Search'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Log from './components/Log'
const App= () => {
  const [Search, SetSearch] = useState<string>('')
  const [Results, SetResults] = useState<any[]>([])
  

  //render results in rows and columns, featuring the food name, calories, macros

  return (
    <div>
      <Header />
      <Log/>
    </div>
  )

}

export default App
