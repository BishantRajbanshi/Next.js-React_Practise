'use client'
import { useState, useEffect } from 'react';

export default function Posts() {
  const [items, setItems] = useState([]);
  const [resource, setResource] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(data => setItems(data));
  }); 

  return (
    <div className="min-h-screen flex flex-col items-center p-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Data Viewer</h1>
      
      <div className="flex gap-4 mb-8">

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setResource('posts')}>Posts</button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setResource('users')}>Users</button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setResource('comments')}>Comments</button>

      </div>

      <ul className="w-full max-w-3xl grid gap-6">
        {items.map((item) => (
          <li key={item.id} className="bg-white shadow-md rounded-md p-6">
            {resource === 'posts' && (
              <>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.body}</p>
              </>
            )}
            {resource === 'users' && (
              <>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Email: {item.email}</p>
                <p>Username: {item.username}</p>
              </>
            )}
            {resource === 'comments' && (
              <>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p><strong>Email:</strong> {item.email}</p>
                <p>{item.body}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
