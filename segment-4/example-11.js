const networkThing = () => new Promise(resolve => setTimeout(resolve, 500, 'network response'))
const diskRead = () => new Promise(resolve => setTimeout(resolve, 200, 'disk response'))
const diskWrite = data => new Promise(resolve => setTimeout(resolve, 200, console.log(`(wrote "${data}" to disk)`)))
const cpuThing = () => new Promise(resolve => setTimeout(resolve, 800, 'cpu response'))

async function go() {
  const networkResult = await networkThing()
  const diskResult = await diskRead()
  const cpuResult = await cpuThing()
  await diskWrite([networkResult, diskResult, cpuResult].join('|'))
}

const start = Date.now()
go()
  .then(() => console.log(`Complete in ${Date.now() - start} ms`))
