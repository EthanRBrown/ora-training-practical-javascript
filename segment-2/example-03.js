function createCar() {
  return {
    state: {
      ignition: 'off',
      brakes: 'off',
      accelerator: 'off',
    },
    eventHandlers: {
      start: [],
      stop: [],
      brake: [],
      accelerate: [],
    },
    on(name, handler) {
      this.eventHandlers[name].push(handler)
    },
    start() {
      this.state.ignition = 'on'
      this.eventHandlers['start'].forEach(h => h())
    },
    stop() {
      this.state.ignition = 'off',
      this.eventHandlers['stop'].forEach(h => h())
    },
    brake(t) { 
      this.state.brakes = 'on'
      this.eventHandlers['brake'].forEach(h => h())
      setTimeout(() => this.state.brakes = 'off',  t)
    },
    accelerate(t) {
      this.state.accelerator = 'on'
      this.eventHandlers['accelerate'].forEach(h => h())
      setTimeout(() => this.state.accelerator = 'off', t)
    },
  }
}

const c = createCar()
c.on('start', () => console.log('started!'))
c.on('start', () => console.log('varoom!'))
c.start()

