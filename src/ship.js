
function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.startingPort = 'Dover';
    this.previousPort = null;
    this.currentPort.addShip(this);
}   


Ship.prototype = {
    setSail () {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw Error('End of itinerary reached');
        }
        
        this.currentPort.removeShip(!this);
        this.previousPort = this.currentPort;
        this.currentPort = null;
        

},

dock(port) {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

     this.currentPort = itinerary.ports[previousPortIndex + 1];
     this.currentPort.addShip(this);
    
}
}

// { const myShip = new Ship('Dover')
//     this.currentPort = 'Dover';
// }


module.exports = Ship;