

const fs = require('fs');

const readableStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('New chunk received:');

    const writeStream = fs.createWriteStream(__dirname + '/wtiteTxt.txt', 'utf-8');

    if (writeStream) {
        writeStream.write(chunk);
    } else {
        throw new Error('Could not open the file for writing');
    }

})