module.exports = function(fn) {
  const history = []
  return function() {
    const start = Date.now()
    const result = fn()
    history.push(Date.now() - start)
    return { result, history }
  }
}
