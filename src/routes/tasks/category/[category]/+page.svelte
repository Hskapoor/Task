<!-- src/routes/tasks/category/[category]/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import type { Page } from '@sveltejs/kit';
    import TaskCard from '../../../../components/TaskCard.svelte';

    interface Task {
        id: number;
        title: string;
        description: string;
        dueDate: string;
        status: string;
        category: string;
    }

    // Sample tasks data
    let tasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description of Task 1', dueDate: '2024-06-10', status: 'Pending', category: '1' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2', dueDate: '2024-06-15', status: 'Completed', category: '2' }
    ];

    let categoryTasks: Task[] = [];
    let category: string;

    $: {
        const { params } = $page;
        category = params.category;
        categoryTasks = tasks.filter(task => task.category === category);
    }
</script>

<h1>Tasks in Category: {category}</h1>

{#each categoryTasks as task (task.id)}
    <TaskCard {task} />
{/each}
