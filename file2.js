
const fs = require('fs');

const filePath = __dirname + '/text.txt';

const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(data);
    }
})