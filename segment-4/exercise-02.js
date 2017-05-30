// modify function below to accept two promises that each return a number; add those two numbers and return
// a promise that resolves to the result

function calc(a, b) {
  return (Promise.all([a, b])
    .then(results => results.reduce((a, x) => a + x, 0))
  )
}

module.exports = calc
