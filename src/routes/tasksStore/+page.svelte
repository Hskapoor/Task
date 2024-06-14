<!-- src/routes/+page.svelte -->
<script>
    import TaskCard from '../../components/TaskCard.svelte';
    import TaskForm from '../../components/TaskForm.svelte';
    import { tasks, addTask, deleteTask, updateTask } from '../../stores/taskStore';
    import { get } from 'svelte/store';

    import UserAuth from '../../components/UserAuth.svelte';

    let allTasks = $tasks;
    let editingTask = { id: null, title: '', description: '', dueDate: '', status: 'Pending', category: '' };

    /**
	 * @param {{ detail: any; }} event
	 */
    function handleDeleteTask(event) {
        const taskId = event.detail;
        deleteTask(taskId);
        allTasks = $tasks;
    }

    /**
	 * @param {{ detail: any; }} event
	 */
    function handleTaskSubmission(event) {
        const newTask = event.detail;
        if (newTask.id) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }
        allTasks = $tasks;
        editingTask = { id: null, title: '', description: '', dueDate: '', status: 'Pending', category: '' };
    }

    /**
	 * @param {{ detail: any; }} event
	 */
    function handleEditTask(event) {
        const taskId = event.detail;
        // @ts-ignore
        editingTask = allTasks.find(task => task.id === taskId);
    }
</script>

<h1>TASK MANAGER ADDITION & EDITING USING STORES </h1>
<TaskForm bind:task={editingTask} on:submitTask={handleTaskSubmission} />


{#each allTasks as task (task.id)}
    <TaskCard {task} on:deleteTask={handleDeleteTask} on:editTask={handleEditTask} />
{/each}
