levelTwo = function() {
	levelTwoStageOne();
}

levelTwoStageOne = function() {
	
	//Clears the HTML body and then creates elements for level one
	document.body.innerHTML="";
	//sets the body id for level one
	var body = document.body;
	body.id = "levelTwoStageOne";
	
	
	//score
	window.playersScore = playerScore();
	document.body.appendChild(playersScore);
	//Headings for level one
	var levelTwoStageOneHead = createHeading1("Select the correct spelling for this word", "levelTwoStageOneHead");
	document.body.appendChild(levelTwoStageOneHead);
	var levelTwoStageOneSubhead = createHeading2("Press the speaker below to hear the word", "levelTwoStageOneSubhead");
	document.body.appendChild(levelTwoStageOneSubhead);
	//Creates divs for selections
	for (var index = 0; index < selections.length; index++) {
		var selectionDiv = createDiv(selections[index] + "LevelTwo");
		document.body.appendChild(selectionDiv);
	}
	//Creating paragraphs for selections
	//First selection
	var selectionOne = createParagraph("selectionOne", dictionary.levelTwo.stageOne.wordOne);
	document.getElementById("firstLevelTwo").appendChild(selectionOne);
	//Second selection
	var selectionTwo = createParagraph("selectionTwo", dictionary.levelTwo.stageOne.wordTwo);
	document.getElementById("secondLevelTwo").appendChild(selectionTwo);
	//Third selection
	var selectionThree = createParagraph("selectionThree", dictionary.levelTwo.stageOne.wordThree);
	document.getElementById("thirdLevelTwo").appendChild(selectionThree);
	//Forth selection
	var selectionFour = createParagraph("selectionFour", dictionary.levelTwo.stageOne.wordFour);
	document.getElementById("forthLevelTwo").appendChild(selectionFour);
	
	//Speaker image
	var speakerDiv = createDiv("speakerDiv");
	var speaker = speakerImage(200, 200);
	speakerDiv.appendChild(image);
	document.body.appendChild(speakerDiv);
	//Clicking of the image plays the word
	document.getElementById("speakerDiv").onclick = function() {
		var levelTwoStageOneWord = new Audio(audio.levelTwo.stageOne);
		levelTwoStageOneWord.play();
	}
	
	incorrectSelection("levelTwoStageOne", "LevelTwo");
	
	correctSelection2();
	
	
}
//displays the game won screen and loads the next level
correctSelection2 = function() {
	document.getElementById("firstLevelTwo").onclick = function() {
		playerList.Player.score = playerList.Player.score + 2;
		document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
		var gameWon = gameWin();
		document.body.appendChild(gameWon);
		
		setTimeout(stageTwoLoad, 3000);
	}
	stageTwoLoad = function() {
		body.id = "";
		levelTwoStageTwo();
	}
	
}

levelTwoStageTwo = function() {
	document.body.innerHTML = "";
	//Setting body ID
	var stageTwoBody = document.body;
	stageTwoBody.id = "levelTwoStageTwo";
	//players score 
	window.playersScore = playerScore();
	document.body.appendChild(playersScore);
	//speaker image
	var speakerDiv2 = createDiv("speakerDivLevelTwoStageTwo");
	//speakerImage created
	var speakerImage2 = speakerImage(200, 200);
	//image appended to speakerDiv2
	speakerDiv2.appendChild(image);
	//speakerDiv2 appended to body
	document.body.appendChild(speakerDiv2);
	//Anonomous function to handle clicking the speaker
		var levelOneStage2Word = new Audio(audio.levelTwo.stageTwo);
	document.getElementById("speakerDivLevelTwoStageTwo").onclick = function() {
		levelOneStage2Word.play();
	}
	//creating main heading for stage two 
	var levelTwoStageTwoHead = createHeading1("Drag and drop the letters to spell the word", "levelTwoStageTwoHead");
	document.body.appendChild(levelTwoStageTwoHead);
	//creating subheading for stage two
	var levelTwoStageTwoSubhead = createHeading2("Press the speaker below to hear the word", "LevelTwoStageTwoSubhead");
	document.body.appendChild(levelTwoStageTwoSubhead); 
	
	//function to handle the drag start event
	onLetterDragStart = function(event) {
		console.log("drag started");
		currentDraggingObject = event.target;
		//resets the id to allow the error animation to occur if dropped in the wrong box
		stageTwoBody.id = "stageTwo";
	}
	//creating divs and paragraphs for letter options
	for (var index = 0; index < letters.length; index++) {
		var lettersDiv = createDiv("lettersDiv");
		var lettersPara = createParagraph("letters", levelTwoLetters[index]);
		lettersPara.myIndex = index;
		lettersDiv.appendChild(lettersPara);
		document.body.appendChild(lettersDiv);
		//making letters draggable
		lettersPara.draggable = "true";
		//Calls onLetterDragStart function when a letter is dragged 
		lettersPara.ondragstart = onLetterDragStart;
	}
	
	
	
	//Creating the div that holds the dropping div
	var droppingDiv = createDiv("droppingDivLevelTwo");
	//Counter to check how many correct matches have been made
	var counter = 0;
		//For loop to create the divs to drop into
	for (var i = 0; i  < 6; i++) {
		var dropDiv = createDiv("dropDiv");
		droppingDiv.appendChild(dropDiv);
		//Sets myIndex to i with each loop -- saves the value of i each time the loop runs
		dropDiv.myIndex = i;
		console.log(dropDiv.myIndex);
		document.body.appendChild(droppingDiv);
		dropDiv.ondragover = function(event) {
			//Allows a drop of the element (default is not to)
			event.preventDefault();
	}
	//ondrop event which runs each time a drop occurs on any box
	dropDiv.ondrop = function(event) {	
		//Checks if the object dropped is null
		if (currentDraggingObject == null) {
			return;
		}
		//Sets the event target to the variable name receivingElement
		var receivingElement = event.target;
		//Writes out current 
		console.log(currentDraggingObject.myIndex + " " + i);
		console.log(receivingElement.myIndex);
		//if/else statements for checking if the element dropped is a match to the expected element 
		//Checking if myIndex of the receivingElement is equal to 0 then checks if the dragging objects myIndex is 7 or not 
		//receivingElement.myIndex 0 is the first box of the word
		/* 
		r = 1
		i = 7
		b = 2 & 9
		b = 2 & 9
		o = 3
		n = 6
		*/
		if(receivingElement.myIndex == 0)
		{
			//checks if the letter being dragged is not equal to 1 (r)
			//If it is not equal to 1 it will run the error animation by setting the incorrectStageTwo id
			if(currentDraggingObject.myIndex != 1) {
				console.log("error");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			//if currentDraggingObject.myIndex is equal to 7 then the element will be appended to the dropping location
			else {
				console.log("appending in box 1");
				//appends dropped element
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				//increments the match counter 
				counter++;
				//writes the current value of counter
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				//Checks if counter is equal to four. If it is it will run the correctSpelling function 
				if(counter == 6) {
					correctSpelling();
				}
			}
		}
		//else if statement for second box for letter i (7)
		else if(receivingElement.myIndex == 1 )
		{
			if(currentDraggingObject.myIndex != 7) {
				console.log("error 2");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			else {
				console.log("appending in box 2");
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				counter++;
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				if(counter == 6) {
					correctSpelling();
				}
			}
		}
		//else if statement for third box for letter b ( 2 or 9)
		else if(receivingElement.myIndex == 2 )
		{
			if(currentDraggingObject.myIndex != 2 && currentDraggingObject.myIndex != 9) {
				console.log("error 3");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			else {
				console.log("appending in box 3");
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				counter++;
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				if(counter == 6) {
					correctSpelling();
				}
			}
		}
		//else if statment for fourth box for letter b (2 or 9)
		else if(receivingElement.myIndex == 3 )
		{
			if(currentDraggingObject.myIndex != 2 && currentDraggingObject.myIndex != 9) {
				console.log("error 4");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			else {
				console.log("appending in box 4");
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				counter++;
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				if(counter == 6) {
					correctSpelling();
				}
			
			}
		}
		//else if statment for fith box for letter o (3)
		else if(receivingElement.myIndex == 4 )
		{
			if(currentDraggingObject.myIndex != 3) {
				console.log("error 5");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			else {
				console.log("appending in box 5");
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				counter++;
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				if(counter == 6) {
					correctSpelling();
				}
			
			}
		}
		//else if statment for sixth box for letter n (6)
		else if(receivingElement.myIndex == 5 )
		{
			if(currentDraggingObject.myIndex != 6) {
				console.log("error 6");
				stageTwoBody.id = "incorrectStageTwo";
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
			}
			else {
				console.log("appending in box 6");
				receivingElement.appendChild(currentDraggingObject);
				receivingElement.id = "match";
				counter++;
				console.log("counter: " + counter);
				//updates score -- increses by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				if(counter == 6) {
					correctSpelling();
				}
			
			}
		}
		
		
		console.log("Checking for match");
		
		
		
		console.log(currentDraggingObject);
		console.log("dropping letter");
		event.preventDefault();
		}
	
	
	
	//end of for loop
	}
	//Brings up correct overlay to the screen
	correctSpelling = function() {
		var gameComplete = gameWin();
		document.body.appendChild(gameComplete);
		//Loads stage three
		setTimeout(levelTwoStageThreeLoad, 3000);
	}
	levelTwoStageThreeLoad = function() {
		document.body.innerHTML = "";
		levelTwoStageThree();
	}
}

levelTwoStageThree = function() {
	var body = document.body;
	body.id = "stageThree";
	//Player's score
	window.playersScore = playerScore();
	document.body.appendChild(playersScore);
	//heading and subheading for stage three
	var stageThreeHead = createHeading1("Type the correct spelling for this word", "levelTwoStageThreeHead");
	document.body.appendChild(stageThreeHead);
	var stageThreeSubhead = createHeading2("Press the speaker below to hear the word", "levelTwoStageThreeSubhead");
	document.body.appendChild(stageThreeSubhead);
	
	var inputDiv = createDiv("stageThreeAnswer");
	//Creates the input element
	
	window.input = createInput();
	input.id = "inputStageThree"
	input.placeholder = "Answer Here!";
	
	inputDiv.appendChild(input);
	document.body.appendChild(inputDiv);
	
	//Allowing enter key to be used to submit input
	input.addEventListener("keyup", function(event) {
		if(event.keyCode == 13) {
			
			var stageThreeAnswer = document.getElementById("inputStageThree").value;
			console.log(stageThreeAnswer);
			//if the answer is correct then display game win
			if(stageThreeAnswer == dictionary.levelTwo.stageThree.word) {
				document.getElementById("inputStageThree").disabled = true;
				var gameWon = gameWin();
				document.body.appendChild(gameWon);
				//updates score -- increases by two
				playerList.Player.score = playerList.Player.score + 2;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				//Loads mainMenu
				setTimeout(mainMenu, 3000);
			}
			else {
				//updates score -- decreases by one 
				playerList.Player.score = playerList.Player.score - 1;
				document.getElementById("score").innerHTML = playerList.Player.name + "'s Score: " + playerList.Player.score;
				body.id = "incorrectStageThree";
			}
		}
		else {
			body.id = "stageThree";
			
		}
	});
	
	
	
	
	var speakerDiv3 = createDiv("speakerDivLevelTwoStageThree");
	var speakerImage3 = speakerImage(200, 200);
	speakerDiv3.appendChild(image);
	document.body.appendChild(speakerDiv3);
	//plays audio when the speaker image is clicked
	document.getElementById("speakerDivLevelTwoStageThree").onclick = function() {
		var levelOneStageThreeWord = new Audio(audio.levelTwo.stageThree);
		levelOneStageThreeWord.play();
	}
}
