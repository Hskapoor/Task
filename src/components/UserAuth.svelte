<!-- src/components/UserAuth.svelte -->
<script>
    import { writable } from 'svelte/store';
    import { login } from '../stores/userStore';
    import { goto } from '$app/navigation';
    import { users } from '../stores/userStore';

    const username = writable('');
    const password = writable('');
    const errorMessage = writable('');

    function handleSubmit() {
        const enteredUsername = $username;
        const enteredPassword = $password;

        const usersList = $users;

        // Check if there's a user with matching credentials
        const validUser = usersList.find(user => user.username === enteredUsername && user.password === enteredPassword);

        if (validUser) {
            // Call the login function with username and password
            login({ username: enteredUsername, password: enteredPassword });

            // Redirect to the tasks page after successful login
            goto('/tasks');

            // Clear error message on successful login
            errorMessage.set('');
        } else {
            errorMessage.set('Invalid username or password');
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
</div>
