
const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
]


app.param('userName', (req, res, next, userName) => {

    const user = users.find(user => user.name.toLowerCase() === userName.toLowerCase());

    if (user) {
        req.user = user;
        next();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})

app.get('/users/:userName', (req, res) => {
    res.json(req.user);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})