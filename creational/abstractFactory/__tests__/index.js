'use strict';

const AbstractPotFactory = require('../AbstractPotFactory');
const CoffeePot = require('../CoffeePot');

test('AbstractPotFactory', () => {
  const abstractPotFactory = new AbstractPotFactory();
  abstractPotFactory.register('coffee', CoffeePot);
  const coffeePot = abstractPotFactory.get('coffee');
  expect(coffeePot.boil('americano')).toBe('americano');
});
