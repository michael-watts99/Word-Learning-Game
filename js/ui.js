//Function to create paragraph elements
window.createParagraph = function() {
	console.log("Paragraph created");
	window.Para = document.createElement("p");
	document.id = 'One';
	
	
}

window.createParagraph = function(id, fill) {
	console.log("Paragraph created");
	
	
	window.Para = document.createElement("p");
	
	Para.id = id;
	text = document.createTextNode(fill);
	window.Para.appendChild(text);
	return Para;
}
//Adds text to paragraphs created
 window.writeToParagraph = function(fill) {
	console.log("Filling paragraph running");
	text = document.createTextNode(fill);
	window.Para.appendChild(text);
	return Para;
	//document.body.appendChild(Para);
	
}
//Creates h1 elements
window.createHeading1 = function(fill, id) {
	console.log("heading 1 element created");
	window.h1 = document.createElement("h1");
	h1.id = id;
	text = document.createTextNode(fill);
	window.h1.appendChild(text);
	return h1;
}
//function overloaded
/*
window.createHeading1 = function(fill) {
	console.log("heading 1 element created");
	window.h1 = document.createElement("h1");
	text = document.createTextNode(fill);
	window.h1.appendChild(text);
	return h1;
}
*/
//Adds text to h1 elements
window.writeToHeading1 = function(fill) {
	console.log("Filling h1");
	text = document.createTextNode(fill);
	window.h1.appendChild(text);
	document.body.appendChild(h1);
}
//Creates h2 elements
window.createHeading2 = function(fill, id) {
	console.log("heading 2 element created");
	window.h2 = document.createElement("h2");
	h2.id = id;
	text = document.createTextNode(fill);
	window.h2.appendChild(text);
	return h2;
}
//Adds text to h2 elements
window.writeToHeading2 = function(fill) {
	console.log("Filling h2");
	text = document.createTextNode(fill);
	window.h2.appendChild(text);
	document.body.appendChild(h2);
}
//Create h3 elements
window.createHeading3 = function() {
	console.log("heading 3 element created");
	window.h3 = document.createElement("h3");
}
//Adds text to h3 elements
window.writeToHeading3 = function(fill) {
	console.log("Filling h3");
	text = document.createTextNode(fill);
	window.h3.appendChild(text);
	document.body.appendChild(h3);
}
//Creates a div element
window.createDiv = function(id) {
	console.log("Div element created");
	window.div = document.createElement("div");
	div.id = id;
	return div;
}
//Adds text to div elements
window.writeToDiv = function(fill) {
	console.log("Filling div");
	text = document.createTextNode(fill);
	window.div.appendChild(text);
	//return div;
	//document.body.appendChild(div);
}
//Creates a span element
window.createSpan = function() {
	console.log("Creating span");
	window.span = document.createElement("span");
	return span;
}
//Adds text to a span element
window.writeToSpan = function(fill, colour) {
	console.log("writing to span")
	text = document.createTextNode(fill);
	window.span.appendChild(text);
	document.body.appendChild(span);
}
//Creates a button element
window.createButton = function() {
	console.log("creating button");
	window.button = document.createElement("button");
}

window.createButton = function(id, fill) {
	console.log("creating button");
	window.button = document.createElement("button");
	//button.classList.add(classname);
	button.id = id;
	text = document.createTextNode(fill);
	window.button.appendChild(text);
	return button;
}

//Adds text to button elements 
window.writeToButton = function(fill) {
	console.log("writing text to button");
	text = document.createTextNode(fill);
	window.button.appendChild(text);
	return button;
}
//Creates a form element
window.createForm = function() {
	console.log("creating form");
	window.form = document.createElement("form");
	return form;
}
//Creates input elements 
window.createInput = function() {
	console.log("input created");
	window.input = document.createElement("input");
	return input;
}
//Function to create a form
window.writeForm = function(label) {
	//Creates a div to store the form in
	createDiv();
	//creates the form the input is within
	createForm();
	inpt = document.createElement("input");
	//nput.type = "text";
	labelInput(label);
	//Appends the input to the form 
	window.form.appendChild(inpt);
	//Appends the form to the div element
	window.div.appendChild(form);
	//Appends the div element to the body section of the HTML
	document.body.appendChild(div);
}


//Creates an image element
window.createImage = function() {
	console.log("Image created");
	window.image = document.createElement("img");
}

window.labelInput = function(label) {
	
	labelText = document.createTextNode(label);
	window.search = document.createElement("label");
	window.search.appendChild(labelText);
	window.form.appendChild(search);
}
window.writeToImage = function(location) {
	console.log("Image added");
	image.src = location;
	document.body.appendChild(image);
}

window.searchb = function() {
	//Creates the div to store the search bar in
	 searchbarDiv = createDiv();
	//Creates the form for the input
	createForm();
	//Creating the input as variable bar
	bar = document.createElement("input");
	//Creating button with lable "Enter"
	window.but= document.createElement("button");
	console.log("writing text to button");
	text = document.createTextNode("Enter");
	window.but.appendChild(text);
	//Appends the form to the div element
	window.div.appendChild(form);
	//Adds the lable text for the input box
	labelInput ("Searchbar");
	input.type = "text";
	//Appends bar and but variables to form
	window.form.appendChild(bar);
	window.form.appendChild(but);
	//Appends div element to the body of the HTML document
	return searchbarDiv;
	/*Replacing this with return
	document.body.appendChild(div);
	*/
}



