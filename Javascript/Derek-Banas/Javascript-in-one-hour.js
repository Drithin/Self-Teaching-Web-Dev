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


