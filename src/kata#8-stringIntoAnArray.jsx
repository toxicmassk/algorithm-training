/// KATA #8 ///

/* Taks:

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

function stringToArray(string) {
  let arr = string.split(" ");
  return arr;
}
