'use strict';

class Pot {
  constructor() {
    this.busy = false;
    this.times = { water: 2000 };
  }

  timeout(delay, type, resolve) {
    setTimeout(() => {
      this.busy = false;
      resolve(type);
    }, delay);
  }
}


module.exports = Pot;
