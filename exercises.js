//Aquí iré subiendo todos los ejercicios propuestos en el curso de Udemy, como parte de mi mentoría.

// 33.07 Fancy String

//If I give you a string "abc", I wanto you to print out 3abc3
//If I give you a string "y", I wanto you to print out 1y1
//If I give you a string "44", I wanto you to print out 2442
//If I give you a string "-----", I wanto you to print out 5-----5

var firstString = "abc";
var secondString = "y";
var thirdString = "44";
var forthString = "-----";

console.log(firstString.length + firstString + firstString.length);
console.log(secondString.length + secondString + secondString.length);
console.log(thirdString.length + thirdString + thirdString.length);
console.log(forthString.length + forthString + forthString.length);

// 33.08 Greeting me

//Create a program how greet me. Tells me how long my name is.
//The program should maintain my first name and my last name.

var name = "Caro";
var surname = "Chan";

console.log("Hi " + name + " " + surname + "!");
console.log("Your name length is " +  name.length);

// 37.11 Character indexing

//1. Write the code to get the 2nd character
//2. Write the code to get the last character
//3. Write the code to get the 5th character
//4. Write the code to get the 2nd and the last character
//5. Write the code to concatenate the 1st and the 3rd to the last characters together

const testString = "qwertyuiop";

console.log(testString[1]);
console.log(testString[testString.length -1]);
console.log(testString[4]);
console.log(testString[1], testString[testString.length -1]);
console.log(testString[0] + testString[2] + testString[testString.length -1]);

//48.03 Numbers exercises

let addition = 9 + 7;
let substraction = 7 -4;
let multiplication = 5 * 5;
let division = 27 / 9;
let decimalThing = .5 * 15;
let exponentThing = 4 ** 3;
let reminder = 9 % 5;

console.log(addition, substraction, multiplication, division, decimalThing, exponentThing, reminder);

// 55.03 order of operators

const problem1 = 4 + 3 * 7 - 2 / 4;
const problem2 = (4 + 3) * (7 - 2) / 4;
const problem3 = (4 + 3) * (7 - 2) / 4 ** 2;

console.log(problem1);
console.log(problem2);
console.log(problem3);


//55.06 length string menus 5

//1st imput "abcd"
//2nd imput "?????????"

var firstImput = "abcd";
var secondImput = "?????????";

console.log(firstImput.length - 5);
console.log(secondImput.length -5);



















