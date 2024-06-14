<!-- src/routes/register.svelte -->
<script>
    import { writable, get } from 'svelte/store';
    import { register, errorMessage, user } from '../../stores/userStore'; // Update the import path
    import { goto } from '$app/navigation';

    const username = writable('');
    const password = writable('');
    const confirmPassword = writable('');

    async function handleSubmit() {
        const enteredUsername = get(username);
        const enteredPassword = get(password);
        const enteredConfirmPassword = get(confirmPassword);

        if (enteredPassword !== enteredConfirmPassword) {
            errorMessage.set('Passwords do not match');
            return;
        }

        const registrationSuccess = await register({ username: enteredUsername, password: enteredPassword }); // Using email as password

        if (registrationSuccess) {
            console.log('User registered successfully, redirecting to login page...');
            
            console.log(user);
            goto('/');
        } else {
            console.log('Registration failed');
            errorMessage.set('Registration failed. Username may already be taken.');
        }
    }
</script>

<div>
    <h2>Register</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" bind:value={$username} required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={$password} required />
        </div>
        <div>
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" bind:value={$confirmPassword} required />
        </div>
        <button type="submit">Register</button>
    </form>

    {#if $errorMessage}
        <p>{$errorMessage}</p>
    {/if}
</div>
