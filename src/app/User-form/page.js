'use client'
import { useState } from 'react';

export default function Userform(){
  const [name, setName] = useState('');
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <input type="text"
     value={name}
     onChange={e => setName(e.target.value)}
     placeholder="Type something..." />
  </div>
)
}