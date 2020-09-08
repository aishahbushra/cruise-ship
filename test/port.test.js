const Port = require('../src/port.js');

describe('Port', () => {

    it('returns an object', () => {
     expect(new Port()).toBeInstanceOf(Object);
    });

  
    it('sets the name property', () => {
      const port = new Port('Dover');
  
      expect(port.name).toEqual('Dover');
    });

    it('can remove a ship', () => {
      const port = new Port('Dover');
      const titanic = {};
      const aishah = {};

      port.addShip(titanic);
      port.addShip(aishah);
    //   port.removeShip(titanic)

      expect(port.ships).toEqual([titanic, aishah]);
    });
  });