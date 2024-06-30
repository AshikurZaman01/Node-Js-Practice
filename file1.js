

const fs = require('fs');

const readableStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('New chunk received:');

    const writeStream = fs.createWriteStream(__dirname + '/wtiteTxt.txt', 'utf-8');

    writeStream.write(chunk, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file successfully.');
        }
    })

})