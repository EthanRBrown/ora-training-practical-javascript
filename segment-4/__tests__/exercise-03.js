const sum = require('../exercise-03.js')

test('sum returns a promise tehat resolves to the sum of all the nubers', () => {
  const nums = [5, 17, 6.33, 12, 5]
  return expect(sum(nums.map(n => Promise.resolve(n)))).resolves.toBeCloseTo(nums.reduce((a, n) => a + n, 0))
})
