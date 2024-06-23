
const path = require('path');

const filePath = __filename;


const fileExtension = path.extname(filePath);

console.log(fileExtension);