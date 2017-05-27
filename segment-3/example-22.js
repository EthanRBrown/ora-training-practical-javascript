function productSum(coefficient, ...args) {
  return args.reduce((a, x) => a + coefficient*x, 0)
}

const arr = [1, 2, 3, 4]
console.log(productSum(10, ...arr))
