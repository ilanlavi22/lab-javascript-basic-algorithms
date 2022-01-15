/*
*************************************************************************
Iteration 1: Names and Input
BTW: Definitions of hack-driver: Someone who drives a taxi for a living
==============================******************************************
*/

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Kann Fischer";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The Driver's name is: ${hacker1}.`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Eray Aktlu";

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The Navigator's name is: ${hacker2}.`);

/*
*************************************************************************
Iteration 2: Conditionals
Depending on which name is longer, print:
==============================******************************************
*/
if ((hacker1.length) > (hacker2.length)) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
} else if ((hacker1.length) < (hacker2.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

/*
*************************************************************************
Iteration 3: Loops
Depending on which name is longer, print:
==============================******************************************
*/

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverNameCapAndSpace = '';
for (let i = 0; i < hacker1.length; i++) {
    driverNameCapAndSpace += hacker1[i].toUpperCase() + " ";
};
console.log(driverNameCapAndSpace);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// Using string methods
console.log(`Using String Methods: ${hacker1.split("").reverse().join("")}`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// Using Loop (without string methods)

let reversedString = '';
for (let i = 0; i < hacker1.length; i++) {
    reversedString = hacker1[i] + reversedString;
}
console.log(`Using Simple Loop: ${reversedString}`);

// 3.3 Depending on the lexicographic order of the strings, print:
// Using localeCompare function

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}

// 3.3 Depending on the lexicographic order of the strings, print:
// Using plain Loop

if ((hacker1.toString()) > (hacker2.toString())) {
    console.log(`The driver's name goes first.`);
} else if ((hacker1.toString()) === (hacker2.toString())) {
    console.log(`What?! You both have the same name?`);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}