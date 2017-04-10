'use strict'

const fetchCharacter = require('./gameOfThrones.js');

const processData = process.argv.slice(2);

const args = [];

processData.forEach(function(value) {
	args.push(value);
});

fetchCharacter.fetchCharacter(args[0]);