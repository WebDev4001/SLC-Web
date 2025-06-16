import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
const Events = () => {
  // Sample event data
  const events = [{
    id: 1,
    title: 'Technical Workshop: Web Development',
    date: '2023-07-15',
    time: '10:00 AM - 1:00 PM',
    location: 'Computer Science Lab, Block A',
    category: 'Workshop',
    description: 'Learn modern web development techniques with React and Node.js. This hands-on workshop will cover frontend and backend development basics.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    id: 2,
    title: 'Guest Lecture: Future of AI',
    date: '2023-07-20',
    time: '2:00 PM - 4:00 PM',
    location: 'Main Auditorium',
    category: 'Lecture',
    description: 'Distinguished speaker Dr. Rajiv Mehta from IIT Delhi will discuss the future of Artificial Intelligence and its impact on various industries.',
    image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80'
  }, {
    id: 3,
    title: 'Annual Tech Fest: TechnoVision 2023',
    date: '2023-08-05',
    time: '9:00 AM - 6:00 PM',
    location: 'University Campus',
    category: 'Fest',
    description: "Join us for MMMUT's annual technical festival featuring coding competitions, robotics challenges, project exhibitions, and more.",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    id: 4,
    title: 'Career Counseling Session',
    date: '2023-07-25',
    time: '11:00 AM - 1:00 PM',
    location: 'Seminar Hall, Block B',
    category: 'Counseling',
    description: 'Industry experts will provide guidance on career opportunities, resume building, and interview preparation for final year students.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Events & Announcements
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with upcoming workshops, seminars, and important
            university announcements.
          </p>
        </div>
        {/* Filter Section */}
        <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">
                Filter Events
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <select className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Categories</option>
                <option value="workshop">Workshops</option>
                <option value="lecture">Lectures</option>
                <option value="fest">Festivals</option>
                <option value="counseling">Counseling</option>
              </select>
              <select className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>
        {/* Events List */}
        <div className="mt-8 grid gap-8">
          {events.map(event => <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={event.image} alt={event.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                      ${event.category === 'Workshop' ? 'bg-blue-100 text-blue-600' : ''}
                      ${event.category === 'Lecture' ? 'bg-purple-100 text-purple-600' : ''}
                      ${event.category === 'Fest' ? 'bg-green-100 text-green-600' : ''}
                      ${event.category === 'Counseling' ? 'bg-yellow-100 text-yellow-600' : ''}
                    `}>
                      {event.category}
                    </span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {event.title}
                  </h2>
                  <p className="mt-3 text-gray-600">{event.description}</p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
                      {event.location}
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Register for Event
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Events;