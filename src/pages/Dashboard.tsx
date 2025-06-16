import React from 'react';
import { BookIcon, CalendarIcon, UsersIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
const Dashboard = () => {
  // This is a placeholder dashboard - in a real implementation this would be protected
  // and would show different content based on the user's role
  return <div className="w-full bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-col w-64 bg-white shadow-sm h-screen sticky top-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h2 className="text-lg font-semibold text-blue-600">
                SLC Dashboard
              </h2>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              <a href="#" className="bg-blue-50 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <BookIcon className="mr-3 h-5 w-5" />
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <CalendarIcon className="mr-3 h-5 w-5" />
                Events
              </a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <UsersIcon className="mr-3 h-5 w-5" />
                Users
              </a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <SettingsIcon className="mr-3 h-5 w-5" />
                Settings
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div>
                <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <a href="#" className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center">
                  <LogOutIcon className="mr-1 h-3 w-3" />
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            {/* Dashboard Content */}
            <div className="mt-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <BookIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Total Resources
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              248
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                        <CalendarIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Upcoming Events
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              12
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                        <UsersIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Active Users
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              1,823
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="mt-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activity
              </h2>
              <div className="mt-4 bg-white shadow overflow-hidden rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        New e-book added: "Data Structures and Algorithms"
                      </p>
                      <span className="ml-auto text-sm text-gray-500">
                        2 hours ago
                      </span>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        Event created: "Technical Workshop: Web Development"
                      </p>
                      <span className="ml-auto text-sm text-gray-500">
                        Yesterday
                      </span>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        User role updated: "Priya Patel" to "Editor"
                      </p>
                      <span className="ml-auto text-sm text-gray-500">
                        2 days ago
                      </span>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        New announcement: "Semester Registration Open"
                      </p>
                      <span className="ml-auto text-sm text-gray-500">
                        3 days ago
                      </span>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        Resource updated: "Digital Electronics Notes"
                      </p>
                      <span className="ml-auto text-sm text-gray-500">
                        4 days ago
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;