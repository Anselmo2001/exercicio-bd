import mysql2 from "mysql2/promise"
async function connect()

{
if(global.connection && global.connection.state !== 'disconnected')
return global.connection
const mysql = mysql2
// mysql://usuario:senha@servidor:porta/banco - a conexão será assíncrona
const connection = await mysql.createConnection("mysql://root:@localhost:3306/estudante")
console.log("Conectado ao SGBD MySQL")
global.connection = connection
return connection
}

export default connect
