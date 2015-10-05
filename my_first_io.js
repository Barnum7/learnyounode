var fs = require('fs');

var filePath = process.argv[2];

file = fs.readFileSync(filePath);

solution = file.toString();

console.log(solution.split('\n').length - 1);