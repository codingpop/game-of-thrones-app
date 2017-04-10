'use strict'

const https = require('https');

const fetchCharacter = function (characterId) {
	https.get('https://anapioficeandfire.com/api/characters/' + characterId, function(response) {
	let info = "";

	response.on('data', function(chunk) {
		info += chunk;
	});

	response.on('end', function() {
		try {
			const data = JSON.parse(info);
			console.log('\n\nCharacter: ' + data.name + '\n\n' + 'Title: ' + data.titles[0] + '\n\nPlayed By: ' + data.playedBy[0] + '\n');
		}
		
		catch (errors) {
			console.log('\n\nOh snap! An accident happened.\n\n');
		}
	});
});
}

module.exports.fetchCharacter = fetchCharacter;