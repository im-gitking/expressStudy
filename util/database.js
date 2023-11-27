const mysql = require('myscl2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    datbase: 'mode-complete',
    password: 'nodecomplete'
});

module.exports = pool.promise();