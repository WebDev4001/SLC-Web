import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, CalendarIcon, UsersIcon, MessageCircleIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Student Learning Centre
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              A comprehensive digital platform for MMMUT students to access
              resources, stay updated with events, and connect with the
              university community.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/resources" className="mx-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8">
                Explore Resources
              </Link>
              <Link to="/login" className="mx-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-8">
                Student Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features & Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the tools and resources available to enhance your
              academic journey at MMMUT.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Resource Library */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <BookIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Resource Library
              </h3>
              <p className="mt-2 text-gray-600">
                Access e-books, notes, and previous year question papers to aid
                your studies.
              </p>
              <Link to="/resources" className="mt-4 inline-block text-blue-600 hover:underline">
                Browse Resources →
              </Link>
            </div>
            {/* Events & Announcements */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <CalendarIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Events & Announcements
              </h3>
              <p className="mt-2 text-gray-600">
                Stay updated with upcoming workshops, seminars, and important
                university announcements.
              </p>
              <Link to="/events" className="mt-4 inline-block text-blue-600 hover:underline">
                View Events →
              </Link>
            </div>
            {/* Council Information */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <UsersIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Council Information
              </h3>
              <p className="mt-2 text-gray-600">
                Learn about student council members, their roles, and ongoing
                initiatives.
              </p>
              <Link to="/council" className="mt-4 inline-block text-blue-600 hover:underline">
                Meet the Council →
              </Link>
            </div>
            {/* Chatbot Assistance */}
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                <MessageCircleIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Chatbot Assistance
              </h3>
              <p className="mt-2 text-gray-600">
                Get instant answers to your queries through our interactive
                chatbot assistant.
              </p>
              <button className="mt-4 inline-block text-blue-600 hover:underline">
                Ask a Question →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Updates Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Recent Updates
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Update Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                  Announcement
                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Semester Registration Open
                </h3>
                <p className="text-gray-600">
                  Registration for the upcoming semester is now open. All
                  students are required to complete their registration by July
                  15th.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">July 1, 2023</span>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
            {/* Update Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full mb-4">
                  Event
                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Technical Workshop Series
                </h3>
                <p className="text-gray-600">
                  Join us for a series of technical workshops on Web
                  Development, Machine Learning, and Cloud Computing starting
                  next week.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">July 5, 2023</span>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
            {/* Update Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                  Resource
                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  New E-Books Added
                </h3>
                <p className="text-gray-600">
                  The library has been updated with new e-books for Computer
                  Science, Electronics, and Mechanical Engineering courses.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">June 28, 2023</span>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    Explore →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;