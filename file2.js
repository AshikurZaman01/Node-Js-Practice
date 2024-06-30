
const fs = require('fs');

const content = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.';

const writeFile = fs.writeFileSync(__dirname + "/text.txt", content);

console.log(writeFile);