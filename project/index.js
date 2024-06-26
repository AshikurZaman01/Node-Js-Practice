
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        res.write('<html><head><title>Form Data</title></head>')
        res.write('<body><form action="/about" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        res.end();

    } else if (req.url === '/about' && req.method === 'POST' ) {
        req.on('data', (chunk) => {
            console.log(chunk)
            res.write(chunk);
            res.write('About Page');
            res.end();
        })

    } else {
        res.write('Page Not Found');
        res.end();
    }

})
server.listen(3000);

console.log('Listening to port 3000');