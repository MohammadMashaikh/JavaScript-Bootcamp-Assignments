// ===============================
// HARD QUESTION
// ===============================

// Assignment 2


let myAdd = document.querySelector(".classes-to-add");
let myRemove = document.querySelector(".classes-to-remove");
let myDiv = document.querySelector(".classes-list div");



// Add Element when blur
myAdd.onblur = function () {
    let myAddValue = myAdd.value.split(" ");
    if(myAdd.value !== ""){
  if (myAddValue.length === 1) {
      let newDiv = document.createElement('span');
      let newContent = document.createTextNode(myAdd.value.toLowerCase());
      newDiv.appendChild(newContent);
      myDiv.appendChild(newDiv);

  } else if (myAddValue.length === 2){
    if(myAddValue[0] !== "" && myAddValue[1] !== ""){
      let firstSpan = document.createElement('span');
      let firstContent = document.createTextNode(myAddValue[0].toLowerCase());
      firstSpan.appendChild(firstContent);
      myDiv.appendChild(firstSpan);
      
      let secondSpan = document.createElement('span');
      let secondContent = document.createTextNode(myAddValue[1].toLowerCase());
      secondSpan.appendChild(secondContent);
      myDiv.appendChild(secondSpan);
  } 
}
}
};

// Remove Element when blur

myRemove.onblur = function () {
  let myRemoveValue = myRemove.value.split(" ");
  let allSpans = myDiv.querySelectorAll("span");
  allSpans.forEach(function (span) {
    if(myRemoveValue.length === 1 || myRemoveValue.length === 2){
    if (myRemoveValue.some((word) => span.textContent.includes(word))) {
      span.remove();
    }
}
  });
};