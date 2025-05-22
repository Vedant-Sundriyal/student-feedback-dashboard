import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, UserIcon, LogoutIcon } from '@heroicons/react/outline';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 text-blue-600">🎓 Feedback Panel</h2>
          <nav className="flex flex-col space-y-4">
            <Link to="/student-dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <UserIcon className="h-5 w-5" />
              <span>Student View</span>
            </Link>
            <Link to="/teacher-dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <AcademicCapIcon className="h-5 w-5" />
              <span>Teacher View</span>
            </Link>
          </nav>
        </div>
        <div className="pt-8 border-t mt-8">
          <Link to="/" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
            <LogoutIcon className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default Layout;
