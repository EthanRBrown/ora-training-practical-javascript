const networkThing = () => new Promise(resolve => setTimeout(resolve, 500, 'network response'))
const diskRead = () => new Promise(resolve => setTimeout(resolve, 200, 'disk response'))
const diskWrite = data => new Promise(resolve => setTimeout(resolve, 200, console.log(`(wrote "${data}" to disk)`)))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800, 'cpu response'))


const promises = [networkThing, diskRead, cpuThing]

// serial promise execution
function serial(promises) {
  const result = promises.reduce((a, p, idx) => {
    a.last = a.last.then(p).then(r => a.results[idx] = r)
    return a
  }, { last: Promise.resolve(), results: [] })
  return result.last.then(() => result.results)
}

const start = Date.now()

serial(promises)
  .then(results => console.log(results.join('\n')))
  .then(() => {
    console.log(`Done in ${(Date.now() - start).toFixed(0)} ms`)
  })
