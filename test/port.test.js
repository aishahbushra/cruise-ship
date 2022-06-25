const Port = require("../src/port");

let parisHarbour;
let portoHarbour;
let nycDock;
let cornwallHarbour;

describe("port class", () => {
  beforeEach(() => {
    parisHarbour = new Port("parisHarbour");
    portoHarbour = new Port("portoHarbour");
    nycDock = jest.fn();
    cornwallHarbour = jest.fn();
  });

  it("instantiates a port", () => {
    expect(new Port(parisHarbour)).toBeInstanceOf(Object);
  });

  it("port has a name", () => {
    expect(parisHarbour.portName).toBe("parisHarbour");
  });

  it("it can add ships", () => {
    parisHarbour.ships = [];
    expect(parisHarbour.ships).toBeInstanceOf(Array);
    expect(parisHarbour.ships).toEqual([]);
    expect(parisHarbour.addShip).toBeInstanceOf(Function);

    parisHarbour.addShip(nycDock);
    expect(parisHarbour.ships).toHaveLength(1);
    expect(parisHarbour.ships).toEqual([nycDock]);
  });

  it("can remove ships", () => {
    parisHarbour.ships = [];
    expect(parisHarbour.removeShip).toBeInstanceOf(Function);

    parisHarbour.addShip(nycDock);
    expect(parisHarbour.ships).toHaveLength(1);
    expect(parisHarbour.ships).toEqual([nycDock]);

    parisHarbour.removeShip(nycDock);
    expect(parisHarbour.ships).toEqual([]);

    parisHarbour.addShip(nycDock);
    parisHarbour.addShip(cornwallHarbour);
    expect(parisHarbour.ships).toEqual([nycDock, cornwallHarbour]);

    parisHarbour.removeShip(nycDock);
    expect(parisHarbour.ships).toEqual([cornwallHarbour]);
  });
});