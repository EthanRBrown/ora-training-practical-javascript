const fn = require('../exercise-03.js')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5

test('function returns promise', () => {
  expect(typeof fn().then).toBe('function')
})

test('function returns promise that resolves if the argument is "green"', done => {
  fn("green")
    .then(() => {
      done()
    })
    .catch(() => {
      new Error('Promise SHOULD be resolved!')
    })
})

test('function returns promise that rejects if the argument is "red"', done => {
  fn("red")
  .then(() => {
    new Error('Promise should NOT be resolved!')
  })
  .catch(() => {
    done()
  })
})
