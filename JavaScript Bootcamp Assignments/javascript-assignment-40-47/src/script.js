// Assignment 1


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.length-myFriends.length,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]; 

// Assignment 2


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


// Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]







// Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - 1][0].slice(words.length - 1).toUpperCase());

// Assignment 5


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}

haystack.indexOf(needle.toUpperCase()) !== -1
  ? console.log("Found")
  : console.log(-1);
haystack.lastIndexOf(needle.toUpperCase()) !== -1
  ? console.log("Found")
  : console.log(-1);

// Assignment 6


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = allArrs
  .concat(arr1.slice(arr1.length - true), arr2.slice(arr1.length - true))
  .sort()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy