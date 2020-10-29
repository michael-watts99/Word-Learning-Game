//Function to create the welcome screen and draw the main sections
welcome = function() {
	nameEntry();
	//Creates the main heading in the middle of the welcome screen
	var welcomeMessage = createHeading1("Welcome To The Word Learning Game!", "welcomeMessageHeading" );
	//var continueMessage = createHeading2("Press anywhere to continue", "continueMessage");
	//Div that stores the heading
	var welcomeDiv = createDiv("welcomeMessage");
	//Appending the welcomeMessage to the div
	welcomeDiv.appendChild(welcomeMessage);
	//welcomeDiv.appendChild(continueMessage);
	//appends the div to the document body
	document.body.appendChild(welcomeDiv);
	var startButtonDiv = createDiv("startButtonDiv");
	document.body.appendChild(startButtonDiv);
	startGameButton();
	body = document.body;
	body.id = "welcomeScreenBody";
	
	
	
	
}

//Function to create and handle the input 
nameEntry = function() {
	//Div for the form
	var inputDiv = createDiv("form");
	//Creates the form element
	
	window.input = createInput();
	input.id = "input"
	input.placeholder = "Enter your name";
	
	inputDiv.appendChild(input);
	document.body.appendChild(inputDiv);
	
	//Button for entry
	
}
//Function to draw and handle the clicking of the start game button. 
startGameButton = function() {
	var inputButton = createButton("inputButton", "Start Game");
	startButtonDiv.appendChild(inputButton);
	document.getElementById("inputButton").onclick = function() {
		//Sets the input value as playerName and then saves it to playerList.Player.name
		var playerName = document.getElementById("input").value;
		playerList.Player.name = playerName;
		console.log(playerName);
		console.log(playerList.Player.name);
		
		//Disables input after a name has been entered and loads mainMenu when clicked, if no entry is made an error message will appear. 
		var lettersOnly = /^[A-Za-z]+$/;
		if(document.getElementById("input").value.length == 0) {
			alert("Enter your name");
		}
		else if (document.getElementById("input").value.match(lettersOnly)) {
			document.getElementById("input").disabled = true;
			body.id = "";
			mainMenu();
			
		}
		else {
			alert("Enter your name");
		}
		
		
	}
}
