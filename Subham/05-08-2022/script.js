const names = [
  "Aamir",
  "Ranbir",
  "Shah Rukh",
  "Salman",
  "Akshay",
  "Varun Dhavan",
];

// 9 <=x <15 => x in [9, 15)

// Slice
const newNames = names.slice(2, 6);
console.log(newNames);

console.log("-------------------------------------");

// Splice
// console.log(names.splice(2, 4));
// console.log(names);

// Map
// names.map((name) => console.log(name));

// Create a function which takes a string
// Returns a new string made of 3rd & 4th words
// If string contains less than 4 words, return null
function thirdFourthWords(str) {
  return "";
}

thirdFourthWords("subham is learning js"); // "learning js"
thirdFourthWords("Alia is a cute girl"); // "a cute"
thirdFourthWords("Hello world"); // null
