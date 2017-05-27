const o1 = { name: 'o1' }, o2 = { name: 'o2' }, o3 = { name: 'o3' }

const counts = { [o1]: 0, [o2]: 0, [o3]: 0 }

console.log('initial counts: ', counts)

counts[o1]++
counts[o2]++

console.log('final counts: ', counts)

// will probably not be what you wanted!  why?
