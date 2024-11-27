const db = require('../../database');

async function loginAlunos(aluno) {
    const client = await db.connect();
    try {
        const sql = "SELECT id_aluno FROM login_alunos WHERE username=$1 AND password= $2"
        const res = await client.query(sql, [aluno.username, aluno.password]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao entrar:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
  loginAlunos
}