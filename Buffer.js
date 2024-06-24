
const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/text.txt`, 'utf-8');
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, 'utf-8');


ourReadStream.pipe(ourWriteStream);