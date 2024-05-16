var brojanje = require('./obrasci');

//početak = 0 koraka
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.walk();
console.log("Total steps: " + brojanje.getTotalSteps());

brojanje.run();
console.log("Total steps(run): " + brojanje.getTotalSteps());

var total = brojanje.getTotalSteps();
console.log("Total steps (final): " + total);

