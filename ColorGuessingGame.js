// ColorGuessingGame
// Displays a list of colors for a user to guess
// The color is then displayed as a background color

$(document).ready(function(){
	var colors = ["blue","orange","red","yellow"];
	var finished = false;
	var randomNumber = (Math.floor(Math.random()*colors.length)-1);
	var target = colors[randomNumber];
	var guesses = 0;
	

	while(!finished){
		var guessInput = prompt("Guess one of these colors: " + colors);
		finished = checkAnswer(guessInput);
		guesses ++;
	}

	function checkAnswer(guessInput){
		if (colors.indexOf(guessInput) === -1) {
			alert("You did not pick any of the colors.");
			return false;
		} else if (guessInput > target) {
			alert("Your guess is alphabetically higher than the answer.");
			return false;
		} else if(guessInput < target){
			alert("Your guess is alphabetically lower than the answer.");
			return false;
		} else {
			alert("You got it right! It took you "+guesses+" guesses to get it right. You can see the color displayed in the background.");
			return true;
		}
	}
	myBody=getElementsByTagName("body")[0];
	myBody.style.background=target;
});
