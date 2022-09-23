//Given the following array
const values = [10, 25, 18, 50, 30, 42, 11, 13];
//a) Calculate the sum of array elements.
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//   sum += values[i];
// }
// console.log("The sum of array elements are", sum);

//b) Get a new array containing the odd numbers in the values array.
// const newArrValues = [];
// for (let i = 0; i < values.length; i++) {
//   if (values[i] % 2 === 1) {
//     newArrValues.push(values[i]);
//   }
// }
// console.log("newArrValues =", newArrValues);

//c) Calculate the sum of even of array elements that are also divisible 10 (without remainder).

// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//   if (values[i] % 2 === 0 && values[i] % 10 === 0) {
//     sum += values[i];
//   }
// }
// console.log(sum);

//d) Print the numbers in the array that are divisible by either 5 or 3.

// for (let i = 0; i < values.length; i++) {
//   if (values[i] % 3 === 0 || values[i] % 5 === 0) {
//     console.log(values[i]);
//   }
// }

//e) Remove odd numbers from the values array.

// for (let i = 0; i < values.length; i++) {
//   if (values[i] % 2 === 0) {
//     values.splice(i, 0);
//     console.log(values[i]);
//   }
// }

//2․  The following text is given.

const text = "Test!your!knowledge!and!solve!tasks․";

//a)   "!" replace the specified symbol with the "space" (problem) symbol.

console.log(text.replaceAll("!", " "));

//b) Find the count of "s" symbols.
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "s") {
    count++;
  }
}
console.log('"s" symbols count =', count);

//c Print text words (Test, your, ...)
console.log(text.replaceAll("!", ", "));
