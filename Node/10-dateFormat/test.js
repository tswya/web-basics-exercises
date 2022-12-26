const Time = require('./dateFormat');

const dt = new Date();

const newDT = Time.dateFormat(dt);

console.log(newDT);