
const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Mike' },
]


app.use(express.json());

app.route('/users/:userID')
    .get((req, res) => {

        const userID = parseInt(req.params.userID);
        const user = users.find(user => user.id === userID);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }
    })
    .put((req, res) => {
        const userId = parseInt(req.params.userId);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users[userIndex] = { id: userId, ...req.body };
            res.send(users[userIndex]);
        } else {
            res.status(404).send({ error: 'User Not Found' });
        }
    })
    .delete((req, res) => {
        const userId = parseInt(req.params.userId);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users = users.filter(u => u.id !== userId);
            res.send({ message: 'User Deleted' });
        } else {
            res.status(404).send({ error: 'User Not Found' });
        }
    });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})