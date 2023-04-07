/// KATA #7 ///

/* Task:

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

// Thinking process: filter array by % 2 === 0

function removeEveryOther(arr) {
  let result = arr.filter((n, index) => index % 2 === 0);
  return result;
}
