
const express = require('express');
const app = express();

const port = 3000;


const users = {
    1: { name: "Alice", age: 40, address: 'khulna' },
    2: { name: "Bob", age: 20, address: 'Dhaka' },
    3: { name: "Charlie", age: 30, address: "Rajshahi" },
    4: { name: "David", age: 25, address: 'barishal' },
    5: { name: "Eve", age: 35, address: 'chittagong' },
}

app.param('userId', (req, res, next, userId) => {

    const user = users[userId];

    if (user) {
        console.log(`Found user: ${user.name}`);
        req.user = user;
        next();
    } else {
        res.status(404).send(`User with ID ${userId} not found.`);
    }
})

app.get('/users/:userId', (req, res) => {
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})