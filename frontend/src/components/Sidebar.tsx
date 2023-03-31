import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex h-screen float-left">
    <div className="flex-shrink-0 bg-gray-800 w-64">
    <nav className="mt-10">
      <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Dashboard</a>
      <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Profile</a>
      <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Settings</a>
      <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white">Logout</a>
    </nav>
  </div>
    </div>
  )
}

export default Sidebar