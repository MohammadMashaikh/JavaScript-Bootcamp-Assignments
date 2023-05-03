// Assignment 1

let myAssignment = document.getElementById("elzero"); // 1
 myAssignment = document.getElementsByClassName("element");// 2
 myAssignment = document.getElementsByTagName("div"); // 3
 myAssignment = document.getElementsByName("js"); // 4
 myAssignment = document.querySelector("div"); // 5
 myAssignment = document.querySelector("#elzero"); // 6
 myAssignment = document.querySelector(".element"); // 7
 myAssignment = document.querySelector("[name='js']"); // 8
 myAssignment = document.querySelectorAll("div")[0]; // 9
 myAssignment = document.querySelectorAll("#elzero")[0]; // 10
 myAssignment = document.querySelectorAll(".element")[0]; // 11
 myAssignment = document.querySelectorAll("[name='js']")[0]; // 12
 myAssignment = document.body.childNodes[1]; // 13
 myAssignment = document.body.children[1]; // 14
 myAssignment = document.body.firstElementChild; // 15
 myAssignment = document.body.lastElementChild.previousElementSibling; // 16



// Assignment 2

let changeDiv = document.querySelectorAll("div img");

for (let i = 0; i < changeDiv.length; i++){
    changeDiv[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    changeDiv[i].setAttribute("alt", "Elzero Logo");
}


// Assignment 3


let myInput = document.querySelector("[name=dollar]");
let myResult = document.querySelector(".result");
let myValue = myInput.value;


myInput.addEventListener("input", function (){
    let Egycurrency = myInput.value * 15.6;
   if(myInput !== 0){
     myResult.textContent = `{${myInput.value || 0}} USD Dollar = {${myInput.value === "" ? 0 :Egycurrency.toFixed(2)}} Egyptian Pound`;
}
})





// Assignment 4


let myElement1 = document.querySelector(".one");
let myElement2 = document.querySelector(".two");

let mySecondDivTitle = myElement2.title;
let mySecondText = myElement2.textContent;

myElement2.title = myElement1.title;

myElement1.title = mySecondDivTitle;

myElement2.textContent = `${myElement1.textContent} 2`;

myElement1.textContent = mySecondText;




// Assignmnet 5

let getImages = document.querySelectorAll("img");


for(let i = 0; i < getImages.length; i++){
    if(getImages[i].hasAttribute("alt")){
        getImages[i].alt = "Old";
    }else{
        getImages[i].setAttribute("alt", "Elzero New");
    }
}



// Assignmnet 6

let myInputNumber = document.querySelector("[name=elements]");
let myInputString = document.querySelector("[name=texts]");
let result = document.querySelector(".results");
let mySelect = document.querySelector("[name=type]");
let myForm = document.forms[0];

console.log(myForm);


myForm.onsubmit = (event) => {
	event.preventDefault();
	document.querySelectorAll(".results .box").forEach((box) => box.remove());

	
    for(let i = 1; i <= myInputNumber.value; i++){

	let myText = document.createTextNode(myInputString.value);
    let SelectBox = document.createElement(mySelect.value);
    SelectBox.className = "box";
    SelectBox.title = "Element";
    SelectBox.id = `id-${i}`;
	
    SelectBox.appendChild(myText);
    result.appendChild(SelectBox);

    }
	
};