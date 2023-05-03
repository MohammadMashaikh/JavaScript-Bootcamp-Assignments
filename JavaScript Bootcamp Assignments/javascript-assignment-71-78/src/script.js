
// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let addMix = mix.map(function (el) {
    return isNaN(el) ? el : "";
}).reduce(function (acc, current) {
    return acc !== "" ? `${acc}${current}` : current;
});
console.log(addMix); // Elzero

// Assignment 2

let myString = "EElllzzzzzzzeroo";

let change = myString.split("").filter(function (el, index, arr) {
    return arr.indexOf(el) === index;
}).join("");

console.log(change); // Elzero

// Assignment 3


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray.reduce(function (acc, current) {
    return Array.isArray(current) ? acc.concat(current) : acc.concat([current]);
}, []).join("");

console.log(flatArray); // Elzero



// Assignmnet 4 

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let checkNumStr = numsAndStrings.filter(function (el) {
    return !isNaN(el);
}).map(function (el) {
    return -el;
}); 

console.log(checkNumStr);  // [-1, -10, 10, 20, -5, -3]


// Assignment 5

let nums = [2, 12, 11, 5, 10, 1, 99];

let doNums = nums.reduce(function (acc, current) {
    return current % 2 == 0 ? acc * current : acc + current;
}, 1);

console.log(doNums); // 500