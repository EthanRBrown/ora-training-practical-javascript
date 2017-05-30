const counter1 = require('./module.js')
const counter2 = require('./module.js')

counter1.increment()
counter2.increment()

console.log('counter1: ', counter1.getCount())
console.log('counter2: ', counter2.getCount())
