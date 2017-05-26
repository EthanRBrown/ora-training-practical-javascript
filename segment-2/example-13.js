const createCar = require('./example-05.js')

const c = createCar()

const start = () => c.start()
const stop = () => c.stop()

Promise.resolve()
  .then(start)
  .then(() => console.log('started!'))
  .then(stop)
  .then(() => console.log('stopped!'))
