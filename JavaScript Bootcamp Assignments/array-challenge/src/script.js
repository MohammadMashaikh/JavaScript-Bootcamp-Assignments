let zero = 0;
let counter = 3;


let my = ["Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write code here

console.log(my.slice(zero, -counter + true).reverse()); //  ['Osama', 'Elham', 'Mazero', 'Ahmad']

console.log(my.slice(true, counter).reverse()); // ['Elham', 'Mazero']

console.log(my[counter - true].slice(zero, counter - true) + my[+true].slice(counter - true)); // Elzero

console.log(my[+true].slice(counter + true, counter + true + true) + my[+true].slice(counter + true + true).toUpperCase()); //rO