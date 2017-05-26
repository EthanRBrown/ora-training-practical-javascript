const createCar = require('./example-14.js')

const c = createCar()

try {
  Promise.resolve()
    .then(() => c.start())
    .then(() => c.start())
} catch(err) {
  console.log('Whoops!  ' + err.message)
}

// this won't work as expected...why not?
