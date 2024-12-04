const db = require('../../database');

async function selectFuncionarios() {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM funcionarios p INNER JOIN especialidades e ON p.id_especialidade = e.id_especialidade");
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar funcionários:', error);
    } finally {
        client.release();  
    }
}

async function selectFuncionario(id) {
    const client = await db.connect();
    const sql = "SELECT * FROM funcionarios p INNER JOIN especialidades e ON p.id_especialidade = e.id_especialidade WHERE id_funcionario=$1";
    try {
        const res = await client.query(sql, [id]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar funcionário:', error);
    } finally {
        client.release();  
    }
}

async function insertFuncionario(funcionario) {
    const client = await db.connect();
    const sql = "INSERT INTO funcionarios(nome_funcionario, id_especialidade, disponibilidade) VALUES ($1, $2, $3)";
    try {
        await client.query(sql, [funcionario.nome_funcionario, funcionario.id_especialidade, funcionario.disponibilidade]);
    } catch (error) {
        console.error('Erro ao inserir novo funcionário:', error);
    } finally {
        client.release();  
    }
}

async function deleteFuncionario(id) {
    const client = await db.connect();
    const sql = "DELETE FROM funcionarios WHERE id_funcionario=$1";
    try {
        await client.query(sql, [id]);
    } catch (error) {
        console.error('Erro ao deletar funcionario:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
    selectFuncionario,
    selectFuncionarios,
    insertFuncionario,
    deleteFuncionario
}
