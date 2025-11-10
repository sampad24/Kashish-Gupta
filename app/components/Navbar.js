import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My Portfolio</h1>
            </div>
            <div className="flex space-x-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
