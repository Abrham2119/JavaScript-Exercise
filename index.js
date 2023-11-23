// prompt that count the charater the user used and the remaining

let inputUser = prompt("Input your character:");
let maxInputCar = 140;
let remainingCar = maxInputCar - inputUser.length;
console.log("You have written " + inputUser.length + " characters, and you have " + remainingCar + " left.");


// prompt and slice that count the charater the user used and the remaining

let inputUser=prompt("Input your chatacter:");
let maxInputCar=140;
let inputUserSliced=inputUser.slice(0,140);
let remainingCar=maxInputCar-inputUser;

console.log("You have written " + inputUserSliced.length + " characters, and you have " + remainingCar + " left.");
