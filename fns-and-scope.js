//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Code Here
var name = "Tyler";
var isTyler = function(name) {
  if (name === "Tyler") {
    return true;
  } else {
    return false;
  }
};

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

//Code Here
var getName = function() {
  var enterName = prompt("Enter Name");
  return enterName;
};

//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

//Code Here
var welcome = function() {
  var name = getName();
  alert("Welcome, " + name);
};

//Next problem


//Answer Here

/*What is the difference between arguments and parameters?
  Parameters are used to define a function:

function foo(param1, param2) {...}

  Arguments are used to invoke a function, 3 and 7 are arguments:

foo(3, 7);*/


//Next problem

//What are all the falsy values in JavaScript and how do you check if something is falsy?
/*
- Falsy:
  - NaN
  - undefined
  - false
  - 0
  - null
  - ''
*/

//Next Problem

//Create a function called myName that returns your name

//Code Here
var myName = function() {
  return "Fernando";
};

//Now save the function definition of myName into a new variable called newMyName

//Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName

//alert(newMyName());

//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

//Code Here
var outerFn = function() {
  return function() {
    return "Fernando";
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

//Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();