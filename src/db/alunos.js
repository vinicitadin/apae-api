const db = require('../../database');

async function selectAlunos() {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM alunos");
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar alunos:', error);
    } finally {
        client.release();  
    }
}

async function selectAluno(id) {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM alunos WHERE id_aluno=$1", [id]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar aluno:', error);
    } finally {
        client.release();  
    }
}

async function insertAluno(aluno) {
    const client = await db.connect();
    const sql = "INSERT INTO alunos(nome_aluno, data_nascimento, matricula, contato_responsavel, diagnostico) VALUES ($1, $2, $3, $4, $5)";
    try {
        await client.query(sql, [aluno.nome_aluno, aluno.data_nascimento, aluno.matricula, aluno.contato_responsavel, aluno.diagnostico]);
    } catch (error) {
        console.error('Erro ao inserir novo aluno:', error);
    } finally {
        client.release();  
    }
}

// async function updateAluno(id, aluno) {
//     const client = await db.connect();
//     const sql = "UPDATE alunos SET nome_aluno=$1 WHERE id_aluno=$2";
//     try {
//         await client.query(sql, [aluno.nome, id]);
//     } catch (error) {
//         console.error('Erro ao atualizar aluno:', error);
//     } finally {
//         client.release();  
//     }
// }

async function deleteAluno(id) {
    const client = await db.connect();
    const sql = "DELETE FROM alunos WHERE id_aluno=$1";
    try {
        await client.query(sql, [id]);
    } catch (error) {
        console.error('Erro ao deletar aluno:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
    selectAlunos,
    selectAluno,
    insertAluno,
    deleteAluno
}