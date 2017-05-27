const arr = [
  { name: 'Apple', color: 'red', cost: 1.39 },
  { name: 'Orange', color: 'orange', cost: 1.55 },
  { name: 'Banana', color: 'yellow', cost: 0.79 },
]

arr
  .map((x, idx) => ({ order: idx, name: `${x.name} (${x.color})`, price: x.cost }))
  .forEach(x => console.log(x))
