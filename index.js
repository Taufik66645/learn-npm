const cowsay = require("cowsay");
const chalk = require("chalk");
const dcNames = require("dc-names");
const moment = require('moment');
const date  = moment().format('MMMM Do YYYY, h:mm:ss a');



console.log(
  cowsay.say({
    text: "Hello",
    e: "oO",
    T: "U "
  })
);

console.log(chalk.red.bgYellow.bold('hahahaha'));
console.log(dcNames);
console.log(date);





