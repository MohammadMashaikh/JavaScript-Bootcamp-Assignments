
// Assignment 3

let myP1 = document.querySelector("p").remove();
let myDiv1 = document.querySelector(".our-element");

let createFirstDiv = document.createElement("div");
createFirstDiv.classList.add("start");
createFirstDiv.title = "Start Element";
createFirstDiv.setAttribute("data-value", "Start");
createFirstDiv.textContent = "Start";

let createSecondDiv = document.createElement("div");
createSecondDiv.className = "end";
createSecondDiv.title = "End Element";
createSecondDiv.setAttribute("data-value", "End");
createSecondDiv.textContent = "End";


myDiv1.before(createFirstDiv);
myDiv1.after(createSecondDiv);



// Assignment 4
let myContext = document.querySelector("span");

myContext.nextElementSibling;

// Assignment 5

const myDiv = document.querySelector("div");
const myP = document.querySelector("p");
const mySpan = document.querySelector("span");
const myArticle = document.querySelector("article");
const mySection = document.querySelector("section");

myDiv.addEventListener("click", function (e){
   if (myDiv.tagName.toLowerCase() === "div") {
  console.log("This is my div");
   } 
});

myP.addEventListener("click", function (e){
   if (myP.tagName.toLowerCase() === "p") {
  console.log("This is my p");
   } 
});

mySpan.addEventListener("click", function (e){
   if (mySpan.tagName.toLowerCase() === "span") {
  console.log("This is my span");
   } 
});

myArticle.addEventListener("click", function (e){
   if (myArticle.tagName.toLowerCase() === "article") {
  console.log("This is my article");
   } 
});

mySection.addEventListener("click", function (e){
   if (mySection.tagName.toLowerCase() === "section") {
  console.log("This is my section");
   } 
});
