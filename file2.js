
const fs = require('fs');

const filePath = __dirname + '/text.txt';


const content = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.   ';

const writeFile = fs.writeFile(filePath, content, (err, data) => {

    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
})