var fs = require('fs');

var filePath = process.argv[2];

file = fs.readFile(filePath, function(err,data) {
	console.log(data.toString().split('\n').length-1);
});