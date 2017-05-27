function sum(...nums) {
  return nums.reduce((a, x) => a + x, 0)
}

console.log(sum(1, 2, 3, 4))
