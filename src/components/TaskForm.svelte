<!-- src/components/TaskForm.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  export let task = { id: null, title: '', description: '', dueDate: '', status: 'Pending', category: '' };
  const dispatch = createEventDispatcher();

  let isEditing = task.id !== null;

  function handleSubmit() {
      dispatch('submitTask', { ...task });
      task = { id: null, title: '', description: '', dueDate: '', status: 'Pending', category: '' };
      isEditing = false;
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={task.title} placeholder="Title" required />
  <textarea bind:value={task.description} placeholder="Description"></textarea>
  <input type="date" bind:value={task.dueDate} required />
  <select bind:value={task.status}>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
  </select>
  <input type="text" bind:value={task.category} placeholder="Category" required />
  <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
</form>
