const input = require('readline-sync');
let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str2 = str.slice(3) + str.slice(0, 3);
//console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.


//console.log(`${strt's pronounced ${str2} in pig latin.`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


let userInput= input.question("How many letters are we relocating? ");

let numUserInput= Number(userInput);

//console.log(typeof numUserInput);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numUserInput > str.length) {
console.log(`Oops! That's too many numbers. Here is your default: ${str2}.`);
} else if (numUserInput <= str.length) {
 let str3= str.slice(numUserInput) + str.slice(0, numUserInput)
console.log(`That's correct! Here is your new word: ${str3}!`);
}