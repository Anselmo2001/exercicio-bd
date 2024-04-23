import connect from './db.js'
export async function selectestudante() {
const sql = 'SELECT matricula FROM Estudantes'
const conn = await connect()
const alunos = await conn.query(sql,[])
console.log(alunos[0])
}

export async function insertestudante()
{
    const sql = " INSERT INTO Estudantes(matricula, nome_aluno, nota1) VALUES(?,?,?);"
    const conn = await connect()
    const values = [ 121, " Asdrubal ", 7]
    console.log("Inserção efetuada")
    return await conn.query(sql,values)
}