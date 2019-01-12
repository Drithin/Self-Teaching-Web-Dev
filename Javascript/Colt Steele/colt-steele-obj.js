//Instead of defining each data of a user, 
//we can do it all in a single structure
//this data structure is called objects

var user = {
	name: "Dan";
	age: 23; //we can have multiple data types in an object
	country: "India";

};

//two ways to print this to console

console.log(person["name"]);

console.log(person.age);

// dot notation cant be used if property of obj start with a num
// also space in prop name, we can only do it with quotes
// lookup var ONLY with [], doesnt work with dot

var user2 = { };

var user3 = new object();

//all the above are valid forms of object declaration

//objects can hold objs, arrays, nums, strings, booleans, any type of data

var posts [
{
	name: "colt",
	age: 50

},
{
	name: "steele",
	age: 50
}
]

// to retreive info on above obj

console.log(posts[0].name )

//objects can have methods

var obj = {
	name: "chuck",
	age: 45,
	isCool: false
	add: function(x,y){
		return x+y;
	}
}

// you can add functions to objects
//you can just call it like below

obj.add(4,5);

//add can't be called on its own


