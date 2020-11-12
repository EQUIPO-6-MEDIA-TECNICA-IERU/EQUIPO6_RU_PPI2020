const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
host: 'bmcidgbghbtmaicdkurc-mysql.services.clever-cloud.com',
user: 'ufvizzgdpph3krif',
password: '4LYxEpnlf7TpnOV6p8MN',
database: 'bmcidgbghbtmaicdkurc',
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




