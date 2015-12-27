/*
  variables:
    - Placeholder
    - Kinda like 'x' in algebra
    - Alias
*/

var name = 'Jacob';

/*
  if statements:
   - Conditional
    - Comparisons
    - 'truthy' or 'falsy' value
   - if condition is 'truthy', block will run

   truthy - falsy:
    - Falsy:
      - NaN
      - undefined
      - false
      - 0
      - null
      - ''
    - Truthy:
      - Everything else
*/

var valOne = 21;
var valTwo = 10;

if (valOne >= valTwo) {
  console.log('This is truthy!')
} else if (valOne === valTwo){
  console.log('This one is truthy!')
} else {
  console.log('None were truthy!')
}

/*
  === // Equal Comparison
  !== // NOT equal comparison
  > // greater than
  < // less than
  >= // or equal to
  <= // or equal to
  ! // Boolean opposite
  || // OR
  && // AND
*/

if (21 >= 50 || 22 > 20){

} else if (!(21 >= 50) && (22 > 20)){

}


/*

  Function:
    - Set of code that you can 'call'
    - 'Little machines'
    - Don't necessarily run immediately (can call any time)

*/

var foo = function () { // Expression
  console.log('THIS RAN!');
  return undefined;
}

function bar (baz) { // Declaration
  return baz * baz;
}

bar(2); // === 4
foo();

if (bar(3) >= 4){
  console.log('woo');
}

console.log(foo); // function () { consoasjdfoiuasdf }
console.log(foo()); // 'THIS RAN!'; undefined


/*

  Parameter:
   - Created when you declare the Function
   - Alias for the argument

  Argument:
   - Put 'into' function when called
   - Could change every time

*/

var foo = function(paramOne, paramTwo){
  return paramOne + paramTwo;
}

debugger;
foo(1, 3);



var foo = function (a, b){
  var bar = function (b, c) {
    console.log(a, b, c);
  }
  bar(3, 4);
}

foo(1, 2);
// 1, 3, 4
// ERROR
// undefined

var bar = 'outside';

var foo = function(){
  var bar = 'inside';
  console.log(bar)
}


/*
  CLOSURES
  Will maintain the state of any outer functions around it.
  The power of closures is that even if the outer function returns,
  the inner function still has references to the outer functions variables,
  this creates ‘private’ data.
*/

var foo = function(){
  var count = 0;
  return function(){
    count = count + 1;
    console.log("This function has been called " + count + " times.")
  };
}



var bar = foo();

bar();
bar();


'boo';
