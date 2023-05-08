
import axios from 'axios'
import Login from './pages/Login'
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import React  from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
const App = () => {
  //check if client token is in local storage
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);  

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(localStorage.getItem("userId"));
    if (token) {
      setToken(token);
    }
    else {
      navigate("/login");
    }
    
  }, []);
  return (

    
    <div>
      
      <Header />
      <Sidebar />
      <Dashboard/>
    </div>
  )

}

export default App
