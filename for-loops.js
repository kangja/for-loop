// for loops.
// we can run the same code multiple times using a loop. The most common loop in Javascript is called for loop because it runs for a specific number of times. 

// Structure of a for loop
// for ([initialization]; [condition]; [final-expression]) {}
// the loop continues to run until condition is false. final-expression is evaluated at the end of each loop iteration. It is usually used to increment/decrement a loop counter. 

// let ourArray = [];
// for (let i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// console.log(ourArray)
// [0, 1, 2, 3, 4]

// **

let ourArray = [];
for (let i = 0; i < 5; i++) {
  if (i > 2) break; //use the break statement to break out of the loop early. If i is more than 2, break. After 2, i is more than 2 so it breaks out of the loop and we are DONE with the loop. 
  ourArray.push(i);
}

console.log(ourArray)
// [ 0, 1, 2 ]


