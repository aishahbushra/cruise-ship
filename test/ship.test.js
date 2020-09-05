const Ship = require('../src/ship.js');


describe('Ship', () => {
   it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
   });
});

describe('Ship', () => {
    it('has a starting port', () => {
    const ship = new Ship('Dover')

    expect(ship.port).toBe('Dover');
    });
 });
