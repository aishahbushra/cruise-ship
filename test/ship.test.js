const Ship = require('../src/ship.js');
const Port = require('../src/port.js');


describe('Ship', () => {
   it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
   });
});

describe('Ship', () => {
    it('has a starting port', () => {
    const port = new Port('Dover')
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
    });
 });

 describe('Ship', () => {
    it('ship can set sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.startingPort).toBeFalsy;
    });
 });

 describe('Ship', () => {
    it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);

    const calais = new Port('Calais');
    ship.dock(calais);

    ship.setSail();

    expect(ship.currentPort).toBe(calais);
    });
 });
