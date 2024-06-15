<script>
	import { goto } from "$app/navigation";
	import UserAuth from "../components/UserAuth.svelte";
	import { logout } from "../stores/userStore";

</script>
<h4>Not Yet Registered ! Register Here</h4>
<li><a href="/register" on:click|preventDefault={() => goto('/register')}>Register</a></li>
<UserAuth></UserAuth>
