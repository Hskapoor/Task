<script>
// @ts-nocheck

    import { taskStore } from '../stores/taskStore';
    import TaskForm from '../components/TaskForm.svelte';
    import TaskCard from '../components/TaskCard.svelte';
    import CategoryFilter from '../components/CategoryFilter.svelte';

    let category = '';

    $: filteredTasks = $taskStore.filter(task => category === '' || task.category === category);
</script>

<h1>Task Manager</h1>

<TaskForm />
<CategoryFilter bind:category />

<ul>
    {#each filteredTasks as task}
        <TaskCard {task} />
    {/each}
</ul>
