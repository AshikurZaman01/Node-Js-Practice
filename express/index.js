

const express = require('express');
const { property } = require('lodash');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();
adminRoute.get('/', (req, res) => {
    console.log(req.path);
    res.send('admin route');
})

app.use('/admin', adminRoute);


app.get('/users/:id', (req, res) => {
    console.log(req.cookies);
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})