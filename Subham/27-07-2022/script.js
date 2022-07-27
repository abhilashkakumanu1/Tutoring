// declaring variables, initializing variables, assigning value to them

// ES2015 <=> ES6, ES7, ES8
// ECMA => European Computer Manufacturer's Association

var name; // declaring a variable

name = "SUBHAM";

// name = 13;

// console.log(name.toLowerCase());

// ESLint

// compile-time and run-time

let name2 = "Ahilash"; //String

// number
let age = 12;
age = 13.5;

// Boolean
let isGoodHero = true; // false

// Arrays
let arr = [1, 2, "Abhilash", 2.5, ["a", "b", "c"]];
console.log(arr[4][2]);

// Object
let obj = {
  name: "Subham",
  age: 23,
  girlFriends: ["Roja", "Alia", "Pooja"],
};
console.log(obj.girlFriends[2]);

console.log(obj["name"]);

// 2 ways to get properties from an object - dot operator, [] operator

const people = {
  Abhilash: {
    age: 23,
    breakUps: 2,
  },
  Subham: {
    age: 22,
    breakUps: 10,
  },
};
const name3 = "Abhilash";

console.log(people.Abhilash);
