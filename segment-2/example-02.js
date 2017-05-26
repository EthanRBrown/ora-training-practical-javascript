function createCar(onStart, onStop, onBrake, onAccelerate) {
  return {
    state: {
      ignition: 'off',
      brakes: 'off',
      accelerator: 'off',
    },
    start() {
      this.state.ignition = 'on'
      onStart()
    },
    stop() {
      this.state.ignition = 'off',
      onStop()
    },
    brake(t) { 
      this.state.brakes = 'on'
      onBrake()
      setTimeout(() => this.state.brakes = 'off',  t)
    },
    accelerate(t) {
      this.state.accelerator = 'on'
      onAccelerate()
      setTimeout(() => this.state.accelerator = 'off', t)
    },
  }
}

const c = createCar(() => console.log('car started!'))
c.start()

// c.stop(), c.brake(), and c.accelerate() will break this example; why?
