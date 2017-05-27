// array basics

const a1 = [1, 2, 3, 'hello']       // array literal
const a2 = new Array(10)            // empty 10-element array
const a3 = new Array(10).fill(0)    // initialized 10-element array

// basic array info
console.log('a1.length: ', a1.length)
console.log('a1[2]: ', a1[2])
console.log('a1[10]: ', a1[10])
console.log('typeof a1: ', typeof a1)
console.log('Array.isArray(a1): ', Array.isArray(a1))
console.log('a1.indexOf(3): ', a1.indexOf(3))
console.log('a1.find(x => x % 2 === 0): ', a1.find(x => x % 2 === 0))
console.log('a1.findIndex(x => x % 2 === 0): ', a1.findIndex(x => x % 2 === 0))
console.log('a1.includes(2): ', a1.includes(2))
console.log('a1.some(x => x % 2 ===0): ', a1.some(x => x % 2 === 0))
console.log('a1.every(x => x % 2 ===0): ', a1.every(x => x % 2 === 0))

// mutating arrays - bracket notation
a2[3] = 'apple'
a2[4] = 'orange'
delete a2[4]
a1[4] = 'goodbye'
console.log('a1.length (after setting a1[4]): ', a1.length)
delete a1[4]
console.log('a1.length (after deleting a1[4]): ', a1.length)



