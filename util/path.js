// creating code to export path of appp.js
// import path core module
const path = require('path');
// process is present in all file
// mainModule means first folder of project
// process.mainModule.filename -> gets file's (app.js) path  that is responsible of running this app 
module.exports = path.dirname(process.mainModule.filename);