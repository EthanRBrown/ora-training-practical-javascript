const networkThing = () => new Promise(resolve => setTimeout(resolve, 500, 'network response'))
const diskThing = () => new Promise(resolve => setTimeout(resolve, 200, 'disk response'))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800, 'cpu response'))

const start = Date.now()

Promise.all([networkThing(), diskThing(), cpuThing()])
  .then(results => {
    console.log(results)
    console.log(`Done in ${(Date.now() - start).toFixed(0)} ms`)
  })
