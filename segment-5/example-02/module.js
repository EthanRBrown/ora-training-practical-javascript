module.exports = function() {
  let counter = 0
  return {
    getCount() { return counter },
    increment() { counter++ },
  }
}
