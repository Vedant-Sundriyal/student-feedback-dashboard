import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const [college, setCollege] = useState('');
  const [professor, setProfessor] = useState('');
  const [professors, setProfessors] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  // 👇 Update professor list based on selected college
  const professorData = {
    'Lehman College': ['Professor Cameron', 'Professor Brian Murphy', 'Professor Steven'],
    'Baruch College': ['Professor Williams', 'Professor Chen', 'Professor Torres'],
    'Hunter College': ['Professor Patel', 'Professor Rivera', 'Professor Green']
  };

  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setCollege(selectedCollege);
    setProfessor('');
    setProfessors(professorData[selectedCollege] || []);
  };

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
      setProfessors([]);
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
            onChange={handleCollegeChange}
            required
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Choose...</option>
            <option value="Lehman College">Lehman College</option>
            <option value="Baruch College">Baruch College</option>
            <option value="Hunter College">Hunter College</option>
          </select>
        </div>

        {professors.length > 0 && (
          <div>
            <label className="block text-sm font-medium">Select Professor</label>
            <select
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
              required
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">Choose...</option>
              {professors.map((prof, index) => (
                <option key={index} value={prof}>{prof}</option>
              ))}
            </select>
          </div>
        )}

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
