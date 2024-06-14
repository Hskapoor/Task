import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<{ username: string, password: string }[]>} */
export const users = writable([
    { username: 'abc', password: 'a' },
    { username: 'abcv', password: 'ac' }
]);



