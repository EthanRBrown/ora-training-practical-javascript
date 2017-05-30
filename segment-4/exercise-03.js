// modify the function below to take an array of promises, each of which resolves to a number;
// return a promise that resolves to the sum of all the numbers

function sum(nums) {
  return Promise.all(nums).then(results => results.reduce((a, n) => a + n, 0))
}

module.exports = sum
