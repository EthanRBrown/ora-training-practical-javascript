const createCar = require('./example-05.js')

const c = createCar()

c.start()
  .then(() => console.log('started!'))
  .then(() => c.stop())
  .then(() => console.log('stopped!'))
