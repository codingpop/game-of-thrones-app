var https = require("https");

function fetchCharacter(characterId) {
	https.get("https://anapioficeandfire.com/api/characters/" + characterId, function(response) {
	var info = "";

	response.on("data", function(chunk) {
		info += chunk;
	});

	response.on("end", function() {
		try {
			var data = JSON.parse(info);
			console.log("\nCharacter: " + data.name + "\n\n" + "Title: " + data.titles[0] + "\n\nPlayed By: " + data.playedBy[0] + "\n\n");
		}
		
		catch (errors) {
			console.log("\n\nOh snap! An accident happened.\n\n")
		}
	});
});
}

module.exports.fetchCharacter = fetchCharacter;