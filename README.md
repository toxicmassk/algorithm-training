// algorithmTraining//

/// KATA #1 ///

Task:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Answer:
function simpleMultiplication(number) {
let result = 0;
if (number % 2 === 0) {
result= number _ 8;
} else {
result = number _ 9;
}
return result;
}

/// KATA # 2 ///

Task:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// thinking process

/ if flower 1 % 2 === 0 && flower 2 % 2 != 0 || flower 1 % 2 != 0 && flower 2 %2 === 0
return true

else return false
}
/

Answer:
function lovefunc(flower1, flower2){
if (flower1 % 2 === 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 %2 === 0){
return true;
} else {
return false;
}
}

/// KATA # 3 ///

Task:
Complete the solution so that it reverses the string passed into it.

'world' => 'dlrow'
'word' => 'drow'
/

Answer:
function solution(str){
return str.split('').reverse().join('');
};

/// KATA #4 ///

Task:
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

/

Thinking process:
non-consecutive number = arr[i + 1]
else / if statement

Answer:
function firstNonConsecutive(arr) {
for (let i = 1; i < arr.length; i++) {
if (arr[i - 1] + 1 !== arr[i]) return arr[i];
}
return null;
}
/

/// KATA # 5 ///

Task:

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 \* 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
/

Answer:
function checkForFactor (base, factor) {
return (base % factor === 0 ? true : false);
}
