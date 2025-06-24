'use client'
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <h1 className='text-4xl font-bold mb-2'>React State Demo</h1>
      <p className='text-gray-600 mb-6'>Learn how useState works in React</p>

      <div className='bg-white shadow-md rounded-md p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-4'>Counter Component</h2>
        <p className='text-2xl font-bold text-blue-600 mb-4'>Count: {count}</p>
        <div className='flex justify-between space-x-4'>
          <button
            className='bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded'
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className='bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded'
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    
  );
}
