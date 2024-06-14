<!-- src/components/UserProfile.svelte -->
<script lang="ts">
    export let user: {
        id: number;
        name: string;
        email: string;
        avatarUrl: string;
    };
</script>

<div class="user-profile">
    <img src={user.avatarUrl} alt="{user.name}'s avatar" class="avatar" />
    <div class="user-details">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>
</div>

<style>
    .user-profile {
        display: flex;
        align-items: center;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 400px;
        margin: 1rem auto;
        background-color: #f9f9f9;
    }

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .user-details {
        display: flex;
        flex-direction: column;
    }

    .user-details h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    .user-details p {
        margin: 0;
        color: #666;
    }
</style>
