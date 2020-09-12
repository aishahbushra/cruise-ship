const Itinerary = require("../src/itinerary");
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
    it('returns an object', () => {
     expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
     const dover = jest.fn();
     const calais = jest.fn();

     const itinerary = new Itinerary([dover, calais]);

     expect(itinerary.ports).toEqual([dover, calais]);
    })
 });