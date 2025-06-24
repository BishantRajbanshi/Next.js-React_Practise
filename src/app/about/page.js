'use client';
import {useState , useEffect} from 'react';

export default function About(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  },[count]);

  return(
    <div className='flex justify-center items-center h-screen font-mono text-2xl text-gray-500 font-bold'>
      <button  onClick={()=>setCount(count+1)}>
        Click me
      </button>
    </div>
  )
}