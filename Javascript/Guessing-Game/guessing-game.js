var secretNum = 5;

var guessNum = Number(prompt("Enter the Number you guessed"));



	 if(guessNum < secretNum){
		prompt("Number is too low");
	}
	else if(guessNum > secretNum){
		prompt("Number is too high!");
	}
	else{
		alert("You guessed it right ");
	}


		

