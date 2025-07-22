'use client';
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      localStorage.serItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      Router.push('/dashboard');
    } else {
      console.error('Login failed:', data.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center font-mono mb-8 text-blue-700 tracking-tight">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="border border-blue-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border border-blue-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded w-full shadow transition duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}