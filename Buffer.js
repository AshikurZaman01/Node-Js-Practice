
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const myRedStream = fs.createReadStream(`${__dirname}/text.txt`, 'utf-8')

    myRedStream.pipe(res);
})

server.listen(3000);

console.log('Server running at http://localhost:3000/');