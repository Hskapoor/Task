<!-- src/routes/tasks/[id]/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';

    // Sample tasks data
    let tasks = [
        { id: 1, title: 'Task 1', description: 'Description of Task 1', dueDate: '2024-06-10', status: 'Pending', category: '1' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2', dueDate: '2024-06-15', status: 'Completed', category: '2' }
    ];

    let task;

    // Reactive statement to update task based on route parameter changes
    $: {
        const { params } = $page;
        const taskId = +params.id; // Convert to number
        task = tasks.find(task => task.id === taskId);
    }
</script>

{#if task}
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <p>Category: {task.category}</p>
    </div>
{:else}
    <p>Task not found.</p>
{/if}
