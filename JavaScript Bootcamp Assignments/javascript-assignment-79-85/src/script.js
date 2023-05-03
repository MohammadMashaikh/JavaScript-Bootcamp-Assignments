
// Assignment 1

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
    }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


// Assignment 2

// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One"
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "Method Two"
}); 

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.create(objMethodOne); 

objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"

// Assignment 3