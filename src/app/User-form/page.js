'use client'
import { useState } from 'react';

export default function Userform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">User Form</h1>
        
        <div className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input 
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Type your name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {name && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800 font-medium text-center">
              Hello, {name}!
            </p>
          </div>
        )}

      <div className="spcae-y-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
        id="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Type your email..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
       />
      </div>

      {email && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-800 font-medium text-center">
            Your email is: {email}
          </p>
        </div> 
      )}

      <div className="space-y-4">
        <label htmlFor="Number" className='block text-sm font-medium text-gray-700'>Your Number</label>
        <input
        id="Number"
        type="Number"
        value={Number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Type your Number..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        </div>

        {Number && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800 font-medium text-center">
              Your Number is: {Number}
            </p>
          </div>
        )}


      </div>
    </div>
  )
}