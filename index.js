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


// capitalization of name

let name=prompt("enter your name:")
let nameCapitalized=name.slice(0,1).toUpperCase()
let restName=name.slice(1,name.length)
restName=restName.toLowerCase()
let capitalizedName=nameCapitalized + restName
alert("Hello " + capitalizedName)


// Arithmetic operation

let dogAge=prompt("Enter the dog age: ")
let HumanAge= (dogAge-2) * 4 + 21
alert("The age of human is " + HumanAge)