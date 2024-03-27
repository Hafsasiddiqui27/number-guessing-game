#! /usr/bin/env node
import inquirer from "inquirer";
// ************NUMBER GUESSING GAME***************
const randomNumber = Math.floor(Math.random() * 10);
// steps
// 1. number generate
// 2. ask the number using prompt
// 3. result
const answer = await inquirer.prompt([{
        message: "Guess a number from 0 - 9",
        type: "number",
        name: "yourGuessedNumber",
    }]);
// console.log(answer)
if (randomNumber === answer.yourGuessedNumber) {
    console.log(`Congratulations! You guessed a right number`);
}
else {
    console.log(`Sorry.. Try again`);
}
