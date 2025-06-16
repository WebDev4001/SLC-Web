import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, BookOpenIcon, UserIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Resources',
    path: '/resources'
  }, {
    name: 'Events',
    path: '/events'
  }, {
    name: 'Council',
    path: '/council'
  }];
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpenIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                SLC MMMUT
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(link.path)} transition duration-150`}>
                {link.name}
              </Link>)}
          </div>
          <div className="hidden md:flex md:items-center">
            <Link to="/login" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {isMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;