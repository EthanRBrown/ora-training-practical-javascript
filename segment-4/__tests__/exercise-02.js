const calc = require('../exercise-02.js')

test('calc should return correct answer', () => {
  const n1 = 3.5
  const n2 = 7
  return expect(calc(Promise.resolve(n1), Promise.resolve(n2))).resolves.toBe(n1+n2)
})
