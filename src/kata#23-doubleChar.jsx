/// KATA #23 ///

/* Task:

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

// Thinking process: .repeat(2) method should be used. But first we need to get each character, so best is to map through string to get each character and then to repeat each single one.

function doubleChar(str) {
  return [...str].map((s) => s.repeat(2)).join("");
}
