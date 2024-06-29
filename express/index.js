

const express = require('express');
const app = express();
const handler = require('./handle');

const port = 3000;

app.get('/', handler)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})