import { goto } from '$app/navigation';
import { writable, get } from 'svelte/store';
// @ts-check
/**
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 */

/**
 * @typedef {Object} InitialUser
 * @property {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @property {User | null} userData - The user data if authenticated, otherwise null.
 */

/** @type {InitialUser} */
const initialUser = {
    isAuthenticated: false,
    userData: null
};

/** @type {import('svelte/store').Writable<InitialUser>} */
export const user = writable(initialUser);

/** @type {import('svelte/store').Writable<string>} */
export const errorMessage = writable('');


/** @type {import('svelte/store').Writable<{ username: string, password: string }[]>} */
export const users = writable([
    { username: 'abc', password: 'a' }
]);

export const login = async (/** @type {{ username: any; password: any; }} */ credentials) => {
    const usersList = get(users);
    const validUser = usersList.find(user => user.username === credentials.username && user.password === credentials.password);
    if (validUser) {
        user.set({
            isAuthenticated: true,
            userData: validUser
        });
        
        console.log(usersList);
        errorMessage.set('');
    } else {
        user.set({
            isAuthenticated: false,
            userData: null
        });
        errorMessage.set('Invalid username or password');
    }
};


// @ts-ignore
export const register = async ({ username, password }) => {
    const usersList = get(users);
    const userExists = usersList.find(u => u.username === username);
    if (userExists) {
        errorMessage.set('Username is already taken.');
        return false;
    } else {
        // Add the new user to the store
        users.update(currentUsers => [...currentUsers, { username, password }]);
        console.log(usersList);
        return true;
    }
};
export const logout = () => {
    goto("/");
};
