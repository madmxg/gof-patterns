'use strict';

const AbstractPotFactory = require('../AbstractPotFactory');
const CoffeePot = require('../CoffeePot');

describe('AbstractPotFactory', () => {
  const abstractPotFactory = new AbstractPotFactory();
  abstractPotFactory.register('coffee', CoffeePot);
  const coffeePot = abstractPotFactory.get('coffee');

  test('should throw error, when register class, not extends of Pot', () => {
    expect(() => abstractPotFactory.get('cocoa')).toThrow('Pot cocoa not register');
  });

  test('should throw error, when get unknown pot name', () => {
    expect(() => {
      class TeaPot {}
      abstractPotFactory.register('tea', TeaPot);
    }).toThrow('Pot can be prototype of Factory');
  });

  test('should boil americano', () => {
    return coffeePot.boil('americano').then((data) => {
      expect(data).toBe('americano');
    });
  });

  test('should boil frappe', () => {
    return coffeePot.boil('frappe').then((data) => {
      expect(data).toBe('frappe');
    });
  });

  test('should throw error', () => {
    return coffeePot.boil('latte').catch((error) => expect(error).toMatchObject({ message: 'Wrong type' }));
  });
});
