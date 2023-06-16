/// KATA #37 ///

/* Task:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

function between(a, b) {
  var myArray = [];
  for (var i = a; i <= b; i += 1) {
    myArray.push(i);
  }
  return myArray;
}
