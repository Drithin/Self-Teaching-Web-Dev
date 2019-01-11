var askName = prompt("What is your name?");

if(askName != null){
	document.getElementById("sayHello").innerHTML = "Hello " + askName;
}
else{
	prompt("Please enter a valid name !!!");
}

document.write(" 5 + 4 is ", 5+4,"<br />"); //5 and 4 are numbers after ","
document.write(" 5 + 4 is "+ 5+4,"<br />"); //5 and 4 are strings after "+"
//same can be applied for math ops


document.write("Max Num is ", Number.MAX_VALUE, "<br />");
document.write("Min Num is ", Number.MIN_VALUE, "<br />");


//gives max and min values that a javascript can hold

//if its bigger than 16 digits, output is rounded off to 2 digits

var CustBalance = 1530.87

document.write("Balance is ", (CustBalance/12).toFixed(2), "<br />");

document.write("Value of Pi ", Math.PI,"<br />");
document.write("Value of E ", Math.E,"<br />");

var customerData = {name: "Derek", age: "50", address:"NY"}

for(k in customerData){
	document.write(customerData[k], "<br />");
}

var arrayExample = ["Tom", 123.50, true];
//arrays in JS can store any type of value. all indexing and slicing methods of an array
//can be applied here

function inArray(arrayToCheck, value){
	for(i=0; i < arrayToCheck.length; i++){
		if (arrayToCheck[i] === value){
			return true;
		}
		}
		return false;
	
}

randArray = [1,2,3,4,5,6];

document.write("In Array :", inArray(randArray, 4), "<br/>");

//you can write a func with no arguements and 
// use for loop and arguements.length to loop through
// all the possible arguements that can be passed into that func.

// recursvie function
//calculating factorial
function fact(num){

	if(num <= 1){
		return 1;
	} //base func
	else{
		return num * fact(num-1);
	}

}

//DOM events

function openalert(mess){
	alert(mess);
}

//We used it only when clicked.
// Other events include:
// onmouseover
// onmouseout
// ondblclick
// onmousedown
// onmouseup



