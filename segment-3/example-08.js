const names = ['Apple', 'Orange', 'Banana']
const colors = ['red', 'orange', 'yellow']
const costs = [1.39, 1.55, 0.79]

const arr = names.map((name, idx) => ({ name, color: colors[idx], cost: costs[idx] }))

arr
  .map((x, idx) => ({ order: idx, name: `${x.name} (${x.color})`, price: x.cost }))
  .forEach(x => console.log(x))
