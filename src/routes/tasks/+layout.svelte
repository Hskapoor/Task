<!-- src/routes/tasks/+layout.svelte -->
<script>
    // This script will be used to set up any shared logic or data for the tasks routes
</script>

<nav>
    <ul>
        <li><a href="/tasks/all">All Tasks</a></li>
        <li><a href="/tasks/category/1">Tasks 1</a></li>
        <li><a href="/tasks/category/2">Tasks 2</a></li>
        <li><a href="/tasks/1">ID 1 Details</a></li>
        <li><a href="/tasks/2">ID 2 Details</a></li>
    </ul>
</nav>

<slot></slot>

<style>
    nav {
        background-color: #333;
        padding: 1rem;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    li {
        margin: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
