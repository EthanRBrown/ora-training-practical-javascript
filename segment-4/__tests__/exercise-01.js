const transform = require('../exercise-01.js')

test('transform should return a new object', () => {
  const input = { name: 'Whittaker', age: 99, characterClass: "druid" }
  return expect(transform(Promise.resolve(input))).resolves.not.toBe(input)
})

test('transform should uppercase "name" property', () => {
  const input = { name: 'Whittaker', age: 99, characterClass: "druid" }
  const expected = { name: 'WHITTAKER', age: 99, characterClass: "druid" }
  return expect(transform(Promise.resolve(input))).resolves.toEqual(expected)
})
