const transform = require('../exercise-01.js')

const input = [
  { name: "Orb", price: 29.3315 },
  { name: "Manequin", price: 79.1212 },
  { name: "Oddment", price: 0.1588 },
]

test('it transforms correctly', () => {
  const output = transform(input)
  expect(Array.isArray(output)).toBe(true)
  expect(output.length).toBe(3)
  expect(output[0]).toBe(`${input[0].name} - ${input[0].price.toFixed(2)}`)
  expect(output[1]).toBe(`${input[1].name} - ${input[1].price.toFixed(2)}`)
  expect(output[2]).toBe(`${input[2].name} - ${input[2].price.toFixed(2)}`)
})
