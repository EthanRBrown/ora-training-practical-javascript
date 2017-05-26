const createCar = require('./example-05.js')

const c = createCar()

Promise.resolve()
  .then(c.start)
  .then(() => console.log('started!'))
  .then(c.stop)
  .then(() => console.log('stopped!'))

// this won't work the way you expect...why?
