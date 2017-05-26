
function biasedFunction(n) {
  if(n % 2 === 0) return console.log('have a happy day!')
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('you are very odd')
    }, 2000)
  })
}

biasedFunction(1)
  .then(() => console.log('done!'))

biasedFunction(2)
  .then(() => console.log('done!'))


// this will end badly...can you see why?
