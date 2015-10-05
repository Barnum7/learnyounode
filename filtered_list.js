var fs = require('fs');

var dir = process.argv[2];
var fileExtension = process.argv[3];
var match = RegExp('\\.' + fileExtension + '$');

file = fs.readdir(dir, function(err, files){
	for (i = 0; i < files.length; i++) {
		if(match.test(files[i])) {
	console.log(files[i]);
		}
	}
})