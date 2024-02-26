const mysql = require ('mysql')

const conexion =  mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.pass,
    database : process.env.database 

})

conexion.connect((error)=>{
    if(error){
        console.log('el error de conexion es :' +error)
        return
    }
    console.log('Conectado con exito')
})

module.exports= conexion