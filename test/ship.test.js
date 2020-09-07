const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');


describe('Ship', () => {
   it('returns an object', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
   });
});

describe('Ship', () => {
    it('has a starting port', () => {
    const port = new Port('Dover')
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
    });
 });

 describe('Ship', () => {
    it('ship can set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy;
    expect(ship.previousPort).toBe(port);
    });
 });

 describe('Ship', () => {
    it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.dock(calais);
    ship.setSail();

    expect(ship.currentPort).toBe(calais);
    });
 });
