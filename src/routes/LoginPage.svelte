<!-- src/routes/LoginPage.svelte -->
<script>
    import { writable } from 'svelte/store';
    import { login, errorMessage } from '../stores/userStore'; // Update the import path
    import { navigate } from 'svelte-routing';
    import { get } from 'svelte/store';

    const username = writable('');
    const password = writable('');

    // Function to handle form submission
    async function handleSubmit() {
        const enteredUsername = get(username);
        const enteredPassword = get(password);

        await login({ username: enteredUsername, password: enteredPassword });

        if (get(errorMessage) === '') {
            // Redirect to tasks page upon successful login
            console.log('User authenticated, redirecting to tasks...');
            navigate('/tasks');
        }
    }
</script>

<div>
    <h2>Login</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" bind:value={$username} required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={$password} required />
        </div>
        <button type="submit">Login</button>
    </form>

    {#if $errorMessage}
        <p>{$errorMessage}</p>
    {/if}

    <p>Don't have an account? <a href="/register" on:click|preventDefault={() => navigate('/register')}>Register here</a></p>
</div>
