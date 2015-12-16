var fs = require('fs');
var bufStr = fs.readFileSync(process.argv[2]).toString();

console.log(bufStr.match(/[\n]/g).length);