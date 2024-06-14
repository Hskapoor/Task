<!-- src/routes/tasks/all/+page.svelte -->
<script lang="ts">
    import TaskCard from '../../../components/TaskCard.svelte';

    interface Task {
        id: number;
        title: string;
        description: string;
        dueDate: string;
        status: string;
        category: string;
    }

    let tasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description of Task 1', dueDate: '2024-06-10', status: 'Pending', category: '1' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2', dueDate: '2024-06-15', status: 'Completed', category: '2' }
    ];
</script>

<h1>All Tasks</h1>

{#each tasks as task (task.id)}
    <TaskCard {task} />
{/each}
