const arr = [
  { name: 'Apple', color: 'red', cost: 1.39, dept: 'produce' },
  { name: 'Cat Food', cost: 7.99, dept: 'pets' },
  { name: 'Orange', color: 'orange', cost: 1.55, dept: 'produce' },
  { name: 'Banana', color: 'yellow', cost: 0.79, dept: 'produce' },
  { name: 'Greeting Card', cost: 2.15, dept: 'gifts' },
]

arr
  .map((x, idx) => ({ order: idx, name: `${x.name} (${x.color})`, price: x.cost }))
  .forEach(x => console.log(x))
