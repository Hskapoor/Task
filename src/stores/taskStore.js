// src/stores/taskStore.js
import { writable } from 'svelte/store';


export const tasks = writable([]);

export const fetchTasks = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    tasks.set(data);
};

export const addTask = (/** @type {{ id: number; title?: string; description?: string; dueDate?: string; status?: string; category?: string; }} */ task) => {
    // @ts-ignore
    tasks.update(currentTasks => {
        task.id = currentTasks.length + 1;
        return [...currentTasks, task];
    });
};

export const updateTask = (/** @type {{ id: number; }} */ updatedTask) => {
    // @ts-ignore
    tasks.update(currentTasks => {
        // @ts-ignore
        return currentTasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    });
};

export const deleteTask = (/** @type {number} */ taskId) => {
    tasks.update(currentTasks => {
        // @ts-ignore
        return currentTasks.filter(task => task.id !== taskId);
    });
};


