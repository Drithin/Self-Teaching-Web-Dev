// Create function isEven that tells if a number is even or not
function isEven(num){
   if(num%2===0){
   	return true;
   }else{
   	return false;
   }
}

//Write a Recursive factorial function

function factorial(i){
	if (i===0){
		return 1;
	}else{
		return i * factorial(i-1);
	}
}

// //Write a Non Recursive Factorial Function
// Take a base var and assign it to 1. 
// then loop through given number and multiply 
// it a number 1 less than it.

function nonRec(i){
	var n = 1

	for (n; n<=i; n++){
		i = i * n;
	}
	console.log(i);

}

//kebab case to snake case

function kebabToSnake(str){
	var mystring = str.replace(/-/g, "_")
	return mystring;
}