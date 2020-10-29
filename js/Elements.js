speakerImage = function(width, height) {
	var speakerImage = createImage("speakerImage");
	image.src = "images/loudspeaker.png";
	image.id = "speaker";
	image.width = width;
	image.height = height;
	return speakerImage;
}
invisibleButton = function(buttonDivName, buttonName) { 
	var buttonDivName = createDiv(buttonDivName);
	var buttonName = createButton("invisibleButton", "submit");
	buttonDivName.appendChild(buttonName);
	return buttonDivName;
}

gameWin = function() {
	var correctDiv = createDiv("correctSelection");
	var correctSelectionPara = createParagraph("correctSelectionPara", "Correct" );
	correctDiv.appendChild(correctSelectionPara);
	return correctDiv;
}
playerScore = function() {
	var scoreDiv = createDiv("scorediv");
	var score = createParagraph("score", playerList.Player.name + "'s Score: " + playerList.Player.score);
	scoreDiv.appendChild(score);
	return scoreDiv;
}


//Function for incorrect selection in stage one
incorrectSelection = function(resetBodyID, level) {
	for (var index = 1; index < selections.length; index++) {
		document.getElementById(selections[index] + level).onclick = function() {
			console.log("INCORRECT!!");
			var body = document.body;
			body.id = "incorrect";
			playerList.Player.score = playerList.Player.score - 1;
			console.log(playerList.Player.score);
			document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			
			
			
		}
		document.getElementById(selections[index] + level).onmouseleave = function() {
			
			body.id = resetBodyID;
			
		} 
		
	}
	
}

//Function for correct selection in stage one
