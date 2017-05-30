const transform = require('../exercise-03.js')

const input = [
  { name: "Orb", price: 29.3315, qty: 3, discount: 0.05 },
  { name: "Barnswallow" },
  { name: "Manequin", price: 79.1212, discount: 0.10 },
  { name: "Oddment", price: 0.1588 },
  { name: "Conch" },
  { name: "Button", price: 0.16, qty: 100 },
]

test('it transforms correctly', () => {
  const output = transform(input)
  expect(typeof output).toBe('number')
  expect(output).toBeCloseTo(170.96)
})
