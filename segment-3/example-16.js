const o1 = { name: 'o1' }, o2 = { name: 'o2' }, o3 = { name: 'o3' }

const counts = new Map([ [o1, 0], [o2, 0], [o3, 0] ])

console.log('initial counts: ', counts)

counts.set(o1, counts.get(o1) + 1)
counts.set(o1, counts.get(o1) + 1)
counts.set(o2, counts.get(o2) + 1)

console.log('final counts: ', counts)

// will probably not be what you wanted!  why?
