var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces(){
    
	for(var i = 0; i < numberOfFaces; i++){
        
		var face = document.createElement("img"); //creating img tag & set position in css
		face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        
		var x = String(Math.floor(Math.random()*400)); //chooses random px location
		var y = String(Math.floor(Math.random()*400));
		var topStyle = "top:" + x + "px";
		var leftStyle = "left:" + y + "px";
        face.setAttribute("style",topStyle + ";" + leftStyle); //style is actually set here
		theLeftSide.appendChild(face.cloneNode(true));
		theRightSide.appendChild(face); //clone img to right side
	};
        
var removeFace = document.getElementById("leftSide").lastElementChild;
theLeftSide.removeChild(removeFace); //removing last smile from left side
var theBody = document.getElementsByTagName("body")[0];


theRightSide.lastChild.onclick = function nextLevel(event){ //event handler adding 5 more smiles if guessed correctly
	event.stopPropagation();
	numberOfFaces += 5;
    while(theLeftSide.firstChild) //replaces last missing child after each round
        theLeftSide.removeChild(theLeftSide.firstChild);
    while(theRightSide.firstChild)
        theRightSide.removeChild(theRightSide.firstChild);
	generateFaces();
};

theBody.onclick = function gameOver(){ //event handler ending game if guessed incorrectly
	alert("Game over!");
	theBody.onclick = null;
	theRightSide.lastChild.onclick = null;
};
    }


generateFaces();