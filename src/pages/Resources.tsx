import React from 'react';
import { SearchIcon, BookIcon, FileTextIcon, DownloadIcon } from 'lucide-react';
const Resources = () => {
  // Sample resource data
  const resources = [{
    id: 1,
    title: 'Data Structures and Algorithms',
    type: 'E-Book',
    subject: 'Computer Science',
    author: 'Dr. Rajesh Kumar',
    uploadDate: '2023-05-15'
  }, {
    id: 2,
    title: 'Digital Electronics Notes',
    type: 'Notes',
    subject: 'Electronics',
    author: 'Prof. Amit Singh',
    uploadDate: '2023-06-02'
  }, {
    id: 3,
    title: 'Thermodynamics Previous Year Paper 2022',
    type: 'PYQ',
    subject: 'Mechanical',
    author: 'Exam Cell',
    uploadDate: '2023-01-10'
  }, {
    id: 4,
    title: 'Calculus and Linear Algebra',
    type: 'E-Book',
    subject: 'Mathematics',
    author: 'Dr. Priya Sharma',
    uploadDate: '2023-04-22'
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resource Library
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Access a wide range of academic resources including e-books, notes,
            and previous year question papers.
          </p>
        </div>
        {/* Search and Filter Section */}
        <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search resources..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <select className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Types</option>
                <option value="book">E-Books</option>
                <option value="notes">Notes</option>
                <option value="pyq">Previous Year Papers</option>
              </select>
              <select className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Subjects</option>
                <option value="cs">Computer Science</option>
                <option value="ec">Electronics</option>
                <option value="me">Mechanical</option>
                <option value="math">Mathematics</option>
              </select>
            </div>
          </div>
        </div>
        {/* Resources List */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map(resource => <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {resource.type === 'E-Book' && <BookIcon className="h-8 w-8 text-blue-600" />}
                    {resource.type === 'Notes' && <FileTextIcon className="h-8 w-8 text-green-600" />}
                    {resource.type === 'PYQ' && <FileTextIcon className="h-8 w-8 text-purple-600" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {resource.title}
                    </h3>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm font-medium text-gray-600">
                        {resource.type}
                      </span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-sm text-gray-600">
                        {resource.subject}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      By {resource.author}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Uploaded on{' '}
                        {new Date(resource.uploadDate).toLocaleDateString()}
                      </span>
                      <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <DownloadIcon className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-50">
              2
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              8
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              9
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              10
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>;
};
export default Resources;