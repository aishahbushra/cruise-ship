const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe('Ship', () => {
 let port
 let itinerary;
 let ship;
    
 beforeEach(() => {
    port = new Port('Dover')
    itinerary = new Itinerary([port]);
    ship = new Ship(itinerary);

    })

describe('Ship', () => {
   it('returns an object', () => {

    expect(ship).toBeInstanceOf(Object);
   });

    it('has a starting port', () => {


    expect(ship.currentPort).toBe(port);
    });
  });
});

describe('Ship', () => {
 
 let dover;
 let calais;
 let itinerary;
 let ship;
 
 beforeEach(() => {
     dover = new Port('Dover');
     calais = new Port('Calais');
     itinerary = new Itinerary([dover, calais]);
     ship = new Ship(itinerary);
   })

describe('Ship', () => {
    it('ship can set sail', () => {


    ship.setSail();

    expect(ship.currentPort).toBeFalsy;
    expect(dover.ships).not.toContain(ship);
    
    });

    it('can dock at a different port', () => {


    ship.setSail();
    ship.dock(calais);
    

    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
    });

    it('can\'t sail further than its itinerary', () => {

      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('gets added to port on instantiation', () => {

      
        expect(dover.ships).toContain(ship);
     });
  });
});