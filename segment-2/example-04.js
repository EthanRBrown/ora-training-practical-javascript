const EventEmitter = require('events')

function createCar() {
  return Object.assign(Object.create(EventEmitter.prototype), {
    state: {
      ignition: 'off',
      brakes: 'off',
      accelerator: 'off',
    },
    start() {
      this.state.ignition = 'on'
      this.emit('start')
    },
    stop() {
      this.state.ignition = 'off',
      this.emit('stop')
    },
    brake(t) { 
      this.state.brakes = 'on'
      this.emit('brake')
      setTimeout(() => this.state.brakes = 'off',  t)
    },
    accelerate(t) {
      this.state.accelerator = 'on'
      this.emit('accelerate')
      setTimeout(() => this.state.accelerator = 'off', t)
    },
  })
}

const c = createCar()
c.on('start', () => console.log('started!'))
c.on('start', () => console.log('varoom!'))
c.start()

