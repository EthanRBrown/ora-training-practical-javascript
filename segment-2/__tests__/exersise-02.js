const fn = require('../exercise-02.js')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5

test('function returns promise', () => {
  expect(typeof fn().then).toBe('function')
})

test('function returns promise that resolves to "green"', done => {
  fn().then(val => {
    expect(val).toBe("green")
    done()
  })
})
