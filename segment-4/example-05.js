const networkThing = () => new Promise(resolve => setTimeout(resolve, 500, 'network response'))
const diskRead = () => new Promise(resolve => setTimeout(resolve, 200, 'disk response'))
const diskWrite = data => new Promise(resolve => setTimeout(resolve, 200, console.log(`(wrote "${data}" to disk)`)))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800, 'cpu response'))

const start = Date.now()

const promises = [networkThing, diskRead, cpuThing]
  .map(f => f().then(r => { console.log(`${r} (${(Date.now() - start).toFixed(0)} ms)`); return r }))

Promise.all(promises)
  .then(results => {
    console.log(results)
    return results.join('|')
  })
  .then(diskWrite)
  .then(() => {
    console.log(`Done in ${(Date.now() - start).toFixed(0)} ms`)
  })
