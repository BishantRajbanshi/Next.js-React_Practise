'use client'
import { useState } from "react";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const createTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: task,
        done: false
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 mt-10">Task Tracker</h1>

      <input
        className="border border-gray-300 rounded-md p-2 mb-4"
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
        onClick={createTask}
      >
        Add Task
      </button>

      <ul className="w-full max-w-3xl grid gap-4">
        {tasks.map((taskItem) => (
          <li key={taskItem.id} className="bg-white shadow-md rounded-md p-4 flex justify-between items-center">
            <span className={taskItem.done ? "line-through text-gray-500" : ""}>
              {taskItem.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
