function colorChange1(){
	document.getElementById("text-color-change").style.color = "red";
	document.getElementById("h1").innerHTML = "Red";	
}

function colorChange2(){
	document.getElementById("text-color-change").style.color = "blue";
	document.getElementById("h1").innerHTML = "Blue";
}

function colorChange3(){
	document.getElementById("text-color-change").style.color = "green";
	document.getElementById("h1").innerHTML = "Green";
}

function colorChange4(){
	document.getElementById("text-color-change").style.color = "magenta";
	document.getElementById("h1").innerHTML = "Magenta";
}

function colorChange5(){
	document.getElementById("text-color-change").style.color = "moccasin";
	document.getElementById("h1").innerHTML = "Moccasin";
}

function colorChange6(){
	document.getElementById("text-color-change").style.color = "tomato";
	document.getElementById("h1").innerHTML = "Tomato";
}



document.getElementById("reset").addEventListener("click", resetFunc);

function resetFunc(){
	document.getElementById("text-color-change").style.color = "black";
    document.getElementById("h1").textContent = "Color Name Here";
};




