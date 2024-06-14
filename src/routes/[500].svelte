<script>
    import { goto } from '$app/navigation';

    // Redirect to the homepage after 3 seconds
    setTimeout(() => {
        goto('/');
    }, 3000);
</script>

<h1>404 - Page Not Found</h1>
<p>The page you are looking for does not exist. Redirecting to the homepage...</p>
