var movieObj = [
	Tarantino{
		name: "Kill Bill";
		stars: 4;
		hasWatched: true;
	}
	Fincher{
		name: "Fight Club";
		stars: 5;
		hasWatched: true;
	}
	Spielberg{
		name: "War Horse";
		stars: 3;
		hasWatched: false;
	}
]

console.log("You have watched "+movieObj.Tarantino.name+" - "+
	movieObj.Tarantino.stars);

console.log("You have not watched "+movieObj.Spielberg.name+" - "+ movieObj.Spielberg.stars);

// =============================================
//tutor code

var movies = [
    {
		name: "Kill Bill";
		stars: 4;
		hasWatched: true;
	}
	{
		name: "Fight Club";
		stars: 5;
		hasWatched: true;
	}
	{
		name: "War Horse";
		stars: 3;
		hasWatched: false;
	}

]

movies.forEach(function(movies)){
	var result = "You have ";

	if(movies.hasWatched){
		result += "watched";
	}
	else{
		result += "not seen";
	}

	result += movie.name;
	console.log(result);
}

// Tutor has created an object of movies with no specific names for objects
// he did a for each loop and later called conditionals and appended rest of 
// target output to result variable

