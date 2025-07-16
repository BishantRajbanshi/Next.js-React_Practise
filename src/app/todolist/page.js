'use client'
import { useState, useEffect, use } from 'react';

export default function ToDoList(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/api/tasks');
    const data = await response.json();
    setTasks(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchTasks();
  }, []);
}