const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
host: 'bhn4ciftdorshtritp7c-mysql.services.clever-cloud.com',
user: 'u7wtk4ifdv2odb5o',
password: '3RBaE8e7JUMPywSu0EoT',
database: 'bhn4ciftdorshtritp7c',
multipleStatements:true
});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;




