'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('package.json');
let dev = JSON.parse(rawdata);
console.log(dev);