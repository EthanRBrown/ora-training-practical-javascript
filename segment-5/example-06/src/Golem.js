class Golem {
  constructor() {
    this.height = 10      // meters
    this.weight = 350     // kilograms
    this.state = 'inert'
    this.material = 'clay'
    this.color = 'gray'
  }
  etch(text, location) {
    if(location === 'forehead') {
      this.state = text === 'אמת'
        ? 'animate'
        : 'inert'
    }
  }
}

module.exports = Golem
