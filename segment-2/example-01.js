function createCar() {
  return {
    state: {
      ignition: 'off',
      brakes: 'off',
      accelerator: 'off',
    },
    start() { this.state.ignition = 'on' },
    stop() { this.state.ignition = 'off' },
    brake(t) { 
      this.state.brakes = 'on'
      setTimeout(() => this.state.brakes = 'off',  t)
    },
    accelerate(t) {
      this.state.accelerator = 'on'
      setTimeout(() => this.state.accelerator = 'off', t)
    },
  }
}
