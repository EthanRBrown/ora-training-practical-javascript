const transform = require('../exercise-02.js')

const input = [
  { name: "Orb", price: 29.3315 },
  { name: "Barnswallow" },
  { name: "Manequin", price: 79.1212 },
  { name: "Oddment", price: 0.1588 },
  { name: "Conch" },
  { name: "Button", price: 0.16 },
]

test('it transforms correctly', () => {
  const output = transform(input)
  expect(Array.isArray(output)).toBe(true)
  expect(output.length).toBe(4)
  expect(output[0]).toBe(`1) ${input[0].name} - ${input[0].price.toFixed(2)}`)
  expect(output[1]).toBe(`3) ${input[2].name} - ${input[2].price.toFixed(2)}`)
  expect(output[2]).toBe(`4) ${input[3].name} - ${input[3].price.toFixed(2)}`)
  expect(output[3]).toBe(`6) ${input[5].name} - ${input[5].price.toFixed(2)}`)
})
