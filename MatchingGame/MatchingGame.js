var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces(){
    
	for(var i = 0; i < numberOfFaces; i++){
        
		var face = document.createElement("img");
		face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        
		var x = String(Math.floor(Math.random()*400));
		var y = String(Math.floor(Math.random()*400));
		var topStyle = "top:" + x + "px";
		var leftStyle = "left:" + y + "px";
        face.setAttribute("style",topStyle + ";" + leftStyle);
		theLeftSide.appendChild(face.cloneNode(true));
		theRightSide.appendChild(face);
		<!-- alert("is this working?"); -->
		
	};
        
var removeFace = document.getElementById("leftSide").lastElementChild;
theLeftSide.removeChild(removeFace);
var theBody = document.getElementsByTagName("body")[0];


theRightSide.lastChild.onclick = function nextLevel(event){
	event.stopPropagation();
	numberOfFaces += 5;
    while(theLeftSide.firstChild)
        theLeftSide.removeChild(theLeftSide.firstChild);
    while(theRightSide.firstChild)
        theRightSide.removeChild(theRightSide.firstChild);
	generateFaces();
};

theBody.onclick = function gameOver(){
	alert("Game over!");
	theBody.onclick = null;
	theRightSide.lastChild.onclick = null;
};
    }


generateFaces();