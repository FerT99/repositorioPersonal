const mysql = require('mysql2'); 

const pool = mysql.createPool({ //llamar base datos
    host: 'localhost', //si estuviera en servidor pongo ip en vez de localhost
    user: 'root', //username para autenticarme en la base de datos, como no tengo user, es root
    database: 'cachorritos', //nombre BD
    password: ''
});

module.exports = pool.promise(); 
