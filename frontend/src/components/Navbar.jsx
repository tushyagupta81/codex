import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to='/' className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600"/>
              <span className="ml-2 text-xl font-bold">CareCircle</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to='/About' className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to='/Communities' className="text-gray-700 hover:text-blue-600">Communities</Link>
            <Link to='/Doctors' className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to='/Resources' className="text-gray-700 hover:text-blue-600">Resources</Link>
            <Link  className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
