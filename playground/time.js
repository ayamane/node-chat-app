// Jan 1st 1970 00:00:00 am --> Unix Epoch

const moment = require('moment');

// var date = new Date().getMonth();
var date = moment();
date.add(1, 'years').subtract(7, 'months');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
