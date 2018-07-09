'use strict';

const Pot = require('./Pot');

class CoffeePot extends Pot {
  constructor() {
    super();
    this.times = {
      ...this.times,
      americano: 1200,
      espresso: 800,
      frappe: 1800,
    };
  }

  boil(type) {
    return new Promise((resolve, reject) => {
      if (this.busy) {
        return reject(new Error('Busy'));
      }
      const delay = this.times[type];
      if (isNaN(delay)) {
        return reject(new Error('Wrong type'));
      }

      this.busy = true;
      this.timeout(delay, type, resolve);
    });
  }
}


module.exports = CoffeePot;
