const arr = [
  { name: 'Apple', color: 'red', cost: 1.39 },
  { name: 'Orange', color: 'orange', cost: 1.55 },
  { name: 'Banana', color: 'yellow', cost: 0.79 },
]

console.log('fruit: ', arr.map(x => x.name))
console.log('colors: ', arr.map(x => x.color))
console.log('costs: ', arr.map(x => x.cost))
