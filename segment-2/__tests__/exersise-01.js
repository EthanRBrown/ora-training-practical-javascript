const fn = require('../exercise-01.js')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2

test('function invokes callback', done => {
  fn(done)
})

test('function invokes callback with correct arguments', done => {
  fn((err, value) => {
    expect(err).toBe(null)
    expect(value).toBe("green")
    done()
  })
})
