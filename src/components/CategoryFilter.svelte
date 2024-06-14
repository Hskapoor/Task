<!-- src/components/CategoryFilter.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Category {
        id: string;
        name: string;
    }

    export let categories: Category[] = [];
    export const selectedCategory: string = '';

    const dispatch = createEventDispatcher();

    function handleCategoryChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const category = selectElement.value;
        dispatch('categoryChange', category);
    }
</script>

<label for="category-select">Filter by Category:</label>
<select id="category-select" on:change={handleCategoryChange}>
    <option value="">All</option>
    {#each categories as category}
        <option value={category.id}>{category.name}</option>
    {/each}
</select>
