const Ship = require("../src/ship");
const Port = require("../src/port");

let parisHarbour;
let portoHarbour;
let itinerary;
let ship;

describe("ship class", () => {
  beforeEach(() => {
    parisHarbour = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Paris Harbour",
      ships: []
    };

    portoHarbour = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Porto Harbour",
      ships: []
    };

    itinerary = {
      ports: [parisHarbour, portoHarbour]
    };
    ship = new Ship(itinerary);
  });
  it("can be instatiated", () => {
    expect(ship.itinerary.ports).toBeInstanceOf(Array);
    expect(ship.currentPort).toEqual(parisHarbour);
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
  });

  it("sets ship sailing", () => {
    expect(ship.sail).toBeInstanceOf(Function);

    ship.sail();
    expect(ship.previousPort).toEqual(parisHarbour);
    expect(parisHarbour.removeShip).toHaveBeenCalledWith(ship);
  });

  it("can dock at a different port", () => {
    expect(ship.dock).toBeInstanceOf(Function);
    ship.sail();
    ship.dock();
    expect(ship.currentPort).toBe(portoHarbour);
    expect(portoHarbour.addShip).toHaveBeenCalledWith(ship);
  });

  it("it can't sail past the last port in itinerary", () => {
    ship.sail();
    ship.dock();
    expect(() => ship.sail()).toThrowError(
      "You've reached the end of the world!"
    );
  });
});