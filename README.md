// algorithmTraining//

// KATA #1

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

// KATA # 2

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

/#Kata 3

Task:
Complete the solution so that it reverses the string passed into it.

'world' => 'dlrow'
'word' => 'drow'
/

Answer:
function solution(str){
return str.split('').reverse().join('');
};
