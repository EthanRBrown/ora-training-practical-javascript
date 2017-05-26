const fn = require('../exercise-02.js')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5

test('function returns promise', () => {
  expect(typeof fn().then).toBe('function')
})

test('function returns promise that resolves if the argument is "green"', done => {
  fn("green").then(val => {
    done()
  })
})
