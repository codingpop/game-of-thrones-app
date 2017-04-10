var fetchCharacter = require('./gameOfThrones.js');

var processData = process.argv.slice(2);

var args = [];

processData.forEach(function(value) {
	args.push(value);
});



fetchCharacter.fetchCharacter(args[0]);
