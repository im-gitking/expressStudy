<<<<<<< HEAD
const path = require('path');

=======
// creating code to export path of appp.js
// import path core module
const path = require('path');
// process is present in all file
// mainModule means first folder of project
// process.mainModule.filename -> gets file's (app.js) path  that is responsible of running this app 
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
module.exports = path.dirname(process.mainModule.filename);