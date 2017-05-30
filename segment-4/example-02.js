const networkThing = () => new Promise(resolve => setTimeout(resolve, 500))
const diskThing = () => new Promise(resolve => setTimeout(resolve, 200))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800))

const start = Date.now()

Promise.all([networkThing(), diskThing(), cpuThing()])
  .then(() => {
    console.log(`Done in ${(Date.now() - start).toFixed(0)} ms`)
  })
