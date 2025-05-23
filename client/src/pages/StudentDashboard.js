import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const [college, setCollege] = useState('');
  const [professor, setProfessor] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  // ✅ Protect this route: allow only if user role is 'student'
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await axios.post('http://localhost:5001/feedback', {
        message,
        college,
        professor,
      });

      setStatus('Feedback submitted ✅');
      setMessage('');
      setCollege('');
      setProfessor('');
    } catch (error) {
      setStatus('Error submitting feedback');
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Submit Feedback</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Select College</label>
          <select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Choose...</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Select Professor</label>
          <select
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            required
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Choose...</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Prof. Garcia">Prof. Garcia</option>
            <option value="Ms. Lee">Ms. Lee</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Your Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            placeholder="Write your thoughts anonymously..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
      </form>
    </Layout>
  );
}

export default StudentDashboard;
