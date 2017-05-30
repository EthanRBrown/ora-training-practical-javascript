const networkThing = cb => setTimeout(cb, 500, null, 'network response')
const diskThing = cb => setTimeout(cb, 200, null, 'disk response')
const cpuThing = cb => setTimeout(cb, 800, null, 'cpu response')

const cbFunctions = [networkThing, diskThing, cpuThing]

const start = Date.now()

// here we use Promise.all to execute in parallel...and Array#map to convert
// callback-style functions to promise-returning functions
Promise.all(cbFunctions.map(f => new Promise((resolve, reject) => {
  f((err, data) => err ? reject(err) : resolve(data))
})))
  .then(results => {
    console.log(results)
    console.log(`Done in ${(Date.now() - start).toFixed(0)} ms`)
  })
