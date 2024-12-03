const db = require('../../database');

async function selectFrequencias() {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM frequencias");
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar frequencias:', error);
    } finally {
        client.release();  
    }
}

async function selectFrequencia(id) {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM frequencias WHERE id_frequencia=$1", [id]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar frequencia:', error);
    } finally {
        client.release();  
    }
}

async function insertFrequencia(frequencia) {
    const client = await db.connect();
    const sql = "INSERT INTO frequencias(id_aluno, id_agendamento, presenca) VALUES ($1, $2, $3)";
    try {
        await client.query(sql, [frequencia.id_aluno, frequencia.id_agendamento, frequencia.presenca]);
    } catch (error) {
        console.error('Erro ao inserir nova frequencia:', error);
    } finally {
        client.release();  
    }
}

// async function updateFrequencia(id, frequencia) {
//     const client = await db.connect();
//     const sql = "UPDATE frequencias SET id_aluno=$1 WHERE id_agendamento=$2";
//     try {
//         await client.query(sql, [frequencia.id_aluno, id_agendamento]);
//     } catch (error) {
//         console.error('Erro ao atualizar frequencia:', error);
//     } finally {
//         client.release();  
//     }
// }

async function deleteFrequencia(id) {
    const client = await db.connect();
    const sql = "DELETE FROM frequencia WHERE id_frequencia=$1";
    try {
        await client.query(sql, [id]);
    } catch (error) {
        console.error('Erro ao deletar frequencia:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
    selectFrequencias,
    selectFrequencia,
    insertFrequencia,
    deleteFrequencia
}
