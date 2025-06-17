'use client'
import {useState} from 'react';
import Button from '../components/button';

export  default function Vote() {
  const [count, setCount] = useState(0);
  return(
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-3xl font-bold'>
        Count: {count}
      </p>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}  >Increase</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count - 1)}  >Decrease</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count == 0)}  >Reset</button>
    </div>
  )}