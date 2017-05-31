const createCar = require('./example-05.js')

const c = createCar()

c.start()
  .then(() => console.log('started!'))
  .catch(err => console.log('error starting car: ', err.message))
