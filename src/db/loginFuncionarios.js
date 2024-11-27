const db = require('../../database');

async function loginFuncionarios(funcionario) {
    const client = await db.connect();
    try {
        const sql = "SELECT id_funcionarios FROM login_funcionarios WHERE username=$1 AND password= $2"
        const res = await client.query(sql, [funcionario.username, funcionario.password]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao entrar:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
  loginFuncionarios
}