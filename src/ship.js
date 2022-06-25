
(function exportShip() {
    class Ship {
      constructor(itinerary) {
        this.itinerary = itinerary;
        this.previousPort = null;
        this.currentPort = itinerary.ports[0];
      }
  
      sail() {
        if (
          this.currentPort ===
          this.itinerary.ports[this.itinerary.ports.length - 1]
        ) {
          throw new Error(
            "You've reached the end of the world!"
          );
        }
        this.previousPort = this.currentPort;
        this.previousPort.removeShip(this);
        this.currentPort = null;
      }
  
      dock() {
        const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
        this.currentPort = this.itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
      }
    }
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Ship;
    } else {
      window.Ship = Ship;
    }
  })();