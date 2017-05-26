
function biasedFunction(n) {
  return new Promise(resolve => {
    if(n % 2 === 0) return resolve(console.log('have a happy day!'))
    setTimeout(() => resolve(console.log('you are very odd')), 2000)
  })
}

biasedFunction(1)
  .then(() => console.log('done!'))

biasedFunction(2)
  .then(() => console.log('done!'))
