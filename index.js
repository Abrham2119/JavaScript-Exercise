// prompt that count the charater the user used and the remaining

let inputUser = prompt("Input your character:");
let maxInputCar = 140;
let remainingCar = maxInputCar - inputUser.length;
console.log("You have written " + inputUser.length + " characters, and you have " + remainingCar + " left.");