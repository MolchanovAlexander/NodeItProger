const os = require('os')
let res = os.platform()
console.log(res);

const my_math = require('./my_math')
let res1 = my_math.add(9,5)
let res2 = my_math.minus(3,5)
console.log(`add= ${res1} minus= ${res2}`);