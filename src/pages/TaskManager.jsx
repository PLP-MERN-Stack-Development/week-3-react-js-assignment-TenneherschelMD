// src/pages/TaskManager.jsx
import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function TaskManager() {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const { darkMode, toggleTheme } = useTheme();

    const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
    };

    const toggleTask = (id) => {
    setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
    };

    const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
    });

    return (
    <Layout>
        <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <Button onClick={toggleTheme} variant="secondary">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
        </div>

        <div className="flex space-x-2">
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="flex-grow px-3 py-2 border rounded"
            />
            <Button onClick={addTask}>Add</Button>
        </div>

        <div className="space-x-2">
            <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
            <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
            <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
        </div>

        <ul className="space-y-2">
            {filteredTasks.map(task => (
            <li key={task.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
                <div className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</div>
                <div className="space-x-2">
                <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </Layout>
    );
}   