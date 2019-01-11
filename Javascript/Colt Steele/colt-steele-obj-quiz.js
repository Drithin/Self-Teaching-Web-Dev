var someObj = {};

//which of the following is TRUE?

someObj._name = "Hulk"; //true

someObj.age=6; //true

var prop = "color"; 
someObj[prop] = "red"; //this is true, you can define a stand alone property
// and add it to obj like above line

someObj.123 = true; //false

// =====================================================================================

var someObj2 = {
	friends : [
	{name: "Dan"},
	{name: "Van"},
	{name: "Can"},
	],
	color: "baby blue",
	isEvil: true;
};

//write code to retrieve "Dan"
//go layer by layer

// console.log(someObj2[0].friends[0]);
//this solution is incorrect as friends is a key

someObj2.friends
someObj2.friends[0]
someObj2.friends[0].name;

