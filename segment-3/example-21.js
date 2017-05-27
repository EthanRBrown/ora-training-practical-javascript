function productSum(coefficient, ...args) {
  return args.reduce((a, x) => a + coefficient*x, 0)
}

console.log(productSum(10, 1, 2, 3, 4))
