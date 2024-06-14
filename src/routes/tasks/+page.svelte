<script lang="ts">
    import TaskCard from '../../components/TaskCard.svelte';
    import TaskForm from '../../components/TaskForm.svelte';
    import CategoryFilter from '../../components/CategoryFilter.svelte';
    import UserProfile from '../../components/UserProfile.svelte';
    import { logout } from '../../stores/userStore';
    import { tasks, addTask, deleteTask } from '../../stores/taskStore';
    import { get } from 'svelte/store';

    interface Task {
        id: number;
        title: string;
        description: string;
        dueDate: string;
        status: string;
        category: string;
    }

    interface Category {
        id: string;
        name: string;
    }

    interface User {
        id: number;
        name: string;
        email: string;
        avatarUrl: string;
    }

    let categories: Category[] = [
        { id: '1', name: 'Work' },
        { id: '2', name: 'Personal' }
    ];
    
    let user: User = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: 'https://via.placeholder.com/150'
    };

    let selectedCategory: string = '';
    let selectedStatus: string = '';
    let sortOption: string = 'dueDateAsc'; // Default sort option

    function handleDeleteTask(event: CustomEvent<number>) {
        const taskId = event.detail;
        deleteTask(taskId);
    }

    function handleTaskSubmission(event: CustomEvent<Task>) {
        const newTask = event.detail;
        addTask(newTask);
    }

    function handleCategoryChange(event: CustomEvent<string>) {
        selectedCategory = event.detail;
    }

    function handleStatusChange(event: Event) {
        selectedStatus = (event.target as HTMLSelectElement).value;
    }

    function handleSortChange(event: Event) {
        sortOption = (event.target as HTMLSelectElement).value;
    }

    // Subscribe to the tasks store
    let tasksList: Task[] = get(tasks);
    tasks.subscribe(value => {
        tasksList = value;
    });

    // Filter and sort tasks based on selected category, status, and sort option
    $: filteredTasks = tasksList
        .filter(task => 
            (selectedCategory === '' || task.category === selectedCategory) &&
            (selectedStatus === '' || task.status === selectedStatus)
        )
        .sort((a, b) => {
            if (sortOption === 'dueDateAsc') {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            } else if (sortOption === 'dueDateDesc') {
                return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            } else {
                return 0;
            }
        });
</script>

<h1>Task Manager</h1>

<button on:click={logout}>Logout</button>

<UserProfile {user} />

<TaskForm on:submitTask={handleTaskSubmission} />

<CategoryFilter {categories} {selectedCategory} on:categoryChange={handleCategoryChange} />

<div>
    <label for="status">Filter by Status:</label>
    <select id="status" on:change={handleStatusChange}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
    </select>
</div>

<div>
    <label for="sort">Sort by:</label>
    <select id="sort" on:change={handleSortChange}>
        <option value="dueDateAsc">Due Date (Ascending)</option>
        <option value="dueDateDesc">Due Date (Descending)</option>
    </select>
</div>

{#each filteredTasks as task (task.id)}
    <TaskCard {task} on:deleteTask={handleDeleteTask} />
{/each}
