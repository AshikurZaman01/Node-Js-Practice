

const http = require('http');
const fs = require('fs');

const ourReadStream = fs.createReadStream(__dirname + '/bigData.txt', 'utf8');
const ourWriteStream = fs.createWriteStream(__dirname + '/bigDataCopy.txt');



ourReadStream.pipe(ourWriteStream)