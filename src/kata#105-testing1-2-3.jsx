/// KATA #105 ///

/*  Description:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// Example #1
var number = function (array) {
    let result = [];
    if (array.length == 0) {
        return [];
    } else {
        for (let index = 0; index < array.length; index++) {
            array.push(index + 1 + ': ' + array[index])
        }
    }
    return result;
}

// Example #2

const number = array =>
    array.map((element, index) => `${index + 1}: ${element}`);