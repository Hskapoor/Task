import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';

import { writable, get } from 'svelte/store';
//import {users} from '../src/stores/userStore';
const { json } = bodyParser;

const app = express();
app.use(json());
app.use(cors({
    origin: 'http://localhost:5174', // Adjust this to your Svelte app's origin
    credentials: true
}));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));

//const users = [{ username: 'user', password: 'pass' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const usersList = get(users);
    const user2 = usersList.find(u => u.username === username && u.password===password);
  //  const user = users.find(u => u.username === username && u.password === password);
    if (user2) {
        req.session.user = user2;
        res.send({ success: true });
    } else {
        res.send({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const usersList = get(users);
    if (usersList.find(u => u.username === username)) {
        res.send({ success: false, message: 'Username is already taken.' });
    } 
    else {
        usersList.push({ username, password });
        res.send({ success: true });
    }
});

app.get('/protected', (req, res) => {
    if (req.session.user) {
        res.send('This is a protected route');
    } else {
        res.sendStatus(401);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
