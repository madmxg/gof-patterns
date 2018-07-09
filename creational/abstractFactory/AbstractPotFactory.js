'use strict';

const Pot = require('./Pot');

class AbstractPotFactory {
  constructor () {
    this.pots = {};
  }

  register(name, Factory) {
    if (!Pot.isPrototypeOf(Factory)) {
      throw new Error('Pot can be prototype of Factory');
    }
    this.pots[name] = Factory;
  }

  get(name, props) {
    const Pot = this.pots[name];
    if (!Pot) {
      throw new Error(`Pot ${name} not register`);
    }

    return new Pot(props);
  }
}


module.exports = AbstractPotFactory;
