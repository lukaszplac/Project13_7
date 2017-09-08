var fs = require('fs');
var colors = require('colors');
fs.readdir('C:\\Windows', function(err, data) {
	fs.writeFile('folderStructure.txt', data, function(err) {
		if (err) throw err;
		console.log("Folder structure saved".red);
	})
} )
