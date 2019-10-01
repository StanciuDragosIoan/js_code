/*
    Advanced reduce use
*/

//will turn the data in a .txt file to an object literal

const fs = require('fs');

let output = fs.readFileSync('test.txt', 'utf8');

console.log('output', output)