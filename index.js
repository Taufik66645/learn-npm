const cowsay = require("cowsay");
const chalk = require("chalk");
const dcNames = require("dc-names");
const moment = require('moment');
const date  = moment().format('MMMM Do YYYY, h:mm:ss a');
const day = moment().format('dddd');




console.log(
  cowsay.say({
    text: "Hello my name is Taufik",
    e: "oO",
    T: "U "
  })
);

console.log(chalk.red.bgYellow.bold('This is chalk example'));
console.log(dcNames);
console.log(date);
console.log(day);




