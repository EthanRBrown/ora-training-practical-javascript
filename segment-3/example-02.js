// array basics

const a1 = [1, 2, 3, 'hello']       // array literal
const a2 = new Array(10)            // empty 10-element array
const a3 = new Array(10).fill(0)    // initialized 10-element array

// mutating arrays - bracket notation
a2[3] = 'apple'
a2[4] = 'orange'
delete a2[4]
a1[4] = 'goodbye'
console.log('a1.length (after setting a1[4]): ', a1.length)
delete a1[4]
console.log('a1.length (after deleting a1[4]): ', a1.length)
