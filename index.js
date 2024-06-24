
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('This Is Home section');
        res.end();
    } else if (req.url === '/about') {
        res.write('This Is About section');
        res.end();
    } else {
        res.write('404 Not Found');
        res.end();
    }


})

server.listen(3000)

console.log('Server running at http://localhost:3000/');