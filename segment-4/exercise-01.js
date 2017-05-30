// modify function to take a single argument that is a promise that resolves to an object with
// a "name" property; return a promise that resolves to a copy of that object with the "name"
// value uppercased
// example: transform(Promise.resolve({ name: "Candice", job: "programmer" })) would return a promise
// that resolves to { name: "CANDICE", job: "programmer" }

function transform(p) {
  return p.then(x => Object.assign({}, x, { name: x.name.toUpperCase() }))
}

module.exports = transform
