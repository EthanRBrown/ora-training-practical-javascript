const networkThing = () => new Promise(resolve => setTimeout(resolve, 500, 'network response'))
const diskRead = () => new Promise((resolve, reject) => setTimeout(reject, 200, new Error('disk read error!')))
const diskWrite = data => new Promise(resolve => setTimeout(resolve, 200, console.log(`(wrote "${data}" to disk)`)))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800, 'cpu response'))

async function go() {
  const results = await Promise.all([networkThing(), diskRead(), cpuThing()])
  await diskWrite(results.join('|'))
}

const start = Date.now()
go()
  .then(() => console.log(`Complete in ${Date.now() - start} ms`))
  .catch(err => console.error(`${err.message} (${Date.now() - start} ms)`))
