/// KATA #1 ///

/*Task:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//Answer:

function simpleMultiplication(number) {
  let result = 0;
  if (number % 2 === 0) {
    result = number * 8;
  } else {
    result = number * 9;
  }
  return result;
}
