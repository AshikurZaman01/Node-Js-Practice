
const fs = require('fs');

const writeFile = fs.writeFileSync(__dirname + "/text.txt", "Hello World Bangladesh");

console.log(writeFile);