<!-- src/components/TaskCard.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  /**
	 * @type {{ id: any; title: any; description: any; dueDate: any; status: any; category: any; }}
	 */
   export let task;
  const dispatch = createEventDispatcher();

  function handleDelete() {
      dispatch('deleteTask', task.id);
  }

  function handleEdit() {
      dispatch('editTask', task.id);
  }
</script>

<div class="task-card">
  <h2>{task.title}</h2>
  <p>{task.description}</p>
  <p>Due Date: {task.dueDate}</p>
  <p>Status: {task.status}</p>
  <p>Category: {task.category}</p>
  <p>ID: {task.id}</p>
  
  <button on:click={handleDelete}>Delete</button>
  <button on:click={handleEdit}>Edit</button>
</div>
