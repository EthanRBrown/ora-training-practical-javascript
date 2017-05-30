const Golem = require('../Golem.js')

test('it starts off inanimate...', () => {
  const g = new Golem()
  expect(g.state).toBe('inert')
})

test("it doesn't come to life if you etch something stupid into its forehead", () => {
  const g = new Golem()
  g.etch('wake up, bro', 'forehead')
  expect(g.state).toBe('inert')
})

test("it doesn't come to life if you etch אמת onto its elbow", () => {
  const g = new Golem()
  g.etch('wake up, bro', 'elbow')
  expect(g.state).toBe('inert')
})

test("it comes to life if you etch אמת into its forehead", () => {
  const g = new Golem()
  g.etch('אמת', 'forehead')
  expect(g.state).toBe('animate')
})
