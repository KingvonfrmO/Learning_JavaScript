const fs = require('fs');

const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

const content1 = fs.readFileSync(sourceFile1, 'utf8');
const content2 = fs.readFileSync(sourceFile2, 'utf8');

fs.writeFileSync(destinationFile, content1 + content2);