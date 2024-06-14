<!-- src/routes/+layout.svelte -->
<script>
    // Import the goto function from @sveltejs/kit
    import { goto } from '$app/navigation';
</script>

<header>
    <!-- Header content goes here -->
    <nav>
        <ul>
            <li><a href="/" on:click|preventDefault={() => goto('/')}>Home</a></li>
            <li><a href="/about" on:click|preventDefault={() => goto('/about')}>About</a></li>
            <li><a href="/task-manager" on:click|preventDefault={() => goto('/tasks')}>Task Manager</a></li>
            <li><a href="/tasksStore" on:click|preventDefault={() => goto('/tasksStore')}>Task Store</a></li>
            <li><a href="/register" on:click|preventDefault={() => goto('/register')}>Register</a></li>
        </ul>
    </nav>
</header>

<main>
    <!-- Main content area -->
    <slot></slot>
</main>

<footer>
    <!-- Footer content goes here -->
    <p>&copy; 2024 Your Company. All rights reserved.</p>
</footer>

<style>
    header {
        background-color: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1rem;
    }

    nav ul li {
        display: inline;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    nav ul li a:hover {
        background-color: #45a049;
    }

    main {
        padding: 2rem;
        background-color: #fff;
        margin: 2rem auto;
        max-width: 1200px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    footer {
        background-color: #333;
        color: white;
        padding: 1rem 2rem;
        text-align: center;
        position: relative;
        bottom: 0;
        width: 100%;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }

    footer p {
        margin: 0;
    }

    @media (max-width: 768px) {
        nav ul {
            flex-direction: column;
            align-items: center;
        }

        main {
            margin: 1rem;
            padding: 1rem;
        }
    }
</style>
