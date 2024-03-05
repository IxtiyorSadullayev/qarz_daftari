const Pool = require('pg').Pool;

const pool  = new Pool({
    user: process.env.USERDB,
    password: process.env.PASSPORTDB,
    host: process.env.HOSTDB,
    port: process.env.PORTDB,
    database: process.env.DATABASE
});


module.exports = pool;