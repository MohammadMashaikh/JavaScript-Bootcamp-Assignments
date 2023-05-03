// Assignment 1

function sayHello(theName, theGender) {
  // Your Code Here
    if (theGender == "Male") {
        console.log(`Hello Mr ${ theName }`);
    } else if (theGender == "Female") {
        console.log(`Hello Miss ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



// Assignment 2

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
    if (operation == "add") {
        console.log(firstNum + secondNum);
    } else if (operation == "subtract") {
        console.log(firstNum - secondNum);

    } else if (operation == "multiply") {
        console.log(firstNum * secondNum);

    } else if(firstNum == null || secondNum == null) {
     console.log("Second Number Not Found");
    }else  {
        console.log(firstNum + secondNum);
    } 
}


// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600




// Assignment 3

function ageInTime(theAge) {
  // Your Code Here
    if (theAge >= 10 && theAge <= 100) {
        console.log("Months Example =>", theAge * 12);
        console.log("Weeks Example =>", theAge * 12 * 4);
        console.log("Days Example =>", theAge * 12 * 30); 
        console.log("Hours Example =>", theAge * 12 * 30 * 24);
        console.log("Minutes Example =>", theAge * 12 * 30 * 24 * 60);
        console.log("Seconds Example =>", theAge * 12 * 30 * 24 * 60 * 60);
    } else {
        console.log("Age Out Of Range");
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(24); // Months Example => 456 Months



// Assignment 4

function checkStatus(a, b, c) {
  // Your Code Here
    let num, str, bool;

    if (typeof a == "string") {
        str = a;
    } else if (typeof b == "string") {
        str = b;
    } else {
        str = c;
    }
    if (typeof a == "number") {
        num = a;
    } else if (typeof b == "number") {
        num = b;
    } else {
        num = c;
    }
    if (typeof a == "boolean") {
        bool = a;
    } else if (typeof b == "boolean") {
        bool = b;
    } else {
        bool = c;
    }
    if (bool) {
   return `Hello ${str}, Your Age Is ${num}, You Are Available For Hire`;
   } else {
   return `Hello ${str}, Your Age Is ${num}, You Are Not Available For Hire`;
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



// Assignment 5

function createSelectBox(startYear, endYear) {
  // Your Code Here
        document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++){
        document.write(`<option value = "${i}">${i}</option>`);
    }
       document.write(`</select>`);
}
createSelectBox(2000, 2030);


// Assignment 6 
function multiply(...numbers) {
   
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] === "number") {
            result *= parseInt(numbers[i]);
        } else if (typeof numbers[i] === "float") {
            result *= parseInt(numbers[i]);

        }
    }
    return result;

}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000