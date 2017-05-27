// array basics

const a1 = [1, 2, 3, 'hello']       // array literal
const a2 = new Array(10)            // empty 10-element array
const a3 = new Array(10).fill(0)    // initialized 10-element array

// mutating arrays - common/useful methods

// stack
a1.push('goodbye')
console.log(a1.pop())

// queue (unshift = enqueue, shift = dequeue)
a1.unshift(0)
console.log(a1.shift())

// inserting elements
a1.splice(2, 0, 2.5)
a1.splice(1, 0, 1.33, 1.66)

// deleting elements
a1.splice(1, 2)
a1.splice(2, 1)

// deleting AND inserting elements
a1.splice(1, 1, 2.33, 2.66)
