import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AcademicCapIcon, UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react'

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 text-blue-600">🎓 Feedback Panel</h2>
          <nav className="flex flex-col space-y-4">
            {role === 'student' && (
              <Link to="/student-dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <UserIcon className="h-5 w-5" />
                <span>Student View</span>
              </Link>
            )}
            {role === 'teacher' && (
              <Link to="/teacher-dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <AcademicCapIcon className="h-5 w-5" />
                <span>Teacher View</span>
              </Link>
            )}
          </nav>
        </div>

        <div className="pt-8 border-t mt-8">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-500 hover:text-red-700"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default Layout;
