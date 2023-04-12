/// KATA #11 ///

/* 
Taks:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

// Thinking process: Remove first and last, we have to use slice (1, 0) for first and (0, -1) for last..

function removeChar(str) {
  return str.slice(1, -1);
}
