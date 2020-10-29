window.onload = Loadapp = function() {
	welcome();
	
	
	
}
mainMenu = function() {
	//Clears the body of the HTML 
	document.body.innerHTML="";
		
	
	//Level Selectors
	//Setting an id to the body -- Allows a background to be set in CSS
	mainbody = document.body;
	mainbody.id = "mainMenuBody";
	if(playerList.Player.score == "") {
		playerList.Player.score = 0;
		console.log(playerList.Player.score);
	}
	console.log(playerList.Player.score);
	//Creating a div for the main menu title to be stored in
	var menuTitleDiv = createDiv("menuTitleDiv");
	//Creates the main menu h1 element and appends text to it
	var menuTitle = createHeading1("Select a level!");
	menuTitleDiv.appendChild(menuTitle);
	document.body.appendChild(menuTitleDiv);
	//for loop to create each paragraph for the main menu
	for ( var index = 0; index < menu.length; index++) {
		var par = createParagraph(menuID[index], menu[index]);
		document.body.appendChild(par);
	}
	//Onclick functions to call levels
	//Calls levelOne when clicked.
	document.getElementById("levelOne").onclick = function() {
		body.id = ""
		levelOne();
		
	}
	//Calls level two on click
	document.getElementById("levelTwo").onclick = function() {
		body.id = ""
		levelTwo();
		
	}
	//Calls level three on click
	document.getElementById("levelThree").onclick = function() {
		body.id = ""
		levelThree();
		
	}
}







