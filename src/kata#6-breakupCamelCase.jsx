/// KATA # 6 ///

/*Task:

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing" => "camel Casing"
"identifier" => "identifier"
"" => ""

*/

//Answer:

function solution(string) {
  var newString = "";
  for (letter of string) {
    if (letter == letter.toUpperCase()) {
      newString += " ";
      newString += letter;
    } else {
      newString += letter;
    }
  }
  return newString;
}
