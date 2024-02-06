/// KATA #82 ///

/* Description:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
    let even = s.split('').map((letter, i) =>
        (i % 2 == 0) ? letter.toUpperCase() : letter).join('')
    let odd = s.split('').map((letter, i) =>
        (i % 2 != 0) ? letter.toUpperCase() : letter).join('')
    return [even, odd];
};