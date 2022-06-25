const Itinerary = require("../src/itinerary");

let parisHarbour;
let portoHarbour;
let itinerary;

describe("Itinerary", () => {
  beforeEach(() => {
    parisHarbour = jest.fn();
    portoHarbour = jest.fn();
    itinerary = new Itinerary([parisHarbour, portoHarbour]);
  });

  it("instantiates an itinerary", () => {
    expect(itinerary).toBeInstanceOf(Object);
    expect(itinerary).toHaveProperty("ports");
  });

  it("has an array of two ports", () => {
    expect(itinerary.ports).toEqual([parisHarbour, portoHarbour]);
  });
});