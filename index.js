var childA = require('child-dep-a')
  // , rimraf = require('rimraf') // Doesn't have access to child-dep-a dependencies. This is good

console.log(childA)
