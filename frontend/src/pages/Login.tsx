import Axios from 'axios'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'
const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex flex-col justify-center items-center lg:w-2/5 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Welcome back to fitness buddy!</h2>
        <form className="flex flex-col items-center space-y-6 w-3/4">
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input id="email" type="email" className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input id="password" type="password" className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
          </div>
          <div className="w-full">
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign In</button>
          </div>
          <div className = "w-full">
            <button type = "submit" className = "w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</button>
  
          </div>
          <div className = "w-full">
            <button type = "submit" className = "w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Continue In Demo Mode (test application) </button>
  
          </div>
        </form>
      </div>
      <div className="lg:w-3/5 relative">
      <img src="https://thumbs.dreamstime.com/b/sport-health-fitness-dumbbells-stethoscope-wooden-background-top-view-copyspace-98756042.jpg" alt="Fitness Stock Image" className="w-full h-full object-cover object-center absolute inset-0" />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col z-10">
          <h1 className="text-4xl text-white font-bold mb-4 text-center">Track Your Fitness Journey</h1>
          <p className="text-xl text-white mb-8 text-center">Join fitness buddy and start achieving your fitness goals today.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Get Started</button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Login