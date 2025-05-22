import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error || !data) {
      setError('Invalid username or password');
    } else {
      localStorage.setItem('userRole', data.role);
      localStorage.setItem('userId', data.id);

      if (data.role === 'student') {
        navigate('/student-dashboard');
      } else {
        navigate('/teacher-dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
  
        {error && <p className="text-red-500 text-sm">{error}</p>}
  
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
  
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
  
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Log In
        </button>
  
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </form>
    </div>
  );
  
}

export default Login;
