
const fs = require('fs');


fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {
    if (err) {
        throw new Error('Error reading file');
    }

    fs.writeFile(__dirname + '/wtiteTxt.txt', data, (err) => {
        if (err) {
            throw new Error("Error lag");
        }
    })
})

