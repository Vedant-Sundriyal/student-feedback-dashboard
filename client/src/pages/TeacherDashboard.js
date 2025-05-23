import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TeacherDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Protect route based on userRole
  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5001/feedback');
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/feedback/${id}`);
      setFeedbackList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Student Feedback</h1>

      {loading ? (
        <p>Loading...</p>
      ) : feedbackList.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <div className="space-y-4">
          {feedbackList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow relative"
            >
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ❌
              </button>
              <p className="text-sm text-gray-500">
                {new Date(item.created_at).toLocaleString()}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                College: {item.college}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Professor: {item.professor}
              </p>
              <p className="mt-2 text-gray-900">{item.message}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default TeacherDashboard;
