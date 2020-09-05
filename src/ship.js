
function Ship(port) {
    this.currentPort = port;
    this.startingPort = 'Dover';
}   


Ship.prototype = {
    setSail () {
        this.startingPort = 'Dover';

},

dock(port) {
    this.currentPort = port;
    console.log (port);
    
}
}

{ const myShip = new Ship('Dover')
    this.currentPort = 'Dover';
}


module.exports = Ship;