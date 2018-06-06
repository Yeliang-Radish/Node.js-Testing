console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log ('result:', notes.add(9,-3));

// var user = os.userInfo();
// 
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
