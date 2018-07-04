'use strict';

class AbstractPotFactory {
  constructor () {
    this.pots = {};
  }

  register(name, Factory) {
    this.pots[name] = Factory;
  }

  get(name, props) {
    return new this.pots[name](props);
  }
}


module.exports = AbstractPotFactory;
