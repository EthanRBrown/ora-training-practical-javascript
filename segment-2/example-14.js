function createCar() {
  return {
    state: {
      ignition: 'off',
      brakes: 'off',
      accelerator: 'off',
    },
    start() {
      return new Promise((resolve, reject) => {
        if(this.state.ignition === 'on') reject(new Error("you're grinding the engine!"))
        setTimeout(() => {
          this.state.ignition = 'on'
          resolve()
        }, 1000)
      })
    },
    stop() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.state.ignition = 'on'
          resolve()
        }, 50)
      })
    },
    brake(t) { 
      this.state.brakes = 'on'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.state.brakes = 'off'
          resolve()
        }, t)
      })
    },
    accelerate(t) {
      this.state.accelerator = 'on'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.state.accelerator = 'off'
          resolve()
        }, t)
      })
    },
  }
}

module.exports = createCar
