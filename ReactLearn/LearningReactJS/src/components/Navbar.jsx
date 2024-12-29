import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl  py-4 font-bold">
          <a href="#">Prasad Kandekar</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar