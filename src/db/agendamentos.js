const db = require('../../database');

async function selectAgendamentos() {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM agendamentos");
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar agendamentos:', error);
    } finally {
        client.release();  
    }
}

async function selectAgendamento(id) {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM agendamentos WHERE id_agendamento=$1", [id]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar agendamento:', error);
    } finally {
        client.release();  
    }
}

async function insertAgendamento(agendamento) {
    const client = await db.connect();
    const sql = "INSERT INTO agendamentos(id_aluno, id_funcionario, data_agendamento, hora_inicio, hora_fim, tipo_atendimento) VALUES ($1, $2, $3, $4, $5, $6)";
    try {
        await client.query(sql, [agendamento.id_aluno, agendamento.id_funcionario, agendamento.data_agendamento, agendamento.hora_inicio, agendamento.hora_fim, agendamento.tipo_atendimento]);
    } catch (error) {
        console.error('Erro ao inserir novo aluno:', error);
    } finally {
        client.release();  
    }
}

// async function updateAgendamento(id, agendamento) {
//     const client = await db.connect();
//     const sql = "UPDATE agendamentos SET id_aluno=$1 WHERE id_funcionario=$2";
//     try {
//         await client.query(sql, [agendamento.id_aluno, id_funcionario]);
//     } catch (error) {
//         console.error('Erro ao atualizar agendamento:', error);
//     } finally {
//         client.release();  
//     }
// }

async function deleteAgendamento(id) {
    const client = await db.connect();
    const sql = "DELETE FROM agendamento WHERE id_agendamento=$1";
    try {
        await client.query(sql, [id]);
    } catch (error) {
        console.error('Erro ao deletar agendamento:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
    selectAgendamentos,
    selectAgendamento,
    insertAgendamento,
    deleteAgendamento
}
