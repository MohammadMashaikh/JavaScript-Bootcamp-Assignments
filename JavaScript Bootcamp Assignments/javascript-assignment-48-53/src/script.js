// Assignment 1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i+=start){
    if (i == exclude) {
        continue;
    }
    console.log(i);
}


// Assignment 2

let start_2 = 10;
let end_2 = 0;
let stop_2 = 3;


for (let i = start_2; i > end_2; i--){
    if (i === stop_2-true) {
        break;
    }
    if (i < start_2) {
        console.log("0" + i);
    } else {
        console.log(i);
    }
    }


// Assignment 3

let start_3 = 1;
let end_3 = 6;
let breaker_3 = 2;

for (let i = start_3; i <= end_3; i++){
    console.log(i);

    for (let j = breaker_3; j <= end_3; j += breaker_3){
        console.log(`--${j}`);
        if (j == end_3 - breaker_3) {
            break;
        }
    }
}


// Assignment 4

let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
    if (index > jump) {
        console.log(index);
        index -= jump;
    } else break;
}

// Assignment 5


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let anotherArray = [];

for (let i = true - true; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        continue;
    }
        console.log(`${i} => ${friends[i]}`);

}

// Assignment 6

let start_6 = 0;
let swappedName = "elZerO";
let output = "";

for (let i = start_6; i < swappedName.length; i++) {
  let char = swappedName.charAt(i);
  if (char.toUpperCase() === char) {
    output += char.toLowerCase();
  } else {
    output += char.toUpperCase();
  }
}


// Assignment 7


let start_7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start_7; i < mix.length; i++){
    if (typeof mix[i] == "string") {
        continue;
    } else if (mix[i] == +true) {
        continue;
    }
   console.log(mix[i]);
}