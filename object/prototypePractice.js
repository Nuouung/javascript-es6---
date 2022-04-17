// version 1
const apt = {
    color:  'red',
    rooms: 4,
    toilet: 1,
    turnon()  {
        console.log('turning on ...');
    }
};

const villa = {
    color: 'black',
    rooms: 3,
    toilet: 1,
    turnon() {
        console.log("turning on ...");
    }
};

// version 2
function building(color, rooms, toilet) {
    this.color = color;
    this.rooms = rooms;
    this.toilet = toilet;
    this.turnon = function() {
        console.log('turning on ...');
    }
}

const apt2 = new building('red', 4, 1);
const villa2 = new building('black', 3, 1);