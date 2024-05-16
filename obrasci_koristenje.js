var brojanje = require('./obrasci');

//početak = 0 koraka
console.log("Total steps: " + brojanje.getTotalSteps()); //0

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //2

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //4

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //6

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //8

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //10

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps()); //12

var total = brojanje.getTotalSteps();
console.log("Total steps (final): " + total);

