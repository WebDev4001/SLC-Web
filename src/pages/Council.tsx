import React from 'react';
const Council = () => {
  // Sample council member data
  const councilMembers = [{
    id: 1,
    name: 'Rajat Sharma',
    role: 'President',
    department: 'Computer Science',
    year: 'Final Year',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'president@slcmmmut.edu',
    bio: 'Rajat is responsible for overseeing all SLC activities and representing student interests to university administration.'
  }, {
    id: 2,
    name: 'Priya Patel',
    role: 'Vice President',
    department: 'Electronics Engineering',
    year: 'Final Year',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'vicepresident@slcmmmut.edu',
    bio: 'Priya assists the president in council operations and leads several key initiatives for student welfare.'
  }, {
    id: 3,
    name: 'Amit Kumar',
    role: 'Technical Secretary',
    department: 'Information Technology',
    year: 'Third Year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'tech@slcmmmut.edu',
    bio: 'Amit manages technical events, workshops, and maintains the SLC web portal and other digital platforms.'
  }, {
    id: 4,
    name: 'Neha Singh',
    role: 'Cultural Secretary',
    department: 'Civil Engineering',
    year: 'Third Year',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'cultural@slcmmmut.edu',
    bio: 'Neha organizes cultural events, festivals, and promotes arts and cultural activities on campus.'
  }, {
    id: 5,
    name: 'Vikram Verma',
    role: 'Sports Secretary',
    department: 'Mechanical Engineering',
    year: 'Third Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'sports@slcmmmut.edu',
    bio: 'Vikram coordinates sports events, tournaments, and promotes physical fitness activities for students.'
  }, {
    id: 6,
    name: 'Ananya Gupta',
    role: 'Academic Secretary',
    department: 'Electrical Engineering',
    year: 'Final Year',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    contact: 'academic@slcmmmut.edu',
    bio: 'Ananya focuses on academic resources, study groups, and coordinates with faculty to improve learning experiences.'
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Learning Council
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team of student representatives who work to
            enhance the learning experience at MMMUT.
          </p>
        </div>
        {/* Council Structure */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Council Structure
          </h2>
          <p className="mt-2 text-gray-600">
            The Student Learning Council (SLC) is a student-led organization
            that works to improve academic resources, organize educational
            events, and represent student interests to the university
            administration. The council consists of elected representatives from
            various departments and years.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Key Responsibilities:
            </h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
              <li>Organizing workshops, seminars, and technical events</li>
              <li>Managing and updating the resource library</li>
              <li>Coordinating with faculty for academic improvements</li>
              <li>Addressing student grievances related to academics</li>
              <li>Promoting research and innovation among students</li>
            </ul>
          </div>
        </div>
        {/* Council Members */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Current Council Members
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {councilMembers.map(member => <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-1">
                  <img className="h-48 w-full object-cover object-center" src={member.image} alt={member.name} />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-blue-600 font-medium">
                      {member.role}
                    </p>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>
                        {member.department}, {member.year}
                      </p>
                      <p className="mt-1">{member.contact}</p>
                    </div>
                    <p className="mt-4 text-gray-600">{member.bio}</p>
                    <div className="mt-6">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Join the Council */}
        <div className="mt-16 bg-blue-700 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Interested in Joining the Council?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Elections for the next academic year will be held in April.
                  Learn about the nomination process and requirements.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Council;