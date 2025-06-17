'use client'
import { useState } from 'react';

export default function ThemeTogglePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      {/* Toggle Card */}
      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full text-center transition-all'>
          <h2 className='text-xl font-bold mb-2 text-white'>Theme Toggle Card</h2>
          <p className='mb-4 text-white'>
            Current mode:{' '}
            <span className='font-medium'>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </p>
          <button
            className='bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded font-semibold hover:opacity-90 transition-all'
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
            Click the button to toggle themes
          </p>
        </div>
      </div>
    </div>
    )
  }    