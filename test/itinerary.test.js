const Itinerary = require("../src/itinerary");
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
    it('returns an object', () => {
     expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
     const dover = new Port('Dover');
     const calais = new Port('Calais');

     const itinerary = new Itinerary([dover, calais]);

     expect(itinerary.ports).toEqual([dover, calais]);
    })
 });