Jest.config:
const config = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage:true,
  //only test things that end in .test.js
  testMatch: [ 
    '**/__tests__/**/*.test.[jt]s?(x)', 
    '**/?(*.)+(spec|test).tst.[jt]s?(x)' 
  ]
}
  
module.exports = config