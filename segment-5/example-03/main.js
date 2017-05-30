
function randomAvg() {
  const n = 1e6
  let r = 0
  for(let i=0; i<n; i++) r += Math.random()
  return r/n
}

const f = require('./module.js')(randomAvg)

console.log(f())
console.log(f())
console.log(f())
console.log(f())
