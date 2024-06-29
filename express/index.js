
const express = require('express');
const app = express();
const admin = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/admin', admin);

admin.get('/', (req, res) => {
    res.send('Hello Admin!');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})