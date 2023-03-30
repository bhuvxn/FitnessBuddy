
import axios from 'axios'
import Login from './pages/Login'
import { useState } from 'react'
import Search from './components/Search'
import Header from './components/Header'
const App= () => {
  const [SSearch, SetSearch] = useState<string>('')
  const [Results, SetResults] = useState<any[]>([])

  

  //render results in rows and columns, featuring the food name, calories, macros

  return (
    <div>
      <Header />
      <Search />
    </div>
  )

}

export default App
