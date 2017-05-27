const planets = [
  { id: '4e93ec69-f77b-4470-9219-b51bae2d3df2', name: 'Mercury' },
  { id: '4831f083-635d-4aea-abc6-e133e2090864', name: 'Venus' },
  { id: '176050fb-db1d-42f2-ab89-5043200c5de9', name: 'Earth' },
  { id: '20a57ce3-52f5-4165-b130-c2532e2044e6', name: 'Mars' },
  { id: 'ff52bcf7-7b7b-4d73-b4c9-bb6ed7363a90', name: 'Jupiter' },
  { id: 'f55ffaf5-1dbe-4576-8e24-56223d880ee3', name: 'Saturn' },
  { id: '12acf181-7030-4956-9586-97134fc3dc72', name: 'Uranus' },
  { id: 'd3494def-1e2c-48db-8c24-1d6043a3a4da', name: 'Neptune' },
  { id: 'e26165c8-ea15-490f-80e5-3699d518d50a', name: 'Planet X' },

]

const planetsById = new Map(planets.map(p => [p.id, p]))

const id = 'f55ffaf5-1dbe-4576-8e24-56223d880ee3'
console.log(`planet ${id}: ${planetsById.get(id).name}`)
