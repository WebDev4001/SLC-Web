import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Student Learning Centre
            </h3>
            <p className="text-gray-300">
              Madan Mohan Malaviya University of Technology (MMMUT)
            </p>
            <p className="text-gray-300 mt-2">Gorakhpur, Uttar Pradesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/council" className="text-gray-300 hover:text-white">
                  Council
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://mmmut.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  MMMUT Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Student Learning Centre, MMMUT.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;